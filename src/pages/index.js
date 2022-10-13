import ProductPage from "pages/Product";
import CartPage from "pages/Cart";
import CategoriesListPage from "pages/Categories";
import PageNotFound from "./PageNotFound";

export const Pages = {
  CategoryList: {
    route: "/list/:category",
    name: "categoryList",
    Component: CategoriesListPage,
    options: {},
    routeProps: {
      exact: true,
    },
  },
  Cart: {
    route: "/cart",
    name: "cart",
    Component: CartPage,
    options: {},
    routeProps: {},
  },
  Product: {
    route: "/product/:id",
    name: "product",
    Component: ProductPage,
    options: {},
    routeProps: {
      exact: true,
    },
  },
  Error: {
    route: "/404",
    name: "Error",
    Component: PageNotFound,
    options: {},
    routeProps: {},
  },
};
