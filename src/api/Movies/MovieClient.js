export default class MovieClient {
  constructor(axios) {
    this.axios = axios;
  }

  async getMovies() {
    const res = await this.axios.get("collections/movies/records");
    return res.data;
  }
}
