import dayjs from 'dayjs';

function ArrayOfDates(startDate, endDate) {
  let dateArray = [];
  let currentDate = dayjs(startDate);
  let stopDate = dayjs(endDate);
  while (currentDate <= stopDate) {
    dateArray.push(dayjs(currentDate).format('YYYY-MM-DD'));
    currentDate = dayjs(currentDate).add(1, 'days');
  }
  return dateArray;
}

export { ArrayOfDates };
