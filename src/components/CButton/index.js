import CImage from "components/CImage";
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
          {this.props.className === "counter" ? (
            <S.SSign>
              {this.props.name === "+" && (
                <CImage
                  fileName={
                    this.props.id === "mini-cart" ? "vertical-mini" : "vertical"
                  }
                />
              )}
              <CImage
                fileName={
                  this.props.id === "mini-cart"
                    ? "horizontal-mini"
                    : "horizontal"
                }
              />
            </S.SSign>
          ) : (
            <div>{this.props.name}</div>
          )}
        </S.SButton>
      </S.SButtonWrapper>
    );
  }
}

export default CButton;
