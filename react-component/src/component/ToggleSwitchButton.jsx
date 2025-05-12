import React, { useState } from 'react';

export const ToggleSwitchButton = () => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return (
    <div
      style={{
        marginTop: '10px',
        backgroundColor: on ? 'green' : 'grey',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
        width: '200px',
        height: '100px',
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: on ? 'green' : 'red',
          color: on ? 'black' : 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={toggle}
      >
        Turn {on ? 'Off' : 'On'}
      </button>
    </div>
  );
};
