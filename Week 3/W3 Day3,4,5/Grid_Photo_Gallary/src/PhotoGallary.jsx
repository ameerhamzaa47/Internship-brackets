import React from 'react'
import images from '../src/assets/images'

function PhotoGallary() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-orange-700 my-5'>Responsive Photo Gallary</h1>
      <div className="wrapper px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4">
      {
      images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))
      }
    </div>
      </div>
    </div>
  )
}

export default PhotoGallary
