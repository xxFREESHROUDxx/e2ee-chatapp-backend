const { Seeder } = require('mongo-seeding');

const path = require("path")

const config = {
    database: 'mongodb://localhost:27017/dev_DB',
    dropDatabase: false,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve(__dirname, '.'))

seeder
    .import(collections)
    .then(() => {
        console.log("Success.");
    })
    .catch(err => {
        console.log("Error.", err);
    });
