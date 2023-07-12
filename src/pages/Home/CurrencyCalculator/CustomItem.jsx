import ReactCountryFlag from 'react-country-flag';
import { currencyToCountry } from '@/utils/currencyToCountry';
import { cloneElement } from 'react';

export const CustomItem = (li, props) => {
  const itemChildren = (
    <div className="flex gap-4 items-center">
      <ReactCountryFlag
        title={currencyToCountry[props.dataItem.NameEn]}
        countryCode={currencyToCountry[props.dataItem.NameEn]}
        svg
      />
      <p>{props.dataItem.NameEn}</p>
      <span>-</span>
      <p>{props.dataItem.CurrencyId}</p>
    </div>
  );
  return cloneElement(li, li.props, itemChildren);
};
