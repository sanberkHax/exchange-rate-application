import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetch = serviceCallback => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);

        const response = await serviceCallback();

        setData(response);
      } catch (err) {
        setError(err);

        toast.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [serviceCallback]);

  return { data, loading, error };
};
