import React from 'react';
import ProductArea from '../components/shopping/productArea';
import Header from '../components/shopping/header';
import MenuBar from '../components/shopping/menuBar';
import axios from 'axios';
import AllProducts from '../components/shopping/allProducts';
import ShowProduct from '../components/shopping/phoneDetails';
import ShowClothes from '../components/shopping/clothesDetails';
import TvDetails from '../components/shopping/tvDetails';
import GroceryDetails from '../components/shopping/groceryDetails';
import EarphoneDetails from '../components/shopping/earphoneDetails';

class Shopping extends React.Component{
    state = {
        phones: [],
        cloths:[],
        groceries:[],
        earphones:[],
        tv:[],
        show: true,
        name:null,
        show2: false,
        product:[]
    }

    componentDidMount(){
        axios.get(`http://localhost:1100/api/v1/latest`).then(res=>{
            this.setState({phones: res.data});
        })
        axios.get('http://localhost:1100/api/v1/cloths').then(res=>{
            this.setState({cloths: res.data});
        })
        axios.get('http://localhost:1100/api/v1/grocery').then(res=>{
            this.setState({groceries: res.data});
        })
        // if(this.state.show===true){
        //     const phones = axios.get(`http://localhost:1100/api/v1/latest`);
        // phones.then(res=>{
        //     this.setState({phones: res.data});
        //     console.log(this.state.phones);
        // }).catch(err=>{
        //     console.log(err);
        // })
        // const cloths = axios.get('http://localhost:1100/api/v1/cloths');
        // cloths.then(res=>{
        //     this.setState({cloths: res.data});
        //     console.log(this.state.cloths);
        // }).catch(err=>{
        //     console.log(err);
        // })
        // }
    }

    showHandler=(name, show)=>{
        this.setState({name: name, show: false, show2:false});
        if(show===false){
            if(name === 'phones'){
                axios.get(`http://localhost:1100/api/v1/latest?name=${name}`).then(
                res=>{
                   this.setState({phones: res.data});
                });
            }else if(name === 'clothes'){
                axios.get(`http://localhost:1100/api/v1/cloths?name=${name}`).then(
                res=>{
                   this.setState({cloths: res.data});
                });
            }else if(name === 'grocery'){
                axios.get(`http://localhost:1100/api/v1/grocery?name=${name}`).then(
                res=>{
                   this.setState({groceries: res.data});
                });
            }else if(name === 'earphones'){
                axios.get(`http://localhost:1100/api/v1/earphone?name=${name}`).then(
                res=>{
                   this.setState({earphones: res.data});
                });
            }else{
                axios.get(`http://localhost:1100/api/v1/tv?name=${name}`).then(
                    res=>{
                       this.setState({tv: res.data});
                });
            }
            console.log(this.state.earphones)
        }else if(show===true){
            this.setState({name: name, show: true});
            axios.get(`http://localhost:1100/api/v1/latest`).then(res=>{
                this.setState({phones: res.data});
            })
            axios.get('http://localhost:1100/api/v1/cloths').then(res=>{
                this.setState({cloths: res.data});
            })
            axios.get('http://localhost:1100/api/v1/grocery').then(res=>{
                this.setState({groceries: res.data});
            })
        }
    }
    // componentDidUpdate(){
    //     if(this.state.show===false){
    //         const phones = axios.get(`http://localhost:1100/api/v1/latest?name=${this.state.name}`);
    //     phones.then(res=>{
    //         this.setState({phones: res.data});
    //         console.log(this.state.phones);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    //     }
    // }

    productDescription = (product, show) => {
        if(show===true){
            this.setState({show2: true});
            if(product.id<=9){
                console.log(product);
                const arr = [];
                arr.push(product)
                this.setState({product: arr, name: 'phones'});
            }
            else if(product.id>=13 && product.id<=32){
                const arr1 = []
                arr1.push(product)
                this.setState({product: arr1, name: 'clothes'});
            }
            else if(product.id>=40 && product.id<=50){
                const arr2 = [];
                arr2.push(product)
                this.setState({product: arr2, name: 'grocery'});
            }   
            else if(product.id>=51 && product.id<=60){
                const arr3 = [];
                arr3.push(product)
                this.setState({product: arr3, name: 'earphones'});
            }
            else if(product.id>=61 && product.id<=70){
                const arr4 = [];
                arr4.push(product)
                this.setState({product: arr4, name: 'tv'});
            }
        }
    }

    render(){
        return(
            <div className='shop'>
                <MenuBar bg={this.state.show} show={this.showHandler}/>
                <Header show={this.state.show} name={this.state.name} handler={this.showHandler}/>
                {this.state.show===true && this.state.show2===false?
                    <ProductArea product={this.productDescription} handler={this.showHandler} phones={this.state.phones} cloths={this.state.cloths} groceries={this.state.groceries}/>:
                    this.state.name==='phones'?<AllProducts  product={this.productDescription} phones={this.state.phones}/>:
                    this.state.name==='clothes'?<AllProducts product={this.productDescription} phones={this.state.cloths}/>:
                    this.state.name==='earphones'?<AllProducts product={this.productDescription} phones={this.state.earphones}/>:
                    this.state.name==='tv'?<AllProducts product={this.productDescription} phones={this.state.tv}/>:
                    this.state.name==='grocery'?<AllProducts product={this.productDescription} phones={this.state.groceries}/>:null
                }
                {
                    this.state.show2 && this.state.name==='phones'?<ShowProduct product={this.state.product}/>:
                    this.state.show2 && this.state.name==='clothes'?<ShowClothes product={this.state.product}/>:
                    this.state.show2 && this.state.name==='tv'?<TvDetails product={this.state.product}/>:
                    this.state.show2 && this.state.name==='grocery'?<GroceryDetails product={this.state.product}/>:
                    this.state.show2 && this.state.name==='earphones'?<EarphoneDetails product={this.state.product}/>:null
                }
            </div>
        );
    }
}

export default Shopping;