import React from 'react';
import { Tooltip, Button } from '@nextui-org/react';
const ContactPerson = ({ image, name, skill, github, email }) => {
  return (
    <article className='person flex flex-col mb-10 justify-center items-center'>
      <img src={image} alt={name} className='max-w-52' />
      <div className='flex flex-col items-center justify-center md:justify-between mt-4 w-64'>
        <h4 className='text-3xl font-teachers text-white'>{name}</h4>
        <p className=' lg:text-lg text-sm font-bold text-gray-700 font-quicksand'>
          {skill}
        </p>
        {/* <button className='btn mt-4'>
          <a
            href={github}
            className='uppercase text-lg font-quicksand font-bold text-white'
          >
            Github Repo
          </a>
        </button> */}
        <Tooltip content='Check out my Github Repo'>
          <Button className='hover:bg-purple-500 hover:text-white text-purple-500  bg-white rounded text-xs py-2 px-8 mb-8 mt-8'>
            <a
              href={github}
              className='uppercase text-lg  text-purple-500 hover:text-white  font-quicksand font-bold '
            >
              Github Repo
            </a>
          </Button>
        </Tooltip>
        <Tooltip content='Send me an Email'>
          <Button className='hover:bg-purple-500  bg-white hover:text-white text-purple-500 rounded text-xs py-2 px-8'>
            <a
              href={email}
              className=' uppercase text-lg font-quicksand font-bold text-purple-500 hover:text-white'
            >
              send an email
            </a>
          </Button>
        </Tooltip>
        {/* <button className='btn mt-4'>
          <a
            href={email}
            className=' uppercase text-lg font-quicksand font-bold text-white'
          >
            send an email
          </a>
        </button> */}
      </div>
    </article>
  );
};
export default ContactPerson;
