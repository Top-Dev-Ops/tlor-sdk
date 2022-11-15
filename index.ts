import axios from 'axios'

const API_URL: string = 'https://the-one-api.dev/v2'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer 23c_ilvbpYW_Hb7ldPUx'
}

export interface PaginationSortProps {
  limit?: number
  page?: number
  offset?: number
  sort?: string
}

function getUrl(baseUrl: string, { limit, page, offset, sort }: PaginationSortProps) {
  let url = baseUrl
  if (limit) url += `limit=${limit}`
  if (page) url += `&page=${page}`
  if (offset) url += `&offset=${offset}`
  if (sort) url += `&sort=${sort}`
  return url
}

export function getBooks(props?: PaginationSortProps): Promise<object> {
  return new Promise((resolve, reject) => {
    const url = getUrl(`${API_URL}/book?`, props ?? {})
    axios.get(url, { headers })
      .then(res => resolve(res.data))
      .catch(reject)
  });
}

export function getBook(id: number): Promise<object> {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/book/${id}`, { headers })
      .then(res => resolve(res.data))
      .catch(reject)
  })
}

export function getMovies(props?: PaginationSortProps): Promise<object> {
  return new Promise((resolve, reject) => {
    const url = getUrl(`${API_URL}/movie?`, props ?? {})
    axios.get(url, { headers })
      .then(res => resolve(res.data))
      .catch(reject)
  });
}

export function getQuotes(props?: PaginationSortProps): Promise<object> {
  return new Promise((resolve, reject) => {
    const url = getUrl(`${API_URL}/quote?`, props ?? {})
    axios.get(url, { headers })
      .then(res => resolve(res.data))
      .catch(reject)
  });
}

export function getChapters(props?: PaginationSortProps): Promise<object> {
  return new Promise((resolve, reject) => {
    const url = getUrl(`${API_URL}/chapter?`, props ?? {})
    axios.get(url, { headers })
      .then(res => resolve(res.data))
      .catch(reject)
  });
}
