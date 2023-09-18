import axios from "axios";

export const getIpInfo = async (ip, changeStatus) => {
  try {
    changeStatus(true);
    const response = await axios({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/iplookup",
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
      params: {
        address: ip,
      },
    });
    return response.data;
  } catch (err) {
    console.error("error", err);
  } finally {
    changeStatus(false);
  }
};
