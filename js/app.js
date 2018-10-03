const weather = require('./weather')

const query = process.argv.slice(2).join(' ');
// console.log(query.join(' '))
if (query * 1) {
   weather.get(query, 'zip')
} else {
   weather.get(query, 'q')
}
// weather.get(query, 'q')
