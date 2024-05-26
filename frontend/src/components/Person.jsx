const Person = ({ image, name, skill }) => {
  return (
    <article className='person flex flex-row justify-between gap-10'>
      <img src={image} alt={name} className='max-w-56' />
      <div>
        <h4 className='text-quicksand font-bold text-5xl'>{name}</h4>
        <p className='text-teachers text-2xl'>{skill}</p>
      </div>
    </article>
  );
};
export default Person;
