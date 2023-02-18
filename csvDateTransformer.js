const fs = require('fs');
const readline = require('readline');

const replaceDateValuesInLargeCsvFile = filePath => {
  const reader = readline.createInterface({
    input: fs.createReadStream(filePath)
  });

  let header;
  let dateColumnIndex;

  reader.on('line', line => {
    const records = line.split(',');

    // Get the column index of the date
    if (!header) {
      header = records;
      dateColumnIndex = header.findIndex(column => column === 'date');
      // Join the header back together and write to file
      const headerLine = header.join(',');
      fs.appendFile('./output/cleaned_reviews.csv', `${headerLine}\n`, err => {
        if (err) console.log(err);
      });
    } else {
      // Replace the date value
      const currentDateValue = records[dateColumnIndex];
      const newDateValue = new Date(parseInt(currentDateValue)).toISOString();

      records[dateColumnIndex] = newDateValue;

      // Join the records back together and write to file
      const updatedLine = records.join(',');
      fs.appendFile('./output/cleaned_reviews.csv', `${updatedLine}\n`, err => {
        if (err) console.log(err);
      });
    }
  });
};

replaceDateValuesInLargeCsvFile('./input/reviews.csv')
