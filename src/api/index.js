import { get } from './helper'
const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const ratings = get('/api/ratings')

export {
  getSeller,
  getGoods,
  ratings
}
