import { ExchangeRateDataGrid } from '@/components/ExchangeRateDataGrid';
import { ExchangeRateCalculator } from '@/components/ExchangeRateCalculator';

const Home = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center">
      <h1 className="text-black font-bold text-3xl">Exchange Rates</h1>
      <div className="h-[300px]">
        <ExchangeRateDataGrid />
      </div>
      <h1 className="text-black font-bold text-3xl">
        Exchange Rate Calculator
      </h1>
      <ExchangeRateCalculator />
    </div>
  );
};

export default Home;
