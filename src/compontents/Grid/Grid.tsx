import React from 'react';

export type GridSource = {
  name: string;
  mailReceivedDate: string;
  solutionSentDate?: string;
  isBackgroundColorRed?: boolean;
};

export const Grid = ({ id, source }: { id: string; source: GridSource[] }) => {
  return (
    <table id={id}>
      <tbody>
        {source.map((item, index) => (
          <tr
            key={index}
            style={{ backgroundColor: item.isBackgroundColorRed ? 'red' : '' }}
          >
            <td>{item.name}</td>
            <td>{item.mailReceivedDate}</td>
            <td>{item.solutionSentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
