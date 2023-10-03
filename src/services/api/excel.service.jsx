import axios from "axios";
import { apiPath } from "./envService";

export const auctionLike = async (auctionId) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
  
    let result = await axios({
      method: "post",
      url: `${apiPath}api/Auction/${auctionId}/like`,
      headers: headers,
    }).catch((err) => console.log(err.response));
    //console.log("Success", result.data.data);
    return result.data.data;
  };

export const uploadStudentAnswer = async (answerId, file) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
  
    let result = await axios({
      method: "post",
      url: `${apiPath}api/SQLSubject/${answerId}/submit`,
      headers: headers,
      body: file,
    }).catch((err) => console.log(err.response));
    //console.log("Success", result.data.data);
    return result.data.data;
  };


  export const getTeacherAnswer = async () => {
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };
    let response = await axios({
      method: "get",
      url: `${apiPath}api/SQLSubject/answer`,
      headers: headers,
    }).catch((err) => console.log(err.response));
    return response.data.data;
  };
  