import React from 'react';
import './ListItem.css';

const ListItem = ({ char, binary }) => {
  return (
    <div className='listItem'>
      "{char}" : {binary}
    </div>
  );
}

export default ListItem;
