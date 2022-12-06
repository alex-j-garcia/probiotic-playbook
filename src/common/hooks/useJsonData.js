import { useState, useEffect } from 'react';

export default function useJsonData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => data.species)
      .then(collection => setData(collection));
  }, []);

  return data;
}
