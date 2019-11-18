import React from 'react';
import github from '~/static/icons/github.svg';
import stacko from '~/static/icons/stacko.svg';
import twitter from '~/static/icons/twitter.svg';
import dribbble from '~/static/icons/dribbble.svg';
import sge from '~/static/sge.svg';

export default ({ scrollTop, title }) => (
  <footer>
    <div className="container grid">
      <div className="col">
        <nav>
          <ul>
            <li className="email">
              <a
                className="link"
                href="mailto:emmastorberg@hotmail.com?subject=Renting"
              >
                emmastorberg@hotmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);
