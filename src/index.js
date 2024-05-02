import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// import Counter from './App';
 import Random from './random';
// import Formcomponent from './Formomponent';
// import Multiple from './multiple';
//import Add from './add';
const root =ReactDOM.createRoot(document.getElementById("root"))
// function Changecompo(){

//   var [myname,setmyname]=useState("john")
//   function change(){
//     setmyname("nabee")
//   }
//   return(<div>
//     <h1>{myname}</h1>
//     <button onClick={change
//     }>chamge</button>
//   </div>
// )
// }
// root.render(<Changecompo></Changecompo>)
// root.render(<Counter/>)

// root.render(<Formcomponent/>)
root.render(<Random/>)