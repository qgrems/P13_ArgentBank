import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, recupUser } from "../../API/api";
import { addToken, addFirstName, addLastName, userLogin} from '../../redux';

export function Login() {
    const {token}= useSelector((state) => state)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let url = "/profile";
    const navigate = useNavigate() 
    function changePage(e) {
        e.preventDefault()
        loginUser(email, password)
            .then(data => {
                dispatch(addToken(data.token))
                recupUser(data.token)
                    .then(data2 => dispatch(addFirstName(data2.firstName)) && dispatch(addLastName(data2.lastName)))
                    if(data.token ==='' || data.token===undefined)
                    {
                        dispatch(userLogin(false))
                    }
                    else{
                            dispatch(userLogin(true))
                            navigate(url)   
                    }       
            })             
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={changePage}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}