import { useState } from "react";
import { SearchProps } from "../App";
export type Coin={
    id:string,
    symbol:string,
    name:string
}
type ResultBody={
    results:string[]
}
const SearchBar= (props:SearchProps)=>{
    const [count,setCount]=useState(0)
    var serach = document.getElementById("searchbox")
    // serach?.addEventListener("keypress",function(e){
    //     if( e.key=="Enter"){
    //         e.preventDefault()
    //         document.getElementById("searchbtn")?.click()

    //     }
    // })
    const [input ,setInput]=useState<string>("")
    const [listresult,setList]=useState<any>([])
    const fetchList = (value:string)=>{
        setCount(count+1)
        console.log(count)
        try{
        if (value===""){
            return 
                }
            
            
        

        fetch("https://api.coingecko.com/api/v3/coins/list?x_cg_api_key=CG-jdjM4Yr3QxrniVdQjs6HraYS",{

        }).then((response)=>{
            if(response.status==429){
                alert('Error reaching data . Wait a minute.')
                return
            }
            
             return response.json()

        }).then((json)=>{
        
            if(json){
                const results = json.filter((coin:Coin)=>{
                    return coin &&coin.name && coin.name.toLowerCase().includes(value.toLowerCase())
    
                })
      
    
            setList(results)
            }
            else{
                alert('Error getting data.')
            }



        
        })
    }
    catch(e){

        return 

    }

    }


    const handleChange=(value:string)=>{
        setInput(value)

       
        //fetchList(value)

        

        //console.log(listresult)
       
    }

    const onSearch=()=>{
        
        fetchList(input)
        console.log(listresult)
    }
    return(
        <div className="w-6/12 flex flex-col items-center ">
            
            <div className="relative py-1 w-96">
            <input id="searchbox" className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" placeholder="Search.." value={input} onChange={(e)=>handleChange(e.target.value)} ></input>
            
            <button id= "searchbtn " type="submit"className="text-white absolute end-2.5 bottom-3.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
             "onClick={onSearch}  >Search</button>
            </div>
            <div className=" fixed z-10 top-48  overflow-y-scroll max-h-48  w-96  rounded-lg bg-gray-600 text-white shadow-xl " id="results">
                {listresult.map((result:Coin)=>{
                    return(<div className="hover:bg-gray-100 hover:text-black  px-2  m-2 cursor-pointer text-lg rounded-lg border-gray-700 " id={result.name} onClick={(e)=>{
                        setInput('')
                        props.changeDetails(result)
                        setList([])
                        }}>
                        {result.name}
                    </div>)
                })}
            </div>
        </div>
        
    );
}

export default SearchBar