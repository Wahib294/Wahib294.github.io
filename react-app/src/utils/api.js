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
  return data;
};
export const fetchUsers = async () => {
  const user = await axios.get(
    "https://63e64d4fc8839ccc28557489.mockapi.io/users"
  );
  return user.data;
};

export const userlogin = () => {
  fetchUsers().then((data) => {
    console.log(data);
    console.log("SIGN IN PRESSED");
  });
};
