var path = require("path");


// TODO:  Move into seperate file
friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];

module.exports = function(app) {

    // A GET route with the url /api/friends. This will be used 
    // to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    // A POST routes /api/friends. This will be used to handle incoming survey
    // results. This route will also be used to handle the compatibility logic.
    // TODO: process the POST data
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
    })
}