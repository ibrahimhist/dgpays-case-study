import { GridSource } from '../Grid/Grid';

const getTableData = (tableId: string) => {
  const tableSource: GridSource[] = [];

  //gets table
  const oTable = document.getElementById(tableId) as HTMLTableElement;

  if (!oTable) {
    return;
  }

  //gets rows of table
  const rowLength = oTable.rows.length;

  //loops through rows
  for (let i = 0; i < rowLength; i++) {
    //gets row of table
    const row = oTable.rows.item(i);

    //gets cells of current row
    const oCells = row?.cells;

    const isBackgroundColorRed = row?.style.backgroundColor === 'red';
    tableSource.push({
      name: oCells?.item(0)?.innerHTML || '',
      mailReceivedDate: oCells?.item(1)?.innerHTML || '',
      solutionSentDate: oCells?.item(2)?.innerHTML || '',
      isBackgroundColorRed,
    });
  }

  return tableSource;
};

const getDateDifferenceInDays = (date1: Date, date2: Date) => {
  const diffTime = Math.abs(date2.valueOf() - date1.valueOf());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export function control(today: Date, limit: number, tableId: string) {
  const source = getTableData(tableId);

  let wronglyPaintedCount = 0;

  source?.forEach((item) => {
    const dayDiff = getDateDifferenceInDays(
      new Date(item.mailReceivedDate),
      !item.solutionSentDate ? today : new Date(item.solutionSentDate)
    );

    const shouldBeRed = dayDiff > limit;

    if (shouldBeRed && !item.isBackgroundColorRed) {
      wronglyPaintedCount++;
    } else if (!shouldBeRed && item.isBackgroundColorRed) {
      wronglyPaintedCount++;
    }
  });

  return wronglyPaintedCount;
}
