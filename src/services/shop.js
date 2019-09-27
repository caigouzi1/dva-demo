import { post } from "../utils/http";

export default {
  async queryAll(params) {
    return post("/shop/all");
  }
};
