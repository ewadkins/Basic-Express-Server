var config = {
		server: {
			port: 80,
			useHttps: false,
			https: {
				keyPath: '',
				certPath: ''
			},
			appDirectory: __dirname,
			publicDirectory: 'public',
			routesDirectory: 'routes',
			logDirectory: 'logs',
			index: 'index.html'
		},    
		db: {
			hostname: 'localhost',
	        port: 27017,
	        mainDb: 'test',
	        useSSL: false,
	        required: false,
	        authenticate: false,
	        authentication: {
	            username: '',
	            password: ''
	        },
	        collections: {
	        	users: 'users'
	        },
	        fields: {
	        	users: {
	        		username: 'string',
	        		password: 'password'
	        	}
	        }
	    }
}

function array(contents) {
	return {
		type: 'array',
		contents: contents
	}
}

function object(contents) {
	return {
		type: 'object',
		contents: contents
	}
}

module.exports = config;