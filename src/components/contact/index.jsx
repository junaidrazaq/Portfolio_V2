import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { RotatingSquare } from "react-loader-spinner";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      width: 200,
      height: 200,
      backgroundColor: "#00000033",
      borderRadius: "50%",
      border: "1px solid black",
      position: "absolute",
      left: -100,
      top: -100,
    }}
  />
);

const defaultProps = {
  center: {
    lat: +52.4539,
    lng: -1.8952,
  },
  zoom: 15,
};

// ==================================================
// Contact Component ================================
// ==================================================
const Contact = () => {
  // State
  const form = useRef();
  const [loading, setLoading] = React.useState(false);

  // FN: Handle Send Email
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sendEmail = await emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    );
    setLoading(false);

    if (sendEmail?.status === 200) {
      alert("Email sent successfully");
      form.current.reset();
    } else {
      alert(
        "Oops! Something went wrong. Please get in touch with me at junaid.razaq@hotmail.com"
      );
    }
  };

  // ================ //
  // ==== Render ==== //
  return (
    <>
      <div className="container">
        <h3 className="dark_text section_heading_text">
          Here's how to get in touch with me
        </h3>

        <div className="contact_map_container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={52.4539} lng={-1.8952} />
          </GoogleMapReact>
          <div className="contact_form_container">
            <form
              className="contact_form_wrapper"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="dark_text contact_heading">Send over an email!</h2>
              <div className="contact_form_input">
                <label>Name</label>
                <input type="text" name="user_name" />
              </div>
              <div className="contact_form_input">
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div className="contact_form_input">
                <label>Message</label>
                <textarea rows={7} name="message" />
              </div>
              <input
                disabled={loading}
                className="contact_form_button"
                type="submit"
                value="Send"
              />
              {loading && (
                <div className="loader_container">
                  <div className="loader_wrapper">
                    <RotatingSquare
                      height="30"
                      width="30"
                      color="green"
                      ariaLabel="loading"
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
