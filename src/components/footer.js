import React from 'react';
import Logo from '../components/logo'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Logo width="48" />
        <p className="larger">We're located in beautiful Greenville, SC.</p>
        <p className="smaller">&copy; 2019 TAKE SHAPE LLC. All Rights Reserved.</p>
      </footer>
    )
  }
};

export default Footer;