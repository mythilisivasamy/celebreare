import React from 'react';
import FontName from './Tools/FontName';
import Color from './Tools/Color';
import Fontsize from './Tools/Fontsize';
import Text from './Tools/Text';
import Undo from './Tools/Undo';
import Redo from './Tools/Redo';
import Trash from './Tools/Trash';

const Tools = () => {
  return (
    <div className="d-flex justify-content-evenly p-2">
      <div className='d-flex gap-5 mt-2'>
        <FontName />
        <Color />
        <Fontsize />
        <Text />
        <Trash/>
      </div>
      <div className='d-flex justify-content-center gap-2 me-3 mt-2'>
        <Undo />
        <Redo />
      </div>
    </div>
  );
};

export default Tools;
