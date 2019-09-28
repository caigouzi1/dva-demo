export default {
  namespace: "prodect",
  state: {
    data: [
      {
        key: "1",
        name: "土豆",
        count: 200
      }
    ]
  },

  reducers: {
    all(state) {
      return { ...state, data: state.data };
    },
    add(state, action) {
      return { ...state, data: state.data };
    },
    addList(state, action) {
      // eslint-disable-line
      let data = state.data;
      let key = Number(data[data.length - 1]["key"]) + 1;

      console.log(key);
      data = data.push({ ...action.payload, key: key });
      return { ...state, data: state.data };
    }
  },

  effects: {
    // *updateListHttp({ payload }, { call, put }) {
    //   // 网络请求
    //   const result = yield call(api.getProduct, payload);
    //   const data = result.data;
    //   if (data) {
    //     yield put({
    //       type: "updateList",
    //       payload: data
    //     });
    //   }
    // }
  }
};
