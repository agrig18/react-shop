import { Component } from "react";
import * as S from "./styled";

class SliderButton extends Component {
  render() {
    return <S.SSliderButton {...this.props}>{this.props.name}</S.SSliderButton>;
  }
}

export default SliderButton;
