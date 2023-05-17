module.exports = {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'postgres',
       database: 'exchange',
      // Use a different storage. Default: none
      seederStorage: "json",
      // Use a different file name. Default: sequelize-data.json
      seederStoragePath: "sequelizeData.json",
      // Use a different table name. Default: SequelizeData
      seederStorageTableName: "sequelize_data"
    },
    test: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'roku',
       password: 'roku',
       database: 'test',
    },
    production: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'roku',
       password: 'roku',
       database: 'prod',
    },
 }