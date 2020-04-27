import React from 'react';
import './products.css';

const Cloths =(props)=>{
    return(
        <div className='cloths'>
            <h2 style={{color:'white',marginLeft: '30px',marginTop:'30px'}}>LATEST CLOTHES</h2>
            {
                props.cloths.map((ele, i)=>{
                    return(
                        <div className={'product'} key={i} onClick={()=>props.product(ele, true)}>
                            <img src={ele.imgUrl} key={i} alt='no img'/>
                            <span>{ele.brand}</span>
                            <span className={'price'}>{ele.price}</span>
                            <p>{ele.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cloths;