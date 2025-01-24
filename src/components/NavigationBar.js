import React from "react";
const NavigationBar = () => {
  return (
    <div>
      <div class="navbar-inner">
        <ul class="navbarlist">
          <span class="mobile-only">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/courses"
              >
                All courses
              </a>
            </li>
          </span>

          <li class="avbar-list-item dropdown">
            <a href="/courses" class="navbar__list__anchor">
              Courses
              <i class="fa fa-chevron-down"></i>
            </a>
            <a
              id="subnavigation-toggle"
              href="#"
              class="subnavigation__toggle"
            ></a>
            <div class="subnavigation dropdown-menu">
              <a
                id="subnavigation-toggle"
                href="#"
                class="subnavigation__toggle"
              ></a>
              <ul class="subnavigation__list">
                <a
                  id="subnavigation-toggle"
                  href="#"
                  class="subnavigation__toggle"
                ></a>
                <li class="subnavigation__list__item">
                  <a
                    id="subnavigation-toggle"
                    href="#"
                    class="subnavigation__toggle"
                  ></a>
                  <a
                    class="subnavigation__list__anchor"
                    href="/immersivelearning"
                  >
                    View Immersive Learning
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="/bootcamps/immersive/full-stack-web-and-software-engineer/"
                  >
                    Full Stack Web Software Engineer bootcamp
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                             subnavigation__list__anchor--label subnavigation__list__anchor--label--blue 
                            "
                    href="/courses/"
                  >
                    View Online Bootcamps
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="/bootcamps/web-development/"
                  >
                    Web Developer
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="/bootcamps/software-engineering/"
                  >
                    Software Engineer
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="/bootcamps/data-science-bootcamp/"
                  >
                    Data Science
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                             subnavigation__list__anchor--label subnavigation__list__anchor--label--blue 
                            "
                    href="https://bootcamps.imperial.ac.uk/icl-courses/"
                  >
                    Imperial College London
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="https://bootcamps.imperial.ac.uk/icl-web-development/"
                  >
                    Web Developer
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="https://bootcamps.imperial.ac.uk/icl-software-engineering/"
                  >
                    Software Engineering
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor"
                    href="https://bootcamps.imperial.ac.uk/icl-data-science/"
                  >
                    Data Science
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a class="subnavigation__list__anchor" href="/courses/">
                    New Bootcamps
                  </a>
                </li>

                <li class="subnavigation__list__item">
                  <a
                    class="subnavigation__list__anchor
                            
                            "
                    href="/bootcamps/cyber-security/"
                  >
                    Cyber Security
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <span class="">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/pricing/"
              >
                Pricing
              </a>
            </li>
          </span>

          <span class="">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/human-mentoring/"
              >
                Our method
              </a>
            </li>
          </span>

          <span class="">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/for-partners"
              >
                For partners
              </a>
            </li>
          </span>

          <span class="mobile-only">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/account/login/"
              >
                Login
              </a>
            </li>
          </span>

          <span class="">
            <li class="avbar-list-item dropdown">
              <a
                id="navbar-list-anchor"
                class="navbar__list__anchor"
                href="/new/support/"
              >
                Contact us
              </a>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
