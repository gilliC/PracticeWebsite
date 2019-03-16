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
export function getWithOpacity(color, opacity) {
  if (typeof opacity !== 'number') return null;
  if (opacity > 1) return null;

  switch (color) {
    case 'primaryColor':
      return 'rgba(255,192,203,' + opacity + ')';
    case 'secondaryColor':
      return 'rgba(140,188,185,' + opacity + ')';
    case 'tertiaryColor':
      return 'rgba(164,212,180,' + opacity + ')';

    default:
      color = color.split(')');
      return 'rgba' + color[0] + ',' + opacity + ')';
  }
}
