import CCard from "components/CCard";
import { GET_CATEGORY_PRODUCTS } from "GraphQL/Queries";
import * as S from "./styled";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { client } from "client";

class CategoriesListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: null,
      categoryName: null,
    };
  }

  fetchByCategory() {
    const category = this.props.match.params.category;
    client
      .query({
        query: GET_CATEGORY_PRODUCTS,
        variables: {
          input: {
            title: category,
          },
        },
      })
      .then(({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        if (data.category) this.setState({ data: data });
        return data;
      });
  }

  componentDidMount() {
    this.fetchByCategory();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      this.setState({
        productsList: this.state.data?.category?.products,
        categoryName: this.state.data?.category?.name,
      });
    }

    if (this.state.categoryName !== this.props.match.params.category) {
      this.fetchByCategory();
    }
  }

  render() {
    const categoryName =
      this.state.categoryName?.charAt(0).toUpperCase() +
        this.state.categoryName?.slice(1) || "";
    return (
      <S.CategoriesListWrapper>
        <S.CategoryTitle>{categoryName}</S.CategoryTitle>
        <S.ProductsListWrapper>
          {this.state.productsList?.length &&
            this.state.productsList?.map((product) => {
              return <CCard key={product.id} product={product} />;
            })}
        </S.ProductsListWrapper>
      </S.CategoriesListWrapper>
    );
  }
}

export default withRouter(CategoriesListPage);
