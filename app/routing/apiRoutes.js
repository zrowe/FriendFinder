var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {

    // A GET route with the url /api/friends. This will be used 
    // to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    // A POST routes /api/friends. This will be used to handle incoming survey
    // results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        var newFriend = {};
        newFriend.name = req.body.name;
        newFriend.photo = req.body.photo;
        newFriend.scores = req.body["scores[]"]; // WTF??
        var match = findMatch(newFriend);
        friends.push(newFriend);
        res.send(match);
    })
}

function findMatch(newFriend) {

    var best = { score: 999, index: null }; // lower is better
    for (var i = 0; i < friends.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            totalDifference = totalDifference + Math.abs(friends[i].scores[j] - newFriend.scores[j]);
        }
        if (totalDifference < best.score) {
            best.score = totalDifference;
            best.index = i;
        };
    };
    return friends[best.index]
}