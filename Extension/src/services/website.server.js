import http from "../http-common";

class WebsiteDataService {
  getAll = () => {
    return http.get("/websites");
  }

  get = id => {
    return  http.get(`/websites/${id}`);
  }

  create = data => {
    return http.post("/websites", data);
  }

  update = (id, data) => {
    return http.put(`/websites/${id}`, data);
  }

  remove = id => {
    return http.delete(`/websites/${id}`);
  }

  removeAll = () => {
    return http.delete(`/websites`);
  }

  findBySearch = search => {
    return http.get(`/websites?url=${search}`);
  }
}

export default new WebsiteDataService();