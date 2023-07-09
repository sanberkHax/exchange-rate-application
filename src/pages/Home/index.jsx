import { ExchangeRateDataGrid } from '@/components/ExchangeRateDataGrid';

const Home = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center">
      <h1 className="text-black font-bold text-3xl">Home</h1>
      <ExchangeRateDataGrid />
    </div>
  );
};

export default Home;
