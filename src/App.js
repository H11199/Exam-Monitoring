import React from "react";
import LoginPage from "./components/LoginPage";
import Examboard from "./components/Examboard";
import ExamPage from "./components/ExamPage";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminExamboard from "./components/Admin/AdminExamboard";
import AdminMonitoring from "./components/Admin/AdminMonitoring";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/login" exact component={LoginPage} />
        <Route path="/exam-portal" exact component={Examboard} />
        <Route path="/test/portal" exact component={ExamPage} />
        <Route path="/AdminLogin" exact component={AdminLogin} />
        <Route path="/test/monitor" exact component={AdminMonitoring} />
        <Route path="/ExamPage" exact component={ExamPage} />
        <Route path="/Admin-portal" exact component={AdminExamboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
