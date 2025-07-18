import apiInstance from 'your-path-to/apiInstance'

apiInstance.interceptors.request.use(
    (config) => {
        // add a JWT token to the request headers if available for every request that isn't a login request
        if (config.url?.includes('/login')) {
            return config
        }
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        // request error handling
        return Promise.reject(error)
    }
)

apiInstance.interceptors.response.use(
    (response) => {
        // any manipulation of the response data can be done here
        return response
    },
    (error) => {
        // centralized error handling
        if (error.response && error.response.status === 401) {
            // redirect to login page if unauthorized
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)