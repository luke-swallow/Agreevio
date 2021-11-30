import Figure from 'react-bootstrap/Figure';
import "../styles/Common.css";
import search from "../assets/img/search.png";
import analyze from "../assets/img/analyze.png";
import service from "../assets/img/service.png";

function HomePage() {
  return (
    <div>
      <div class="container">

        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-5" data-aos="fade-up">
            <h3 class="section-heading">Privacy rights made transparent</h3>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <Figure.Image width={50} height={8} src={search} />
                <i class="bi bi-people"></i>
              </div>
              <h3 class="mb-3">Search Documents</h3>
              <p>Search public documents before signing up for online products and services.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <Figure.Image width={50} height={8} src={analyze} />
                <i class="bi bi-brightness-high"></i>
              </div>
              <h3 class="mb-3">Analyze User Agreements</h3>
              <p>Analyze complex languange using an easy and understandible tool.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-1 text-center">
              <div class="wrap-icon icon-1">
                <Figure.Image width={51} height={9} src={service} />
                <i class="bi bi-bar-chart"></i>
              </div>
              <h3 class="mb-3">Enterprise Services</h3>
              <p>Get key insights on how your potential customers view your user agreements.</p>
            </div>
          </div>
        </div>

      </div>    
    </div>
  )
}

export default HomePage;