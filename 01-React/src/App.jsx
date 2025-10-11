// aaap ekk function lo uske andar html daldo aur return kardo react usse render karga dega .
import Prateek from "./Prateek"

function App() { 
// one component can return only only tag so we prefer to wrap everything inside <> ... </>
  const name = "prateek";  // this is called : EVALUATED EXPRESSION(final expression) (this way js is injected in react.)
  return (
    <>   
     {/* you can actually write your html inside this jsx tag. */}
        <h1> 
          Hi from App.jsx  
          <br />
          Author - {name}
          {/* Evaluted Expression pass kar sakte h sirf returned html me.. */}
        </h1>

        <Prateek/> 
        <h2> ye line App.jsx ke andar h but render to index.jsx/main.jsx ke andar kia tha
        </h2>
      <div> this is working because App.jsx bhi to render ho hi rahi h indirectly in main.jsx </div>
    </>
  )
}

// return ke andar js ka code nahi likh sakte eg if(true) console.log("A"); 
// we can only pass evaluated expressions in this

export default App
