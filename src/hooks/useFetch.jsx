import { useEffect, useState } from 'react';
import { getExchangeRateList } from '@/api/getExchangeRateList';
import { toast } from 'react-toastify';

export const useFakeFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);

        const response = await getExchangeRateList();

        setData(response);
      } catch (err) {
        setError(err);

        toast.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return { data, loading, error };
};
