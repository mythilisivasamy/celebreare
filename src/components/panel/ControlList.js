import React from 'react';
import ControlExcerpt from './ControlExcerpt';
import { useSelector } from 'react-redux';
import { selectAllCtrls } from '../../feature/ctrlSlice';

const ControlList = () => {
  const ctrls = useSelector(selectAllCtrls);

  return (
    <>
      {ctrls.map((ctrl) => (
        <ControlExcerpt key={ctrl.id} ctrl={ctrl} />
      ))}
    </>
  );
};

export default ControlList;
