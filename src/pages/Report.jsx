import { Button, Card, Table } from "antd";
import React, { useRef } from "react";
import { reportColumns } from "../config/table.config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Report = () => {
  const pdfElement = useRef();
  const reportData = useSelector((store) => store.report.reportData);

  const generatePDF = useReactToPrint({
    content: () => pdfElement.current,
    documentTitle: "Report",
    onAfterPrint: () => alert("PDF Saved"),
  });

  return (
    <div style={{ padding: "50px" }}>
      <Link to="/">
        <Button style={{ paddingBottom: "10px" }}>Go Back</Button>
      </Link>
      <div ref={pdfElement}>
        <Card>
          <Table columns={reportColumns} dataSource={reportData} />
        </Card>
      </div>
      <div style={{ textAlign: "right" }}>
        <Button style={{ paddingBottom: "10px" }} onClick={generatePDF}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Report;
