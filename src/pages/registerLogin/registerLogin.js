import React, {useState} from "react";
import './RegisterLogin.css';
import userIcon from "../../assets/iconUser.png"
import emailIcon from "../../assets/iconEmail.png"
import passwordIcon from "../../assets/iconPassword.png"




function RegisterLogin() {
    const [action, setAction] = useState("Sign up")
    return(
        <div className="containerLoginSignup">
            <div className="headerLoginsignup">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:  <div className="input">
                    <img src={userIcon} alt="user icon"/>
                    <input type="text" placeholder="name"/>
                </div>}

                <div className="input">
                   <img src={emailIcon} alt="email icon"/>
                   <input type="email" placeholder="Email"/>
               </div>
                <div className="input">
                   <img src={passwordIcon} alt="password Icon"/>
                   <input type="password" placeholder="Password"/>
               </div>
            </div>
             <div className="submitContainer">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
                 <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>



        </div>
    );
}
export default RegisterLogin;