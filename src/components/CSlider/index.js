import SliderButton from "components/CSlider/SliderButton";
import { Component } from "react";
import * as S from "./styled";

class CSlider extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
    };
  }

  onForward() {
    if (this.state.slideIndex !== this.props.gallery.length) {
      this.setState((prevState) => {
        return { slideIndex: prevState.slideIndex + 1 };
      });
    } else if (this.state.slideIndex === this.props.gallery.length) {
      this.setState({ slideIndex: 1 });
    }
  }

  onBack() {
    if (this.state.slideIndex !== 1) {
      this.setState((prevState) => {
        return { slideIndex: prevState.slideIndex - 1 };
      });
    } else if (this.state.slideIndex === 1) {
      this.setState({ slideIndex: this.props.gallery.length });
    }
  }

  render() {
    return (
      <S.SSlider className={this.props.className}>
        {this.props.gallery?.map((url, index) => {
          return (
            <S.SSlide
              key={index + 1}
              className={this.state.slideIndex === index + 1 ? "active" : ""}
            >
              <img src={url} alt={`img${index}`} />
            </S.SSlide>
          );
        })}
        {this.props.className === "cart" && this.props.gallery?.length > 1 && (
          <S.SSliderButtons>
            <SliderButton name={"<"} onClick={this.onBack.bind(this)} />
            <SliderButton name={">"} onClick={this.onForward.bind(this)} />
          </S.SSliderButtons>
        )}
      </S.SSlider>
    );
  }
}

export default CSlider;
