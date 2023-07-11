import { formatNumber } from '@progress/kendo-intl';

export const CalculationResult = ({
  amount,
  currencyValues,
  calculatedRate,
}) => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <p className="font-bold text-2xl text-primary">
        {formatNumber(amount, 'n2')} {currencyValues.from}
      </p>
      <p className="font-bold text-xl">=</p>
      <p className="font-bold text-2xl text-primary">
        {formatNumber(calculatedRate, 'n2')} {currencyValues.to}
      </p>
    </div>
  );
};
