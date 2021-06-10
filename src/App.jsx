import { useState } from "react";

import ShoeGreen from './assets/img/shoe-green.png'
import ShoeGrey from './assets/img/shoe-grey.png'
import ShoeRed from './assets/img/shoe-red.png'

import { ReactComponent as VariantRed } from './assets/svg/variant-red.svg'
import { ReactComponent as VariantBlue } from './assets/svg/variant-blue.svg'
import { ReactComponent as VariantTeal } from './assets/svg/variant-teal.svg'
import { ReactComponent as Magnify } from './assets/svg/magnify.svg'

const App = () => {

  const [product, setProduct] = useState({
    title: 'Red Flyknit Trainers',
    price: 190.00,
    currency: '$',
    selectedColor: 'Red',
    selectedSize: 'Small',
    colors: [
      {
        name: 'Red',
        Icon: VariantRed
      },
      {
        name: 'Green',
        Icon: VariantTeal
      },
      {
        name: 'Grey',
        Icon: VariantBlue
      }
    ],
    sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
    images: [
      {
        id: 1,
        ref: null,
        src: ShoeRed,
        color: 'Red'
      },
      {
        id: 2,
        ref: null,
        src: ShoeGreen,
        color: 'Green'
      },
      {
        id: 3,
        ref: null,
        src: ShoeGrey,
        color: 'Grey'
      }
    ]
  })

  const handleClickColor = color => {
    setProduct({ ...product, selectedColor: color })

    let variant = document.querySelector(`.variants .variant[color="${color}"]`)
    if (variant) variant.scrollIntoView({
      behavior: 'smooth'
    })
  }


  return (
    <div className='container mx-auto py-10'>
      <div className=' grid grid-cols-12 gap-10'>
        <div className='col-span-8'>
          <div className='variants flex flex-col space-y-5'>
            {product.images.map(image => (
              <div key={image.id} color={image.color} className='variant relative group'>
                <img
                  src={image.src}
                  alt={product.title + '-preview-image-' + image.id}
                  className='w-full object-cover object-top'
                />
                <div className='absolute inset-0'>
                  <button className='h-10 w-10 rounded-full bg-white shadow-md flex justify-center items-center absolute top-5 right-5 transform transition-all duration-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'>
                    <Magnify />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-4 p-4'>
          <div className='sticky top-10 text-1d'>
            <h2 className='font-bold text-2xl leading-8'>{product.title}</h2>
            <div className='text-sm leading-6 mt-1'>{product.currency}{product.price}</div>
            <div className='mt-10 text-sm font-bold leading-7'>
              Sizes
            </div>
            <div className='flex space-x-2 mt-2'>
              {product.sizes.map((size, sizeIndex) => (
                <button
                  key={sizeIndex}
                  className={`text-sm leading-6 px-4 py-2 hover:bg-1d hover:text-white transition-colors duration-200 rounded-full ${product.selectedSize === size ? 'bg-1d text-white' : 'bg-f1 text-black'}`}
                  onClick={() => setProduct({ ...product, selectedSize: size })}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr className='mt-5 border-de ' />
            <div className='flex space-x-2 mt-5'>
              {product.colors.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  className={`flex justify-center items-center w-8 h-8 border transition-colors duration-200 rounded-full ${product.selectedColor === color.name ? 'border-1d' : 'border-de'}`}
                  onClick={() => handleClickColor(color.name)}
                >
                  <color.Icon />
                </button>
              ))}
            </div>
            <button className='w-full mt-5 text-sm leading-6 p-3 text-center border border-de hover:bg-1d hover:text-white transition-colors duration-200 rounded-full'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
