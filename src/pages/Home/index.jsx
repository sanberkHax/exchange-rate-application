import { ExchangeRateDataGrid } from '@/components/ExchangeRateDataGrid';
import { ExchangeRateCalculator } from '@/components/ExchangeRateCalculator';
import { useFakeFetch } from '../../hooks/useFetch';
import { Loader } from '@progress/kendo-react-indicators';

const Home = () => {
  const { data, error, loading } = useFakeFetch();

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
    <div className="flex flex-col gap-10 justify-center items-center text-center">
      <h1 className="text-black font-bold text-3xl">Exchange Rates</h1>
      <div className="h-[300px]">
        {data && <ExchangeRateDataGrid exchangeRates={data} />}
      </div>
      <h1 className="text-black font-bold text-3xl">
        Exchange Rate Calculator
      </h1>
      {data && <ExchangeRateCalculator exchangeRates={data} />}
    </div>
  );
};

export default Home;
