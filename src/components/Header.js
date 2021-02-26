import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import Navbar from './Navbar';

class Header extends PureComponent {
  state = {
		open: false
	};

  handleClick = () => {
		this.setState({
			open: !this.state.open,
		});
	};

  render() {
    const { open } = this.state;

    return (
      <div className='Header'>
        {open && <Navbar update={this.update} />}
        <MenuButton open={open} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Header;