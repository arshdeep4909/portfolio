import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";

function Contact() {
  //Event Handler
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ii2lrkh",
        "template_al2hqt6",
        form.current,
        "Ei_x6vB9af-kYIXAO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactForm>
      <h2>Contact</h2>
      <p className="semi-heading">Say Hello.</p>
      <ContactGrid>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            name="name"
          />
          <input type="email" placeholder="Email id" required name="email" />
          <input type="text" placeholder="Subject" required name="subject" />
          <textarea
            id="message"
            rows="4"
            placeholder="Message..."
            name="message"
          ></textarea>
          <button type="submit" value="Send">
            {" "}
            Send
          </button>
        </form>
        <div>
          <h3>Phone</h3>
          <p>(647) 295 4632</p>
          <h3>Email</h3>
          <p>arshdeep4909@gmai.com</p>
          <h3>Address</h3>
          <p>23 Amherst Dr.</p>
          <p>Kitchener Ontario Canada</p>
          <p>N2P 1C9</p>
        </div>
      </ContactGrid>
      <div className="top-scroll">
        <p>Back to Top </p>
        <button className="ScrollButton">
          <FaAngleUp />
        </button>
      </div>
    </ContactForm>
  );
}

const ContactForm = styled.div`
  max-width: 1400px;
  margin: auto;
  text-align: center;
  h2 {
    margin-top: 6rem;
  }
  .top-scroll {
    display: flex;
    align-items: center;
    position: absolute;
    right: 25px;
    margin-top: 30px;
    p {
      margin-right: 15px;
    }
    button {
      margin: 0;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 4rem;
  h3 {
    margin-top: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    input {
      /* width: 400px; */
      height: 30px;
      margin: 10px;
    }
    textarea {
      /* width: 400px; */
      height: 80px;
      margin: 10px;
    }

    button {
      width: 70px;
      border-radius: 5px;
      margin: 10px;
      border: none;
      padding: 5px;
      background-color: black;
      color: white;
      transition: all 0.3s ease;
      border: 2px solid black;
      &:hover {
        cursor: pointer;
        border: 2px solid black;
        background-color: white;
        color: black;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    form {
      margin: 2rem;
    }
  }
`;

export default Contact;
