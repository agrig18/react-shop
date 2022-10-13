import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      categoryName: props.categoryName,
    };
  }

  setIsActive(isActive) {
    if (this.state.isActive !== isActive) {
      this.setState({ isActive: isActive });
    }
  }

  render() {
    return (
      <li className={this.state.isActive ? "active-class" : ""}>
        <NavLink
          to={`/list/${this.state.categoryName}`}
          className={(isActive) => {
            this.setIsActive(isActive);
          }}
          isActive={() =>
            this.props.location.pathname.includes(this.state.categoryName) ||
            (!this.props.location.pathname.includes("list") &&
              this.state.isActive)
          }
        >
          {this.state.categoryName}
        </NavLink>
      </li>
    );
  }
}

export default withRouter(NavItem);
