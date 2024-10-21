

export default class RequestService {
  constructor(apiName, path, httpService) {
    this._apiName = apiName;
    this._path = path;
    this._httpService = httpService;
  }


  async getDataList({ params }) {
    try {
      const response = await this._httpService.get(this._apiName, this._path, {
        headers: {
          "Accept-Language": localStorage.getItem("language")?.toUpperCase(),
          "Location": params.location
        },
        queryStringParameters: params.queryParams
      });

      return response;
    } catch (e) {
      throw {
        message: e.message,
        msg:  e.response?.data?.message || ""
      };
    }
  }

  async getDataById({ params }) {
    try {
      const response = await this._httpService.get(this._apiName, `${this._path}/${params.id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("language")?.toUpperCase()
        }
      });

      return response;
    } catch (e) {
      throw {
        message: e.message,
        msg: e.response?.data?.message || ""
      };
    }
  }

}
