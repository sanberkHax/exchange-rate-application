import { ComboBox } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { cloneElement, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@progress/kendo-react-buttons';
import { currencyToCountry } from '@/utils/currencyToCountry';

export const ExchangeRateCalculator = ({ exchangeRates }) => {
  const currencyNames = useMemo(
    () => [...exchangeRates.map(item => item.nameEn), 'TRY'],
    [exchangeRates],
  );

  const [currencyValues, setCurrencyValues] = useState({
    to: 'USD',
    from: 'TRY',
  });

  const handleChange = (e, type) => {
    setCurrencyValues(prevValues => ({ ...prevValues, [type]: e.value }));
  };

  const itemRender = (li, itemProps) => {
    const itemChildren = (
      <div className="flex gap-4 items-center">
        <ReactCountryFlag
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
          countryCode={currencyToCountry[element.props.value]}
          svg
        />
        {element}
      </div>
    );
  };

  return (
    <div className="flex-col flex gap-6 sm:gap-10 items-center justify-center">
      <div className="flex-col md:flex-row flex gap-4 sm:items-end justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Amount</h2>
          <NumericTextBox
            defaultValue={1}
            format="n2"
            min={1}
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
      <Button themeColor="info">Calculate</Button>
    </div>
  );
};
