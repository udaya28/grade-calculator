const getLocalStorage = (key: string) => {
    // eslint-disable-next-line eqeqeq
    const value = localStorage.getItem(key) == 'undefined' ? null : localStorage.getItem(key)
    // console.log(key, value,localStorage.getItem(key))

    const data = JSON.parse(value || '{}')
    return Object.keys(data).length === 0 ? null : data
}

const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export { getLocalStorage, setLocalStorage }
