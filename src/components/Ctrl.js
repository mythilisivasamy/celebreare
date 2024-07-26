import React, { forwardRef } from 'react';

const Ctrl = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        position: 'absolute',
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: '1px solid red',
        backgroundColor: 'white',
        color: 'black',
        padding: '10px',
        cursor:'move'

      }}
      draggable
      contentEditable
    >
      {content}
    </div>
  );
});

export default Ctrl;
