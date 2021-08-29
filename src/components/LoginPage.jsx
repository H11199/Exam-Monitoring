import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function LoginPage() {
  return (
    <div>
      <Header />
      <Form
        cardClass="card card-helper-student text-center bg-dark"
        greet="Wish You all the best 👍"
      />
      <Footer />
    </div>
  );
}
export default LoginPage;
