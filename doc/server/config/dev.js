module.exports = {
  server: 'http://172.26.141.121:9080/e4s-mp',
  db: {
    host: '172.26.136.192',
    port: 8065,
    user: 'e4s_doc',
    password: 'e4s_doc',
    database: 'e4s_doc',
    checkExpirationInterval: 900000,
    // How frequently expired sessions will be cleared; milliseconds. 
    expiration: 86400000,
    // The maximum age of a valid session; milliseconds. 
    createDatabaseTable: true,
    // Whether or not to create the sessions database table, if one does not already exist. 
    schema: {
      tableName: 'sessions',
      columnNames: {
        session_id: 'session_id',
        expires: 'expires',
        data: 'data'
      }
    }
  },
  log: {
    "appenders": [
      { "type": "console" },
      {
        "type": "file",
        "filename": "logs/error.log",
        "maxLogSize": 2097152,
        "backup": 10,
        "category": "error"
      },
      {
        "type": "dateFile",
        "filename": "logs/record.log",
        "alwaysIncludePattern": true,
        "pattern": "-yyyy-MM-dd"
      }
    ],
    "replaceConsole": true,
    "levels": {
      "error": "error"
    }
  }
}