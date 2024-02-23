import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddMeet=()=>{
     
     const title=useRef()
     const name=useRef()
     const date=useRef()
     const description=useRef()


     const [btnName,setbtnName]=useState(["ADD MEET"])
     const navigate=useNavigate()
     let [empty,setempty]=useState([])
    function AddCard(){
        const titleName=title.current.value
        const Name=name.current.value
        const Date=date.current.value
        const Description=description.current.value
        const object={
            meetName:titleName,
            meetImg:Name,
            meetdate:Date,
            meetDes:Description
        }
        if(titleName == ''||Name == ''||Date == ''||Description == ''){
               setempty("please fill all fields")
        }
        else {
            fetch("https://meetapp-402bc-default-rtdb.firebaseio.com/meetapp.json",{
                method:"post",
                body:JSON.stringify(object)
            }).then(()=>{
                navigate("/")
                setbtnName("Done🤗")
                setempty("")
            })
        } 
     }
     
    return <div className="meet-contanier">
        <div className="input-meet">
            <h1>ENTER MEET</h1>
            <input className="input-text text" type="text" placeholder="Enter name" ref={title}></input>
            <input className="input-text" type="text" placeholder="Image name" ref={name}></input>
            <input className="input-text" type="date" placeholder="enter text" ref={date}></input>
            <textarea className="text-area" rows="3" cols="50" ref={description}></textarea>
            <p className="red">{empty}</p>
            <button className="input-btn" onClick={AddCard}>{btnName}</button>
        </div>
    </div>
}
export default AddMeet;