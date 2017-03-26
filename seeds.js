var  mongoose = require("mongoose");
var Campground = require("./models/campground");
var data = [
    {name: "Bla", image: "https://farm3.staticflickr.com/2832/32782261324_3276ec8929.jpg", description: "Bacon ipsum dolor amet tail venison ham jerky burgdoggen kielbasa bacon landjaeger. Beef porchetta ribeye tail tri-tip t-bone turkey. Beef ribs strip steak andouille spare ribs, frankfurter bacon venison beef. Chuck brisket sirloin, pig boudin pancetta drumstick shank short ribs landjaeger kielbasa bacon pork chop."},
    {name: "Bla Bla", image: "https://farm4.staticflickr.com/3172/2518115393_222e587a28.jpg", description: "Bacon ipsum dolor amet tail venison ham jerky burgdoggen kielbasa bacon landjaeger. Beef porchetta ribeye tail tri-tip t-bone turkey. Beef ribs strip steak andouille spare ribs, frankfurter bacon venison beef. Chuck brisket sirloin, pig boudin pancetta drumstick shank short ribs landjaeger kielbasa bacon pork chop."},
    {name: "Bla Bla Bla", image: "https://farm9.staticflickr.com/8487/8248330424_20768b5bee.jpg", description: "Bacon ipsum dolor amet tail venison ham jerky burgdoggen kielbasa bacon landjaeger. Beef porchetta ribeye tail tri-tip t-bone turkey. Beef ribs strip steak andouille spare ribs, frankfurter bacon venison beef. Chuck brisket sirloin, pig boudin pancetta drumstick shank short ribs landjaeger kielbasa bacon pork chop."}
    ];
    
var Comment = require("./models/comment");


function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
  console.log("removed campgrounds");
  //add a few campgrounds
    data.forEach(function(camps){
    Campground.create(camps, function(err, campground){
     if(err){
         console.log(err);
     } else {
         console.log("added a campground");
         //add a few comments
         Comment.create(
             {text: "this place is great, but I wish there was internet", author: "Homer"
             }, function(err, comment){
                 if(err){
                     console.log(err);
                 } else {
                     campground.comments.push(comment);
                     campground.save();
                     console.log("creadted new comment");
                 }
             });
     }
  });  
});
});
}

module.exports = seedDB;