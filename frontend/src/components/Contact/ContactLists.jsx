import React from 'react';
import ContactPerson from './ContactPerson';

const ContactLists = ({ people }) => {
  return (
    <section className='flex flex-row justify-between'>
      {people.map((person) => {
        return <ContactPerson key={person.id} {...person} />;
      })}
    </section>
  );
};

export default ContactLists;
