import React from 'react';
import './showProduct.css';

const GroceryDetails =(props)=>{
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
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>HIGHLIGHTS</p></li>
                            <ul style={{listStyle:'none'}}>
                                <li><b>BRAND</b>  {ele.brand.toUpperCase()}</li>
                                <li><b>TYPE</b>  {ele.type.toUpperCase()}</li>
                                {ele.weight?<li><b>WEIGHT</b>  {ele.weight.toUpperCase()}</li>:null}
                                <li><b>CATEGORY</b>  {ele.category.toUpperCase()}</li>
                            </ul>
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>ABOUT</p>{ele.about}</li>
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>BENEFITS</p>{ele.benefits}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}

export default GroceryDetails;