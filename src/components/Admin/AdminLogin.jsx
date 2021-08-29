import React from "react";
import Header from "../Header";
import AdminForm from "./AdminForm";
import Footer from "../Footer";

function AdminLogin() {
  return (
    <div>
      <Header />
      <AdminForm
        cardClass="card card-helper-faculty text-center bg-light"
        greet="Hello Sir/Mam"
      />
      <Footer />
    </div>
  );
}
export default AdminLogin;
