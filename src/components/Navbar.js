import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item header>blablabla</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home"/>
        </Menu.Item>
        <Menu.Item as={Link} to='/sweets' name='Sweets'>
        </Menu.Item>
        <Menu.Item as={Link} to='/sweets/new' name='Create A Sweet'>
        </Menu.Item>
        <Menu.Item as={Link} to='/about' name='About'>
        </Menu.Item>
        <Menu.Item as={Link} to='/contact' name='Contact Us'>
          <Icon name="mail"/>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
