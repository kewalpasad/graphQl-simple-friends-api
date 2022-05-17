const { UserList, MovieList } = require("./../mockData");

const resolvers = {
  Query: {
    users: () => (UserList),
    user: (parent, args) => (UserList.find(user => user.id == args.id)),
    Movies: () => (MovieList),
    Movie: (parent, args) => (MovieList.find(movie => movie.name == args.name)),
  }
}



module.exports = {resolvers}