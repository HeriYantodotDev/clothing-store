import { useState } from 'react';

export const Toogle = () => {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
  );
};