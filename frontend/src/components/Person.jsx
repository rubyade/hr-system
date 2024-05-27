const Person = ({ image, name, skill }) => {
  return (
    <article className=' person flex flex-col justify-center mb-10'>
      <img src={image} alt={name} className='max-w-56' />
      <div className='flex flex-col items-center justify-center md:justify-between mt-4 w-64'>
        <h4 className='text-3xl font-teachers text-white'>{name}</h4>
        <p className='text-lg font-bold text-gray-700 font-quicksand'>
          {skill}
        </p>
      </div>
    </article>
  );
};
export default Person;
