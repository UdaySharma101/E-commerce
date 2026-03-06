import { IndianRupee } from 'lucide-react'
import { Link } from 'react-router-dom'

const NewArivals = ({ products }) => {
    return (

        <div className='flex  items-center py-20 cursor-pointer '>
            {products.map((data) => {
                return <Link to={`/detailspage/${data.id}`} key={data.id}>
            <div className='h-65 w-60  flex flex-col items-center '>
                {/* {console.log("NewArrival ID:", data.id)} */}
                <img className='rounded-2xl h-20 hover:scale-111 animation ease-in-out' src={data.image} alt="" />
                <h2 className='text-gray-400'>{data.name}</h2>
                <h1 className='text-xl font-bold flex items-center justify-center'><IndianRupee size={15} />{data.priceCents}</h1>
            </div>

             </Link>


        // <div className='w-full h-40  flex justify-center items-center '>

        // </div>
       })}
       </div >
    
  )
}

export default NewArivals
