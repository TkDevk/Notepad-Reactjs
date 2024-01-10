const Page = ()=>{
    return(
        <>
           <section className="MainPage">
            {/*<aside id="AsidePage"></aside>*/}
             <main id="MainContent">
             <header id="HeaderPage">
                <input type="text" id="inputTitle" placeholder="Insert Title"/>
                <h2 id="TextTitle"></h2>
             </header>
             <section>
                <textarea placeholder="Insert Text" name="textarea" id="InputText" ></textarea>
                <p id="ShowText"></p>
             </section>
             </main>

           </section>
        </>
    )
}
export default Page