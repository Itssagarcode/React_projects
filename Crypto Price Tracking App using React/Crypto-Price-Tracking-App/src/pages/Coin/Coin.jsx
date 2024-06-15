import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-VFqVKgCZU9KbbatQEGbZjXii'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  };

  const fetchHistoricalData = async()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '	CG-VFqVKgCZU9KbbatQEGbZjXii'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt={`${coinData.name} logo`} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-details">
          <p>Current Price: {currency.Symbol}{coinData.market_data.current_price[currency.name]}</p>
          <p>Market Cap: {currency.Symbol}{coinData.market_data.market_cap[currency.name]}</p>
          <p>24H Change: {coinData.market_data.price_change_percentage_24h}%</p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData = {historicalData}/>
        </div>
      </div>
    );
  } else{
    return(
      <div className="spinner">
        <div className="spin"></div>
      </div>
    )
  }

 
};

export default Coin;
