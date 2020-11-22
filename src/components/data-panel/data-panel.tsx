import React from 'react';
import './data-panel.css';
import DateChecker from "../date-checker";
import AttributeSelector from "../attribute-selector";

const DataPanel = () => {
  return (
    <div className="data-panel">
      <DateChecker />
      <AttributeSelector />
    </div>
  )
}

export default DataPanel;