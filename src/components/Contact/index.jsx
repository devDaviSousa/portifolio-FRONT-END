import "./styles.scss";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useState, useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

export default function Contact() {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handlSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8tuo7hg",
        "template_nzyuewi",
        formRef.current,
        "user_rhXbCwDbhIW0zxIf8Jy2X"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>

      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your projects</h1>

          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 88 994847099
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              devsousadavi@gmail.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              José vieira,729 Creteús Ceará Brasil
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's you story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handlSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you,Email enviado"}
          </form>
        </div>
      </div>
    </div>
  );
}
