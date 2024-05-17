const Person = ({ image, name, skill }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{skill}</p>
      </div>
    </article>
  );
};
export default Person;
