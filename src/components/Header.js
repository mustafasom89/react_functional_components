import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <div class="header">
      <div class="banner-wrapper custom-wrapper">
        <div class="banner-text">
          <p class="first-paragraph">Learn more about our bootcamps. </p>
          <span class="divider"></span>
          <p class="second-paragraph">Join our next info session webinar!</p>
        </div>

        <a href="https://app.livestorm.co/hyperion-development/imperial-college-london-online-info-session">
          <button class="banner-button" id="open_day-btn-desktop">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
