import {  useState } from "react"
import { toPng } from "html-to-image"
import download from "downloadjs"
import PropTypes from "prop-types"

const Page = ({inputColor}) => {
   console.log(inputColor)
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


   //localStorage use it with te xt
   const [inputText, setText] = useState(
      window.localStorage.getItem('inputText')
   )
   function setLocalStorage(value) {
      try {
         setText(value)
         window.localStorage.setItem("inputText", value)
         console.log(value)
      } catch (error) {
         console.log(error)
      }
   }

   //localStorage use it with title
   const [inputTitle, setTitle] = useState(
      window.localStorage.getItem('inputTitle')
   )
   function setTitleStorage(value) {
      try {
         setTitle(value)
         window.localStorage.setItem('inputTitle', value) //(key,var)
      } catch (error) {
         console.log(error)
      }
   }

   /**
   Set localStorage color
    */

   


   /*To download my html tag as image i will use 2 libraries
   1- npm install html-to-image
   2- npm install downloadjs
   3- import {toPng} from "html-to-image"
   4- import download from "downloadjs"
   */

    //1) Get the class from DOM
    const pngDownload = document.querySelector('.MainPage');
    function btnDownload(){
      toPng(pngDownload)
      .then(dataPng =>{
         download(dataPng, 'NotePad.png')
      })
      .catch(error=>console.log(error))
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
                     onChange={e => setTitleStorage(e.target.value)}
                     style={{color: inputColor}}
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
                     onChange={e => setLocalStorage(e.target.value)}
                     value={inputText}
                     style={{color: inputColor}}
                     >
                  </textarea>
                  {/*Callback to the onChange method*/}
                  <p
                     className="ShowText">
                     {inputText}
                  </p>
               </section>
            </main>
            
{/*Button to download my html tag*/}
         </section>
         <button
               id="btnDownload"
               onClick={btnDownload}
            >
               <picture id="PrintContainer">
               <img id="PrintIcon"
                src="print-solid.svg"
                alt="Print Icon" />
               </picture>
               Print
            </button>
      </>
   )
}

Page.propTypes ={
   inputColor: PropTypes.string,
}

export default Page