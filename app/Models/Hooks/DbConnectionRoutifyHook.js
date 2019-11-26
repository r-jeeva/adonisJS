'use strict'

class DbConnectionRoutifyHook {
  register (Model) {
    Object.defineProperty(Model, 'connection', {
      get: () => {
        return this.connection
      },
      set: connection => {
        this.connection = connection
      }
    })

    const replicationLag = 50
    const sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const setWriterDbConnection = () => {
      this.connection = 'master'
    }
    const setReaderDbConnection = async (delay = 0) => {
      await sleep(delay)
      this.connection = 'slave'
    }

    Model.addHook('beforeCreate', setWriterDbConnection)
    Model.addHook('beforeUpdate', setWriterDbConnection)
    Model.addHook('beforeSave', setWriterDbConnection)
    Model.addHook('beforeDelete', setWriterDbConnection)

    Model.addHook('afterCreate', setReaderDbConnection.bind(this, replicationLag))
    Model.addHook('afterUpdate', setReaderDbConnection.bind(this, replicationLag))
    Model.addHook('afterSave', setReaderDbConnection.bind(this, replicationLag))
    Model.addHook('afterDelete', setReaderDbConnection.bind(this, replicationLag))
    Model.addHook('afterFind', setReaderDbConnection)
    Model.addHook('afterFetch', setReaderDbConnection)
    Model.addHook('afterPaginate', setReaderDbConnection)
  }
}

module.exports = DbConnectionRoutifyHook
