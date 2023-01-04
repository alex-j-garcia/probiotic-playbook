import { useState, useEffect } from 'react';

export default function useJsonData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => data.microbiota)
      .then(collection => setData(collection));
  }, []);

  return [data, setData];
}
