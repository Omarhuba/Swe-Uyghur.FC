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
          <div>
            <h1 className='text-2xl text-center py-4'>Our image</h1>
            <div></div>
          </div>
    </div>
  )
}

export default Photos