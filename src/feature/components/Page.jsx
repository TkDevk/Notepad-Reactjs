import { useState } from "react"
const Page = () => {
   /*
   const [inputText, setText] = useState("") //i will pass empty value to text and textState will change it

   function handleText(event) {  //when i need to modify something it's better to use the word handle in my f(x)
      const newText = event.target.value
      //Now i will pass the value to textState
      localStorage.setItem('text',inputText)
      console.log(newText)
      setText(newText)
   }*/
    //onChange={handleText}

   //localStorage use it with text
   const [inputText, setText] = useState(
      window.localStorage.getItem('inputText')
   )
   function setLocalStorage (value){
      try {
         setText(value)
         window.localStorage.setItem("inputText",value)
         console.log(value)
      }catch(error){
         console.log(error)    
      }
   }
   
   //localStorage use it with title
   const[inputTitle,setTitle] = useState(
      window.localStorage.getItem('inputTitle')
   )
   function setTitleStorage (value){
      try{
         setTitle(value)
         window.localStorage.setItem('inputTitle',value) //(key,var)
      }catch(error){
         console.log(error)
      }
   }

   return (
      <>
         <section className="MainPage">
            {/*I need to pass a default text value through a useState
            * As i need to change the value anytime there is change i will create a f(x) that will have event as argument
            * i will set the target event to value, so anytime my value change the event will be able to see it 
            */}
            <main id="MainContent">
               <header id="HeaderPage">
                  <input
                     type="text"
                     id="inputTitle"
                     placeholder="Insert Title" 
                     value={inputTitle}
                     onChange={e=>setTitleStorage(e.target.value)}
                     />
                  <h2 id="TextTitle">
                    {inputTitle}
                  </h2> 
               </header>
               <section className="TextContainer">
                  {/*I will not place () at handleText becase i will only call it when the value it changes it*/}
                  <textarea

                     placeholder="Insert Text"
                     name="textarea"
                     id="InputText"
                     onChange={e=>setLocalStorage(e.target.value)}     
                     value={inputText}>

                  </textarea>
                  {/*Callback to the onChange method*/}
                  <p
                     className="ShowText">
                     {inputText}
                  </p>
               </section>
            </main>

         </section>
      </>
   )
}
export default Page