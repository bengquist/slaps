import React from "react";
import AuthBox from "./AuthBox";
import * as Auth from "./styles";

function Login() {
  return (
    <Auth.Container>
      <Auth.Panel>
        <Auth.Title>LOG IN</Auth.Title>
        <Auth.Form>
          <Auth.FormBody>
            <Auth.Label>
              <p>Email or Username</p>
              <Auth.Input type="text" />
            </Auth.Label>
            <Auth.Label>
              <p>Password</p>
              <Auth.Input style={{ fontSize: "1.125rem" }} type="password" />
            </Auth.Label>
          </Auth.FormBody>

          <Auth.Button type="submit">LOG IN</Auth.Button>
        </Auth.Form>
        <p>OR</p>
        <AuthBox />
      </Auth.Panel>
    </Auth.Container>
  );
}

export default Login;
