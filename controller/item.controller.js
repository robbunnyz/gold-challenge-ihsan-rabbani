const { Item } = require('../models/index')
const { Op } = require("sequelize");

class ItemController {
    async getAllItem() {
        const getItem = await Item.findAll()

        return getItem
    }

    async getById(id) {
        const getItem = await Item.findByPk(id)

        return getItem
    }

    async search(name) {
        const getItem = await Item.findAll({
            where: {
                item_name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        return getItem
    }

    async insertData(body) {

        const create = await Item.create({
            item_name: body.item_name,
            item_price: body.item_price,
            item_stock: body.item_stock
        })

        return create
    }

    async update(id, body) {

        Item.update({
            item_name: body.item_name,
            item_price: body.item_price,
            item_stock: body.item_stock
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await Item.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = ItemController