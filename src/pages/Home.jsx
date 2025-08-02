import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'
import GetProductData from '../utilities/GetProductData.jsx'

const Home = () => {

  console.log('logging from Home.jsx')

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);    // loading state
  const [error, setError] = useState(null);        // error state


  

    useEffect(() => {

      async function fetchData(){
        try{
          setLoading(true) ;
          const data = await GetProductData() ;
          // setProducts(data) ;
          setProducts([{ id: 1, title: 'Test Product', price: 123 }]);

          console.log('logging from Home.jsx: products:' , products) ;
        }catch(err){
          setError('Failed to fetch product data.');
        }finally{
          setLoading(false) ;
        }
      }

      fetchData() ;

    } , [])

    useEffect(() => {
      console.log('products updated:', products);
    }, [products]);

    useEffect(() => {
      setProducts([{ id: 1, title: 'Test Product', price: 123 }]);
    }, []);
    

    if (loading) return <p>Loading products...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;


  return (
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-wrap justify-center gap-6 px-4 py-8 bg-gray-50">
  {products.length === 0 ? (<h2>No Products Found</h2>) :
  products.map( product => (
    <ProductCard key = {product.id} product ={product} />
  ))}
</div>
</div>
  )
}

export default Home


