import React from "react";

const Homepage=()=>{
    let API_KEY=process.env.REACT_APP_API_KEYS;
    let url = `https://newsapi.org/v2/everything?q=Apple&from=2021-11-16&sortBy=popularity&apiKey=${API_KEY}`;
    /*let req=new Request(url);*/

 function fetchData(){
    fetch(url)
      .then(function(res){
        
        console.log(res.json())
      

      })
      
     }
      
   
   
    return(
       <div>
        <button onClick={fetchData()}> Click to fetch </button>
      </div>
    );
}


export default Homepage;