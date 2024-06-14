import { useEffect, useState } from "react"
import BookCart from "./BookCart";
import "../../CSS/MyShelf.css"


export default function MyShelf(){
    let [mycart,setCart] = useState([])


    function deleteCart(index){
        let arr= JSON.parse(localStorage.getItem("bookList"));
       let k= arr.splice(index,1);
       console.log(arr);
        setCart(arr)
        localStorage.setItem("bookList",arr);

                
    }

   function  findCart(){
        let arr= JSON.parse(localStorage.getItem("bookList"));
        console.log(arr);
        setCart(arr);

    }



    useEffect(()=>{
        findCart()
    },[])


    return (
        <div className="myShelf">
            {   mycart.map((a,index)=>{
                console.log(a);
                return (
                    <BookCart key={index} {...a} deleteCart={deleteCart } index={index}  />
                )
            })

            }

        </div>
    )
}