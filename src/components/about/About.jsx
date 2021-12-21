import"./about.css"
import img from "../../img/img.png" 
import Award from "../../img/award.png"
import Roll from 'react-reveal/Roll';

const About=()=> {
    return (
        <div className="a">
 <div className="a-left">

        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={img} alt="" className="a-img" />


        </div>

 </div>
  <div className="a-right">
 <h1 className="a-title">About Me</h1>
 <p className="a-sub">
 I recollect that my first exploit in squirrel-shooting
 </p>
 <p className="a-desc">
 It all started with the computer. Had he known what was to follow, he would have never logged on
  that day. , the screen came alive, and everything Dave knew to be true no longer was.
 </p>
 <div className="a-award">
<img src={Award} alt="" className="a-award-img" />

<div className="a-award-texts">
    <Roll>
    <h4 className="a-award-title">International Design Award 2021</h4>
    <p className="a-award-desc">
    But the truth was there was no way to know what
     was about to happen. So Dave pressed 
    </p></Roll>
</div>
 </div>
 
 </div>
        </div>
    );
}
;
export default About
