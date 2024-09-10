export const extractDateTimeInfo = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  const dateFormatter = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const persianDate = dateFormatter.format(date);
  const persianTime = timeFormatter.format(date);

  return {
    year,
    month,
    monthName: monthNames[date.getMonth()], 
    day,
    hours,
    minutes,
    formattedDate,
    formattedTime,
    persianDate,
    persianTime,
  };
};


export const convertTimeToPersianFormat = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  const persianHours = hours > 0 ? `${hours} ساعت` : '';
  const persianMinutes = minutes > 0 ? `${minutes} دقیقه` : '';

  let persianTime = '';
  if (persianHours && persianMinutes) {
    persianTime = `${persianHours} و ${persianMinutes}`;
  } else {
    persianTime = persianHours || persianMinutes;
  }

  return persianTime;
}

export const getCabinClass = (cabinClassCode) => {
  switch (cabinClassCode) {
    case 'Y':
      return 'اکونومی';
    case 'J':
      return 'بیزینس';
    default:
      return '';
  }
}