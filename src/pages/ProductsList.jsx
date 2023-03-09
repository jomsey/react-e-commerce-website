import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import Pagination from "../components/Pagination";
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";
import ProductsContainer from "../components/ProductsContainer";
import ComponentIsLoading from "../components/ComponentIsLoading";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";


function ProductsList() {
  const [productsLoading,setProductsLoading]=useState(true)

  const {products,productsCount,
        setProducts,productsResultsName,
        priceRange,searchQuery,categoryName}= useContext(ShopContext);
  const [currentPage,setCurrentPage] = useState(1)
  



  const handlePageChange=async(page)=>{
        setProducts([]) //Simulate products loading page

        const responseObject = productsResultsName === "bySearch"?productsService.getPageSearchResults(page,searchQuery):
                              productsResultsName === "byPrice"?productsService.getPageProductsFilteredByPrice(priceRange.max, priceRange.min,page):
                              productsResultsName === "category" && categoryName !== "All products"?productsService.getCategoryPageProducts(categoryName,page):
                              productsService.getPageProducts(page);

        const response = await  responseObject
        const{results}=response.data
        setProducts(results)
        setCurrentPage(page)
  }
 

  return (
    <>
      <TopBar showToggler={true} />
      <div className="group products">
        
        <Filters />

        {productsLoading
              ?<ComponentIsLoading/>
              :products.length>0
              ?<ProductsContainer products={products}/>
              :<h1>No products to show</h1>

        }
      </div>


      {
        !productsLoading && 
        <div className="product-pagination">
        <Pagination 
                currentPage={currentPage}
                pageSize={30} 
                itemsCount={productsCount}
                onPageChange={handlePageChange}/>
         </div>
      }
      <RecentlyViewedProducts/>
    </>
  );
}

export default ProductsList;
