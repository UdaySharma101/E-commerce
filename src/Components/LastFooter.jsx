import { Link } from 'react-router-dom'


const LastFooter = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center  '>
      <div className='h-[90%] w-[90%] bg-gray-200 rounded-2xl flex flex-col gap-5 items-center justify-center py-3'>
        <h1 className='text-4xl font-bold'> BROWSE BY DRESS STYLE</h1>



        <div className=''>
          <div className='flex gap-4'>

            <Link to='/menshirt'>
              <div className='h-[35vh] w-[30vw] bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer hover:scale-105 animation ease-in-out hover:shadow-2xl'>

                <h1 className='text-3xl font-bold px-7 py-5'>Men <br />Shirts</h1>
                <div className='h-full w-full overflow-hidden '>
                  <img className='h-full px-4 object-cover scale-125' src="https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdWFsJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                </div>
              </div>
            </Link>

            <Link to='/womwnshirt'>
              <div className='w-[45vw] h-[35vh] bg-white rounded-2xl flex justify-between items-center overflow-hidden  cursor-pointer hover:scale-105 animation ease-in-out         hover:shadow-2xl'>
                <h1 className='text-3xl font-bold px-7 py-5'>Women <br />Shirts</h1>

                <div className='h-full w-full overflow-hidden  '>
                  <img className='h-full px-4 object-cover scale-125' src="https://plus.unsplash.com/premium_photo-1690350731538-57344931ac02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                </div>
              </div>
            </Link>

          </div>




        </div>





        <div >
          <div className='flex gap-4'>

            <Link to='/menshoes'>
            <div className='h-[35vh] w-[45vw] bg-white rounded-2xl flex gap-4 justify-between items-center overflow-hidden  cursor-pointer hover:scale-105 animation ease-in-out hover:shadow-2xl'>
              <h1 className='text-3xl font-bold px-7 py-5'>Men <br />Shoes</h1>
              <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="" />

              </div>
            </div>
          </Link>

          <Link to='/womenshoes'>
            <div className='w-[30vw] h-[35vh] bg-white rounded-2xl flex justify-between items-center overflow-hidden  cursor-pointer hover:scale-105 animation ease-in-out hover:shadow-2xl'>
              <h1 className='text-3xl font-bold px-7 py-5'>Women <br />Shoes</h1>

              <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://images.unsplash.com/photo-1559334417-01b38aec66bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D" alt="" />

              </div>
            </div>
          </Link>

        </div>




      </div>


    </div>

    </div >
  )
}

export default LastFooter
