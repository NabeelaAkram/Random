import { useState } from "react"

function Random()
{
    var [num,changenum]=useState(0)
    function change(){
        num=Math.floor(Math.random()*10)+1
        changenum(num)
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={change}>Random number</button>
        </div>
    )
}
export default Random