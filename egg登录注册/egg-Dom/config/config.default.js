exports.keys = '1706B'

exports.security = {
    csrf: {
        enable:false
    }
}

exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: '1706b',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };