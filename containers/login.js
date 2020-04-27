import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './login.css';

const Login = () =>{
    return(
        <div className='login'>
            <form className='container'>
                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email" className="form-control" placeholder="ENTER YOUR EMAIL"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="password" className="form-control" placeholder='ENTER YOUR PASSWORD'/>
                </div>
                <div className="form-group">
                    <label>DATE</label>
                    <input type="date" className="form-control" placeholder='ENTER DATE'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;