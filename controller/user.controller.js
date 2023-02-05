const { User } = require('../models/index')
const { Op } = require("sequelize");

class UserController {
    async getAllUser() {
        const getUser = await User.findAll()

        return getUser
    }

    async getById(id) {
        const getUser = await User.findByPk(id)

        return getUser
    }

    async search(name) {
        const getUser = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        return getUser
    }

    async insertData(body) {

        const create = await User.create({
            name: body.name,
            password: body.password,
            email: body.email
        })

        return create
    }

    async update(id, body) {

        User.update({
            name: body.name,
            password: body.password,
            email: body.email
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await User.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = UserController