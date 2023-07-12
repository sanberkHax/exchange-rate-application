import ReactCountryFlag from 'react-country-flag';
import { currencyToCountry } from '@/utils/currencyToCountry';
import { cloneElement } from 'react';

export const CustomItem = (li, props) => {
  const itemChildren = (
    <div className="flex gap-4 items-center">
      <ReactCountryFlag
        title={currencyToCountry[props.dataItem.nameEn]}
        countryCode={currencyToCountry[props.dataItem.nameEn]}
        svg
      />
      <p>{props.dataItem.nameEn}</p>
      <span>-</span>
      <p>{props.dataItem.currencyId}</p>
    </div>
  );
  return cloneElement(li, li.props, itemChildren);
};
