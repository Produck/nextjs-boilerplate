import React from "react";

import HeaderContainer from "containers/common/HeaderContainer";

export default ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <div>Footer</div>
  </div>
);
