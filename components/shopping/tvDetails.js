import React from 'react';
import './showProduct.css';

const TvDetails =(props)=>{
    console.log('phones', props.product);
    return(
        <div className='one'>
            {props.product.map((ele, i)=>{
                return(
                    <div key={i}>
                        <img src={ele.imgUrl} key={i} alt='no img'/>
                        <div style={{position:'absolute',top:'500px',left:'60px'}}>
                            <button className='btn btn-primary' style={{marginRight:'20px',width:'200px',height:'50px'}}>ADD TO CART</button>
                            <button className='btn btn-secondary' style={{width:'200px',height:'50px'}}>BUY NOW</button>
                        </div>
                        <ul className='ul1'>
                            <li style={{fontFamily:'arial black',fontSize:'30px'}}>{ele.name}</li>
                            <li style={{fontSize:'30px',fontFamily:'arial black',color: 'orangered'}}>{ele.price}</li>
                            <li><b>BRAND</b>  {ele.brand.toUpperCase()}</li>
                            <li><b>COLOR</b>  {ele.colour.toUpperCase()}</li>
                            <li><b>SIZE</b>  {ele.size}</li>
                            <li><b>TYPE</b>  {ele.type.toUpperCase()}</li>
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>PRODUCT DESCRIPTION</p>{ele.description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}

export default TvDetails;