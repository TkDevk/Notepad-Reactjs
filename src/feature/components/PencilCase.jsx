import { useState } from "react"
import Pencil from "./Pencil"
import colors from "../../common/colors.js"
import PropTypes from "prop-types"

const PencilCase = ({onChangeInputColor}) => {
    const [expand, setExpand] = useState(false)

    function handleOpen() {
        setExpand(
            prevValue => !prevValue
        )
    }


    return (
        <article id="PencilCaseContainer">
            <section
                onClick={handleOpen}
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
            {expand &&
                <section
                    id="PencilCase">
                     <figure id="PencilCaseBox">
                     <figure id="PencilCaseBlanket">
                    <Pencil
                        colors={colors.black}
                        onChangeInputColor={onChangeInputColor}
                    />
                    <Pencil
                        colors={colors.green}
                        onChangeInputColor={onChangeInputColor}
                    />
                    <Pencil
                        colors={colors.yellow}
                        onChangeInputColor={onChangeInputColor}
                    />
                    <Pencil
                        colors={colors.blue}
                        onChangeInputColor={onChangeInputColor}
                    />
                    <Pencil
                        colors={colors.red}
                        onChangeInputColor={onChangeInputColor}
                    />
                    </figure>
                    </figure>   
                </section>}
        </article>
    )
}

PencilCase.propTypes ={
   onChangeInputColor: PropTypes.func.isRequired,
}

export default PencilCase