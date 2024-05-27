import React from 'react';
import Person from '../Person';

const Lists = ({ people }) => {
  return (
    <section className='flex justify-center gap-12 flex-wrap'>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default Lists;
