import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Typescript Gym',
      description: null,
      phone: null,
      latitude: 38.7244881,
      longitude: -9.1913004,
    })

    await gymsRepository.create({
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: 38.7244881,
      longitude: -9.1913004,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Javascript Gym' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let index = 1; index <= 22; index++) {
      await gymsRepository.create({
        title: `Javascript Gym ${index}`,
        description: null,
        phone: null,
        latitude: 38.7244881,
        longitude: -9.1913004,
      })
    }

    const { gyms } = await sut.execute({ query: 'Javascript', page: 2 })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Javascript Gym 21' }),
      expect.objectContaining({ title: 'Javascript Gym 22' }),
    ])
  })
})
