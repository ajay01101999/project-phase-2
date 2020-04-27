import React from 'react';
import './products.css';

const Groceries =(props)=>{
    return(
        <div className='products'>
            <h2 style={{color:'white',marginLeft: '30px',marginTop:'30px'}}>FRESH ARRIVALS</h2>
            {
                props.groceries.map((ele, i)=>{
                    return(
                        <div className={'product'} key={i} onClick={()=>props.product(ele, true)}>
                            <img src={ele.imgUrl} key={i} alt='no img'/>
                            <span>{ele.type}</span>
                            <span className={'price'}>{ele.price}</span>
                            <p>{ele.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Groceries;