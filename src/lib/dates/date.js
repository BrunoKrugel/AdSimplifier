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

function GetToday() {
  return dayjs().format('YYYY-MM-DD');
}

function GetLastWeek() {
  return dayjs().subtract(7, 'days').format('YYYY-MM-DD');
}

function GetLastMonth() {
  return dayjs().subtract(1, 'month').format('YYYY-MM-DD');
}

export { ArrayOfDates };
