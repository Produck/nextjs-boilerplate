import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";

import withReduxStore from "lib/with-redux-store";
import Core from "containers/base/Core";
import "style/base.scss";

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <>
            <Component {...pageProps} />
            <Core />
          </>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(CustomApp);
