import React from 'react';
const ContactPerson = ({ image, name, skill, github, email }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div className='flex flex-col justify-between items-center mt-4'>
        <h4 className='text-lg font-teachers text-white'>{name}</h4>
        <p className='text-sm font-dosis text-white'>{skill}</p>
        <a href={github} className='text-xs font-dosis font-bold text-white'>
          Click to see Github Repo
        </a>
        <a href={email} className='text-xs font-dosis font-bold text-white'>
          Click to send an email
        </a>
      </div>
    </article>
  );
};
export default ContactPerson;
