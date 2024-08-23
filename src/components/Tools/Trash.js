import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContent, selectCtrlByIsSelected } from '../../feature/ctrlSlice';

const Trash = () => {
  const dispatch = useDispatch();
  const ctrl = useSelector(selectCtrlByIsSelected);
  const handleDelete = () => {
    ctrl && dispatch(deleteContent({ ...ctrl }));
  };
  return (
    <div className="d-flex cursor" title="Remove">
      <i
        className="bi bi-trash text-white fs-5 fw-bold"
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default Trash;
