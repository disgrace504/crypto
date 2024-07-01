const url = import.meta.env.VITE_URL_API
const key = import.meta.env.VITE_KEY_API

export const getCoins = async () => {
  const options = {
    headers: {
      'x-access-token': key,
    },
  }

  try {
    const response = await fetch(url + '/coins', options)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}
