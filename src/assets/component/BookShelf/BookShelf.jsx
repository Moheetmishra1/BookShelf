import React, { useEffect , useState } from "react";
import axios from 'axios';
import BookCart from "./BookCart";
import "../../CSS/BookShelf.css"

export default function BookShelf(){  

    let [search,setSearch] = useState("Train")
    let [bookList,setBookList] = useState([])
   
    let flag= false;
 
    function updateSearch({target:{value}}){ 
        flag= true;

        setSearch(value);    
    }   


    let fetechApi =async ()=>{ 
        console.log("enter");
        try{
            let {data} = await axios.get( `https://openlibrary.org/search.json?q=${search}&limit=10&pages=1`) 
            console.log(data.docs);
       
        setBookList(data.docs)        
        }catch(err){
            console.log("The error ",err);
        }
    }

    useEffect(()=>{
        fetechApi()
    },[search])


    return (
        <>
        <div className="mainMovieList">
        <div className="searchTools">
            <input placeholder="Search" type="text" onChange={updateSearch} />
            <button className="searchButton">Search</button>
        </div>
        {/* <h1 className="loading" style={{display:`${check.loading}`}}  >Loading...{movie}</h1>
        <h1 className="loading" style={{display:`${check.found}`}} >Movie not found</h1> */}
        
        <div className="bookList">

            {!flag && bookList.map((a)=>{
                
                    return <div key={a.key} >
                        <BookCart add= {true} author_name={a.author_name} language={a.language} publish_date={a.publish_date} publisher={a.publisher} subject={a.subject} title={a.title} ratings_average={a.ratings_average}     />

                        </div>
                })
            }
        </div>
        </div>
        </>
        
    )
}