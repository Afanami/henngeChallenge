import jsonData from './jsonData';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let MailArchiver = {
  retrieveEmails(dateRange) {
    let filteredJson = jsonData;
    let dateRangeArray = dateRange && dateRange.split('-');

    if (dateRange === null || dateRangeArray.length !== 2) {
      return alert("Please enter a valid - separated date range i.e. 2019/12/31 - 2020/1/3");
    }

    let dateMin = new Date(dateRangeArray[0]).setHours(0, 0, 0);
    let dateMax = new Date(dateRangeArray[1]).setHours(23, 59, 59);

    filteredJson = filteredJson.filter(email => {
      const emailDate = new Date(email.date);
      const todaysDate = new Date(dateMax);
      const tempEmailDate = new Date(email.date);

      if (tempEmailDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
        email.dateDisplay = `${emailDate.getHours()}:${emailDate.getMinutes() === 0 ? "00" : emailDate.getMinutes()}`;
      } else if (tempEmailDate.getFullYear() == todaysDate.getFullYear()) {
        email.dateDisplay = `${months[emailDate.getMonth()]} ${emailDate.getDay() < 10 ? 0 : ''}${emailDate.getDate()}`;
      } else {
        email.dateDisplay = `${emailDate.getFullYear()}/${emailDate.getMonth() + 1}/${emailDate.getDate() < 10 ? 0 : ''}${emailDate.getDate()}`
      }

      if (emailDate >= dateMin && emailDate <= dateMax) {
        return email;
      }
    });

    if (filteredJson.length === 0) {
      return alert('No valid emails found for that date range');
    }

    return filteredJson;
  }
};

export default MailArchiver;