import PropTypes from "prop-types";
const Pencil = ({ colors, onChangeInputColor })=>{
 
    return(
       <>
        <figure onClick={()=>onChangeInputColor(colors.background)}className="PencilFigure">
            <header className="PencilPoint">
                {/*This one was pretty hard,  so here comes the step by step:
                1- setting the colors, i open the syle={} and then pass an object for each value so i use double curly braces to wrap the element.

                2- getting the color value was a tricky one but i found that using an Optional chaining (?.) operator i can check (well, js checks lol) if colors are null or undefined doesn't run the property, that in this case is background from colors.
                

                
                */}
               <figure className="PencilLead" style={{ backgroundColor: colors?.background }}></figure>
            </header>
            <main className="PencilBody" style={{backgroundColor: colors?.background}}>
             
            </main>
        </figure>
        </>
    )
}

Pencil.propTypes = {
    onChangeInputColor: PropTypes.func,
    colors: PropTypes.shape({
    background: PropTypes.string.isRequired,
    }),
  };

export default Pencil