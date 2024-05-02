import { useState } from "react"
import Resultcomponent from "./resultcomponent"
function Add()
{
    const [fname,setfname]=useState(0)
    const [lname,setlname]=useState(0)
    const [result,setresult]=useState(0)
    const handlefname=(evt)=>{
        const num1=evt.target.value
        setfname(num1)
    }
    const handlelname=(evt)=>{
        const num2=evt.target.value
        setlname(num2)
    }
    const handleresult=(evt)=>{
        evt.preventDefault()
        setresult(Number(fname)+Number(lname))

    }
    return(
        <div><form>
            <input value={fname}  onChange={handlefname}></input><br/>
            <input value={lname} onChange={handlelname}></input><br/>
            <input type="submit" onClick={handleresult}></input></form>
            <Resultcomponent result={result}></Resultcomponent>
        </div>
    )
}
export default Add