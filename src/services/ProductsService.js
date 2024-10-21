import { API } from "aws-amplify";

import RequestService from "./RequestService";

const apiName = "MyAPIGatewayAPI";
const path = "/content/external/product";

class ProductsService extends RequestService {
  constructor(apiName, path, api) {
    super(apiName, path, api);
  }

  async getProducts({ params }) {
    console.log("params forms ervice", params)
    try {
      return await this._httpService.get(this._apiName, `${this._path}${params && `?category=${params.queryParams}`}`, {
        headers: {
          "Accept-Language": localStorage.getItem("language")?.toUpperCase(),
          "Location": params.location
        }
      });
    } catch (e) {
      throw {
        message: e.message,
        msg:  e.response?.data?.message || ""
      };
    }
  }
}

export default new ProductsService(apiName, path, API);