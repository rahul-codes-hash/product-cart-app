import React from 'react'

const ProductCard = (key , product) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  
  <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
    <img src="https://via.placeholder.com/150" alt="Product" className="h-full object-contain" />
  </div>

  
  <div className="p-4 flex flex-col justify-between h-40">
    <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
      {product.title}
    </h2>

    <div className="flex items-center justify-between mt-auto">
      <span className="text-xl font-bold text-green-600">${product.price}</span>

      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  )
}

export default ProductCard