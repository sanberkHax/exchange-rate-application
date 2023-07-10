import { ComboBox } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { cloneElement, useCallback, useEffect, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@progress/kendo-react-buttons';
import { currencyToCountry } from '@/utils/currencyToCountry';
import { formatNumber } from '@progress/kendo-intl';

export const ExchangeRateCalculator = ({ exchangeRates = [] }) => {
  const [amount, setAmount] = useState(1);

  const [conversion, setConversion] = useState();

  const [currencyValues, setCurrencyValues] = useState({
    to: 'USD',
    from: 'TRY',
  });

  const currencyNames = useMemo(
    () => [...exchangeRates.map(item => item.nameEn), 'TRY'],
    [exchangeRates],
  );

  const currencyList = useMemo(
    () => [...exchangeRates, { currencyId: 0, midRate: 1.0, nameEn: 'TRY' }],
    [exchangeRates],
  );

  const handleChange = (e, type) => {
    setCurrencyValues(prevValues => ({ ...prevValues, [type]: e.value }));
  };

  const calculateExchangeRates = useCallback(() => {
    const fromRate = currencyList.find(
      item => currencyValues.from === item.nameEn,
    );

    const toRate = currencyList.find(item => currencyValues.to === item.nameEn);

    if (fromRate && toRate) {
      const convertedRate = (amount * fromRate.midRate) / toRate.midRate;

      setConversion(convertedRate);
    }
  }, [currencyList, amount, currencyValues]);

  const itemRender = (li, itemProps) => {
    const itemChildren = (
      <div className="flex gap-4 items-center">
        <ReactCountryFlag
          title={currencyToCountry[itemProps.dataItem]}
          countryCode={currencyToCountry[itemProps.dataItem]}
          svg
        />
        {li.props.children}
      </div>
    );
    return cloneElement(li, li.props, itemChildren);
  };

  const valueRender = element => {
    if (!element.props.value) {
      return element;
    }
    return (
      <div className="flex gap-2 items-center px-2">
        <ReactCountryFlag
          title={currencyToCountry[element.props.value]}
          countryCode={currencyToCountry[element.props.value]}
          svg
        />
        {element}
      </div>
    );
  };

  useEffect(() => {
    if (currencyValues && conversion) {
      calculateExchangeRates();
    }
  }, [currencyValues, conversion, calculateExchangeRates]);

  const result = `${formatNumber(amount, 'n2')} ${
    currencyValues.from
  } equals ${formatNumber(conversion, 'n2')} ${currencyValues.to}`;

  return (
    <div className="flex-col flex gap-6 sm:gap-10 items-center justify-center">
      <div className="flex-col md:flex-row flex gap-4 sm:items-end justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Amount</h2>
          <NumericTextBox
            defaultValue={1}
            format="n2"
            min={1}
            onChange={e => setAmount(e.value)}
            value={amount}
            style={{
              width: '200px',
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">From</h2>
          <ComboBox
            clearButton={false}
            data={currencyNames}
            itemRender={itemRender}
            valueRender={valueRender}
            value={currencyValues.from}
            onChange={e => handleChange(e, 'from')}
            style={{
              width: '200px',
            }}
          />
        </div>
        <Button
          themeColor="tertiary"
          onClick={() => {
            setCurrencyValues(prevValues => ({
              to: prevValues.from,
              from: prevValues.to,
            }));
            calculateExchangeRates();
          }}
        >
          Switch
        </Button>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">To</h2>
          <ComboBox
            clearButton={false}
            data={currencyNames}
            itemRender={itemRender}
            valueRender={valueRender}
            value={currencyValues.to}
            onChange={e => handleChange(e, 'to')}
            style={{
              width: '200px',
            }}
          />
        </div>
      </div>
      {conversion && <p>{result}</p>}
      <Button themeColor="info" onClick={calculateExchangeRates}>
        Calculate
      </Button>
    </div>
  );
};
