"use strict";
class collection {
  constructor(model) {
    this.model = model;
  }

  async createRecord(obj) {
    try {
      return await this.model.create(obj);
    } catch (e) {
      console.error("faild to create new record: ", this.model.name);
    }
  }

  async readRecord(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id: id } });
      } else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error("faild to create read record: ", this.model.name);
    }
  }
  async deleteRecord(id) {
    try {
      if (id) {
        return await this.model.destroy({ where: { id: id } });
      }
    } catch (e) {
      console.error("faild to delete record: ", this.model.name);
    }
  }
  async updateRecord(obj, id) {
    try {
      return await this.model.update(obj, {
        where: { id: id },
      });
    } catch (e) {
      console.error("faild to update record: ", this.model.name);
    }
  }
}

module.exports = collection;
