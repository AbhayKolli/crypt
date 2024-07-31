import { ReactNode } from "react";
import { Favorite } from "../App";
import { FavoritesProps } from "../App";

export const Favorites = (props:FavoritesProps)=>{
    return ( 
        <div className=" h-28 w-2/4 flex flex-col mt-4">
            <p className="text-3xl text-white font-extrabold mb-2" >Favorites</p>
            <div className="flex flex-row overflow-x-scroll">
            {
                props.vals?.length === 0  ?<p className="font-extralight text-sm">Add to your favorites </p> : ""
            }
            {props.vals?.map((ele)=>{
                return(<button onClick={(e)=>{props.onSelect(ele.coin)}} className="mr-2 p-2 mb-2
                bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{ele.coin.symbol.toUpperCase()}</button>);
            })}
            </div>
        </div>
    );
}