import { ExchangeRateDataGrid } from './ExchangeRateDataGrid';
import { CurrencyCalculator } from './CurrencyCalculator';
import { useFetch } from '@/hooks/useFetch';
import { Loader } from '@progress/kendo-react-indicators';
import { Helmet } from 'react-helmet-async';
import { getExchangeRateList } from '../../api/getExchangeRateList';

const Home = () => {
  const { data, error, loading } = useFetch(getExchangeRateList);

  if (error) {
    return (
      <div className="m-auto text-red-500 font-bold text-3xl">{error}</div>
    );
  }

  if (loading) {
    return (
      <Loader
        size="large"
        type="pulsing"
        themeColor="info"
        className="m-auto"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Exchange Rate Application</title>
        <meta name="description" content="Exchange Rate Application" />
      </Helmet>
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-secondary font-bold text-3xl">Exchange Rates</h1>
        <div className="h-[300px]">
          {data && <ExchangeRateDataGrid exchangeRates={data} />}
        </div>
        <h1 className="text-secondary font-bold text-3xl">
          Currency Calculator
        </h1>
        {data && <CurrencyCalculator exchangeRates={data} />}
      </div>
    </>
  );
};

export default Home;
