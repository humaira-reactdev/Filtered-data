import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cars from './carData'

function App() {
  const [data, setData] = useState(cars)
  
  const handleButton=(vehiclecategory)=>{
    const filterData=cars.filter((categoryItem)=>{
      return categoryItem.category==vehiclecategory
    })
    setData(filterData)
  }

  useEffect(()=>{
    let card = document.querySelectorAll('.card');

    card.forEach((item) => {
      item.classList.remove('animation');
      void item.offsetWidth;
      item.classList.add('animation');
    });

  },[data])

  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img src="/images/logo.png" alt="Logo" className="h-8 inline-block mr-2" />
        </div>
        <div className="space-x-4">
          <button onClick={()=>setData(cars)} className="text-white hover:text-black bg-blue-300 px-5 py-2 rounded-lg">All</button>
          <button onClick={()=>handleButton('Sedan')} className="text-white hover:text-black bg-blue-300 px-5 py-2 rounded-lg">Sedan</button>
          <button onClick={()=>handleButton('Convertible')} className="text-white hover:text-black bg-blue-300 px-5 py-2 rounded-lg">Convertible</button>
          <button onClick={()=>handleButton('Coupe')} className="text-white hover:text-black bg-blue-300 px-5 py-2 rounded-lg">Coupe</button>
          <button onClick={()=>handleButton('SUV')} className="text-white hover:text-black bg-blue-300 px-5 py-2 rounded-lg">SUV</button>
        </div>
      </div>
    </nav>

    <div className='cards flex flex-wrap gap-5 justify-center'>
      {
        data.map((item)=>(
          <div key={item.product_id} className='card bg-[#939185] mt-8 rounded-lg'>
           
            <div className='cardImage rounded-md w-[300px]'>
            {
              item.discount_price && <div className='w-[50px] h-[30px] text-md font-bold text-black bg-[#FFF078] flex justify-center items-center'>Sale</div>
            }
              
              <img src={item.car_image_link} alt="" className='rounded-md pt-3' />      
            </div>
            <div className='cardText flex flex-col items-center mt-5'>
              <h2 className='font-bold text-white text-[23px]'>{item.car_name}</h2>
              <p className='font-normal text-[lg] text-[#FFF078]'>{item.discount_price? item.discount_price: item.car_price} <span className='ml-5 line-through text-black'>{item.discount_price&& item.car_price}</span></p>
            </div>
          </div>
        ))
      }     

      </div>
      
     
    </>
  )
}

export default App
