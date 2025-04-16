// In a place called {adress} so fair and bright , there lived {first name} {last name}
//A beam of light with dreams that doared and a heart so true.

import React, {useState} from "react";
export default function Poem(){
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [adress, setAdress]= useState("");
  const [isSubmitted, setIsSubmitted]= useState(false);

  const handleSubmit = e =>{
    e.preventDefault();
    if(!firstName|| !lastName|| !adress){
       alert("Please fill the form fields");
    }else{
        console.log("Form Submitted"); 
        setIsSubmitted(true) 
    }
  };
  const renderPoem = () => {
    if(!isSubmitted){
        return <em className="flex justify-center items-center"> Fill in the form to reveal your Poem...</em>
    }
    return(
        <>
        <p className="flex justify-center items-center"> In a place called {""}
          <strong className="text-indigo-500">{adress} </strong>so fair and bright, there lived <strong className="text-indigo-500">{""}{firstName}{lastName}</strong>{""}</p>
        <p className="flex justify-center items-center">A beam of light with dreams that doared and a heart so true</p>
        </>
    )
  };
  return (
    <>
    <div>
        <h3 className="text-xl  flex justify-center items-center py-6"> Your Poem:</h3>
        <div>{renderPoem()}

        </div>
    </div>
    <div className="flex justify-center items-center bg-gray-700 pt-5 pb-5 m-8 p-6 max-w-md  mx-auto rounded-xl">
        <form action="Submit" onSubmit={handleSubmit}className="flex flex-col  gap-5 ">
        <input type="text" value={firstName} className="p-2 border rounded-xl w-96" placeholder="First Name" onChange = {(e) => setFirstName(e.target.value)}/>
        <input type="text" value={lastName} className="p-2 border rounded-xl w-96"  placeholder="Last Name" onChange ={(e) => setLastName(e.target.value)}/>
        <input  className="p-2 border rounded-xl w-96" type="text" value={adress} placeholder="Adress"  onChange = { (e) => setAdress(e.target.value)}/>
        <button type="Submit" className="bg-green-300 px-5 py-2 rounded-xl">Submit</button>
        </form>
    </div>
    </>
  )
}