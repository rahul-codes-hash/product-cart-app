export default async function GetProductData() {
    console.log('logging from GetProductData()')
    try{
        const response = await fetch('https://fakestoreapi.com/products') ;
        if(!response.ok) throw new Error('Network response was not ok') ;
        const data = await response.json() ;
        console.log('logging from GetProductData()' , data) ;
        return data
    } catch(error){
        console.error('Error fetching product data:', error);
        throw error; // re-throw to be caught in the component
    }
};

