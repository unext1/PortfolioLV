export default function Header() {
  const [drawer, setDrawer] = React.useState(false);

  const session = true;

  return (
    <>
      <nav className="navbar navbar-dark bg-dark" style={{ position: 'fixed' }}>
        <form class="form-inline">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setDrawer(!drawer)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img
              src="https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png"
              width="30"
              height="30"
              class="ml-2"
              alt=""
            />
            Laurynas
          </a>
        </form>

        {session ? (
          <img
            width="35"
            height="35"
            style={{ borderRadius: '50%', marginRight: 15 }}
            src="https://yt3.ggpht.com/-w4p8o7B5X2g/AAAAAAAAAAI/AAAAAAAAAAA/oUcPJaWgnPY/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
          />
        ) : (
          <button type="button" class="btn btn-outline-secondary mr-2" style={{ width: 130 }}>
            <i className="fa fa-user mr-2"></i>
            Sign In
          </button>
        )}
      </nav>

      {drawer ? (
        <div id="mySidenav" className="sidenav">
          <div className="on-hover" style={{ display: 'flex' }}>
            <i className="icon fa fa-home mr-4"></i>
            <a href="#hero" className="sidenav-link">
              Home
            </a>
          </div>

          <div className="on-hover" style={{ display: 'flex' }}>
            <i className="icon fa fa-question" style={{ marginRight: '31px' }} />
            <a href="#about" className="sidenav-link">
              About
            </a>
          </div>
          <div className="on-hover" style={{ display: 'flex' }}>
            <i className="icon fa fa-address-card " style={{ marginRight: '19px' }}></i>
            <a href="#portfolio" className="sidenav-link">
              Portfolio
            </a>
          </div>
          <div className="on-hover" style={{ display: 'flex' }}>
            <i className="icon fa fa-book mr-4"></i>
            <a href="#contact" className="sidenav-link">
              Contact
            </a>
          </div>
          <div style={{ backgroundColor: '#333', width: '200px', height: '1px', marginTop: 10, marginBottom: 10 }} />
        </div>
      ) : (
        <div id="mySidenav" className="sidenav-small">
          <div className="on-hover">
            <a href="#hero">
              <i className="fa fa-home icon"></i>
              Home
            </a>
          </div>
          <div className="on-hover">
            <a href="#about">
              <i className="fa fa-question icon"></i>
              About
            </a>
          </div>
          <div className="on-hover">
            <a href="#portfolio">
              <i className="fa fa-address-card icon"></i>
              Portfolio
            </a>
          </div>
          <div className="on-hover">
            <a href="#contact">
              <i className="fa fa-book icon"></i>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
