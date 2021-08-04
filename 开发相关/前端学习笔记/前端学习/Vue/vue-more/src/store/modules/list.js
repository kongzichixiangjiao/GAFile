const listStore = {
  state: {
    list: [1, 2, 3, 5, 11, 21, 31, 23, 9, 6, 11],
    a: 12
  },
  getters: {
    getListMin: (state) => {
      return Math.min(...state.list);
    },
    getListLast: (state) => {
      return state.list[state.list.length - 1];
    },
    getList: (state) => (index) => {
      return state.list[index];
    }
  }
}

export default listStore;