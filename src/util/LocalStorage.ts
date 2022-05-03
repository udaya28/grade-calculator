const getLocalStorage = (key: string) => {
    const data = JSON.parse(localStorage.getItem(key) || '{}')
    return Object.keys(data).length === 0 ? null : data
}

const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export { getLocalStorage, setLocalStorage }
