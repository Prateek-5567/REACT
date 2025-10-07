// aaap ekk function lo uske andar html daldo aur return kardo react usse render karga dega .
import Prateek from "./Prateek"

function App() { 
// one component can return only only tag so we prefer to wrap everything inside <> ... </>

  return (
    <>   
     {/* you can actually write your html inside this jsx tag. */}
        <h1> 
          Hi from App.jsx 
        </h1>

        <Prateek/> 
        <h2> ye line App.jsx ke andar h but render to index.jsx/main.jsx ke andar kia tha
        </h2>
      <div> this is working because App.jsx bhi to render ho hi rahi h indirectly in main.jsx </div>
    </>
  )
}

export default App
