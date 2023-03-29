import React from 'react'
import { ShowCase } from '../components/showcase/ShowCase';
import Image from 'next/image';
import programs from "../assets/showcase/program.json";



const Photos = () => {
  return (
    <div>
       <ShowCase autoSlide={true} >
            {[...programs.map((images) => (
              <Image
                key={images.id}
                className=" h-[450px]  rounded-3xl"
                src={require(`../assets/showcase/${images.img_name}.png`)}
                alt="image"

                />
            ))]}
          </ShowCase>
          <div className='bg-yellow-700 min-h-screen'>
            <h1 className='text-4xl text-center py-12'>Våran photo ska vara här med som image galeri </h1>
            <div></div>
          </div>
    </div>
  )
}

export default Photos