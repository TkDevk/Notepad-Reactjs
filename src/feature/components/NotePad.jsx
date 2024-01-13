import { useState } from "react"
import Page from "./Page"
import PencilCase from "./PencilCase"


const NotePad= ()=>{
  const [inputColor, setInputColor] = useState('')
  

    return(
        <>
          <main className="BodyPad">
            <Page inputColor={inputColor}/>
            <PencilCase onChangeInputColor={(color) => {setInputColor(color);
            console.log(color)}}/>
          </main>
        </>
    )
}

export default NotePad