



import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Favorites } from './components/Favorites';
import Details from './components/Details';
import { Coin } from './components/SearchBar';
interface Seen{
  name: string,
  value:number
}
export interface Favorite{
  coin:Coin


}

export type FavoritesProps=  {
  vals:Favorite[]|null
  onSelect: (coin:Coin)=>void
}
export type Display={
  dispName:string,
  price:number,
  gain:number,
  loss:number,
  symbol:string,
  id:string
}

export type DisplayProps={
  coin:Display,
  onFave: (coin:Coin)=>void
  recents:Recents[]|null
  onSelect: (coin:Coin)=>void

}

export type Recents={
  dispName:string,
  coin:Coin
  
  
}
export type HistoryProps={
  recents:Recents[]|null
}

export type SearchProps={
  changeView: ()=> void,
  changeDetails : (coin:Coin)=>void
}
// {dispName:"btc",price:12,datex:"17-12-1292"},{dispName:"eth",price:34,datex:"25-7-2024"},{dispName:"doge",price:45,datex:"30-3-2020"}

function App() {
  const [history,setHistory] = useState<Recents[]>([])
  const [favorites,setFavorite]=useState<Favorite[]>([])
  const [data,setData]=useState<Display>({} as Display)


  let toHis : HistoryProps={
    recents:history
  }

  const handleClick = ( )=>{
    setData({dispName:"eth",price:12,gain:11,loss:-1,symbol:"ETH",id:"23"})

  }
  const handleSelection=(coin:Coin)=>{
    try{
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}?x_cg_api_key=CG-jdjM4Yr3QxrniVdQjs6HraYS`).then(
      (response)=>response.json()
    ).then(
      (json)=>{
        if (json && json.hasOwnProperty('market_data') && json.market_data.hasOwnProperty('current_price')){
          setData({dispName:coin.name,price:Number(parseFloat(String(json.market_data.current_price.usd)).toFixed(2)),gain:11,loss:-1,symbol:coin.symbol,id:coin.id})

        }
        else{
          alert('Price not available')
        }
      }
    )
    if (history.some((temp)=>temp.dispName==coin.name)){
      console.log('duplicate found')
      return
    }
    else{
    setHistory([{dispName:coin.name ,coin:coin},...history,])

    }
  }
  catch(e){
    console.error(e)
    return 
  }
    
  }
  let toFav : FavoritesProps = {
    vals:favorites,
    onSelect:handleSelection
  }

  const handleFavorite=(coin:Coin)=>{
    if (favorites.some((temp)=>temp.coin.name==coin.name)){
      console.log('found duplicate')
      return 

    }
    else{
      setFavorite([...favorites,{coin:coin}])

    }
  
  }

  return (
    <div className='flex flex-col items-center  w-screen h-screen bg-blue-950 text-white py-4'>
      <h1 className='text-3xl font-extrabold my-10'>Crypto<span className='font-extralight'>Hub</span></h1>
      
      <SearchBar changeView={handleClick} changeDetails={handleSelection} />
      
      <Favorites {...toFav}  />      
      {/* dispName={data?.dispName} price={data.price} gain={data.gain} loss={data.loss} symbol={data.symbol} */}

      <Details coin={data} onFave={handleFavorite} {...toHis} onSelect={handleSelection} />
      
      

    </div>
  );  
}

export default App;
