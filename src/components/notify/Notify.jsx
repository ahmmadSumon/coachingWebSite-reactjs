import React, { useState } from 'react';
import "../notify/notify.scss";

const Notify = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your logic to save the email data
    console.log(`Email submitted: ${email}`);
    // You can send a request to your backend or save it in your state management system
  };

  return (
    <div>
      <section className="notify container-fluid">
        <div className="container">
          <div className="row notify-row">
            <div className="col-md-6 notify-col">
              <h3>Get notified when I publish new articles</h3>
              <p>
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>
            <div className="col-md-6 notify-col2">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notify;
