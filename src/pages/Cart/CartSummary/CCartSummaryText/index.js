import { SText } from "components/CartCard/styled";
import { Component } from "react";
import * as S from "./styled";

class CCartSummaryText extends Component {
  render() {
    return (
      <S.SCartSummaryTextWrapper className={this.props.className}>
        <SText
          fontSize={
            this.props.className?.includes("mini-cart") ? "16px" : "24px"
          }
          fontWeight={this.props.className?.includes("total") ? "600" : "400"}
          minWidth="98px"
        >
          {this.props.title}
        </SText>
        <SText
          fontSize={
            this.props.className?.includes("mini-cart") ? "16px" : "24px"
          }
          fontWeight="700"
        >
          {this.props.value}
        </SText>
      </S.SCartSummaryTextWrapper>
    );
  }
}

export default CCartSummaryText;
