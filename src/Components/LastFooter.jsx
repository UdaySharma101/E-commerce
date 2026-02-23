import React from 'react'

const LastFooter = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center  '>
      <div className='h-[90%] w-[90%] bg-gray-200 rounded-2xl flex flex-col gap-5 items-center justify-center py-3'>
        <h1 className='text-4xl font-bold'> BROWSE BY DRESS STYLE</h1>



        <div className=''>
          <div className='flex gap-4'>

            <div className='h-[35vh] w-[30vw] bg-white rounded-2xl flex justify-between items-center overflow-hidden cursor-pointer'>

              <h1 className='text-3xl font-bold px-7 py-5'>Casual</h1>
               <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdWFsJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                
               </div>
            </div>

            <div className='w-[50vw] h-[35vh] bg-white rounded-2xl flex justify-between items-center overflow-hidden  cursor-pointer'>
              <h1  className='text-3xl font-bold px-7 py-5'>Formal</h1>

                <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://plus.unsplash.com/premium_photo-1722859210044-5ca8a393b001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsfGVufDB8fDB8fHww" alt="" />
                
               </div>
            </div>

          </div>




        </div>





        <div className=''>
          <div className='flex gap-4'>

            <div className='h-[35vh] w-[50vw] bg-white rounded-2xl flex gap-4 justify-between items-center overflow-hidden  cursor-pointer'>
              <h1  className='text-3xl font-bold px-7 py-5'>Party</h1>
                <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://plus.unsplash.com/premium_photo-1675253321321-442968b33d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcnR5JTIwb3V0Zml0fGVufDB8fDB8fHww" alt="" />
                
               </div>
            </div>

            <div className='w-[30vw] h-[35vh] bg-white rounded-2xl flex justify-between items-center overflow-hidden  cursor-pointer'>
            <h1  className='text-3xl font-bold px-7 py-5'>Gym</h1>

              <div className='h-full w-full overflow-hidden '>
                <img className='h-full px-4 object-cover scale-125' src="https://images.unsplash.com/photo-1744551358229-ef84be2f6b6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGd5bSUyMG91dGZpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                
               </div>
            </div>

          </div>




        </div>


      </div>

    </div>
  )
}

export default LastFooter
