import { useState } from "react"
import Pencil from "./Pencil"

const PencilCase = () => {
   
   const [expand,setExpand] = useState(false)
   function handleCase (){
    setExpand(
        prevValue=>!prevValue
    )
   }
    return (
        <article id="PencilCaseContainer">
            <section 
            onClick={handleCase} 
            id="ShowColor"
            >
                <picture 
                id="PaletteContainer">
                    <figure 
                    id="ColorPalleteBehind">
                    </figure>
                   {/* <figure id="ColorPallete">*/}
                       <img 
                       id="PaletteIcon" 
                       src="palette-solid.svg" 
                       alt="Palette Icon" />
                    {/*</figure>*/}
                </picture>
            </section>
             {expand&&<section 
            id="PencilCase">
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
            </section>}
        </article>
    )
}

export default PencilCase