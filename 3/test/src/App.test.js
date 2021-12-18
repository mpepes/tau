const giphyApiKey = 'U6aXd0nF8k0gnahNILwNPxPI2Q3XIP4m';
const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key='
const validApiUrl = `${apiUrl}${giphyApiKey}`;
const badApiKey = 'abcd'
const corruptedApiUrl = `${apiUrl}${badApiKey}`;

const makeRequest = async (url) => await fetch(url)


describe('giphy api search endpoint', () => {
  it('tests valid api key, should return status 200', async () => {
    const response = await makeRequest(validApiUrl)
    const data = await response.json()
    
    expect(data.meta.status).toEqual(200)
  })
  
  it('tests invalid api key, should return message Invalid authentication credentials', async () => {
    const response = await makeRequest(corruptedApiUrl)
    const data = await response.json()

    expect(data.message).toBe('Invalid authentication credentials')
  })
  
  it('tests query parameter q=cheeseburgers, should return 50 records by default', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger`)
    const data = await response.json()

    expect(data.data).toHaveLength(50)
  })
  
  it('tests query parameter limit=10, should return 10 records instead of 50', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger&limit=10`)
    const data = await response.json()

    expect(data.data).toHaveLength(10)
  })
  
  it('tests query parameter offset=10, should return records counting from 10', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger&offset=10`)
    const data = await response.json()

    expect(data.pagination.offset).toEqual(10)
  })
  
  it('tests query parameter offset=10000, should return no records', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger&offset=10000`)
    const data = await response.json()

    expect(data.pagination.offset).toEqual(0)
    expect(data.data).toHaveLength(0)
  })
  
  it('should return total_count > 0', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger`)
    const data = await response.json()

    expect(data.pagination.total_count).toBeGreaterThan(0)
  })
  
  it('should return a list of objects with property `gif`', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger`)
    const data = await response.json()

    data.data.forEach(d => {
      expect(d.type).toEqual('gif')
    })
  })
  
  it('should return a list of objects containing properties referring to author', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger`)
    const data = await response.json()

    data.data.forEach(d => {
      expect(d.username).not.toBeNull()
    })
  })
  
  it('should return different id for each data item', async () => {
    const response = await makeRequest(`${validApiUrl}&q=cheeseburger`)
    const data = await response.json()
    const ids = []
    
    data.data.forEach(d => {
      ids.push(d.id)
    })
    
    const uniqueIds = new Set(ids)
    
    expect(data.data.length).toEqual(uniqueIds.size)
  })
})

describe('giphy api random endpoint', () => {
  const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key='
  const validApiUrl = `${apiUrl}${giphyApiKey}`
  const corruptedApiUrl = `${apiUrl}${badApiKey}`
  
  it('tests valid api key, should return status 200', async () => {
    const response = await makeRequest(validApiUrl)
    const data = await response.json()

    expect(data.meta.status).toEqual(200)
  })

  it('tests invalid api key, should return message Invalid authentication credentials', async () => {
    const response = await makeRequest(corruptedApiUrl)
    const data = await response.json()

    expect(data.message).toBe('Invalid authentication credentials')
  })

  it('should return 1 random gif containing given tag', async () => {
    const tag = 'burrito'
    const response = await makeRequest(`${validApiUrl}&tag=${tag}`)
    const data = await response.json()

    // it says that object is returned so just 1 item instead of an array
    expect(data.data.id).toBeTruthy()
  })
})