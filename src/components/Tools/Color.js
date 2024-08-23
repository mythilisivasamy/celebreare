import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContent, selectCtrlByIsSelected } from '../../feature/ctrlSlice';

const Color = () => {
  const dispatch = useDispatch();
  const ctrl = useSelector(selectCtrlByIsSelected);
  const handleColor = (e) => {
    ctrl &&
    dispatch(
      updateContent({
        ...ctrl,
        style: { ...ctrl.style, color: `${e.target.value}` },
      })
    );
  };
  return (
    <div className="d-flex">
      <span className="fw-bold text-white me-2">Color</span>
      <input
      className='cursor'
        type="color"
        id="favcolor"
        name="favcolor"
        value="#ff0000"
        onChange={(e) => handleColor(e)}
      />
    </div>
  );
};

export default Color;
