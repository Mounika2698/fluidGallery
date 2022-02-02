import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import google from "./assets/google.svg";
import linkedin from "./assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer class="footer-main text-center text-white">
        <div class="container">
          <section class="footer-links">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i class="fa fa-facebook"></i> */}
              <img src={facebook}/>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src={twitter}/>

            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src={google}/>

            </a>
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src={linkedin}/>

            </a>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;