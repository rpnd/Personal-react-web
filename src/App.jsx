import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import {ThemeContext} from "./context";
import Fade from 'react-reveal/Fade';



const App = () => {
const theme = useContext(ThemeContext);
const darkMode= theme.state.darkMode;
 
  return(
  <div style={{backgroundColor:darkMode ? "#222":"white",color:darkMode && "white" }}>
       <Toggle/>
            <Fade left>

        <Intro/>
             </Fade>
             <Fade right>
        <About/>
             </Fade>
             <Fade left>
        <ProductList/> 
           </Fade>
           <Fade right>
        <Contact/>
        </Fade>
        
    
    </div>
  );
  
}

export default App;