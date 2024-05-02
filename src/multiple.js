import { useState } from "react"

function Multiple()
{
    const [fname,setfname]=useState("Agnel")
    const [lname,setlname]=useState("John")
    const [result,setresult]=useState("")
    function handlefname(evt){
        setfname(evt.target.value)
    }
    function handlelname(evt){
        setlname(evt.target.value)
    }
    function handleresult(evt){
        evt.preventDefault()
        setresult(fname+"  "+lname)
    }
    return(
        <div><form>
            <input value={fname}  onChange={handlefname}></input><br/>
            <input value={lname} onChange={handlelname}></input><br/>
            <input type="submit" onClick={handleresult}></input></form>
            <h1>{result}</h1>
        </div>
    )
}
export default Multiple