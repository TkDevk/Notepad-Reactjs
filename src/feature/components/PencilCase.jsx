import Pencil from "./Pencil"

const PencilCase = () => {
    return (
        <article id="PencilCaseContainer">
            <section id="ShowColor">
                <picture id="PaletteContainer">
                    <figure id="ColorPalleteBehind">
                    </figure>
                   {/* <figure id="ColorPallete">*/}
                       <img id="PaletteIcon" src="palette-solid.svg" 
                       alt="Palette Icon" />
                    {/*</figure>*/}
                </picture>
            </section>
            <section id="PencilCase">
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
                <Pencil />
            </section>
        </article>
    )
}

export default PencilCase