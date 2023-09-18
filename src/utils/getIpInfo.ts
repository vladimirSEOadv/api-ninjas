import axios from "axios";
import IpData from "../components/IpForm/types/types";

export const getIpInfo = async (
  ip: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<IpData> => {
  try {
    setLoading(true);
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
    return response.data as IpData;
  } catch (err) {
    console.error("error", err);
    throw err;
  } finally {
    setLoading(false);
  }
};
