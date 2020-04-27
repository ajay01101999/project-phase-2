import React from 'react';
import './products.css';

const Products =(props)=>{
    return(
        <div className='products'>
            <h2 style={{color:'white',marginLeft: '30px',marginTop:'30px'}}>LATEST PHONES</h2>
            {
                props.phones.map((ele, i)=>{
                    return(
                        <div className={'product'} key={i}  onClick={()=>props.product(ele, true)}>
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

export default Products;