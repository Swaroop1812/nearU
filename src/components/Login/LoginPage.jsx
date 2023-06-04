import React, { useState } from "react";
import RiderLoginPage from "./RiderLoginPage";
import DriverLoginPage from "./DriverLoginPage";

function LoginPage() {
  const [userType, setUserType] = useState("rider");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="userType">I am a:</label>
        <select id="userType" value={userType} onChange={handleUserTypeChange}>
          <option value="rider">Rider Login</option>
          <option value="driver">Driver Login</option>
        </select>
      </div>
      {userType === "rider" ? <RiderLoginPage /> : <DriverLoginPage />}
    </div>
  );
}

export default LoginPage;
