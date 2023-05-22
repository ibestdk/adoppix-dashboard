import axios from "axios";
import { getToken } from "./authorize";

const token = getToken();
  const callAuctionCard = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
    let response = await axios({
      method: "get",
      url: `https://api.adoppix.com/api/auction?take=${take}&page=${page}`,
      headers: headers,
    }).catch((err) => console.log(err.response));
    console.log(response.data.data);
    setTimeout(() => {
      setAuctionItems(response.data.data);
      setIsloading(false);
    }, 1000);
  };