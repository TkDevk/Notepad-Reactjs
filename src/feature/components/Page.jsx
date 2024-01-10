import {useState} from "react"
const Page = ()=>{
   const [text, setText] = useState("") //i will pass empty value to text and textState will change it
   
   function handleText(event){  //when i need to modify something it's better to use the word handle in my f(x)
      const newText = event.target.value
      //Now i will pass the value to textState
      setText(newText) 
   }  
    return(
        <>
           <section className="MainPage">
            {/*I need to pass a default text value through a useState
            * As i need to change the value anytime there is change i will create a f(x) that will have event as argument
            * i will set the target event to value, so anytime my value change the event will be able to see it 
            */}
             <main id="MainContent">
             <header id="HeaderPage">
                <input type="text" id="inputTitle" placeholder="Insert Title"/>
                <h2 id="TextTitle"></h2>
             </header>
             <section className="TextContainer">
               {/*I will not place () at handleText becase i will only call it when the value it changes it*/}
                <textarea placeholder="Insert Text" name="textarea" id="InputText" onChange={handleText} value={text}></textarea>
                <p className="ShowText">{text}</p>
             </section>
             </main>

           </section>
        </>
    )
}
export default Page