import React from "react";
function ExamTiles(props) {
  return (
    <div class="card cardExamTiles">
      <div class="card-header">{props.cardHeader}</div>
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        <a href="/test/portal" className="btn btn-warning">
          Open Test
        </a>
      </div>
    </div>
  );
}
export default ExamTiles;
