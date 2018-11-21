import React from "react";

import Header from "components/common/Header";

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <div>Footer</div>
  </div>
);
