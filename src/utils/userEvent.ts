import axios from "axios";
import appconfig from "./config";

const saveUserEvnet = async (news_id: string, type: string) => {
  const user = localStorage.getItem("user");
  if (user === null) return;
  const User = JSON.parse(user);
  console.log(User);

  await axios.post(appconfig.url + "/userEvent", {
    type,
    news_id,
    user_id: User.uid,
  });
};

const getUserHistory = async () => {
  const user = localStorage.getItem("user");
  if (user === null) return [];
  const User = JSON.parse(user);
  console.log(User);

  await axios
    .get("http://localhost:5000" + "/userHistory/jgynv3FmEyYzpiH0mRdVtivir953")
    .then((res) => {
      console.log(res);
      return res.data;
    });
};

const userEvent = {
  saveUserEvnet,
  getUserHistory,
};
export default userEvent;
