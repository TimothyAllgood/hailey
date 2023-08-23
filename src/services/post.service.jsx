import axios from "axios";

const URL = "https://headless.archerrosedigital.com/wp-json/wp/v2/posts";
const AUTHOR_URL = "https://headless.archerrosedigital.com/wp-json/wp/v2/users";

export default class PostService {
  static fetchAllPosts = async () => {
    const res = await axios.get(URL);
    return res.data;
  };

  static fetchPost = async (id) => {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  };

  static fetchAuthor = async (id) => {
    const res = await axios.get(`${AUTHOR_URL}/${id}`);
    return res.data;
  };
}
