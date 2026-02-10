import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Twoje imię" />
        <input type="email" placeholder="Twój email" />
        <textarea placeholder="Wiadomość"></textarea>
        <button type="submit">Send</button>
        <img src="/images/download.jpg" alt="obrazek" />
      </form>
    </section>
  );
};

export default Contact;