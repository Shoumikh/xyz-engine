import { Button, Card, Steps, message, theme } from "antd";
import React, { useState } from "react";
import BasicForm from "./BasicForm";
import StatsForm from "./StatsForm";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../store/reducers/homeReducer";

const StepList = () => {
  const { token } = theme.useToken();
  const currentStep = useSelector((state) => state.home.currentStep);

  const dispatch = useDispatch();

  // @desc : List of all the steps
  const steps = [
    {
      title: "Step 1",
      content: <BasicForm />,
    },
    {
      title: "Step 2",
      content: <StatsForm />,
    },
  ];

  // @desc: back to previous step
  const prev = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  // @desc: steps title and keys
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Card
        style={{ marginLeft: "50px", marginRight: "50px" }}
        title="XYZ Engine"
        bordered={false}
      >
        <Steps
          current={currentStep}
          items={items}
          style={{
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        />
        <div style={contentStyle}>{steps[currentStep].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {currentStep > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Go Back
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};

export default StepList;
