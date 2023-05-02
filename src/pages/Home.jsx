import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import ProductCategories from "../components/ProductCategoryContainer";
import "./Home.css";
import Billboard from "./../components/Billboard";
import {posters} from "../utils/posters";
import TopBar from './../components/TopBar';
import {useContext} from "react";
import {ShopContext} from "../shop-context/ShopState";
import CollectionsPlaceholder from "../components/CollectionsPlaceholder";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import OffCanvas from "../components/OffCanvas";
import CategoryList from "../components/CategoryList";
  

function Home() {
  const {collections} = useContext(ShopContext);
  
  return (
    <>
      <OffCanvas>
            <CategoryList/>
      </OffCanvas>
      <TopBar showToggler={false} useMobileSideNav={true} />
      
      <div className="landing">
          <ProductCategories />
          <div className="hero">
            <div className="hero-text">
            <h1>Buy Goods ,<br/><span>We Deliver To Your Doorstep</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut cum deserunt consectetur laborum magnam tempora possimus perferendis nostrum nam!</p>
            </div>
  
             <Carousel/>
          </div>
          
      </div>

      <Billboard items={posters} />
     
      {collections.length>0
                         ?collections.map(({title,products,id})=> 
                                          <Collection title={title}
                                                      productsList={products}
                                                      key={id}/>)
                        :
                        <div>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                           <CollectionsPlaceholder/>
                      </div>
       }

       <RecentlyViewedProducts/>
      
    </> 
  );
}

export default Home;
