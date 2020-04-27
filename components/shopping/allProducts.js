import React from 'react';
import './allProducts.css';

const AllProducts =(props)=>{
    return(
        <div className='all'>
            {props.phones.map((ele, i)=>{
                return(
                    <div className={'allproducts'} key={i} onClick={()=>props.product(ele, true)}>
                        <img src={ele.imgUrl} key={i} alt='no img'/>
                        <span>{ele.brand}</span>
                        <span className={'prices'}>{ele.price}</span>
                        <p>{ele.name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AllProducts