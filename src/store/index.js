import { configureStore } from '@reduxjs/toolkit'
import shopSlice from '../featuers/Shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopApi'
import cartSlice from '../featuers/cart/cartSlice'
import { authApi } from '../services/authApi'
import authSlice from '../featuers/auth/authSlice'

const store = configureStore({
  reducer: {
    shop: shopSlice,
    cart: cartSlice,
    auth: authSlice,
    [shopApi.reducerPath] : shopApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
   getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store