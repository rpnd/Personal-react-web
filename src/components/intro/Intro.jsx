import "./intro.css"
import Me from "../../img/me.png"
import svg from "../../img/scrolling.png"
import Fade from 'react-reveal/Fade';



const Intro=()=> {
    return (
        <div className="i">
          <div className="i-left">
                 <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is  </h2>
                    <h1 className="i-name">reza pasand </h1>
                     <div className="i-title">
                         <div className="i-title-wrapper">
                         <div className="i-title-item">Web Deeloper</div>
                         <div className="i-title-item">UI/UX Desinger</div>
                         <div className="i-title-item">Photographer</div>
                         <div className="i-title-item">Writer</div>
                         <div className="i-title-item">Content Creator</div>
                        
                         </div>
                    </div>
                    <p className="i-desc">
                    Generating random paragraphs can be an excellent way for writers to get their creative 
                    flow going at the beginning of the day. The writer has no idea what topic the random paragraph

                    </p>
                  
                 </div>  
               <img src={svg} className="i-svg"></img>
              </div>
              
          <div className="i-right">

                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />

          </div>
        </div>
    )
};

export default Intro
