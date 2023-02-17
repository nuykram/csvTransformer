### CSV ➡️ JSON ➡️ CSV

This is a Node.js script that will allow you to parse a CSV File with Javascript, modify its contents, and output a new CSV file.

This script will reach each row of your CSV file and gives you the ability to easily transform cell values per a specific column. This script accomplishes this task without additional libraries or packages.

This script was born out of the need to modify specific column cells within a very large CSV file, using a very underpowered machine. Future updates will include common transformation methods outlined below.

## TO-DO:

>Standardize our date transformation method to allow for a wider range of inputs and outputs
>Create toString and toInt methods for easy type conversions
>Create methods to easily transform string case (Lower, Upper)
>Create method to transform binaries and booleans


> Note: This application requires Node v8.16.0 or above.


## Install

Fork, Clone, Navigate into Reviews-CSV directory.

## Usage:

0. Designate CSV file to read. We chose './input/reviews.csv')
1. Designate column to edit. We chose 'date'
2. Select a given cell. See 'currentDateValue'
3. Transform it. We changed the date to ISO.
4. Run fs.appendFile with the name and location of the new CSV file. We chose reviews2.csv and root directory.
5. To begin, run 'node csvDateTransformer.js' in your terminal from the root directory of this application

## Documentation

https://nodejs.org/dist/latest-v6.x/docs/api/fs.html