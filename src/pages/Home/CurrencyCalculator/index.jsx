import { ComboBox } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { CustomItem } from './CustomItem';
import { CustomValue } from './CustomValue';
import { CalculationResult } from './CalculationResult';

export const CurrencyCalculator = ({ exchangeRates = [] }) => {
  const [amount, setAmount] = useState(1);

  const [calculatedRate, setCalculatedRate] = useState(null);

  const [currencyValues, setCurrencyValues] = useState({
    to: 'USD',
    from: 'TRY',
  });

  const exchangeRateList = useMemo(
    () => [...exchangeRates, { CurrencyId: 1, MidRate: 1.0, NameEn: 'TRY' }],
    [exchangeRates],
  );

  const handleChange = (e, type) => {
    // Change combobox values based on their type
    setCurrencyValues(prevValues => ({
      ...prevValues,
      [type]: e.value.NameEn,
    }));
  };

  const calculateCurrencies = useCallback(() => {
    // Find currency that matches with "from" combobox's value
    const fromCurrency = exchangeRateList.find(
      item => currencyValues.from === item.NameEn,
    );

    // Find currency that matches with "to" combobox's value
    const toCurrency = exchangeRateList.find(
      item => currencyValues.to === item.NameEn,
    );

    // Calculate rate
    if (fromCurrency && toCurrency) {
      const result = (amount * fromCurrency.MidRate) / toCurrency.MidRate;

      setCalculatedRate(result);
    }
  }, [exchangeRateList, amount, currencyValues]);

  useEffect(() => {
    // Calculate exchange rates whenever any value changes
    if (currencyValues && calculatedRate) {
      calculateCurrencies();
    }
  }, [currencyValues, calculatedRate, calculateCurrencies]);

  return (
    <div className="flex-col flex gap-6 sm:gap-10 items-center justify-center">
      <div className="flex-col md:flex-row flex gap-4 md:items-end justify-center">
        <div className="flex flex-col sm:gap-4">
          <h2 className="font-bold">Amount</h2>
          <NumericTextBox
            defaultValue={1}
            format="n2"
            min={1}
            onChange={e => {
              if (!e.value) {
                setAmount(1);
              } else {
                setAmount(e.value);
              }
            }}
            value={amount}
            style={{
              width: '200px',
            }}
          />
        </div>
        <div className="flex flex-col sm:gap-4">
          <h2 className="font-bold">From</h2>
          <ComboBox
            clearButton={false}
            data={exchangeRateList}
            itemRender={CustomItem}
            valueRender={CustomValue}
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
        <div className="flex flex-col sm:gap-4">
          <h2 className="font-bold">To</h2>
          <ComboBox
            clearButton={false}
            data={exchangeRateList}
            itemRender={CustomItem}
            valueRender={CustomValue}
            value={currencyValues.to}
            onChange={e => handleChange(e, 'to')}
            style={{
              width: '200px',
            }}
          />
        </div>
      </div>
      {calculatedRate ? (
        <CalculationResult
          amount={amount}
          currencyValues={currencyValues}
          calculatedRate={calculatedRate}
        />
      ) : (
        <Button themeColor="info" onClick={calculateCurrencies}>
          Calculate
        </Button>
      )}
    </div>
  );
};
