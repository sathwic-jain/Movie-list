import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey, purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';




function App() {
  const [cart,setCart]=useState([]);
  const [cartitems,setcartitems]=useState(0);
  const [state,setstate]=useState(true);
  const styles={display:state?"block":"none"};
  
  
    const products=[{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Fancy product",stars:"0",price:"$40.00-80.00"},{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Special item",stars:"5",price:"$18.00"},
    {image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Sale item",stars:"0",price:"$25.00"},{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Popular item",stars:"5",price:"$40.00"},{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Sale item",stars:"0",price:"$25.00"},
    {image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Fancy Product",stars:"0",price:"$120.00 - $280.00"},{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Special item",stars:"5",price:"$18.00"},{image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name:"Popular item",stars:"5",price:"$40.00"}]
  return(
    <div >
      
      <div className="lists">
      <div className="mainlist">
      <ul >
        <li>
          <Link to="/"><Button>Home</Button></Link>
          </li>
        <li><Button>About</Button></li>
        <li><Button>Shop</Button></li>
        </ul>
        </div>
        <div className="cartlist">
        <ul >
        <li>
          <Link to="/Cart"><Button variant="contained" className="cart" sx={{color:grey[900]}} ><ShoppingCartIcon/>Cart  {cartitems}</Button></Link>
        </li>
      </ul>
    </div>
    </div>
    
    <div className="lists2">
      
      <div className="home">
      <ul >
        <li>
          <Link to="/"><Button>Home</Button></Link>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <div className="menu">
          <ul><li>
          <Button onClick={()=>setstate(!state)}><MenuIcon/></Button>
          </li></ul>
          </div>
    </div> 
    </div>
    <div className="hide">
    <div className="dropdownLists" 
    style={styles}>
    <ul className="drop">
    
        <li><Button >About</Button></li>
        <li><Button>Shop</Button></li>
        <li>
          <Link to="/Cart"><Button className="cart" sx={{color:grey[900]}} variant="outlined"><ShoppingCartIcon/>Cart  {cartitems}</Button></Link>
        </li>
      </ul>
      </div>
    </div>
   
   

      <Switch>
        <Route exact path="/Cart">
          <Cart cart={cart} setCart={setCart} setcartitems={setcartitems}/>
        </Route>
        <Route exact path="/">
        <Homepage products={products} cart={cart} setCart={setCart} setcartitems={setcartitems}/>
        </Route>
      </Switch>
    </div>
  
  )
}

function Homepage({products,cart,setCart,cartcopy,setcartitems}){
  var cartcopy=[...cart];
  return(
    <div>
      <div className="topBody container-fluid mb-5">
       <div className=" mb-5 p-5">
         <div className="p-5">
        <h1 className="heading">Shop in Style</h1>
        <h4 className="subheading">With this webpage template</h4>
        </div>
        </div>
      </div>

    <div className="container-fluid sellbody">
      <div className="mx-lg-5 mx-md-5 px-lg-5 px-3">
      <div className="row ">
      {products.map((elements,index)=>
      <div className="col-lg-3 col-md-4 col-6 gx-3 my-3">
        <div className="mx-lg-4 mx-2 my-3">
        <img className="image" src={elements.image}/>
        <div className="cardbody">
        <h5><b>{elements.name}</b></h5>
        <p>{elements.stars}</p>
        <p>{elements.price}</p>
        </div>
        <div className="buttonclass">
        <button className="cartbutton" onClick={()=>{
              cartcopy.push(elements);
              setCart(cartcopy);
              setcartitems(cartcopy.length);
              console.log(cartcopy);
        }}>Add to cart</button>
        </div>
        </div>
      </div>
      )}
      </div>
    </div>
    </div>

    </div>
  )
}

function Cart({cart,setCart,setcartitems}){
  var cartCopy=[...cart];
 
  return(
    
    <div>
      <div className="topBody container-fluid mb-5">
       <div className=" m-4 p-5">
        <h1 className="heading">Cart</h1>
        
        </div>
      </div>
    <div className="container-fluid sellbody">
      <div className="mx-lg-5 mx-md-5 px-lg-5 px-3">
      <div className="row ">
      {cartCopy.map((elements,index)=>
      <div className="col-lg-3 col-md-4 col-6 gx-3">
        <div className="mx-lg-4 mx-2 my-3">
        <img className="image" src={elements.image}/>
        <div className="cardbody">
        <h5><b>{elements.name}</b></h5>
        <p>{elements.stars}</p>
        <p>{elements.price}</p>
        </div>
        <div className="buttonclass">
        <button className="cartbutton" onClick={()=>{
              cartCopy=cart.filter((card,idx)=>idx!==index)
              setCart(cartCopy);
              setcartitems(cartCopy.length);
        }}><DeleteIcon/></button>
        </div>
        </div>
      </div>
      )}
      </div>
    </div>
    </div>
    </div>
  )
}
export default App;
