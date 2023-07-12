import { currencyToCountry } from '@/utils/currencyToCountry';
import ReactCountryFlag from 'react-country-flag';

export const CustomValue = element => {
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
