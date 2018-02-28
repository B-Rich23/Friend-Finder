// ===============================================================================
// DATA
// Below data will hold all of the friend profiles.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
    "name": "Spongebob",
    "photo": "https://i.scdn.co/image/56fc3a11d95a9b44dabf22ca2dc56b670541c3f5",
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
    ]},
    {
    "name": "Patrick",
        "photo": "https://vignette.wikia.nocookie.net/spongebob/images/2/2f/Patrick_Star_2.png/revision/latest?cb=20150117190123",
    "scores": [
        3,
        2,
        1,
        5,
        3,
        4,
        3,
        5,
        4,
        1
    ]
    },
    {
     "name": "Puss in Boots",
        "photo": "https://vignette.wikia.nocookie.net/shrek/images/9/9c/PussInBootsTransparent.png/revision/latest?cb=20171218193006",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]   
    }];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;