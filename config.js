module.exports = {
	paths: {
		ROUTES: './app/routes/',
		GITHUB: './app/routes/',
		PUBLIC: './public/',
		VIEWS: './views/',
	},
	githubAPI: {
		authUser: 'https://github.com/login/oauth/authorize',
		getUser: 'https://api.github.com/users/',
		queryUser: 'https://api.github.com/search/users',
	},
}
