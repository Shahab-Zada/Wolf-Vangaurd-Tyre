"use client";

export default function Contact() {
  return (
    <section className="section bg-black text-center py-5">
      <h2 className="red mb-3">Get in Touch</h2>
      <p className="lead-text mb-5">
        Have questions or want to reach us? We’re always here to help! Connect with us through your preferred method below.
      </p>

      <div className="contact-cards">
        {/* Location Card */}
        <div className="card">
          <span className="icon">📍</span>
          <h3>Our Location</h3>
          <p>Islamabad, Pakistan</p>
        </div>

        {/* Phone Card */}
        <div className="card">
          <span className="icon">📞</span>
          <h3>Call Us</h3>
          <p>+92 300 1234567</p>
        </div>

        {/* WhatsApp Card */}
        <div className="card">
          <span className="icon">💬</span>
          <h3>WhatsApp</h3>
          <p>Chat with us directly!</p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom mt-2"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      <style jsx>{`
        .red {
          color: #ff4d4d;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .lead-text {
          color: #ddd;
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .card {
          background: #1c1c1c;
          color: white;
          padding: 30px 20px;
          border-radius: 15px;
          width: 250px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(255, 77, 77, 0.4);
        }

        .icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 1.4rem;
        }

        p {
          font-size: 1rem;
          margin-bottom: 0;
        }

        .btn-custom {
          background-color: #25d366;
          color: white;
          padding: 8px 18px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .btn-custom:hover {
          background-color: #1ebe5d;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}