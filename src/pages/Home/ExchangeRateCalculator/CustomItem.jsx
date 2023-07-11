import ReactCountryFlag from 'react-country-flag';
import { currencyToCountry } from '@/utils/currencyToCountry';
import { cloneElement } from 'react';

export const CustomItem = (li, props) => {
  const itemChildren = (
    <div className="flex gap-4 items-center">
      <ReactCountryFlag
        title={currencyToCountry[props.dataItem]}
        countryCode={currencyToCountry[props.dataItem]}
        svg
      />
      {li.props.children}
    </div>
  );
  return cloneElement(li, li.props, itemChildren);
};
