import React from "react";

const OpenedCase = ({ items }) => {
  // console.log(items)
  return (
    <div>
      <ul>
        <ol> Case ID :{items.caseId}</ol>
        <ol>Reference ID:{items.referenceId}</ol>
        <ol>First Name:{items.FirstName}</ol>
        <ol>Last Name:{items.LastName}</ol>
      </ul>
    </div>
  );
};
export default OpenedCase;
