/* eslint-disable */
export default function (Vue) {
	Vue.auth = {
		// Set Token
		setToken: (jwt) => {
			localStorage.setItem('jwt', jwt)
		},
		// Get Token
		getToken: () => {
		var token = localStorage.getItem('jwt')

			// Validate : If token not set
			if (!token) 
				return null

			return token
		},
		// Destroy Token
		destroyToken: () => {
			localStorage.removeItem('jwt')
		},
		// Check if user is authenticated
		isAuthenticated: () => {
			if (Vue.auth.getToken())
				return true
			else
				return false
		}
	}

  // Define a property, $auth (Sorta like export)
	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () => {
				return Vue.auth
			}
		}
	})
}
