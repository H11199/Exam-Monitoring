import React from "react";
function AdminExamTiles(props) {
  return (
    <div class="card cardExamTiles">
      <div class="card-header">{props.cardHeader}</div>
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        <a href="/test/monitor" className="btn btn-warning">
          Monitor
        </a>
      </div>
    </div>
  );
}
export default AdminExamTiles;
