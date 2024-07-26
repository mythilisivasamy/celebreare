import { createRef, React, useRef } from 'react';
import Ctrl from './Ctrl';

const Controls = ({ ctrls, setCtrls }) => {
  const ctrlRefs = useRef([{}]);
  const selectedRef = useRef(null);
  const idRef = useRef(0);
  const handleMouseDown = (e, id) => {
    const ctrlRef = ctrlRefs.current[id].current;
    const rect = ctrlRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      ctrlRef.style.left = `${newX}px`;
      ctrlRef.style.top = `${newY}px`;
    };

    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      const finalRect = ctrlRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };
      updateCtrlPosition(e, newPosition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const updateCtrlPosition = (id, newPosition) => {
    const updatedCtrls = ctrls.map((ctrl) =>
      ctrl.id === id ? { ...ctrl, position: newPosition } : ctrl
    );
    setCtrls(updatedCtrls);
    localStorage.setItem('ctrls', JSON.stringify(updatedCtrls));
  };
  const handleAddText = () => {
    idRef.current++;
    ctrls.length !== 0
      ? setCtrls([
          ...ctrls,
          {
            id: idRef.current,
            text: `text${idRef.current}`,
            position: determineNewPosition(),
          },
        ])
      : setCtrls([
          {
            id: idRef.current,
            text: `text${idRef.current}`,
            position: determineNewPosition(),
          },
        ]);
  };

  function determineNewPosition() {
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 400;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  }
  function handleSelect(id) {
    ctrls.forEach((ctrl) => {
      ctrlRefs.current[ctrl.id].current.className = '';
    });
    ctrls.map((ctrl) => {
      if (ctrl.id === id || ctrlRefs.current[id].current.focus) {
        selectedRef.current = ctrlRefs.current[id].current;
        ctrlRefs.current[id].current.className = 'selected';
      }
      return null;
    });
  }
  const handleChangeColor = (e) => {
    selectedRef.current.style.color = e.target.value;
  };
  const handleFont = (e) => {
    console.log(e.target.value);
    selectedRef.current.style.fontFamily = `'${e.target.value}'`;
  };
  return (
    <>
      <div>
        {ctrls.length !== 0 &&
          ctrls.map((ctrl) => (
            <Ctrl
              key={ctrl.id}
              content={ctrl.text}
              initialPos={ctrl.position}
              ref={
                ctrlRefs.current[ctrl.id]
                  ? ctrlRefs.current[ctrl.id]
                  : (ctrlRefs.current[ctrl.id] = createRef())
              }
              onMouseDown={(e) => {
                handleMouseDown(e, ctrl.id);
              }}
              onClick={() => handleSelect(ctrl.id)}
            />
          ))}
      </div>
      <div className="toolbar">
        <p>
          <span style={{ padding: '0 5px', color: '#000' }}>Font</span>
          <select
            onChange={(e) => {
              handleFont(e);
            }}
          >
            <option value="sans-serif">sans-serif</option>
            <option value="arial">arial</option>
          </select>
        </p>
        <p>
          <span style={{ padding: '0 5px', color: '#000' }}>Color</span>

          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#ff80e0"
            onChange={(e) => handleChangeColor(e)}
          />
        </p>
        <p>
          <button className="btn-sm" onClick={handleAddText}>
            Add Text
          </button>
        </p>
      </div>
    </>
  );
};

export default Controls;
