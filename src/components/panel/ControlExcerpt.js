import React from 'react';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import {
  setPosition,
  updateContent,
  updateIsSelect,
} from '../../feature/ctrlSlice';

const ControlExcerpt = ({ ctrl }) => {
  const dispatch = useDispatch();
  console.log('ctrl loading', ctrl);

  //text change event handler
  const handleChange = (e) => {
    dispatch(updateContent({ ...ctrl, content: e.target.textContent }));
  };

  // ctrl select event handler
  const handleSelect = () => {
    dispatch(updateIsSelect({ ...ctrl, isSelected: true }));
  };
  //mouse stop event handler
  const handleStop = (e, data) => {
    dispatch(
      setPosition({
        ...ctrl,
        style: {
          ...ctrl.style,
          x: data.x,
          y: data.y,
        },
      })
    );
  };
  return (
    <Draggable
      onStop={handleStop}
      bounds="parent"
      defaultPosition={{
        x: ctrl.style.x ? ctrl.style.x : 0,
        y: ctrl.style.y ? ctrl.style.y : 0,
      }}
    >
      <div
        className="position-absolute"
        style={{
          fontFamily: `${ctrl.style.fontName}`,
          fontSize: `${ctrl.style.fontSize}`,
          color: `${ctrl.style.color}`,
          cursor: 'grabbing',
        }}
        onBlur={(e) => handleChange(e)}
        onSelect={handleSelect}
        contentEditable
      >
        {ctrl.content}
      </div>
    </Draggable>
  );
};

export default ControlExcerpt;
