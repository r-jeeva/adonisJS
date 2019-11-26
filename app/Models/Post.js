'use strict'

const Model = use('Model')

class Post extends Model {
  static boot () {
    super.boot()
    this.addTrait('DbConnectionRoutifyHook')
  }
}

module.exports = Post
