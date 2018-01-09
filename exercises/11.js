// Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids
// Hint: use two nested calls to map() and one call to concatAll().

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    results.push.apply(results, subArray);
  });

  return results;
};

function run() {
  var movieLists = [
      {
        name: "Instant Queue",
        videos : [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

  return movieLists.
    map(function(movieList) {
    return movieList.videos.
      map(function(video) {
      return video.boxarts.
        filter(function(boxart) {
          return boxart.width === 150;
        }).
        map(function(boxart) {
          return {id: video.id, title: video.title, boxart: boxart.url};
        });
      }).
      concatAll();
    }).
    concatAll();

}

console.log(run())