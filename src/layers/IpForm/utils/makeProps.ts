import IpData from "../types/types";
import { DescriptionsProps } from "antd";

export const makeProps = (ipData: IpData): DescriptionsProps["items"] => {
  if (!ipData) {
    return;
  } else {
    return Object.keys(ipData).map((key, index) => {
      return {
        key: index,
        label: key,
        children: key === "is_valid" ? ipData[key].toString() : ipData[key],
      };
    });
  }
};
