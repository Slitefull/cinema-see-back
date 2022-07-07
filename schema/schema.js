const graphql = require('graphql');
const { GraphQLSchema } = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const songs = [
  {
    id: 1,
    name: 'Interstellar',
    director: 'Christopher Nolan',
    description: 'In 2067, crop blights and dust storms threaten humanity\'s survival. Cooper, a widowed engineer and former NASA pilot turned farmer, lives with his father-in-law, Donald, teen son, Tom, and 10-year-old daughter, Murph. After a dust storm, patterns inexplicably appear on Murph\'s dust-covered bedroom floor. Murph believes a ghost created them, but Cooper deduces the patterns were made by gravity variations and represent geographic coordinates in binary code. Cooper follows the coordinates to a secret NASA facility headed by Professor John Brand, whom Cooper knows.',
    year: 2014,
    duration: '2h:49m',
    genre: 'Science Fantasy',
    thumbnail: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/5b/73/f45b735a-8d7a-9713-b217-0f8e1593c28b/794043201943.jpg/1200x1200bf-60.jpg',
    rating: 93,
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Bill Irwin', 'Ellen Burstyn', 'Michael Caine']
  },
  {
    id: 2,
    name: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    description: 'Pulp Fiction\'s narrative is told out of chronological order, and follows three main interrelated stories that each have a different protagonist: Vincent Vega, a hitman; Butch Coolidge, a prizefighter; and Jules Winnfield, Vincent\'s business partner.\n' + '\n' + 'The film begins with a diner hold-up staged by a couple, then begins to shift from one storyline to another before returning to the diner for the conclusion. There are seven narrative sequences; the three primary storylines are preceded by intertitles:',
    year: 1994,
    duration: '2h:34m',
    genre: 'Criminal',
    thumbnail: 'https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg',
    rating: 92,
    actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman', 'Harvey Keitel', 'Tim Roth', 'Bruce Willis']
  },
  {
    id: 3,
    name: 'Fight Club',
    director: 'David Fincher',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    year: 1999,
    duration: '2h:19m',
    genre: 'Thriller',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg',
    rating: 92,
    actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter', 'Zach Grenier', 'Meat Loaf']
  },
  {
    id: 4,
    name: 'Shutter Island',
    director: 'Barbara Toennies',
    description: 'A captivating piece, which only should be viewed after you watch the movie. All the principal actors join Scorsese to discuss the director\'s style (Ben Kingsley calls him "a painter"), his close collaboration with the cast, and the unique challenges the script posed to performers.',
    year: 2010,
    duration: '2h:18m',
    genre: 'Documentary',
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rating: 93,
    actors: ['Leonardo DiCaprio', 'Patricia Clarkson', 'Helena Bonham Carter', 'Ben Kingsley']
  },
  {
    id: 5,
    name: 'Lock, Stock and Two Smoking Barrels',
    director: 'Guy Ritchie',
    description: 'Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.',
    year: 1998,
    duration: '1h:47m',
    genre: 'Comedy',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2e54f7fdc79a37474cc038cced3463a4ec7ee44c0d2602d62f5a9ceb666e731._RI_V_TTW_.jpg',
    rating: 91,
    actors: ['Jason Flemyng', 'Dexter Fletcher', 'Jason Statham', 'Vinnie Jones']
  },
  {
    id: 6,
    name: 'Catch Me If You Can',
    director: 'Steven Spielberg',
    description: 'Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.',
    year: 2002,
    duration: '2h:21m',
    genre: 'Drama',
    thumbnail: 'http://litlife.club/data/Book/0/96000/96918/BC3_1474425707.jpg?w=900&h=900&q=90',
    rating: 91,
    actors: ['Leonardo DiCaprio', 'Tom Hanks', 'Christopher Walken']
  },
  {
    id: 7,
    name: 'Inception',
    director: 'Christopher Nolan',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    year: 2010,
    duration: '2h:28m',
    genre: 'Sci-Fi',
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    rating: 91,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
  },
  {
    id: 8,
    name: 'Reservoir Dogs',
    director: 'Quentin Tarantino',
    description: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
    year: 1992,
    duration: '1h:39m',
    genre: 'Crime',
    thumbnail: 'https://media.newyorker.com/photos/59d798fb5b388b33d3b0c419/1:1/w_2645,h_2645,c_limit/Shone-Reservoir-Dogs.jpg',
    rating: 89,
    actors: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen']
  },
  {
    id: 9,
    name: 'From Dusk Till Dawn',
    director: 'Quentin Tarantino',
    description: 'Two criminals and their hostages unknowingly seek temporary refuge in a truck stop populated by vampires, with chaotic results.',
    year: 1996,
    duration: '1h:48m',
    genre: 'Crime',
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BZjk3YmZhMDAtOWUzMS00YjE5LTkxNzAtY2I1NGZjMDA2ZTk0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    rating: 81,
    actors: ['Harvey Keitel', 'George Clooney', 'Quentin Tarantino']
  },
  {
    id: 10,
    name: 'Terminal',
    director: 'Steven Spielberg',
    description: 'The film tells the story of Viktor Navorsky, who traveled to New York from Eastern Europe. While Victor was flying in an airplane, a coup d\'état took place in his homeland.',
    year: 2004,
    duration: '2h:08m',
    genre: 'Comedy',
    thumbnail: 'https://www.themoviedb.org/t/p/original/4Gx1mv8Wkr2syods2AsIY4ZvK2n.jpg',
    rating: 88,
    actors: ['Tom Hanks', 'Catherine Zeta-Jones']
  },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    director: { type: GraphQLString },
    description: { type: GraphQLString },
    year: { type: GraphQLInt },
    duration: { type: GraphQLString },
    genre: { type: GraphQLString },
    thumbnail: { type: GraphQLString },
    rating: { type: GraphQLInt },
    actors: { type: new GraphQLList(GraphQLString) },
  })
});

const Query = new GraphQLObjectType({
  name: 'Catalog',
  fields: {
    movies: {
      type: new GraphQLList(MovieType),
      args: {},
      resolve() {
        return songs;
      }
    },
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return songs.find((song) => song.id == args.id);
      }
    },
  }
});

module.exports = new GraphQLSchema({ query: Query });
