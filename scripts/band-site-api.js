class BandSiteApi {
  constructor(apiKey) {
    (this.apiKey = apiKey),
      (this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com");
  }

  async getComments() {
    const response = await axios.get(this.baseUrl + "/comments", {
      params: {
        api_key: this.apiKey,
      },
    });
    return response.data;
  }
  async postComment(comment) {
    const response = await axios.post(this.baseUrl + "/comments", {
      params: {
        api_key: this.apiKey,
      },
      header: {
        "Content-Type": "application/json",
      },
      body: {
        name: comment.name,
        comment: comment.comment,
      },
    });
    console.log("Post", response);
  }

  async getShow() {
    const response = await axios.get(this.baseUrl + "/showdates", {
      params: {
        api_key: this.apiKey,
      },
    });
    return response.data;
  }
}

export default BandSiteApi;
