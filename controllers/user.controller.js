let userData = require('../data/data.js')

// get random user data
module.exports.getRandomUser = (req, res) => {
    const randomUser = userData[Math.floor(Math.random() * userData.length)]
    res.send(randomUser)
};

// get all user data
module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    res.json(userData.slice(0, limit))
};

//save data
module.exports.saveUser = (req, res) => {
    userData.push(req.body);
    res.send(userData)
}

// single update data
module.exports.singleUpdateUser = (req, res) => {
    const id = req.params.id;
    const newUser = userData.find(user => user.id === Number(id));
    newUser.name = req.body.name;
    newUser.gender = req.body.gender;
    newUser.contact = req.body.contact;
    newUser.address = req.body.address;
    newUser.photoUrl = req.body.photoUrl;
    res.send(newUser)
};

//mutiple user data update
module.exports.multipleUpdateUser = (req, res) => {

}

// delete user
module.exports.deleteUser = (req, res) => {
    const id = req.params.id;
    userData = userData.filter(user => user.id !== Number(id));
    res.send(userData)
}