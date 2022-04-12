import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

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
      <p className="contact-heading">Say Hello.</p>
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
        <Info>
          <h3>Phone</h3>
          <p>(647) 295 4632</p>
          <h3>Email</h3>
          <p>arshdeep4909@gmai.com</p>
        </Info>
      </ContactGrid>
    </ContactForm>
  );
}

const ContactForm = styled.div`
  max-width: 1600px;
  margin: auto;
  text-align: center;
  h2 {
    margin-top: 50px;
    color: #9adcf0;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .contact-heading {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 4rem;
  form {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    input {
      width: 400px;
      height: 30px;
      margin: 10px;
    }
    textarea {
      width: 400px;
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
  }
`;

const Info = styled.div``;

export default Contact;
