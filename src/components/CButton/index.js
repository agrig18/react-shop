import { Component } from "react";
import * as S from "./styled";

class CButton extends Component {
  render() {
    return (
      <S.SButtonWrapper>
        <S.SButton
          id={this.props.id}
          className={this.props.className}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          {this.props.name}
        </S.SButton>
      </S.SButtonWrapper>
    );
  }
}

export default CButton;
