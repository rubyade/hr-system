import React from 'react';

function Button(props) {
  const label = props.label;
  return (
    <div>
      <button className='bg-white hover:bg-purple-500 hover:text-white text-purple-500 outline-purple-500 rounded text-xs py-1 px-8'>
        {label}
      </button>
    </div>
  );
}

export default Button;
