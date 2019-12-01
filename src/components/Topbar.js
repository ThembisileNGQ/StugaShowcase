import React from 'react';
import Link from 'gatsby-link';
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/scss/react-flags-select.scss';

class Topbar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.topbar = {};
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    if (window.innerWidth <= 600) {
      this.setState({ showMenu: !this.state.showMenu });
    }
  }

  render() {
    const { scrollTop } = this.state;

    return (
      <div className="topbar">
        <div className={`sans-serif grid container${this.state.showMenu ? ' showMenu': ''}`}>
          <div>
            <span className={`${this.state.showMenu ? '': 'name'}`}>
              <nav onClick={this.handleMenuToggle}>
                <ul>
                  <li>
                    <Link to="/" className="link">
                      START
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/strandhuset">
                      STRANDHUSET
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/angstuga">
                      ÄNGSTUGAN
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/hittahit">
                      HITTA HIT
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/kontakt">
                      KONTAKT/BOKA
                    </Link>
                  </li>

                <li>
                <ReactFlagsSelect 
                  countries={["SE", "GB"]}
                  showSelectedLabel={false} 
                  showOptionLabel={false}
                  defaultCountry="SE" />
                </li>
                </ul>
              </nav>
            </span>
          </div>
          <div className="menuicon name" onClick={this.handleMenuToggle}>
            <span className="top" />
            <span className="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
