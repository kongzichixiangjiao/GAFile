const globalStore = {
  // namespaced: true,
  state: {
    count: 0,
    map: {
      name: 'hjn',
      age: '30'
    }
  },
  mutations: {
    countAdd(state, n) {
      state.count = state.count + n;
    }
  }
}

export default globalStore;