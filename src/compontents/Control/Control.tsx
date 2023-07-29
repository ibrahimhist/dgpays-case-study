import React, { useState } from 'react';

import { control } from './utils';

export const Control = ({ tableId }: { tableId: string }) => {
  const [today, setToday] = useState('');
  const [limit, setLimit] = useState('');

  const handleControlClick = () => {
    if (!today) {
      alert('Please fill today.');
      return;
    }

    if (isNaN(parseInt(limit))) {
      alert('Please fill limit.');
      return;
    }

    const result = control(new Date(today), +limit, tableId);

    alert(`Wrongly Painted Count: ${result}`);
  };

  return (
    <div
      style={{
        marginTop: '16px',
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        gap: '8px',
      }}
    >
      <label>
        <b>Today:</b>
      </label>
      <input
        type='date'
        value={today}
        onChange={(e) => setToday(e.target.value)}
      />

      <label>
        <b>Limit:</b>
      </label>
      <input
        type='number'
        value={limit}
        onChange={(e) =>
          setLimit(parseInt(e.target.value) < 0 ? '0' : e.target.value)
        }
      />

      <span></span>
      <button onClick={handleControlClick}>Control</button>
    </div>
  );
};
