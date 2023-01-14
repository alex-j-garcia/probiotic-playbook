import { useState, useEffect} from 'react';

export default function useCalcTextWidth(word) {
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const div = document.createElement('div');
    div.textContent = word;
    div.style.fontSize = '14px';
    div.style.display = 'inline-block';
    document.body.appendChild(div);
    console.log(div.clientWidth);
    setClientWidth(Math.ceil(div.clientWidth));
    document.body.removeChild(div);
  }, [word]);

  return clientWidth;
}