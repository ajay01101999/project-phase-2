import React,{Fragment} from 'react';
import Navbar from '../components/navbar';
import HomePage from '../components/homePage';

class Handler extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar/>
                <HomePage/>
            </Fragment>
        );
    }
}

export default Handler;