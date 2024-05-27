import React from 'react';
import ContactPerson from './ContactPerson';

const ContactLists = ({ people }) => {
  return (
    <section className='flex justify-center lg:h-[580px] lg:w-[930px] gap-12 flex-wrap'>
      {people.map((person) => {
        return <ContactPerson key={person.id} {...person} />;
      })}
    </section>
  );
};

export default ContactLists;
