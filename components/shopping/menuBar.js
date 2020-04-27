import React from 'react';
import './menuBar.css';

const Menu = (props) =>{
    return(
        <div className='menu'>
            <h2>CATEGORIES</h2>
            <ul className='list1'>
                <li onClick={()=>props.show('home', true)} className='home1' style={{backgroundColor:props.bg?'black':null}}>HOME</li>
                <li className='li'>ELECTRONICS</li>
                <ul className='hover'>
                    <li onClick={()=>props.show('phones', false)}>PHONES</li>
                    <li onClick={()=>props.show('earphones', false)}>EARPHONES</li>
                    <li onClick={()=>props.show('tv', false)}>TV</li>
                </ul>
                <li className='li'>CLOTHING</li>
                <ul className='hover'>
                    <li onClick={()=>props.show('clothes', false)}>MEN</li>
                    <li onClick={()=>props.show('clothes', false)}>WOMEN</li>
                </ul>
                <li className='li'>GROCERY</li>
                <ul className='hover'>
                    <li onClick={()=>props.show('grocery', false)}>GROCERIES</li>
                </ul>
            </ul>
        </div>
    );
}

export default Menu;