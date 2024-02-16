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
    await axios.post(this.baseUrl + "/comments", comment, {
      params: { api_key: this.apiKey },
    });
  }

  async deleteComment(id) {
    await axios.delete(this.baseUrl + "/comments/" + id, {
      params: { api_key: this.apiKey },
    });
  }

  async likeComment(id) {
    await axios.delete(this.baseUrl + "/comments/" + id +"/like", {
      params: { api_key: this.apiKey },
    });
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
