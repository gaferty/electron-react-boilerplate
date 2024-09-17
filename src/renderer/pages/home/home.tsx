import React from 'react';
import buttonPress from '../../actions/Button';

export default function Home() {
  const handleClick = async () => {
    buttonPress();
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {' '}
        Press ME
      </button>
    </div>
  );
}
