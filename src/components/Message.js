import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Message() {
  return (
    <div>
      <Header />
      <div className="message-page-main">
        <div className="container">
          <div className="message-section">
            <div className="message-form">
              <h2>Feel Free to Say Hi!</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <form>
                <div className="form-group">
                  <input type="text" class="form-control" placeholder="Name" />
                  <input type="text" class="form-control" placeholder="Email" />
                  <textarea
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                  <button type="button" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="message-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1308.363475685293!2d-74.20354444936507!3d40.73468789037134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25344fcb61c2d%3A0x40d3c09fb3d9843b!2sOld%20New%20St%2C%20Newark%2C%20NJ%2007103%2C%20USA!5e0!3m2!1sen!2sin!4v1643803015690!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Message;
