export default {
  namespace: "list",

  state: {
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ]
  },
  reducers: {
    all(state) {
      return { ...state, data: state.data };
    }
  },
  effects: {
    // *all(_, { call, put }) {
    //   const response = yield call(Api.queryAll);
    //   console.log(111);
    //   console.log(response);
    //   return { ...state, data: state.data };
    // }
  }
};
