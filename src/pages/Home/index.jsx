import { ExchangeRateDataGrid } from './ExchangeRateDataGrid';
import { ExchangeRateCalculator } from './ExchangeRateCalculator';
import { useFetch } from '@/hooks/useFetch';
import { Loader } from '@progress/kendo-react-indicators';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { data, error, loading } = useFetch();

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
          Exchange Rate Calculator
        </h1>
        {data && <ExchangeRateCalculator exchangeRates={data} />}
      </div>
    </>
  );
};

export default Home;
