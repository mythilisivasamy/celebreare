import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCtrl, selectNoOfCtrls } from '../../feature/ctrlSlice';

const Text = () => {
  const noOfCtrls = useSelector(selectNoOfCtrls);
  const idRef = useRef();
  idRef.current = noOfCtrls ? localStorage.getItem('id') : 0;
  const dispatch = useDispatch();

  const handleAddText = () => {
    const ctrl = {
      id: ++idRef.current,
      content: `text ${idRef.current}`,
      isSelected: false,
      style: {
        color: 'navyblue',
        fontName: 'arial',
        fontSize: '16px',
      },
    };
    dispatch(addCtrl(ctrl));
    localStorage.setItem('id', idRef.current);
  };
  return (
    <div>
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default Text;
