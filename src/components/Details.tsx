import { Display } from "../App";
import { DisplayProps } from "../App";
function Details(params: DisplayProps) {
    return(
        <div className="flex flex-row  w-2/4 h-2/4">

        <div className="bg-slate-700 text-white rounded-xl basis-3/5 mr-2 p-4">
            <div className="p-2  h-full relative w-full">
                <div className="flex flex-row justify-between">
                <p id ="ini"className="font-extrabold text-5xl">{params.coin.symbol ?params.coin?.symbol?.toUpperCase(): "Crypto"}</p>
                <button className="text-blue-700  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" onClick={(e)=>{
                    let p = document.getElementById("ini")
                    if(p?.innerText=="Crypto"){
                        alert('choose a coin first')
                    }else{
                        params.onFave({id:params.coin.id, symbol:params.coin.symbol , name:params.coin.dispName})}}
                    }
                    >
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
<path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
</svg>
                    
                    </button>
                </div>
                <div className=" mt-14 items-end">
                <p className="text-8xl "> {params.coin?.price}</p>
                <p className="font-semibold text-xl pl-2 ">{params.coin.symbol ? "USD" : ""}</p>
                </div>
                
                <div className=" mt-14 flex flex-row  justify-between">
                <div className="text-start">
                 {/**place holder for actual data limited due to rate limit */}
                <p className={`text-5xl font-bold ${Math.floor(Math.random()*2)===0 ? 'text-red-400':'text-green-400'}`} >{params.coin.symbol ? `${params.coin?.price===0? 0 : Math.floor(Math.random()*5)}%`:"" }</p>
                
                <p className="text-xs">{params.coin.symbol ? `From Yesterday ` : ""}</p>
                </div>
                <div className=" text-end ">
                <p className={`text-5xl font-bold ${Math.floor(Math.random()*2)===0 ? 'text-red-400':'text-green-400'}`} >{params.coin.symbol ? `${params.coin?.price===0? 0 : Math.floor(Math.random()*5)}%`:"" }</p>
                <p className="text-xs">{params.coin.symbol ? `From Past Week ` : ""}</p>
                </div>
                </div>
                
                </div>
            

        </div>
        <div className="flex flex-col  basis-2/5 rounded-xl text-black bg-white bg-opacity-40 overflow-scroll h-full">
            <h1 className="text-xl font-extrabold p-2  ">Recents</h1>
            <hr className="h-px mb-2 bg-gray-50 border-0 dark:bg-gray-500"/>
            
            <div className="flex flex-col overflow-y-scroll  h-full w-full items-start pr-2 font-light  ">
            {params.recents?.map((ele)=>{
                return(
                    <button className="h-12 mt-2  text-lg w-full items-start rounded-r-3xl hover:bg-slate-300 text-left pl-4 " onClick={()=>params.onSelect(ele.coin)}>{ele.dispName} </button>
                );
            })}
        </div>
        </div>
        </div>
    )
    
    
}

export default Details