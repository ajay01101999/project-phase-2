import React,{useState} from 'react';
import './header.css';

const Header = (props)=>{
    const [value, setValue] = useState(' ');
    function sendValue(){
        props.handler(value, false);
    }
    return(
        <div className='header'>
            <h1><i style={{color:'#d51e27'}} className="fas fa-shopping-cart"></i>  UniversalShop</h1>
            <input type='text' placeholder='ENTER PRODUCT NAME' onChange={(e)=>setValue(e.target.value)} className='search'/>
            <button><i style={{color:'white'}} onClick={sendValue} className="fab fa-searchengin"></i></button>
            {
                props.show?null:
                <select className='dropdown'>
                    <option >SORT PRICE</option>
                    <option>LOW TO HIGH</option>
                    <option>HIGH TO LOW</option>
                </select>
            }
        </div>
    );
}

export default Header;