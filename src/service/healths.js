import { api } from '../api'

export const healths = {
  async ping() {
    const { data } = await api.get('ping')
    return data
  }
}
