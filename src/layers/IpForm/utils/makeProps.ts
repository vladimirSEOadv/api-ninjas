import IpData from "../types/types";
import { DescriptionsProps } from "antd";

export const makeProps = (ipData: IpData): DescriptionsProps["items"] => {
  if (ipData.is_valid) {
    return [];
  } else {
    return Object.keys(ipData).map((key, index) => {
      const value = ipData[key as keyof IpData];
      return {
        key: index,
        label: key,
        children: key === "is_valid" ? value.toString() : value,
      };
    });
  }
};
