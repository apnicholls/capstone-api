// create the initial categories in the database

const {Category} = require('../lib/models');

const seedTheDatabase = async () => {
    let categories = await Category.findAll({});
    if (categories.length == 0) {
        await Category.create({name: 'The Samurai'});
        await Category.create({name: 'Ronin'});
        await Category.create({name: 'Bushito'});
        await Category.create({name: 'Katana'});
        await Category.create({name: 'Sepuku'});
    }
};

seedTheDatabase()