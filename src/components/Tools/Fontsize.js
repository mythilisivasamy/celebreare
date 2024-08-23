import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContent, selectCtrlByIsSelected } from '../../feature/ctrlSlice';

const Fontsize = () => {
  const fontSize = [14, 16, 18, 24, 28, 32, 48, 56, 64];
  const dispatch = useDispatch();
  const ctrl = useSelector(selectCtrlByIsSelected);

  const handleSize = (e) => {
    ctrl &&
      dispatch(
        updateContent({
          ...ctrl,
          style: { ...ctrl.style, fontSize: `${e.target.value}px` },
        })
      );
  };
  return (
    <div>
      <span className="text-white fw-bold me-2">Font Size</span>
      <select
        onChange={(e) => {
          handleSize(e);
        }}
      >
        {fontSize.map((size, idx) => (
          <option key={idx} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Fontsize;
