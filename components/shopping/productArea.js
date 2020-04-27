import React from 'react';
import './productArea.css';
import img1 from '../../assets/pic1.png';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import Phones from '../shopping/products';
import Cloths from '../shopping/cloths';
import Groceries from '../shopping/grocery';

const ProductArea = (props) =>{
    console.log(props.product)
    return(
        <div className='productArea'> 
            <div id="carouselExampleIndicators" className="carousel slide size" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner size">
                    <div className="carousel-item active">
                        <img src={img1} onClick={()=>props.handler('phones', false)} style={{height:'420px',width:'1180px',margin:'30px'}} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} onClick={()=>props.handler('clothes', false)} className="d-block" alt="..." style={{height:'420px',margin:'30px',width:'1180px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} onClick={()=>props.handler('grocery', false)} className="d-block" alt="..." style={{height:'420px',margin:'30px',width:'1180px'}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Phones phones={props.phones} product={props.product}/>
            <Cloths cloths={props.cloths} product={props.product}/>
            <Groceries groceries={props.groceries} product={props.product}/>
        </div>
    );
}

export default ProductArea;