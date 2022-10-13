import CartCard from "components/CartCard";
import CButton from "components/CButton";
import CImage from "components/CImage";
import { GET_PRODUCT } from "GraphQL/Queries";
import { Component } from "react";
import { Interweave } from "interweave";
import * as S from "./styled";
import { withRouter } from "react-router-dom";
import { client } from "client";
import { CartContext } from "context/Cart";

class ProductPage extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.id = props.match.params.id;
    this.state = {
      mounted: false,
      curUrlIndex: 0,
      attributesLength: 0,
      selectedAttributes: [],
    };
  }

  componentDidMount() {
    const id = this.id;
    client
      .query({
        query: GET_PRODUCT,
        variables: { id },
      })
      .then(({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        if (data.product)
          this.setState({
            product: data.product,
            gallery: data.product.gallery,
            attributesLength: data.product.attributes.length,
            selectedAttributes: Array(data.product.attributes.length).fill(0),
          });
        return data;
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.product !== prevState.product) {
      this.setState({
        cartItem: {
          ...this.state.product,
          selectedAttributes: this.state.selectedAttributes,
        },
        mounted: true,
      });
    }
  }

  imageClickHandler(index) {
    return () => {
      this.setState({ curUrlIndex: index });
    };
  }

  addToCartHandler() {
    this.context.addToCart({ payload: this.state.cartItem });
  }

  attributeChangeHandler(attributeIndex, attributeValue) {
    this.setState((prevState) => {
      const newSelectedAttributes = [...prevState.selectedAttributes];
      newSelectedAttributes[attributeIndex] = attributeValue;
      const newCartItem = {
        ...prevState.cartItem,
        selectedAttributes: [...newSelectedAttributes],
      };
      return {
        selectedAttributes: newSelectedAttributes,
        cartItem: newCartItem,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.mounted && (
          <S.SProductPageWrapper>
            <S.SProductGalleryWrapper>
              <S.SProductGallery>
                {this.state.gallery?.map((url, index) => {
                  return (
                    <img
                      src={url}
                      alt={`img${index}`}
                      key={index}
                      onClick={this.imageClickHandler(index)}
                    />
                  );
                })}
              </S.SProductGallery>
            </S.SProductGalleryWrapper>
            <CImage
              imgUrl={this.state.gallery?.[this.state.curUrlIndex]}
              className="product_main_image"
            />
            <div>
              <CartCard
                className="product-page"
                product={this.state.cartItem}
                attributeChangeHandler={this.attributeChangeHandler.bind(this)}
              />
              <CButton
                className="add_to_cart"
                name="Add To Cart"
                disabled={!this.state.product.inStock}
                onClick={this.addToCartHandler.bind(this)}
              />
              <S.SProductDescription>
                <Interweave content={this.state.product.description} />
              </S.SProductDescription>
            </div>
          </S.SProductPageWrapper>
        )}
      </div>
    );
  }
}

export default withRouter(ProductPage);
