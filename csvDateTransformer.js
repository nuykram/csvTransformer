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
      } else {
        // Replace the date value
        const currentDateValue = records[dateColumnIndex];
        const newDateValue = new Date(parseInt(currentDateValue)).toISOString();

        records[dateColumnIndex] = newDateValue;

        // Join the records back together and write to file
        const updatedLine = records.join(',');
        fs.appendFile('reviews2.csv', `${updatedLine}\n`, err => {
          if (err) console.log(err);
        });
      }
    });
  };

  replaceDateValuesInLargeCsvFile('./input/reviews.csv')
/*
  // ====== USAGE ====== //
-1. Designate CSV file to read. We chose './input/reviews.csv')
0. Designate column to edit. We chose 'date'
1. Select a given cell. See 'currentDateValue'
2. Transform it. We changed the date to ISO.
3. Run fs.appendFile with the name and location of the new CSV file. We chose reviews2.csv and root directory.
4. To begin, run 'node csvDateTransformer.js' in your terminal from the root directory of this application
*/