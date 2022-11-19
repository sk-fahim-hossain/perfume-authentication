import React, { useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebaseConfig.init';
import { ToastContainer } from 'react-toastify';


const Registration = () => {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        const toast = <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        navigate('/')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
           
            <div className="w-50 mx-auto bg-secondary p-4 my-2" >
                <form onSubmit={handleSubmit}>
                    <h3 className="text-white">Please Registration</h3>
                    <div className="mb-3 mt-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <Link to="/login" className="text-white mx-2">Already have an account ?</Link> */}
                </form>
            </div>
        </div>
    );
};

export default Registration;