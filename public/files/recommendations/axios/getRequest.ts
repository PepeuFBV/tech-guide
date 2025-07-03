import apiInstance from 'your-path-to/apiInstance'

export async function getRequest() {
    try {
        const response = await apiInstance.get('/your-endpoint')
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error // rethrow the error to handle it later
    }
}