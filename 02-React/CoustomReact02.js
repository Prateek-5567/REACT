// in root.render( )  we pass an jsx so can we write that jsx in same file ?


function AppMy(){
    <h1> My Coustom React</h1>
}
// App return html and js and we also did the same in our file.

// now render this  in you react main.jsx. :  done in 01-React.
/**
 * root.render(
 *  <AppMy /> 
 * )
 */

// but internally this html is converted into objects.
// can be directly write objects.

const reactElement = {
    type:'a',
    props : {
        href: "https://google.com",
        target: "_blank"
    },
    Children:"Click here to goto Google.com"
}

// can i pass this object directly to render.. :: NO ; 
// when we render our coustom react then the function was according to us but the render 
// render func. of react is predefined so me must pass correct format input in it;

// when html is seen like this internally.
const actualReact = (
    <a href = "https://google.com">ClickMe</a>
);

root.render(actualReact);  // it will work \/

const globalVar = "Prateek";
// when html is converted into react internally it is in this form : -
const actualReact2 = (
    'a',  // phla parameter is type
    {href:"google.com",target:"_blank"},  // second parameter is object of attrubutes jispar hamne loop lgya tha.
    "Click here to visit google."  // third parameter is Children i.e Text content.
    ,globalVar      // 4th parameer is globalVar.
)

root.render(actualReact2);  // this will also work.

