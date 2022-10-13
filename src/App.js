import { ApolloProvider } from "@apollo/client";
import Wrapper from "components/Wrapper";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { client } from "client";
import CartProvider from "context/Cart";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StyledThemeProvider theme={{ mode: "default" }}>
          <CartProvider>
            <Wrapper />
          </CartProvider>
        </StyledThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
