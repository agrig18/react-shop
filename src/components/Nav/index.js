import { Component } from "react";
import { GET_CATEGORIES } from "GraphQL/Queries";
import NavItem from "components/Nav/NavItem";
import * as S from "./styled";
import { client } from "client";

class CNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
    };
  }

  componentDidMount() {
    client
      .query({
        query: GET_CATEGORIES,
      })
      .then(({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        this.setState({ categories: data.categories });
        return data;
      });
  }

  render() {
    return (
      <S.SHeaderNavigation>
        <ul>
          {this.state.categories?.map((category, index) => (
            <NavItem categoryName={category.name} key={index} />
          ))}
        </ul>
      </S.SHeaderNavigation>
    );
  }
}

export default CNav;
