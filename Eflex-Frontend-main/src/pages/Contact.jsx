import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://eflex-backend.vercel.app/contact", form);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "✅ we reached at you soon!",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "❌ Failed to submit form. Try again.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "❌ Something went wrong. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="overlay"></div>

      <div className="contact-container">
        <h2 className="contact-title">Contact Us:</h2>

        {/* Top info row */}
        <div className="contact-info-row">
          <div className="info-box">
            <Mail className="icon" />
            <div>
              <h4>Email Us Directly</h4>
              <p>We try to get back within 24 hours.</p>
              <strong>eflexsolution.11@gmail.com</strong>
            </div>
          </div>

          <div className="info-box">
            <Phone className="icon" />
            <div>
              <h4>Call Our Sales Line</h4>
              <p>Our team is ready 24/7.</p>
              <strong>+92 3191298121</strong>
            </div>
          </div>

          <div className="info-box">
            <MapPin className="icon" />
            <div>
              <h4>Address</h4>
              <p className="address-line"> Gulshan-e-Iqbal ,PK </p>
              <strong>Karachi, Pakistan</strong>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
