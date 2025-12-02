import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const proxy = 'https://corsproxy.io/?';
        const fullUrl = proxy + encodeURIComponent(url);
        const response = await axios.get(fullUrl);
        setData(response.data);
      } catch (err) {
        setError(err);
        setData(null);
      } 
        setLoading(false);
      };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;