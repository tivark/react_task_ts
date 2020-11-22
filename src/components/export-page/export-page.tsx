import React from "react";
import OptionsPanel from "../options-panel";
import DataPanel from "../data-panel";
import RequestButton from "../request-button";

import './export-page.css';

const ExportPage = () => {
  return (
    <div className="export-page-container">
      <h3 className='export-page__title'>Экспорт данных</h3>
      <div className='panels-wrapper'>
        <OptionsPanel/>
        <DataPanel/>
      </div>
      <RequestButton />
    </div>
  )
}

export default ExportPage;