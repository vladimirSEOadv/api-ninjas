import React, { ChangeEvent, useState } from "react";
import { getIpInfo } from "../../utils/getIpInfo";
import { Descriptions, Input, message, Typography } from "antd";
import IpData from "./types/types";
import { makeProps } from "./utils/makeProps";
import styles from "./styles/IpForm.module.css";
import { ipIsValid } from "./utils/validateIp";

const { Search } = Input;
const { Title } = Typography;

export const IpForm = () => {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [ipInfo, setIpInfo] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const showErrorMessage = (errorText: string) => {
    messageApi.open({
      type: "error",
      content: errorText,
    });
  };

  const onClickHandler = () => {
    if (ip === "" || !ipIsValid(ip)) {
      showErrorMessage("Введите валидный ip");
      return;
    }

    getIpInfo(ip, setLoading).then((response) => setIpInfo(response));
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIp(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Title level={2}>Get info about ip address</Title>
      {contextHolder}
      <Search
        value={ip}
        placeholder="input ip address"
        enterButton="Get info"
        size="large"
        onSearch={onClickHandler}
        onChange={onChangeHandler}
        loading={loading}
      />
      {ipInfo && (
        <>
          <Title level={3}>IP: {ipInfo.address}</Title>
          <Descriptions
            contentStyle={{ fontSize: "16px" }}
            labelStyle={{ fontSize: "16px" }}
            items={makeProps(ipInfo as IpData)}
          />
        </>
      )}
    </div>
  );
};
