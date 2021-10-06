import {fetchCartItems} from '~/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  carts: []
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.carts.push(newCartItem)
  },

  setCartItems(state, cartItems) {
    state.carts = cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}) {
    const {data} = await fetchCartItems()
    commit(
      'setCartItems',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    )
  },

  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS)
  }
}
