import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

Myvar = "Google Admin";
const reactComponenet = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'Click Here to navigate to google.',
  Myvar
);
// just type this object name as it is no more a tag it is converted into object now. 

const element = document.getElementById('root');
const root = createRoot(element);

// root.render(reactComponenet);

root.render(
  <StrictMode>
      <App/>
  </StrictMode>
)
