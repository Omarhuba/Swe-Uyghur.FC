import React from 'react'
import ShowcaseItem from './ShowcaseItem'

const ShowCase = () => {
  return (
    // <div className=" bg-zinc-700 flex justify-center items-center min-w-full h-screen gap-10 ">
    //   <ShowcaseItem />
    //   <ShowcaseItem />
    //   <ShowcaseItem />
    // </div>
    <div className='bg-zinc-700 flex justify-center items-center min-w-full h-screen'>
    <div className='flex flex-col items-center'>
      <div className='cards__wrapper'>
        <ul className='flex gap-20'>
          <ShowcaseItem
            src='images/img-2.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Pictures'
            path='/album'
          />

          <ShowcaseItem
            src='images/img-8.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='About'
            path='/about'
          />
          <ShowcaseItem
            src='images/img-8.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='About'
            path='/about'
          />
        </ul>

      </div>
    </div>
  </div>
  )
}

export default ShowCase