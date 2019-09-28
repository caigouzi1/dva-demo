import { post } from "../utils/http";

export default {
  async queryAll(params) {
    return await post("/shop/all", params);
  }
};
