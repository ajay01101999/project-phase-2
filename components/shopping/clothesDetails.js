import React from 'react';
import './showProduct.css';

const ShowClothes =(props)=>{
    console.log('clothes',props.product)
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
                            <li><b>COLOR</b>  {ele.color.toUpperCase()}</li>
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>HIGHLIGHTS</p>
                                <li><b>GENDER</b>  {ele.gender}</li>
                                <li><b>CATEGORY</b>  {ele.category}</li>
                                <li><b>SIZE</b>  {ele.size}</li>
                            </li>
                            <li style={{marginTop:'20px'}}><p style={{fontFamily:'arial black'}}>SPECIFICATION</p></li>
                            <ul style={{listStyle:'none'}}>
                                <li><b>FABRIC</b>  {ele.specifications.fabric}</li>
                                <li><b>LENGTH</b>  {ele.specifications.length}</li>
                                <li><b>PATTERN</b>  {ele.specifications.pattern}</li>
                                <li><b>OCCASION</b>  {ele.specifications.occasion}</li>
                            </ul>
                            <li style={{fontFamily:'arial black',marginTop:'20px'}}>DESCRIPTION</li>
                            <p>{ele.description}</p>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}

export default ShowClothes;