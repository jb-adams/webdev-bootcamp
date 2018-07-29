movieDB = [
  {
    title: "The Invitation",
    haveSeen: true,
    rating: 5
  },
  {
    title: "Han Solo",
    haveSeen: false,
    rating: 3.5
  },
  {
    title: "Jurassic Park",
    haveSeen: true,
    rating: 4.5
  },
  {
    title: "The Imitation Game",
    haveSeen: false,
    rating: 4
  }
]

function printMovieDB(movieDB) {
  movieDB.forEach(function(movie) {
    let str = "You have ";
    if (! movie.haveSeen) {
      str += "not "
    }
    str += `watched "${movie.title}" - ${movie.rating} stars`;

    console.log(str);
  })
}

printMovieDB(movieDB);
