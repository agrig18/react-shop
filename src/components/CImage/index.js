import { Component } from "react";

class CImage extends Component {
  render() {
    const {
      dir = "/svg",
      format = "svg",
      fileName,
      alt = "img",
      imgUrl = "",
      className,
    } = this.props;
    return (
      <img
        src={imgUrl !== "" ? imgUrl : `${dir}/${fileName}.${format}`}
        alt={alt}
        className={`img_fluid ${className || ""}`}
      />
    );
  }
}

export default CImage;
