export default function Portfolio() {
  return (
    <>
      <div id="portfolio" style={{ background: 'white' }}>
        <div class="container">
          <div class="section-title text-center">
            <h2>My Portfolio</h2>
          </div>
        </div>
        <div class="container">
          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 ">
              <div className="photo-effect">
                <img
                  src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/101589270_2430535333904758_5758058453822078976_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=Fh_a1kpnM3QAX_AHVCC&_nc_ht=scontent.fmmx3-1.fna&oh=8fe4449f34f9fff9167dd8a6e00db93b&oe=5F5EC837"
                  class="img-fluid"
                  alt=""
                ></img>
                <div class="overlay"></div>
                <div class="photo-button">
                  <a href="/" target="blank">
                    View project
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className="photo-effect">
                <img
                  src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.15752-0/p280x280/118004779_1631425530370314_6365072364900257323_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=WBODbDtRB0YAX_dzXyi&_nc_ht=scontent.fmmx3-1.fna&oh=b4ea0a2b5f3137ee1a0c0428c29b2baa&oe=5F62A9AC"
                  class="img-fluid"
                  alt=""
                ></img>
                <div class="overlay"></div>
                <div class="photo-button">
                  <a href="/" target="blank">
                    View project
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
