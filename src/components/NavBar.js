import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import RouteNavItem from "../../components/RouteNavItem";

export default class NavBar extends Component {

  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/admin">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {this.props.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : [
                <RouteNavItem key={1} href="/login">
                  Login
                </RouteNavItem>
              ]}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
