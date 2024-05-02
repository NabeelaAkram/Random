import { useState } from "react"


function Formcomponent()
{
    const [myname,change]=useState("")
    
function handlechange(evt){
        
        change(evt.target.value)
        // console.log(evt.target)

    }
    return(<>
    <form>
    <input value={myname} onChange={handlechange}></input>
    <button>Submit</button>
</form>
    </>)
}
export default Formcomponent