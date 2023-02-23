import dayjs from 'dayjs';

function ArrayOfDates(startDate, endDate) {
  const dateArray = [];
  const stopDate = dayjs(endDate);
  let currentDate = dayjs(startDate);

  while (currentDate <= stopDate) {
    dateArray.push(currentDate.format('YYYY-MM-DD'));
    currentDate = currentDate.add(1, 'days');
  }

  return dateArray;
}

export { ArrayOfDates };
