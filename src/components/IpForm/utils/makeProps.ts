import IpData from "../types/types";
import { DescriptionsProps } from "antd";

export const makeProps = (ipData: IpData): DescriptionsProps["items"] => {
  if (!ipData?.is_valid || Object.keys(ipData).length <= 0) {
    return [];
  } else {
    return Object.keys(ipData).map((key) => {
      const value = ipData[key as keyof IpData];
      return {
        key: key,
        label: key,
        children: key === "is_valid" ? value.toString() : value,
      };
    });
  }
};
