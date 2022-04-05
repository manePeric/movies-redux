import axios from "axios";

class MovieService {
  constructor() {
    this.movies = axios.create({
      dbURL: "http://localhost:3000",
    });
  }

  async getAll() {
      const { data } = await this.movies.get("movies");
      return data;
    
  }
}

export default new MovieService();