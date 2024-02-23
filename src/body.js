import React, { useEffect, useState } from "react";

const Box=(props)=>{
    return <div className="flex-box">
                <img className="box-img" src={"https://source.unsplash.com/1600x800/?"+props.data.meetImg}></img>
                <h2 className="text-h1">{props.data.meetName}</h2>
                <h3 className="text-h2">{props.data.meetdate}</h3>
                <p className="text-p">{props.data.meetDes}</p>
            </div> 
}


const Body=()=>{
    var [meets,setmeets]=useState([])
    async function meetapi(){
        const data= await fetch("https://meetapp-402bc-default-rtdb.firebaseio.com/meetapp.json")
        const finaldata= await data.json()
        console.log(finaldata)
        const array=[]
        for(let key in finaldata){
            if(finaldata.hasOwnProperty(key)){
                array.push(finaldata[key])
                console.log(array)
            }
        }
        setmeets(array)
    }
        useEffect(()=>{
            meetapi()
        },[])
        
    return <div className="body">
        <h1>WELCOME TO THE MEET</h1>
        <div className="body-container">
        {
           meets.map((x)=>{
               return <Box data={x}/>
           })
        } 
        </div>
    </div>
}
export default Body;