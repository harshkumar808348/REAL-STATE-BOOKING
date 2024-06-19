import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fnpm01xfbb5ldogu.us.auth0.com"
      clientId="iUCwlnLbduJREX1UQrouANzpjMyFGqVA"
      redirectUri="http://localhost:5173"
      audience="http://localhost:9000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
