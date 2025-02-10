import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';

function Contact() {
  const [messageSent, setMessageSent] = useState(false); // Track if the message is sent

  useEffect(() => {
    // Form submission handling
    const form = document.querySelector('.contact-form');

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission

      if (messageSent) return; // Prevent sending the message if it's already sent

      // Send the form data using Fetch API or any other method
      fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      })
        .then(function (response) {
          if (response.ok) {
            setMessageSent(true); // Set message as sent
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Message sent Successfully';
            successMessage.style.backgroundColor = '#4CAF50'; // Green background color
            successMessage.style.color = '#FFF'; // White text color
            successMessage.style.padding = '10px'; // Padding
            successMessage.style.marginBottom = '20px'; // Margin bottom
            successMessage.style.borderRadius = '5px'; // Border radius
            successMessage.style.textAlign = 'center'; // Text alignment
            successMessage.style.marginTop = '10px'; // Add margin to the top
            form.parentNode.insertBefore(successMessage, form.nextSibling);

            // Optionally, clear the form fields after successful submission
            form.reset();
          } else {
            // If there's an error in form submission, show an error message
            alert('Error: Message was not sent');
          }
        })
        .catch(function (error) {
          console.error('Error:', error);
          alert('Error: Message was not sent');
        });
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup the event listener when component unmounts
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [messageSent]); // Only re-run the effect if messageSent changes

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
                    <a href="https://wa.me/94772347420" target="_blank"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://www.facebook.com/prabhathtkaluarachchi/" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/prabhathtkaluarachchi/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/prabhathkaluarachchi/" target="_blank"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/prabhathkaluarachchi" target="_blank"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" action="https://api.web3forms.com/submit" method="post">
            <input type="hidden" name="access_key" value="2562225c-e961-46a6-923e-244675b3ce89" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <input type="hidden" name="subject" value="New msg from prabhath.me" />
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

