import axios from "axios";

const key = "eab30806-8fdc-432d-8db2-e067e49bb38c";

class BandSiteApi {
  constructor(apiKey) {
    (this.apiKey = apiKey),
      (this.baseUrl =
        "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments");
  }
  async postComment(comment) {}
  async getComment() {
    const response = await axios.get(this.baseUrl, {
      params: {
        api_key: "eab30806-8fdc-432d-8db2-e067e49bb38c",
      },
    });
    console.log(response.data);
  }
  async getShow() {}
}
