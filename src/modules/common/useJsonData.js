import { useState, useEffect } from 'react';

export default function useJsonData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => setData(data.species));
  }, []);

  return data;
}
