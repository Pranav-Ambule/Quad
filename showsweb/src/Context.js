import { createContext, useContext, useEffect,useState } from "react";


export const API_URL= `https://api.tvmaze.com/search/shows?q=all`;

const AppContext= createContext();

const AppProvider =({children})=>{
    const [isLoading, setisLoading] = useState(true);
    const [movie, setmovie] = useState([]);
    const [isError, setisError] = useState({show:true,msg:""});

    const getMovies=async(url)=>{
        setisLoading(true);
        try{
            const res = await fetch(url);
            const data= await res.json();
            if(data.length!== 0){
                setisLoading(false);
                setmovie(data);
                console.log(data);
            }
            else{
                console.log("khali hai");
                setisError({
                    show:true,
                    msg:data.Error
                })
            }
        }
        catch(Error){
            console.error(Error);
        }
    }
    useEffect(() => {
      getMovies(`${API_URL}`);
    
    }, [])
    
    return(
        <AppContext.Provider value={{movie,isError,isLoading}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext =()=>{
    return (
        useContext(AppContext)
    )
}

export  {AppProvider,AppContext , useGlobalContext};