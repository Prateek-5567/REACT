// 04 react video.
const root = document.getElementById('root');

const reactComponent = {
    type : 'a', //let we are doing anchor tag ki implementation
    props : {
        href : 'https://net2025.cc',
        target : 'abc'
    },
    children : 'Click Me to Hack Netflix Data'
}
// href dalne ke 2 tarike h agar tum exact url (absolute url) nahi dete ho to vo 
// uss href ko as a relative path of some page or file consider hota h apke project me aur current path ke aage append hokar new tab me jata h (page navigation ke jese.)

// abb components bass iss format ke hone chahiye i.e is format
//  me hmare pass data ayega to ham use apni root par render kar denge bass.

// components kya karte h they carry data in some parts of out project.
// they actually contain some html code that needs to be attached to DOM tree and rendered on web.

function coustomRender(targetReactComponent,rootOfDom){
    const element = document.createElement(targetReactComponent.type);
    element.innerHTML = targetReactComponent.children;
    
    for (const key in targetReactComponent.props) {
        if (key === 'children') continue;
        element.setAttribute(`${key}`,targetReactComponent.props[key]);
    }

    // connect it to root DOM
    rootOfDom.appendChild(element);
}
//call it !!
coustomRender(reactComponent,root);