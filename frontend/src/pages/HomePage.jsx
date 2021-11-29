
import "../styles/Common.css";


function HomePage() {
  return (
    <div>
      <section className=" hero-section jumbotron text-center ">
        <div className="container mt-20">
          <h1 className="jumbotron-heading">User Agreement Analyzer</h1>
          <p className="">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
         <div className="container mt-15 row align-items-center">
           <div className= "col-5">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary my-2">Search Agreements</a>
              </div>
          </div>
           </div>
           <div className= "col-5">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary my-2">Search Agreements</a>
              </div>
          </div>
           </div>
         </div>
          

        </div>
      </section>

    <section class="section">
      <div class="container">

        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-5" data-aos="fade-up">
            <h2 class="section-heading">Save your time to using Agreevio</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <i class="bi bi-people"></i>
              </div>
              <h3 class="mb-3">Explore Your Team</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <i class="bi bi-brightness-high"></i>
              </div>
              <h3 class="mb-3">Digital Whiteboard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <i class="bi bi-bar-chart"></i>
              </div>
              <h3 class="mb-3">Design To Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    
    </div>
   

      
  )
}

export default HomePage;