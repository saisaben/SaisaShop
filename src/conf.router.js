import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';



  //View
import NotFound from './NotFound';
import Home from './View/Home';
import Products from './View/Products';
import EinkaufWagen from './View/EinkaufWagen';
import App from './App';
import ProductsInfo from './View/ProductsInfo';
import CartIcon from './Componet/CartIcon';








const routes = [
    {
        path: '/',
        component: App, 
        exact: true, 
        
    },{
        path: '/Home',
        component: Home, 
        exact: true,
           
    },{
        path: '/Products',
        component: Products, 
        exact: true  
    },{
        path: '/Products/:id',
        component:ProductsInfo, 
        exact: false, 
        
    },{
        path: '/EinkaufWagen',
        component: EinkaufWagen, 
        exact: true   
    },{
        path: '*',
        component: NotFound,    
    }
];

const RoutingConfig = (index) => {
    return <Router >
           <div className='container'>
  
  <nav className="navbar navbar-expand navbar-light bg-light">
<Link className="navbar-brand" to="/">SaisaShop</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<div className="navbar-nav">
<Link className="nav-link active" to="/Home" >Home </Link>
<Link className="nav-link" to="/Products">Products</Link>
<Link className="nav-link" to="/EinkaufWagen">EinkaufsWagen</Link>


</div>
</div>
<CartIcon/>
</nav>

        
            <Switch>
            { routes.map((route,index) => 
            <Route {...route} 
             key={index}  />
                 ) 
             }
            
             </Switch>
        
        
             </div>      
        </Router>


    
}
export default RoutingConfig;