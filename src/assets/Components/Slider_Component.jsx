const Slider_Component = () => {
    return (
      <div className="background mt-5">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            {/* Add more buttons for additional slides */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png" className="d-block w-100" alt="Slide 1"/>
              <div className="carousel-caption d-none d-md-block text-dark">
                <h1 className="text-danger">30% Off</h1>
                <h1><b>Comfort Chair</b></h1>
                <h4>Collect From Daxone & get 30% Discount.</h4>
                <button className="btn btn-outline-danger">SHOP NOW</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="\src\assets\img\hm1-single-2.webp" className="d-block w-100" alt="Slide 2"/>
              <div className="carousel-caption d-none d-md-block text-dark">
                <h1 className="text-danger">30% Off</h1>
                <h1><b>Comfort Chair</b></h1>
                <h4>Collect From Daxone & get 30% Discount.</h4>
                <button className="btn btn-outline-danger">SHOP NOW</button>
              </div>
            </div>
            {/* Add more carousel items if needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export { Slider_Component };
  