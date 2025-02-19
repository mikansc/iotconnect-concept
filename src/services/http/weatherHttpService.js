import { HttpService } from './httpService'
import { axiosInstanceFactory } from './factories/axiosInstanceFactory'
import { weaterAdapter } from './adapters/weatherAdapter'

const baseURL = import.meta.env.VITE_OPENWEATHER_URL
const apikey = import.meta.env.VITE_WAPI
const weather = '/data/2.5/weather'

const axiosInstance = axiosInstanceFactory(baseURL)
const httpService = new HttpService(axiosInstance)

export const getWeatherByCityName = async (name, unit = 'celsius') => {
  const unitMap = {
    // https://openweathermap.org/current#data
    celsius: 'metric',
    farenheit: 'imperial'
  }
  const query = `?q=${name},BR&units=${unitMap[unit]}&lang=pt_BR&appid=${apikey}` // TODO verificar location
  const response = await httpService.get(baseURL.concat(weather, query), { baseURL })
  return weaterAdapter(response)
}
