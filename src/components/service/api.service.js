import axios from 'axios'
const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '769ff4a4d2msh36f75a4f2dc7b5dp149910jsn50f78e5620a3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url){
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  }
}