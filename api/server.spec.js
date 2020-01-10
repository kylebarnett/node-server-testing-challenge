const server = require('./server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('server.js', () => {

  beforeEach(async () => {
    await db('dogs').truncate()
  })

  test('should be testing the environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })
  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })

    it('should be json', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })

    it('should return the right object', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'up and running' })
    })
  })

  describe('POST', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).post('/dogs');
      expect(res.status).toBe(400)
    })
    it('should be json', async () => {
      const res = await request(server).post('/dogs');
      expect(res.type).toBe('application/json')
    })
  })
})