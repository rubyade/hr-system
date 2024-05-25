import React from 'react';
const ContactPerson = ({ image, name, skill, github, email }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='max-w-52' />
      <div className='flex flex-col items-start justify-between mt-4 w-64'>
        <h4 className='text-3xl font-teachers text-white'>{name}</h4>
        <p className='text-lg font-bold text-gray-700 font-quicksand w-48'>
          {skill}
        </p>
        <button className='btn mt-4'>
          <a
            href={github}
            className='uppercase text-lg font-quicksand font-bold text-white'
          >
            Github Repo
          </a>
        </button>
        <button className='btn mt-4'>
          <a
            href={email}
            className=' uppercase text-lg font-quicksand font-bold text-white'
          >
            send an email
          </a>
        </button>
      </div>
    </article>
  );
};
export default ContactPerson;
