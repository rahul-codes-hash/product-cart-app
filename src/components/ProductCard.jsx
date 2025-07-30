import React from 'react'

const ProductCard = () => {
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  
  <div class="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
    <img src="https://via.placeholder.com/150" alt="Product" class="h-full object-contain" />
  </div>

  
  <div class="p-4 flex flex-col justify-between h-40">
    <h2 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
      Product Title Goes Here
    </h2>

    <div class="flex items-center justify-between mt-auto">
      <span class="text-xl font-bold text-green-600">$19.99</span>

      <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  )
}

export default ProductCard