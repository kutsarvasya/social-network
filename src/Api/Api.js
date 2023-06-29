import axios from "axios";

axios.defaults.baseURL = "https://64847effee799e321626c11a.mockapi.io";

export async function getTweets(page = 1) {
  const data = await axios.get("social", {
    params: {
      page,
      limit: 3,
    },
  });
  return data;
}
