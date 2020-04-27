import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends React.Component{
        state = {
            alert: '',
            name: '',
            email: '',
            password: '',
            redirect: false
        }

    submitHandler= (e)=>{
        e.preventDefault();
        const obj = {};
        obj.name = this.refs.name.value;
        obj.email = this.refs.email.value;
        obj.password = this.refs.pwd.value;
        obj.date = this.refs.date.value;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post('http://localhost:1100/api/v1/register', JSON.stringify(obj),config).then(res=>{
            console.log(res);
            if(res.data.message === 'invalid field inputs'){
                const alertMessage = res.data.message;
                this.setState({alert: alertMessage});
                if(res.data.error[0] && res.data.error[0].param === 'email'){
                    const mailAlert = res.data.error[0].msg;
                    this.setState({email: mailAlert});
                }
                if(res.data.error[1] && res.data.error[1].param === 'password'){
                    const pwdAlert = res.data.error[1].msg;
                    this.setState({password: pwdAlert});
                }
            } 
            else if(res.data.message === 'user already existed'){
                const message = res.data.message;
                this.setState({alert: message});
            }else{
                this.setState({redirect: true});
            }
        }).catch(err=>{
            console.log(err);
        })
        
    }
    render(){
        return(
            <div className='register'>
                {this.state.alert?<p className='text-center bg-danger'>{this.state.alert}</p>:null}
                <form className='container' onSubmit={e=>this.submitHandler(e)}>
                    <div className="form-group">
                        <label>NAME</label>
                        <input type="text" ref='name' className="form-control" placeholder="ENTER YOUR NAME"/>
                    </div>
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input type="email" ref='email' className="form-control" placeholder="ENTER YOUR EMAIL"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        {this.state.email?<p className='text-left text-danger'>{this.state.email}</p>:null}
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" ref='pwd' className="form-control" placeholder='ENTER YOUR PASSWORD'/>
                        {this.state.password?<p className='text-left text-danger'>{this.state.password}</p>:null}
                    </div>
                    <div className="form-group">
                        <label>DATE</label>
                        <input type="date" ref='date' className="form-control" placeholder='ENTER DATE'/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {this.state.redirect?<Redirect to='/mainpage'/>:null}
                </form>
            </div>
        );
    }
}

export default Register;