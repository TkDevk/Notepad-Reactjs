const Page = ()=>{
    return(
        <>
           <section className="MainPage">
            {/*<aside id="AsidePage"></aside>*/}
             <main id="MainContent">
             <header id="HeaderPage">
                <input type="text" id="inputTitle" placeholder="Insert Title"/>
                <h2>A</h2>
             </header>
             <section>
                <textarea placeholder="Insert Text" name="textarea" id="InputText" ></textarea>
                <p id="ShowText">a</p>
             </section>
             </main>

           </section>
        </>
    )
}
export default Page