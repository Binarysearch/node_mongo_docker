let mongoose = require('mongoose');

const server = 'mongo_nombre_servicio:27017';

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error', err)
       })
  }
}

module.exports = new Database()