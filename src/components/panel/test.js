import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateIsSelect,
  updateContent,
  setPosition,
} from '../../feature/ctrlSlice';
//import Draggable from 'react-draggable';

const ControlExcerpt = forwardRef(({ ctrl, ref }) => {
  const dispatch = useDispatch();

  const handleChange = (e, ctrl) => {
    dispatch(updateContent({ ...ctrl, content: e.target.textContent }));
    dispatch(updateIsSelect({ ...ctrl, isSelected: true }));
  };

  const handleSelect = (ctrl) => {
    dispatch(updateIsSelect({ ...ctrl, isSelected: true }));
  };
  const handleMouseDown = (e, ctrl) => {
    //const ctrlRef = ctrlRefs.current[ctrl.id].current;
   
    const offsetX = e.clientX - ctrl.style.left;
    const offsetY = e.clientY - ctrl.style.top;
    console.log('mdown');

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      dispatch(
        setPosition({
          ...ctrl,
          style: { ...ctrl.style, left: `${newX}px`, top: `${newY}px` },
        })
      );

      console.log('mdownmove');
    };

    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      // const finalRect = ref.getBoundingClientRect();

      dispatch(
        setPosition({
          ...ctrl,
          style: { ...ctrl.style, left: e.clientX, top: e.clientY },
        })
      );
      //const newPosition = { x: finalRect.left, y: finalRect.top };
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  /*  const handleStop = (e, data) => {
    console.log(data, 'dtaa');
    dispatch(
      setPosition({
        ...ctrl,
        style: {
          ...ctrl.style,
          left: data.x,
          top: data.y,
        },
      })
    );
  }; */
  return (
    //<Draggable onStop={(e, data) => handleStop(e, data)}>
    <p
      className="position-absolute"
      style={{
        left: `${ctrl.style.left}px`,
        top: `${ctrl.style.top}px`,
        fontFamily: `${ctrl.style.fontName}`,
        fontSize: `${ctrl.style.fontSize}`,
        color: `${ctrl.style.color}`,
        cursor: 'move',
      }}
      draggable
      contentEditable
      onBlur={(e) => handleChange(e, ctrl)}
      onSelect={() => handleSelect(ctrl)}
      onMouseDown={(e) => {
        handleMouseDown(e, ctrl);
      }}
    >
      {ctrl.content}
    </p>
    //</Draggable>
  );
});

export default ControlExcerpt;
