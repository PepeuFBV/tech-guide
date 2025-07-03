export function setJwtToken(token: string) {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}