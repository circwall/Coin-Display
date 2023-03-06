import React, { useState } from 'react';
import { useGlobalcontext } from '../../Context';
function BitcoinToUSD() {
  const [bitcoinValue, setBitcoinValue] = useState('');
  const [usdValue, setUSDValue] = useState('');

  const{setRates}= useGlobalcontext()

  const convertToUSD = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      const rate = data.bpi.USD.rate_float;
      const usd = bitcoinValue * rate;
      setUSDValue(usd.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label>Bitcoin value:</label>
      <input type="number" step="any" value={bitcoinValue} onChange={(e) => setBitcoinValue(e.target.value)} />
      <button onClick={convertToUSD}>Convert to USD</button>
      {usdValue && (
        <div>
          <label>USD value:</label>
          <span>{usdValue}</span>
        </div>
      )}
    </div>
  );
}

export default BitcoinToUSD;
