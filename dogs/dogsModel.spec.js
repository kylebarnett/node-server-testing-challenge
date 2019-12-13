const Dogs = require('./dogsModel.js');
const db = require('../data/dbConfig.js');

describe('dogs model', () => {

  beforeEach(async () => {
    await db('dogs').truncate()
  })

  describe('insert', () => {
    it('should insert a dog into the db', async () => {
      await Dogs.insert({ dog_name: 'Arlo', dog_breed: 'Breed1' })
      await Dogs.insert({ dog_name: 'Butler', dog_breed: 'Breed2' })
      const dogs = await db('dogs')
      expect(dogs).toHaveLength(2);
    })
    it('getting the names', async () => {
      await Dogs.insert({ dog_name: 'Arlo', dog_breed: 'Breed1' })
      await Dogs.insert({ dog_name: 'Butler', dog_breed: 'Breed2' })
      const dogs = await db('dogs');
      expect(dogs[0].dog_name).toBe('Arlo');
      expect(dogs[0].dog_breed).toBe('Breed1');
      expect(dogs[1].dog_name).toBe('Butler');
      expect(dogs[1].dog_breed).toBe('Breed2');
    })
  })
})