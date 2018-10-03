const https = require('https');
const http = require('http');
const api = require('./api.json');

function printError(error) {
   console.error('Hi there))) ' + error.message);
}

function getWeather (query, option) {
   try {
      const request = https.get(`https://api.openweathermap.org/data/2.5/weather?${option}=${query}&APPID=${api.key}`, response => {
         if (response.statusCode === 200) {
            let body = '';
            response.on('data', data => {
               body += data.toString();
            });
            response.on('end', () => {
               try {
                  const profile = JSON.parse(body);
                  console.log(`Current temperature in ${profile.name} is ` + (profile.main.temp - 273.15).toFixed(1) + '°C');
               } catch (e) {
                  printError(e);
               }

            })
         } else {
            const message = `There is an error, getting info for ${query} (${http.STATUS_CODES[response.statusCode]})`
            const statusCodeErorr = new Error(message)
            printError(statusCodeErorr);
         }
      });
      request.on('error', error => console.error(`You have problem with: ${error.message}`));
   } catch (e) {
      printError(e);
   }

}

module.exports.get = getWeather;
