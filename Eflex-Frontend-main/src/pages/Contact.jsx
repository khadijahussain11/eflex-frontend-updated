import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Handle input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // change to your backend URL after deploy
      const res = await axios.post("https://eflex-backend-updated.vercel.app/contact", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We'll reach out to you soon!",
          confirmButtonColor: "#3085d6",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.data.message || "Failed to submit form. Try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Form Submit Error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong. Try again later.",
        confirmButtonColor: "#d33",
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

        {/* === Contact Info Row === */}
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
              <strong>+92 319 1298121</strong>
            </div>
          </div>

          <div className="info-box">
            <MapPin className="icon" />
            <div>
              <h4>Address</h4>
              <p className="address-line">Gulshan-e-Iqbal, PK</p>
              <strong>Karachi, Pakistan</strong>
            </div>
          </div>
        </div>

        {/* === Contact Form === */}
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
