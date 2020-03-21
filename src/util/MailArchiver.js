let jsonData = [
  {
    "id": 1,
    "from": "memes@gmail.com",
    "to": ["memer@gmail.com"],
    "subject": "Fresh Memes",
    "date": "2020/1/2 12:00:00"
  },
  {
    "id": 2,
    "from": "memes@gmail.com",
    "to": ["memer@gmail.com"],
    "subject": "Fresh Memes",
    "date": "2020/1/4 12:00:00"
  },
  {
    "id": 3,
    "from": "memes@gmail.com",
    "to": ["memer@gmail.com"],
    "subject": "Fresh Memes",
    "date": "2020/1/2 12:00:00"
  }
]

let MailArchiver = {
  retrieveEmails(dateRange) {
    let dateRangeArray = dateRange.split('-');

    if (dateRangeArray.length !== 2) {
      return alert("Please enter a valid - separated date range");
    }

    let dateMin = new Date(dateRangeArray[0]);
    let dateMax = new Date(dateRangeArray[1]);

    jsonData = jsonData.filter(email => {
      const emailDate = new Date(email.date);

      if (emailDate >= dateMin && emailDate <= dateMax) {
        return email;
      }
    })

    if (jsonData.length === 0) {
      return alert('No valid emails found for that date range');
    }

    return jsonData;
  }
};

export default MailArchiver;