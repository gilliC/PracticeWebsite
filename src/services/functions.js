import moment from 'moment';

export function formatDate(date) {
  let mdate = parseToMoment(date);
  return moment(mdate).format('DD/MM/YYYY');
}

export function parseToMoment(date) {
  return moment(date, 'DD/MM/YYYY');
}

export function parseDate(str) {
  const m = moment(str, 'DD/MM/YYYY', 'en', true);
  if (m.isValid()) {
    return m.toDate();
  }
  return undefined;
}
