import React from 'react';
import curriculo from '../images/curriculo/Curriculo2.pdf'

const PDFViewer = () => {
  return (
    <div style={{ width: "100%", height: "700px" }}>
      <embed src={curriculo} type='application/pdf' style={ {width:"100%", height:"100%"}}/>
    </div>
  );
};

export default PDFViewer;
