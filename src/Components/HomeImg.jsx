import React from 'react'

const HomeImg = () => {
    return (

        <div className='flex h-full w-ful '>

            <div className=' h-full  overflow-hidden px-10'>
                <img
                    className='w-full h-full object-cover'
                    src="https://images.unsplash.com/photo-1654005018306-7066fc118281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsJTIwbWVufGVufDB8fDB8fHww"
                    alt=""
                />

            </div>

            <div className=' h-full object-cover px-10'>

                <img className='w-full h-full object-cover '
                    src="https://plus.unsplash.com/premium_photo-1715876268857-5bd56d738573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsJTIwbWVufGVufDB8fDB8fHww"
                    alt="" />

            </div>
        </div>

    )
}

export default HomeImg
