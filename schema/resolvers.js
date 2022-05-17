const { UserList, MovieList } = require('./../mockData');

const resolvers = {
	Query: {
		users: () => UserList,
		user: (parent, args) => UserList.find((user) => user.id == args.id),
		Movies: () => MovieList,
		Movie: (parent, args) => MovieList.find((movie) => movie.name == args.name),
	},
	Mutation: {
		createUser: (parent, args) => {
			const newUserInfo = args.input;
			newUserInfo.id = UserList[UserList.length - 1].id + 1;
			UserList.push(newUserInfo);
			return newUserInfo;
		},
		updateUserName: (parent, args) => {
			const { id, newUserName } = args.input;
			let userUpdatedName = UserList.find((user) => user.id == id);
			userUpdatedName.name = newUserName;
			return userUpdatedName;
		},
		deleteUser: (parent, args) => {
			let deletedUser = UserList.splice(
				UserList.findIndex((user) => user.id == args.id),
				1
			);
			return null;
		},
	},
};

module.exports = { resolvers };
