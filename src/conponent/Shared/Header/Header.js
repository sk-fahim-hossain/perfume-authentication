import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebaseConfig.init';
import { Button } from 'react-bootstrap';
import { useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white" href="#">Beauty Bazar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link text-white" to="/">Home</Link>
                            <Link className="nav-link text-white" to="/home#feature">Feature</Link>
                            <Link className="nav-link text-white" to="/login">Login</Link>
                            <Link className="nav-link text-white" to="/cart">Cart</Link>
                            {user ? <Button className="nav-link text-white" onClick={async()=>await signOut()}>Log out</Button>:''}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;