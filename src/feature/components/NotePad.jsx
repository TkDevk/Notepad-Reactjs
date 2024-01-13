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
            {/*I need to pass the set color of my Pencil component to the inputColor of the props Page, so i pass the function onChangeInputColor to PencilCase's son which is <Pencil /> and then i pass the parameter as the color detected.
          -- npm install -g yarn
          -- yarn build
          
          */}
            console.log(color)}}/>
          </main>
        </>
    )
}

export default NotePad