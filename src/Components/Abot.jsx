import React from 'react'

const Abot = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Heading Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Welcome to our online store — built with passion for clean design and seamless shopping experiences.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This project demonstrates a modern e-commerce platform where users can browse products,
            view detailed descriptions, add items to cart, and manage their shopping effortlessly.
          </p>
        </div>

        {/* Why This Project */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Why This Project?
          </h2>

          <p className="text-gray-600">
            As a frontend developer, I wanted to build a real-world application that combines:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
            <li>Dynamic routing</li>
            <li>API integration</li>
            <li>Cart management</li>
            <li>State management</li>
            <li>Context API</li>
          </ul>
        </div>

        {/* Features */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Features
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
            <li>Product listing with categories</li>
            <li>Dynamic product detail pages</li>
            <li>Add to cart / Remove from cart</li>
            <li>Real-time total price calculation</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>

        {/* Built With */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Built With
          </h2>

          <ul className="flex flex-wrap gap-4 text-gray-700">
            <li className="bg-gray-100 px-4 py-2 rounded-lg">HTML</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg">Tailwind CSS</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg">JavaScript</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg">React</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
            Vision
          </h2>

          <p className="text-gray-600">
            This project is continuously evolving. Future updates may include:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
            <li>User authentication</li>
            <li>Payment integration</li>
            <li>Wishlist feature</li>
          </ul>
        </div>

        {/* Quote */}
        <div className="text-center mt-6">
          <p className="italic text-gray-700 text-lg max-w-3xl mx-auto">
            “This project helped me strengthen my understanding of dynamic routing,
            API handling, and state management in React.”
          </p>
        </div>

      </div>
    </div>
  )
}

export default Abot