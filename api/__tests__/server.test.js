const request = require('supertest')
const app = require('../server')

const postData = {
  "text": "test",
  "sender":{
    "name": "test"
  },
  "time": "23254"
}

describe('Test the root path ', () => {
  test('It should return a list of messages on GET', async () => {
    const response = await request(app).get('/chatroom')
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  }),

  test('It should post an object on Post', async () => {
    const response = await request(app).post('/chatroom').send(postData)
    expect(response.statusCode).toBe(201)
    expect(response.body).toMatchObject(JSON)
  }),

  test('It should have more items in the database after POST method', async () => {
    for (var i = 0; i < 3; i++) await request(app).post('/chatroom').send(postData)
    const response = await request(app).get('/chatroom')
    expect(response.body).toHaveLength(5)
  })
})
