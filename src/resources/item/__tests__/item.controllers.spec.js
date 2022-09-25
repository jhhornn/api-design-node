import controllers from '../item.controllers'
import { isFunction } from 'lodash'
import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

describe('item controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne'
    ]

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    )
  })
})

export default crudControllers(Item)
