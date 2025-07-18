import apiInstance from 'your-path-to/apiInstance'

apiInstance.get('/data').then(response => {
    console.log('Data received:', response.data)
}).catch(error => {
    if (apiInstance.isAxiosError(error)) {
        if (error.response) { // any non-2xx status code
            console.error('Response error:', error.response.status, error.response.data)
        } else if (error.request) { // no response was received
            console.error('Request error:', error.request)
        } else { // an error occurred while setting up the request
            console.error('Request settings error:', error.message)
        }
    } else { // non-Axios error
        console.error('Unknown error:', error)
    }
})

// example of using async/await for error handling
async function fetchData() {
    try {
        const response = await apiInstance.get('/data')
        console.log('Data received:', response.data)
    } catch (error) {
        if (apiInstance.isAxiosError(error)) {
            if (error.response) {
                console.error('Response error:', error.response.status, error.response.data)
            } else if (error.request) {
                console.error('Request error:', error.request)
            } else {
                console.error('Request settings error:', error.message)
            }
        } else {
            console.error('Unknown error:', error)
        }
    }
}