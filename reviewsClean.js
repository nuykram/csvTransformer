// const fs = require('fs');
// const csv = require('csv-parser');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const inputFilePath = './input/reviews.csv';
// const outputFilePath = '../output/cleaned_reviews.csv';

// const writer = createCsvWriter({
//   path: outputFilePath,
//   header: [{
//     id: 'id',
//     title: 'id'
//   },
//   {
//     id: 'product_id',
//     title: 'product_id'
//   },
//   {
//     id: 'rating',
//     title: 'rating'
//   },
//   {
//     id: 'date',
//     title: 'date'
//   },
//   {
//     id: 'summary',
//     title: 'summary'
//   },
//   {
//     id: 'body',
//     title: 'body'
//   },
//   {
//     id: 'recommend',
//     title: 'recommend'
//   },
//   {
//     id: 'reported',
//     title: 'reported'
//   },
//   {
//     id: 'reviewer_name',
//     title: 'reviewer_name'
//   },
//   {
//     id: 'reviewer_email',
//     title: 'reviewer_email'
//   },
//   {
//     id: 'response',
//     title: 'response'
//   },
//   {
//     id: 'helpfulness',
//     title: 'helpfulness'
//   }
// ],
// });

// const rows = [];

// fs.createReadStream(inputFilePath)
//   .pipe(csv())
//   .on('data', (row) => {
//     // PUT YOUR CHANGES HERE
//     row.date = new Date(parseInt(row['date'])).toISOString()
//     rows.push(row);
//   })
//   .on('end', () => {

//     writer
//       .writeRecords(rows)
//       .then(() => console.log('The CSV file was written successfully'));
//   });

// =============== //

  // const fs = require('fs');
  // const readline = require('readline');

  // const replaceDateValuesInLargeCsvFile = filePath => {
  //   const reader = readline.createInterface({
  //     input: fs.createReadStream(filePath)
  //   });

  //   let header;
  //   let dateColumnIndex;

  //   reader.on('line', line => {
  //     const records = line.split(',');

  //     // Get the column index of the date
  //     if (!header) {
  //       header = records;
  //       dateColumnIndex = header.findIndex(column => column === 'date');
  //     } else {
  //       // Replace the date value
  //       const currentDateValue = records[dateColumnIndex];
  //       const newDateValue = new Date(parseInt(currentDateValue)).toISOString();

  //       records[dateColumnIndex] = newDateValue;

  //       // Join the records back together and write to file
  //       const updatedLine = records.join(',');
  //       fs.appendFile('reviews.csv', updatedLine, err => {
  //         if (err) console.log(err);
  //       });
  //     }
  //   });
  // };

  // replaceDateValuesInLargeCsvFile('./input/reviews.csv')

  // ================== //

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

*/