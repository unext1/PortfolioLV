export default function Hero() {
  return (
    <>
      <div id="hero" className="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="typed">Laurynas Valiulis</span>
            </h1>
            <p className="typed-items" data-typed-person="Alex Smith">
              Website Developer, Freelancer
            </p>

            <ul className="list-unstyled list-social">
              <li>
                <a href="https://www.instagram.com/laurysva/" target="__blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/laurynas.valiulis" target="__blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
