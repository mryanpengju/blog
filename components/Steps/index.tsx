import {Divider, Steps} from "antd";
import React from "react";

const StepsComponents: React.FC = () => (
  <>
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: "Finished",
          description: "This is a description. This is a description.",
        },
        {
          title: "Finished",
          description: "This is a description. This is a description.",
        },
        {
          title: "In Progress",
          description: "This is a description. This is a description.",
        },
        {
          title: "Waiting",
          description: "This is a description.",
        },
        {
          title: "Waiting",
          description: "This is a description.",
        },
      ]}
    />
  </>
);

export default StepsComponents;
