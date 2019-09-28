import Api from "../services/shop";

export default {
  namespace: "list",

  state: {
    data: []
  },
  reducers: {
    updata(state, action) {
      console.log(action.payload);
      return { ...state, data: action.payload };
    },

    all(state) {
      return { ...state, data: state.data };
    }
  },
  effects: {
    *shopAll({ payload }, { call, put }) {
      const response = yield call(Api.queryAll, payload);
      const data = response.dataSet;
      yield put({
        type: "updata",
        payload: data
      });
    }
  }
};
