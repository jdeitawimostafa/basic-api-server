'use strict';

const uuid = require('uuid').v4;

class Clothes {

  constructor(){
    this.clothesDb = [];
  }

  read(id){
    if(id){
      return this.clothesDb.find((data) => data.id === id);
    }
    else{
      return this.clothesDb;
    }
  }

  create(object){
    const food = {
      id: uuid(),
      data: object,
    };
    this.clothesDb.push(food);
    return food;
  }

  delete(id){
    this.clothesDb = this.clothesDb.filter((food) => food.id !== id);
    return this.clothesDb;
  }

  update(id, object) {
    for (let i = 0; i < this.clothesDb.length; i++) {
      let f = this.clothesDb[i];
      if(f.id === id) {
        this.clothesDb[i].data = object;
        return this.clothesDb[i];
      } 
    }
  }

}

module.exports = Clothes;

