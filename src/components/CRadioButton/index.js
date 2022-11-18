import { Component } from "react";
import * as S from "./styled";

class CRadioButton extends Component {
  render() {
    return (
      <S.SWrapper>
        {this.props.type === "with-label" && (
          <S.SButtonLabel id={this.props.id}>{this.props.label}</S.SButtonLabel>
        )}
        {this.props?.items?.length > 1 ? (
          <S.StyledButtonsContainer gap={this.props.gap}>
            {this.props?.items?.map((item, index) => {
              return (
                <S.SRadioButtonWrapper>
                  {this.props.id.includes("cart") ? (
                    <S.SRadioButton
                      id={this.props.id}
                      name={this.props.name}
                      className={this.props.className}
                      key={this.props.name}
                      color={
                        this.props.className === "color"
                          ? item.displayValue
                          : ""
                      }
                      checked={this.props.selectedAttribute === index}
                      readOnly
                    />
                  ) : (
                    <S.SRadioButton
                      id={this.props.id}
                      name={this.props.name}
                      className={this.props.className}
                      key={index}
                      value={index}
                      color={
                        this.props.className === "color"
                          ? item.displayValue
                          : ""
                      }
                      onChange={this.props.onChange}
                      defaultChecked={index === 0}
                    />
                  )}
                  {this.props.className !== "color" && (
                    <S.SRadioButtonLabel id={this.props.id}>
                      {item.displayValue}
                    </S.SRadioButtonLabel>
                  )}
                </S.SRadioButtonWrapper>
              );
            })}
          </S.StyledButtonsContainer>
        ) : (
          <S.SRadioButton id={this.props.id} className={this.props.className} />
        )}
      </S.SWrapper>
    );
  }
}

export default CRadioButton;
