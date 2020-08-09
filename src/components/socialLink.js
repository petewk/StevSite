import React, {Component} from 'react';

export default class SocialLink extends Component {
  render () {
    return(
      <section id="socialLink">
        <span id="buttonBanner">
          <div className="linkButton" id="facebook"><a href="#"><i className="fab fa-facebook-square"></i></a></div>
          <div className="linkButton" id="instagram"><a href="https://www.instagram.com/stevandersonkerr/"><i className="fab fa-instagram"></i></a></div>
        </span>
      </section>
    )
  }
}
