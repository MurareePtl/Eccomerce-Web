import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./pages/Cart/Cart";
import Allproducts from "./Allproducts/Allproducts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { setUserId } from "firebase/analytics";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireBase/Firebase";
import ProdDetail from "./pages/ProdDetail/ProdDetail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";



function App() {
  const[cart,setcart]=useState([])
  const[promocoad,setpromocoad]=useState(" ")
  const[discount,setdiscount]=useState(0)
  const[valid,setinvalid]=useState("")
  //show username
  const[username,setusername]=useState("")

  //add quantity
  //add to cart
  const GetCart=(product)=>{
    const isproduct = cart.find((finditem)=>finditem.id===product.id);
    if(isproduct){
const update = cart.map((item)=>item.id===product.id?{...item,quantity:item.quantity+1}:item)
setcart(update)

    }else{
      setcart([...cart,{...product,quantity:1}])
      toast.success("Product Added To Cart")
    }
    
    console.log(cart)
  }
  
  // decrease quantity
  const handledec=(id)=>{
    const add = cart.map((item)=>item.id===id && item.quantity>1?{...item,quantity:item.quantity-1}:item)
        setcart(add);
      }
    
      //increase quantity
      const handleadd=(id)=>{
        const dec = cart.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:item)
        setcart(dec);
          
      }

      //remove item
      const removecart=(id)=>{
const remove = cart.filter((filteritem)=> filteritem.id!=id)
setcart(remove)
      }


      //total price
      const getTotalprice=()=>{
        const totalprice = cart.reduce((total,item)=>{
          return total+item.price*item.quantity;
        },0)
        return totalprice-discount;
      }


      //promocoad
const Aplypromocoad=()=>{
if(promocoad==="DISCOUNT"){
  setdiscount(getTotalprice()*.01)
  setpromocoad("")
}
else{
alert("Invalid Promocoad")
  
}
}

//username show
useEffect(()=>{
auth.onAuthStateChanged((user)=>{
    if(user){
  setusername(user.displayName);
    }else{
      setusername("")
    }
  })
},[])

  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar  cart={cart} username={username}/>
       <Routes>
        <Route path="/" element={ <Home  GetCart={GetCart}/>} />
        <Route   path="/Cart" element={ <Cart  cart={cart}  
        handleadd={handleadd}  
        handledec={handledec} 
        removecart={removecart} 
        getTotalprice={getTotalprice} 
        Aplypromocoad={Aplypromocoad}
        promocoad={promocoad}
        setpromocoad={setpromocoad}
        setinvalid={setinvalid}
        valid={valid}
        />} />
        <Route   path="/Allproducts" element={ <Allproducts  GetCart={GetCart}/>} />
        <Route   path="/Login" element={ <Login/>} />
        <Route   path="/Signup" element={ <Signup/>} />
        <Route   path="/About" element={ <About/>} />
        <Route   path="/Contact" element={ <Contact/>} />
        <Route   path="/ProdDetail/:ProductId" element={ <ProdDetail  GetCart={GetCart}/>} />
    
    
  
     </Routes>
     <Toaster/>
    <Footer/>
     </BrowserRouter>
     {/* <Allproducts/> */}
    </div>
    </>
  );
}

export default App;
