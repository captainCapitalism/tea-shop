var mongoose = require("mongoose");
var MenuItem = require("models/menu.js");
var arrayOfMenuItems = require("open_menu_file");

console.log(arrayOfMenuItems);

// function seedDB() {
//     //Remove all campgrounds
//     Campground.remove({}, function(err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.remove({}, function(err) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log("removed comments!");
//             //add a few campgrounds
//             data.forEach(function(seed) {
//                 Campground.create(seed, function(err, campground) {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create({
//                             text: "This place is great, but I wish there was internet",
//                             author: "Homer"
//                         }, function(err, comment) {
//                             if (err) {
//                                 console.log(err);
//                             }
//                             else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log("Created new comment");
//                             }
//                         });
//                     }
//                 });
//             });
//         });
//     });
//     //add a few comments
// }

// module.exports = seedDB;
