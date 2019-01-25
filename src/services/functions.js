import moment from 'moment';

export function formatDate(date, format = 'DD/MM/YYYY') {
  let mdate = parseToMoment(date);
  return moment(mdate).format(format);
}

export function parseToMoment(date, format = 'DD/MM/YYYY', lan = 'en') {
  let momentDate = moment(date, format, lan);
  if (momentDate.isValid()) return momentDate;
  let error = {
    error: 'Date is not valid. Check if there is a problem in the format',
  };
  throw error;
}

export function parseDate(date, format = 'DD/MM/YYYY', lan = 'en') {
  const momentDate = moment(date, format, lan, true);
  if (momentDate.isValid()) {
    return momentDate.toDate();
  }
  let error = {
    error: 'Date is not valid. Check if there is a problem in the format',
  };
  throw error;
}
