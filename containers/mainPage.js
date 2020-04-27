import React from 'react';
import './mainpage.css';
import '../assets/fontawesome-free-5.6.3-web/css/all.css';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Events from '../components/events';
import axios from 'axios';

class MainPage extends React.Component{
   state = {
      show: false,
      input:{}
   }
   moveRight = () =>{
      const show = false;
      this.setState({show: !show});
   }
   moveLeft = () =>{
      const show = true;
      this.setState({show: !show});
   }
   addTask = (e)=>{
      e.preventDefault();
      const obj = {};
      obj.id = this.refs.id.value;
      obj.name = this.refs.name.value;
      obj.email = this.refs.email.value;
      obj.date = this.refs.date.value;
      obj.time = this.refs.time.value*6000;
      console.log(obj);
      // arr.push(this.refs.id.value,this.refs.name.value,this.refs.email.value,this.refs.date.value,this.refs.time.value);
      // this.setState({input: arr});
      axios.post('http://localhost:1100/api/v1/event', obj).then(res=>console.log(res)).catch(err=>console.log(err));
      axios.get('http://localhost:1100/api/v1/event').then(res=>this.setState({input: res.data})).catch(err=>console.log(err));
   }
    render(){
        return(
            <div className='mainpage'>
               <div className={this.state.show?'hide':'show'}>
                     <div className='shopping'>
                        <Link to='/shopping'><i className='fas fa-shopping-cart'></i></Link>
                     </div>
                  <div className='streaming'>
                     <i className="fas fa-tv"></i>
                  </div>
                  <div className='chat'>
                     <i className="far fa-comment-dots"></i>
                  </div>
                  <div className='sports'>
                     <i className="fas fa-running"></i>
                  </div>
                  <div className='stats'>
                     <i className="far fa-address-book"></i>
                  </div>
                  <div className='tasks'>
                     <i className="fas fa-tasks"></i>
                  </div>
               </div>
               <div className={this.state.show?'show':'hide1'}>
                  <div className='more'>
                     <p>EVENT REMAINDER</p>
                        <div className="addevents">
                           <h1>TODAYS REMAINDER</h1>
                           <label className='text1'>ID</label>
                           <input type="tel" className='form-control search1' ref='id' placeholder='ENTER ID'/>
                           <br/>
                           <label className='text2'>EVENT NAME</label>
                           <input type="text" className="form-control search2" ref='name' placeholder="ENTER EVENT NAME"/>
                           <br/>
                           <label className='text3'>Email</label>
                           <input type="email" className="form-control search3" ref='email' placeholder="ENTER YOUR VALID EMAIL"/>
                           <br/>
                           <label className='text4'>DATE*</label>
                           <input type="date" className="form-control search4" ref='date'/>
                           <br/>
                           <label className='text5'>REMINDING TIME</label>
                           <input type="tel" className="form-control search5" ref='time' placeholder='ENTER TIME IN MINUTES'/>
                           <button className='btn btn-primary' onClick={e=>this.addTask(e)} style={{position:'absolute',top:'430px',left:'170px'}}>ADD TASK</button>
                        </div>
                        <div className='events'>
                           <h1>ALL EVENTS</h1>
                           <div className='allevents'>
                              <Events values={this.state.input}/>
                              <button className='btn btn-danger' style={{position:'absolute',top:'410px',left:'145px'}}>LOAD ALL</button>
                           </div>
                        </div>
                  </div>
               </div>
                 <button onClick={this.moveLeft} style={{display: this.state.show?'block':'none'}} className='left'><i className="fas fa-angle-double-left"></i></button>
                 <button onClick={this.moveRight} style={{display: this.state.show?'none':'block'}} className='right'><i className="fas fa-angle-double-right"></i></button>
            </div>
        );
    }
}

export default MainPage;