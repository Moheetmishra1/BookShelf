import React from "react";
import "../../CSS/BookCart.css"

 function BookCart({author_name,language,publish_date,publisher,subject,title,ratings_average,add,deleteCart,index}){

   
    function addCart(){
        console.log("call");
        let cartList = JSON.parse(localStorage.getItem("bookList"))||[];
        cartList.push({author_name,language,publish_date,publisher,subject,title,ratings_average});
        let arr = JSON.stringify(cartList)
        localStorage.setItem("bookList",arr)
    }

   

    return (
        <div className="bookCartBox">
           <div> <span>Title</span>: {title}</div>
          <div><span>Author</span>: {author_name && author_name[0]}</div>

           <div><span>Lang</span>: {language && language.slice(1,3)}</div>

           <div><span>Publisher</span>: {publisher && publisher[0]}</div>
           <div><span>Publish</span>: {publish_date && publish_date[publish_date.length-1]}</div>
           <div><span>Subject</span>: {subject && subject.slice(0,2)}</div>
           <div><span>Rate</span>: {ratings_average}</div>

           {add&&<button className="addCart" onClick={addCart}><p>Add to cart</p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></button>}

      
        </div>
    )
}

export default React.memo(BookCart)
