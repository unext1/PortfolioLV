export default function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>About</h2>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
                  <img
                    src="https://instagram.fmmx3-1.fna.fbcdn.net/v/t51.2885-15/e35/117187357_612144326163570_3271286484533400684_n.jpg?_nc_ht=instagram.fmmx3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=pFhybUH3E-YAX8TMHda&oh=5e2191102ba13f4b03c5fcafb523b6eb&oe=5F60BBDA"
                    className="img-responsive"
                    alt="imageofme"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-descr">
                <p className="p-heading">
                  im a ux /ui designer austin based who loves clean, simple &amp; unique design. i also enjoy crafting
                  brand identities, icons, &amp; ilustration work.{' '}
                </p>
                <p className="separator">
                  To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine
                  told me what Occidental is. The European languages are members of the same family.English person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
