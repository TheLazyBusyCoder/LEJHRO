import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Innovations
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Business Services
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Financial services
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Lejhro Recruiter
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Programs</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Lejhro Bootcamp
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Support</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white ">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Connect with us</h3>
            <p className="fs-4 ">
              <a href="#" className="text-decoration-none text-white me-2">
                <AiFillFacebook />
              </a>
              <a href="#" className="text-decoration-none text-white me-2">
                <AiFillTwitterSquare />
              </a>
              <a href="#" className="text-decoration-none text-white me-2">
                <AiFillLinkedin />
              </a>
              <a href="#" className="text-decoration-none text-white">
                <AiFillYoutube />
              </a>
            </p>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2023 LEJHRO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
