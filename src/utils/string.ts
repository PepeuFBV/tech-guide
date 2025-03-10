function getFirstNameFromPathname(pathname: string): string {
    /**
     * Returns the first name from a given pathname.
     * 
     * @abstract
     * Removes the first '/' from the pathname and splits the pathname by '/', returning the first found element with an added '/' at the beginning. If the pathname only contains one '/' (aka there's no second element), the pathname returned is '/'.
     * 
     * @example
     * getFirstNameFromPathname('/react/nextjs') // '/react'
     * 
     * @param {string} pathname - The pathname to extract the first name from.
     * 
     * @returns {string} The first name from the pathname.
     */
    if (pathname.split('/').length === 2) return '/'
    return '/' + pathname.substring(1).split('/')[0]
}

export { getFirstNameFromPathname }
