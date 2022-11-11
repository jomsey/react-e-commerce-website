import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import ProductsList from "./pages/ProductsList";
import { ShopContext} from "./shop-context/ShopState"
import {useState,useEffect} from"react"


function App() {
  const [cartNumber,setCartNumber] =  useState(0)
  const [cartProducts,setCartProducts] = useState([])
  const [showOrderProducts,setShowOrderProducts] = useState(false)
  const [user,setUser]=useState({username:"Jomsey",authenticated:true})

   
  useEffect(() => {
    setCartNumber(cartProducts.length)
  },[cartProducts.length]);
  
  return (
    <div className="App">
              <ShopContext.Provider value={{cartNumber,setCartNumber,user,setUser,cartProducts,setCartProducts,showOrderProducts,setShowOrderProducts}}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productName" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </ShopContext.Provider>
    
    </div>
  );
}

export default App;
