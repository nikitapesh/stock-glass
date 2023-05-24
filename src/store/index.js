import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    orderBook: {
      bids: [],
      asks: [],
    },
    ourOrders: [
      {
        id: 1342,
        pair: 'RTD_USDT',
        price: 0.2,
        amount: 0.001,
        side: true,
      },
      {
        id: 1343,
        pair: 'RTD_USDT',
        price: 0.3,
        amount: 0.0015,
        side: false,
      },
    ],
  },
  getters: {
    getOrderBook: (state) => state.orderBook,
  },
  mutations: {
    setOrderBook(state, orderBook) {
      state.orderBook = orderBook;
    },
  },
  actions: {
    async fetchOrderBook({ commit }) {
      await axios.get('https://api.binance.com/api/v3/depth', {
        params: {
          symbol: 'BTCUSDT',
          limit: 10,
        },
      })
      .then(res => {
        commit('setOrderBook', {
          bids: res.data.bids,
          asks: res.data.asks,
        });
      })
      .catch(err => {
        console.error(err)
      })
    }
  },
})
