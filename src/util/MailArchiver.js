import jsonData from './jsonData';
import moment from 'moment';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let MailArchiver = {
  retrieveEmails(dateRange) {
    let filteredJson = jsonData;
    let dateRangeArray = dateRange && dateRange.split('-');

    if (dateRange === null || dateRangeArray.length !== 2) {
      return alert("Please enter a valid - separated date range i.e. 2019/12/31 - 2020/1/3");
    }

    let dateMin = moment(new Date(dateRangeArray[0])).startOf('day');
    // This is used as "today's date" to replicate mock UI
    let dateMax = moment(new Date(dateRangeArray[1])).endOf('day');
    let isValidRange;

    filteredJson = filteredJson.filter(email => {
      const emailDate = moment(new Date(email.date));

      // Format based on different conditions
      if (emailDate.format('YYYY/MM/DD') == dateMax.format('YYYY/MM/DD')) {
        email.dateDisplay = emailDate.format('HH:mm');
      } else if (emailDate.years() == dateMax.years()) {
        email.dateDisplay = emailDate.format('MMM DD');
      } else {
        email.dateDisplay = emailDate.format('YYYY/MM/DD');
      }

      // Check if email is within the filtered range and return
      isValidRange = emailDate.isBetween(dateMin, dateMax, null, '[]');

      if (isValidRange) {
        return email;
      }
    });

    // Throw alert when no emails are returned
    if (filteredJson.length === 0) {
      return alert('No valid emails found for that date range');
    }

    return filteredJson;
  }
};

export default MailArchiver;