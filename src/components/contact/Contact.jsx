import"./contact.css"
import React, {useState } from "react";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import {useContext, useRef } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"; 
const Contact =()=>{
    const formRef = useRef()
    const[done, setDone]= useState(false)
    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode;

    const handleSubmit=(e)=>{

        e.preventDefault();
        emailjs.sendForm('service_sjibycq', 'template_oii42pm', formRef.current, "user_SuKicyGmma6QkB2sKdsMv")
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    
    }




    return(

        <div className="c">
            <div className="c-bg"> </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project!
                
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone}
                             alt="" 
                             className="c-icon"
                              />
                              +98 951 256 11
                        </div>
                         <div className="c-info-item">
                            <img 
                            src={Email}
                             alt="" 
                             className="c-icon"
                              />
                             rezapasand7878@gmail.com
                        </div> 
                        <div className="c-info-item">
                            <img 
                            src={Address}
                             alt="" 
                             className="c-icon"
                              />
                              IRAN , KERMAN , 12TIR Street
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>whats your story?</b> Get in touch. always be great
                        freelancing if along. me
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                       
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                 <textarea style={{backgroundColor: darkMode && "#333"}} name="message" placeholder="Message" cols="30" rows="5"></textarea>
                 <button>Submit</button>
                 {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>


    )


}
export default Contact