import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './contact.css'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4sv9idr', 'template_603lswp', form.current, 'fJwcuLwO_DeU_NSDv')
      .then((result) => {
        toast.success("Email Sent Successfully")
        setTimeout(() => {
          e.target.reset();
        }, 1000);
      }, (error) => {
        console.log(error.text);
        toast.error("Email not sent")
        setTimeout(() => {
          e.target.reset();
        }, 1000);
      });
  };
  return (
    <section className="contact section" id='Contact'>
      <ToastContainer />
      <h2 className="section__title" title='Contact Section Title'>Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <svg className='contact__card-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">alaayasser2018@gmail.com</span>

              <a href="mailto:alaayasser2018@gmail.com" className="contact__button">Write me
                <svg className='contact__button-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
            </div>

            <div className="contact__card">
              <svg className='contact__card-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+201556774043</span>

              <a href="https://wa.me/201556774943" target="_blank" className="contact__button">Write me
                <svg className='contact__button-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
            </div>

            <div className="contact__card">
              <svg className='contact__button-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@alaayasser741</span>

              <a href="https://t.me/alaayasser741" target="_blank" className="contact__button">Write me
                <svg className='contact__button-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input required type="text" name="name" placeholder='Insert your name' className="contact__form-input" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input required type="email" name="email" placeholder='Insert your email' className="contact__form-input" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea required className="contact__form-input" name="project" placeholder='Write your project'></textarea>
            </div>

            <input type="submit" className="button button--flex" title='Send Message' value="Send Message">
            </input>
          </form>
        </div>

      </div >
    </section >
  )
}

export default Contact