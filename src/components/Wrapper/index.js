import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GlobalStyles from "app.styled";
import { Pages } from "pages";
import Header from "components/Header";
import { DEFAULT_CATEGORY } from "utils/constants";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.pages = this.getPages();
  }

  getPages() {
    return Object.keys(Pages).map((pageName) => {
      const Component = Pages[pageName].Component;
      return (
        <Route
          key={pageName}
          {...Pages[pageName].routeProps}
          path={Pages[pageName].route}
        >
          <Component />
        </Route>
      );
    });
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Switch>
            {this.pages}
            <Redirect to={`/list/${DEFAULT_CATEGORY}`}></Redirect>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Wrapper;
