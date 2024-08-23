import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateContent,selectCtrlByIsSelected } from '../../feature/ctrlSlice';

const FontName = () => {
  const dispatch=useDispatch();
  const fontName = [
    'sans-serif',
    'arial',
    'Courier New',
    'Courier',
    'monospace',
    'Verdana',
    'Geneva',
    'Tahoma',
  ];
  const ctrl = useSelector(selectCtrlByIsSelected);
  const handleFont = (e) => {
    ctrl &&
    dispatch(
      updateContent({
        ...ctrl,
        style: { ...ctrl.style, fontName: `${e.target.value}` },
      })
    );
  };
  return (
    <div>
      <span className="text-white fw-bold me-2">Font Name</span>
      <select
        onChange={(e) => {
          handleFont(e);
        }}
      >
        {fontName.map((name,idx) => (
          <option key={idx} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default FontName;
