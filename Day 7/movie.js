//a  Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        //this.rating = rating;
    }
}
var movie1 = new movie("vikram", "RKFI", "pg13")
var movie2 = new movie("Beast", "sunpictures", "pg13")
console.log(movie1, movie2)

//output

//movie { title: 'vikram', studio: 'RKFI' } movie { title: 'Beast', studio: 'sunpictures' }

//b  The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}
var movie1 = new movie("vikram", "RKFI")
var movie2 = new movie("Beast", "sunpictures")
console.log(movie1, movie2)

//output

//movie { title: 'vikram', studio: 'RKFI', rating: 'PG' } movie { title: 'Beast', studio: 'sunpictures', rating: 'PG' }


// c Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".

class Movie {
    constructor(Title, studio, rating) {
        this.Title = Title;
        this.studio = studio;
        this.rating = rating;
    }

}
class Movies {
    constructor() {
        this.movies = []
    }
    newMovie(Title, studio, rating) {
        let p = new Movie(Title, studio, rating)
        this.movies.push(p)
        return p
    }
    get Pgmovies() {
        var res = this.movies
        var out = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].rating == "PG13")
                out.push(res[i])

        }
        console.log(out)
    }
}

let screen = new Movies()
screen.newMovie("RRR", "Lyka", "PG13")
screen.newMovie("vikaram", "RKFI", "PG")
screen.newMovie("Beast", "SUN picture", " U / A")
screen.newMovie("saho", "RED Giant", "PG13")

console.log(screen.Movies)
console.log(screen.Pgmovies)


//output

// [
//     Movie { Title: 'RRR', studio: 'Lyka', rating: 'PG13' },
//     Movie { Title: 'saho', studio: 'RED Giant', rating: 'PG13' }
//   ]


//d Write a piece of code that creates an instance of the class Movie with the title“ Casino Royale”, the studio“ Eon Productions”, and the rating“ PG­ 13”

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

}
var movie1 = new movie('Casino Royale', 'Eon Productions', 'PG13');

console.log(movie1)

//output

// movie {
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG13'
//   }