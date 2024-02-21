import axios from "axios";
import MovieClient from "./Movies/MovieClient.js";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const http = axios.create({
  baseURL: "http://38.242.137.81:8090/api/",
});

export default class ApiClient {
  static movies = new MovieClient(http);
}
