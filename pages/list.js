import React, { Component } from "react";
import PageTemplate from "components/common/PageTemplate";

import ListContainer from "containers/PostListContainer";

class list extends Component {
  render() {
    return (
      <PageTemplate>
        <ListContainer />
      </PageTemplate>
    );
  }
}

export default list;
