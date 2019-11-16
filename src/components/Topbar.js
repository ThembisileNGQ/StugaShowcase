import React from 'react';
import Link from 'gatsby-link';

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
        <div
          className={`sans-serif grid container${this.state.showMenu
            ? ' showMenu'
            : ''}`}
        >
          <div className="col">
            <span className="name">
              <ul>
                <li>
                  <Link to="/" className="link">
                    {this.props.title}
                  </Link>
                </li>

                <li>
                  <Link className="link" to="/about">
                    Strand Stuga
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/about">
                    Other Stuga
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <div className="col">
            <nav onClick={this.handleMenuToggle}>
              <ul>
                <li>
                  <Link className="link" to="/about">
                    Om
                  </Link>
                </li>
                <li>
                  <a
                    className="external link"
                    href="mailto:emmastorberg@hotmail.com?subject=Förfrågan"
                  >
                    Kontakta
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menuicon" onClick={this.handleMenuToggle}>
            <span className="top" />
            <span className="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
