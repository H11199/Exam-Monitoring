import React from "react";
import { useHistory } from "react-router";
import AdminExamTiles from "./AdminExamTiles";
function AdminExamboard() {
  const history = useHistory();
  let { email, pass } = JSON.parse(localStorage.getItem("Admin-info"));
  function logout() {
    localStorage.clear();
    history.push("/AdminLogin");
  }
  return (
    <div className="Examboard-main">
      <h3 className="Examboard-header">Welcome Back {email}</h3>
      <div className="container">
        <AdminExamTiles
          cardHeader="FAT CH200100201"
          cardTitle="Data Structures and Algorithms"
          cardText="This test will not be open before 30-08-2021 10:30 IST and will
              close on 30-08-2021 12:30 IST"
        />
        <AdminExamTiles
          cardHeader="FAT CH20111201"
          cardTitle="Database Management System"
          cardText="This test will not be open before 31-08-2021 10:30 IST and will
              close on 31-08-2021 12:30 IST"
        />
        <AdminExamTiles
          cardHeader="FAT CH202110201"
          cardTitle="Operating Systems"
          cardText="This test will not be open before 01-09-2021 10:30 IST and will
              close on 01-09-2021 12:30 IST"
        />
      </div>
      <button class="nav-link btn btn-warning" onClick={logout} type="submit">
        LogOut
      </button>
    </div>
  );
}
export default AdminExamboard;
