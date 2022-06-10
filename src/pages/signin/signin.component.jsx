import React, { useState } from "react";
import './signin.style.css'
import CustomButton from "../../components/custombutton/Custombutton.component";
import { signInWithGoogle, auth, userDocData } from "../../firebase/firebase.utils";
const Signin = () =>{
    const [lemail, setLEmail] = useState('');
    const [lpass, setLPass] = useState('');
    const [remail, setREmail] = useState('');
    const [rname, setRName] = useState('');
    const [rpass, setrPass] = useState('');
    const [cpass, setcPass] = useState('');
    const SignUp = async (e) =>{
        e.preventDefault()
        if(rpass !== cpass){
            alert('Password and confirm Password must be Same')
            return 0;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(remail, rpass)
            await userDocData(user, {displayName : rname});
            setREmail('')
            setRName('')
            setrPass('')
            setcPass('')
        } catch (err) {
            if(err.code === "auth/email-already-in-use"){
                alert('email already in use')
            }
            if(err.code === "auth/weak-password"){
                alert('Password should be at least 6 characters')
            }
        }
    }
    const SignIn = async (e) =>{
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(lemail, lpass);
            setLEmail('')
            setLPass('')
        } catch (error) {
            alert('Invalid Credentials')
        }
    }
    return(
        <div className="sign-in">
            <div className="formbox">
                <form className="form" autoComplete="off" onSubmit={SignIn}>
                    <label className="title">Sign In</label>
                    <label>Email</label>
                    <input name="email" type="email" required value={lemail} placeholder="Email" onChange={(e) => setLEmail(e.target.value)} />
                    <label>Password</label>
                    <input name="password" autoComplete="off" type="password" value={lpass} required placeholder="Password" onChange={(e) => setLPass(e.target.value)} />
                    <div className="btns">
                    <CustomButton type="submit" >Sign In </CustomButton> <CustomButton onClick={signInWithGoogle} type="button" google >Sign In with Google</CustomButton>
                    </div>    
                </form>
            </div>
            <div className="formbox">
                <form className="form" autoComplete="off" onSubmit={SignUp}>
                    <label className="title">I don't have an Acount </label>
                    <label>Sign up with Email and Password </label>
                    <label>Display Name</label>
                    <input name="name" type="text" value={rname} required placeholder="Name" onChange={(e) => setRName(e.target.value)} />
                    <label>Email</label>
                    <input name="email" type="email" value={remail} required placeholder="Email" onChange={(e) => setREmail(e.target.value)} />
                    <label>Password</label>
                    <input name="password" autoComplete="off" value={rpass} type="password" required placeholder="Password" onChange={(e) => setrPass(e.target.value)} />
                    <label>Confirm Password</label>
                    <input name="password" autoComplete="off" value={cpass} type="password" required placeholder="Confirm Password" onChange={(e) => setcPass(e.target.value)} />
                    <div className="btns">
                    <CustomButton type="submit" >Sign Up </CustomButton> <CustomButton onClick={signInWithGoogle} type="button" google>Sign Up with Google</CustomButton>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Signin;