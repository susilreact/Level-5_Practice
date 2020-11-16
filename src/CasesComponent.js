import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const CasesComponent = ({ cases, handleClick }) => {
  const columns = [
    { dataField: "caseId", text: "CASE ID" },
    { dataField: "referenceId", text: "REFERENCE ID" },
    { dataField: "FirstName", text: "FIRST NAME" },
    { dataField: "LastName", text: "LASTN AME" }
  ];

  const rowEvents = {
    onClick: (e, row) => {
      // console.log(row)
      handleClick(row);
    }
  };
  return (
    <div class="container">
      <h1> Welcome to CasesComponent ! </h1>
      <BootstrapTable
        keyField="caseId"
        data={cases}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
};

export default CasesComponent;
