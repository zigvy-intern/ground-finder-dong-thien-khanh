import React from 'react';
import {Button, Row, Col, Navbar, NavItem, Nav,NavDropdown,MenuItem,FormGroup,FormControl,Glyphicon,PageFooter,ResponsiveEmbed,Grid} from 'react-bootstrap';
const Layout = ({content}) => (
  <Navbar inverse>
  <Nav>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text"  placeholder="Search, grounds,teams or someone..." />
      </FormGroup>
      {' '}
      <Button type="submit" ><Glyphicon glyph= "search"></Glyphicon></Button>
      </Navbar.Form>
      <NavItem eventKey={1} href="#">Find Match</NavItem>
      <NavItem eventKey={2} href="#">Grounds</NavItem>
      <NavItem eventKey={3} href="#">Messages</NavItem>
      <NavItem eventKey={4} href="#">Upcoming</NavItem>
      <NavDropdown  title={
        <Col xs={6} md={4}>
          <Glyphicon glyph="user"></Glyphicon></Col>} id="basic-nav-dropdown" >
      <MenuItem eventKey={1} href="#"><Glyphicon glyph= "log-in"></Glyphicon> Login</MenuItem>
      <MenuItem eventKey={1} href="#"><Glyphicon glyph= "log-out"></Glyphicon> Logout </MenuItem>
      <MenuItem eventKey={1} href="#"><Glyphicon glyph= "cog"></Glyphicon> Setting </MenuItem>
      </NavDropdown>
  </Nav>
</Navbar>
);
export default Layout
