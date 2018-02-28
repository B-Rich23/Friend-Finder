// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Parse new friend input to get integers 
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;


        // Check the new friend entry with the existing ones
        var scoreComparisionArray = [];
        for (var i = 0; i < friends.length; i++) {

            // Check each friend's scores and the sum difference in points
            var currentComparison = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                currentComparison += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }

            // Push each comparison between friends to array
            scoreComparisionArray.push(currentComparison);
        }

        // Find the best match using the postion of best match in the friends array
        var bestMatchPosition = 0; // assume its the first person to start
        for (var i = 1; i < scoreComparisionArray.length; i++) {

            // Lower number in comparison difference means better match
            if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
                bestMatchPosition = i;
            }

        }

        // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friendsData array is chosen
        var bestFriendMatch = friends[bestMatchPosition];



        // Reply with a JSON object of the best match
        res.json(bestFriendMatch);



        // Push the new friend to the friends data array for storage
        friends.push(newFriend);

    });

}
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

//     app.post("/api/clear", function () {
//         // Empty out the arrays of data
//         friends = [];
//         // console.log(friends);
//     });
// };