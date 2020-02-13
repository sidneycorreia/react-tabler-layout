import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-primary" id="navbar-primary">
        <div className="container">
          <a href="." className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal">
            <img src="./static/logo.svg" alt="Tabler" className="navbar-brand-logo navbar-brand-logo-large"/>
            <img src="./static/logo-small.svg" alt="Tabler" className="navbar-brand-logo navbar-brand-logo-small"/>
          </a>
          <div className="navbar-collapse collapse">
            <h6 className="navbar-heading">Navigation</h6>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="./index.html" >
                  <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </span>
                  <span className="nav-link-title">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./form-elements.html" >
                  <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                  </span>
                  <span className="nav-link-title">Forms</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#navbar-base" data-toggle="dropdown" role="button"
			   aria-expanded="false" >
                  <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </span>
                  <span className="nav-link-title">Base</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-arrow dropdown-menu-columns  dropdown-menu-columns-2">
                  <li >
                    <a className="dropdown-item" href="./blank.html" >
                      Starter page
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./buttons.html" >
                      Buttons
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./cards.html" >
                      Cards
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./charts.html" >
                      Charts
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./datatables.html" >
                      Data Tables
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./calendar.html" >
                      Calendar
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./carousel.html" >
                      Carousel
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./lists.html" >
                      Lists
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./users.html" >
                      Users
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./gallery.html" >
                      Gallery
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./profile.html" >
                      Profile
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="./music.html" >
                      Music
                    </a>
                  </li>
                  <li className="dropright">
                    <a className="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-toggle="dropdown" role="button" aria-expanded="false" >
                      Authentication
                    </a>
                    <div className="dropdown-menu">
                      <a href="./sign-in.html" className="dropdown-item">Sign in</a>
                      <a href="./sign-up.html" className="dropdown-item">Sign up</a>
                      <a href="./forgot-password.html" className="dropdown-item">Forgot password</a>
                      <a href="./terms-of-service.html" className="dropdown-item">Terms of service</a>
                    </div>
                  </li>
                  <li className="dropright">
                    <a className="dropdown-item dropdown-toggle" href="#sidebar-error" data-toggle="dropdown" role="button" aria-expanded="false" >
                      Error pages
                    </a>
                    <div className="dropdown-menu">
                      <a href="./400.html" className="dropdown-item">400 page</a>
                      <a href="./401.html" className="dropdown-item">401 page</a>
                      <a href="./403.html" className="dropdown-item">403 page</a>
                      <a href="./404.html" className="dropdown-item">404 page</a>
                      <a href="./500.html" className="dropdown-item">500 page</a>
                      <a href="./503.html" className="dropdown-item">503 page</a>
                      <a href="./maintenance.html" className="dropdown-item">Maintenance page</a>
                    </div>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item d-none-navbar-vertical" title="Soon" data-toggle="tooltip">
                <a href="#" className="nav-link disabled">
                  <span className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                  </span>
                  <span className="nav-link-title">Customize</span>
                </a>
              </li>
            </ul>
            <h6 className="navbar-heading mt-4">Tools</h6>
            <div className="navbar-side d-none-navbar-vertical-narrow">
              <div className="d-none d-xl-block ml-auto">
                <form action="." method="get">
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input type="text" className="form-control" placeholder="Search…"/>
                  </div>
                </form>
              </div>
              <a href="#" className="btn btn-primary d-none-navbar-horizontal btn-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                Customize
              </a>
            </div>
          </div>
        </div>
      </nav>
        <nav className="navbar navbar-light navbar-secondary navbar-expand" id="navbar-secondary">
          <div className="container">
            <a href="." className="navbar-brand navbar-brand-autodark d-none-navbar-vertical">
              <img src="./static/logo.svg" alt="Tabler" className="navbar-brand-logo navbar-brand-logo-large"/>
              <img src="./static/logo-small.svg" alt="Tabler" className="navbar-brand-logo navbar-brand-logo-small"/>
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon dropdown-item-icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon dropdown-item-icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon dropdown-item-icon"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Separated link</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <main className="container">
            <div className="empty">
              <div className="empty-icon">
                <img src="./static/illustrations/undraw_quitting_time_dm8t.svg" className="h-8 mb-4" alt=""/>
              </div>
              <p className="empty-title h3">No results found</p>
              <p className="empty-subtitle text-muted">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="empty-action">
                <a href="./." className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  Search again
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}