import React from 'react';
import ContactPerson from './ContactPerson';

const ContactLists = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <ContactPerson key={person.id} {...person} />;
      })}
    </section>
  );
};

export default ContactLists;
