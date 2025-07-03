import apiInstance from 'your-path-to/apiInstance'

export async function postRequest(data: any) { // don't use any, specify the type of data you expect
    try {
        const response = await apiInstance.get('/your-endpoint', {
            data: data // Axios allows you to easily send data in a POST request
        })
        return response.data
    } catch (error) {
        console.error('Error posting data:', error)
        throw error // rethrow the error to handle it later
    }
}