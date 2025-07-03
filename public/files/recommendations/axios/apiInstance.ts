import axios from 'axios'

const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ''}`,
    },
    timeout: 10000, // tempo limite de 10 segundos
})

export default apiInstance