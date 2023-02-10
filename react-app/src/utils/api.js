import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDatafromApi = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};
export const fetchUsers = async () => {
  const user = await axios.get(
    "https://xjobu5x2vcoxyaebh6mqg6tsnq0tyrfs.lambda-url.ap-northeast-1.on.aws"
  );
  console.log(user.data);
  return user.data;
};

export const fetchPlaylist = async (id) => {
  const playlist = await axios.get(
    "https://xjobu5x2vcoxyaebh6mqg6tsnq0tyrfs.lambda-url.ap-northeast-1.on.aws/?userid=" +
      id
  );
  console.log("AWS");
  console.log(playlist.data);
  return playlist.data;
};

export const addtoplaylist = async (id, videoId) => {
  const res = await axios.get(
    "https://xjobu5x2vcoxyaebh6mqg6tsnq0tyrfs.lambda-url.ap-northeast-1.on.aws/add/?userid=" +
      id +
      "&videoid=" +
      videoId
  );
  console.log("AWS");
  console.log(res.data);
  return true;
};
export const deleteplaylist = async (videoId) => {
  const res = await axios.get(
    "https://xjobu5x2vcoxyaebh6mqg6tsnq0tyrfs.lambda-url.ap-northeast-1.on.aws/del/?videoid=" +
      videoId
  );
  console.log("AWS");
  console.log(res.data);
  return true;
};
export const userSign = async (email, password) => {
  const users = await fetchUsers();
  const user = users.find((user) => user.email === email);
  if (user) {
    alert("User already exists");
    return false;
  } else {
    const res = await axios.get(
      "https://xjobu5x2vcoxyaebh6mqg6tsnq0tyrfs.lambda-url.ap-northeast-1.on.aws/sign/?email=" +
        email +
        "&password=" +
        password
    );
    console.log("AWS");
    console.log(res.data);
    return true;
  }
};
