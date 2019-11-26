'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DEFAULT_DB_CONNECTION', 'sqlite'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath('development.sqlite')
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonisapp')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    }
  },

  master: {
    client: 'mysql',
    connection: {
      host: Env.get('MASTER_DB_HOST', 'localhost'),
      port: Env.get('MASTER_DB_PORT', ''),
      user: Env.get('MASTER_DB_USER', 'root'),
      password: Env.get('MASTER_DB_PASSWORD', ''),
      database: Env.get('MASTER_DB_DATABASE', 'adonisapp')
    }
  },

  slave: {
    client: 'mysql',
    connection: {
      host: Env.get('SLAVE_DB_HOST', 'localhost'),
      port: Env.get('SLAVE_DB_PORT', ''),
      user: Env.get('SLAVE_DB_USER', 'root'),
      password: Env.get('SLAVE_DB_PASSWORD', ''),
      database: Env.get('SLAVE_DB_DATABASE', 'adonisapp')
    }
  }
}
