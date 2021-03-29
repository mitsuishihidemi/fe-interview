import React from "react";
import Text from "./Text";
import Space from "./Space";

const Footer: React.FC = () => (
  <Space padding="lg 0" fullWidth>
    <Text textAlign="center">
      Made with{" "}
      <span aria-label="love" role="img">
        💖
      </span>{" "}
      by Erica
    </Text>
  </Space>
);

export default Footer;
