import React, { useRef, useState } from 'react';
import PageTitle from '../components/PageTitle';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v6e5gws', // Service ID
        'template_js4cfyx', // Template ID
        form.current,
        'Rl278ZygRImAbAYHh' // Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            timer: 3000,
            showConfirmButton: false,
          });
          form.current.reset(); // Clear form
        },
        (error) => {
          console.error('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Please try again later.',
          });
        }
      );
  };

  return (
    <>
      <PageTitle title="Contact" />
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Digana, Kandy</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p><a href="tel:+94772347420">+94 77 234 7420</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:fmprabhath@gmail.com">fmprabhath@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                <i className="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://wa.me/94772347420" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://www.facebook.com/prabhathtkaluarachchi/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/prabhathtkaluarachchi/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/prabhathkaluarachchi/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/prabhathkaluarachchi" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

