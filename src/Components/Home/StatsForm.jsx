import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { setFileData, setReportData } from "../../store/reducers/reportReducer";
import { findMax, findMin } from "../../store/actions/commonActions";
import { Button, Card, Form, Input } from "antd";

const StatsForm = () => {
  const [data, setData] = useState([]);
  const [maxX, setMaxX] = useState(null);
  const [maxY, setMaxY] = useState(null);
  const [maxZ, setMaxZ] = useState();
  const [maxKp, setMaxKp] = useState();
  const [minX, setMinX] = useState(null);
  const [minY, setMinY] = useState(null);
  const [minZ, setMinZ] = useState();
  const [minKp, setMinKp] = useState();

  const formData = useSelector((state) => state.home.form);
  const allFormData = useSelector((state) => state.report.reportData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    console.log("file upload", file);
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log("results", results.data);
        setData(results?.data);
        dispatch(setFileData(results?.data));

        const listX = [];
        const listY = [];
        const listZ = [];
        const listKp = [];

        results.data.map((item) => {
          listX.push(item.X * 1);
          listY.push(item.Y * 1);
          listZ.push(item.Z * 1);
          listKp.push(item.KP * 1);
        });

        setMaxX(findMax(listX));
        setMinX(findMin(listX));
        setMaxY(findMax(listY));
        setMinY(findMin(listY));
        setMaxZ(findMax(listZ));
        setMinZ(findMin(listZ));
        setMaxKp(findMax(listKp));
        setMinKp(findMin(listKp));

        let minX = findMin(listX);

        let listXMax = listX[0];
        let listXMin = listX[0];

        for (let i = 0; i < listX.length; i++) {
          if (listXMax < listX[i]) {
            listXMax = listX[i];
          }
          if (listXMin > listX[i]) {
            listXMin = listX[i];
          }
        }

        console.log("max X", Math.max.apply(null, listX));
        console.log("max X", listXMax);
        console.log("min X", listXMin);
        console.log("type of list x", typeof listX[0]);

        const sortedListX = listX.sort();
        console.log("Sorted  x", sortedListX);

        console.log("Sorted min x", sortedListX[0]);
        console.log("Sorted max x", sortedListX[sortedListX.length - 2]);
      },
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    let newFormData = {
      name: formData.name,
      desc: formData.desc,
      client: formData.client,
      contractor: formData.contractor,
      minX: minX,
      minY: minY,
      minZ: minZ,
      minKp: minKp,
      maxX: maxX,
      maxY: maxY,
      maxZ: maxZ,
      maxKp: maxKp,
    };

    console.log("formdata", newFormData);
    let dataArray = [...allFormData, newFormData];
    dispatch(setReportData(dataArray));

    navigate("/report");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {data.length ? (
        <Card>
          <Form
            name="maxMinForm"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            style={
              {
                // maxWidth: 600,
              }
            }
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Max X"
              name="maxX"
              initialValue={maxX}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Min X" name="minX" initialValue={minX}>
              <Input />
            </Form.Item>

            <Form.Item label="Max Y" name="maxY" initialValue={maxY}>
              <Input />
            </Form.Item>

            <Form.Item label="Min Y" name="minY" initialValue={minY}>
              <Input />
            </Form.Item>

            <Form.Item label="Max Z" name="maxZ" initialValue={maxZ}>
              <Input />
            </Form.Item>

            <Form.Item label="Min Z" name="minZ" initialValue={minZ}>
              <Input />
            </Form.Item>

            <Form.Item label="Max Kp" name="maxKp" initialValue={maxKp}>
              <Input />
            </Form.Item>

            <Form.Item label="Min Kp" name="minKp" initialValue={minKp}>
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Proceed
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : null}
    </>
  );
};

export default StatsForm;
