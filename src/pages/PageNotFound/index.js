import { Component } from "react";
import * as S from "./styled";

class PageNotFound extends Component {
  render() {
    return (
      <S.ErrorMessageWrapper>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
      </S.ErrorMessageWrapper>
    );
  }
}

export default PageNotFound;
