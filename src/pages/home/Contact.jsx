import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [nama, setNama] = useState(""); // Tambahkan state untuk nama
  const [feedback, setFeedback] = useState("");

  const handleNamaChange = (e) => {
    setNama(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim feedback melalui email
    const emailContent = `Nama: ${nama}\nKritik dan Saran: ${feedback}`;
    window.location.href = `mailto:kerensepa@gmail.com?subject=Feedback&body=${encodeURIComponent(
      emailContent
    )}`;

    // Setelah mengirim, kosongkan nilai input
    setNama("");
    setFeedback("");
  };

  return (
    <div className="container mx-auto my-8 p-8 mt-4 bg-gray-100">
      <h2 className="title">Kontak Kami</h2>
      <div className="flex flex-wrap mt-20">
        {/* Map Shop */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Lokasi Toko</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.93096306410473!2d110.27132858301363!3d-7.717594970372456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af42809ce2fb5%3A0x950a92279d5a049c!2sToko%20Barokah!5e0!3m2!1sid!2sid!4v1700965495403!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Criticism and suggestions */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-semibold mb-4">Kritik dan Saran</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan nama Anda"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={nama}
                onChange={handleNamaChange}
                required
              />
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Kritik dan Saran
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                placeholder="Masukkan kritik dan saran Anda"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={feedback}
                onChange={handleFeedbackChange}
                required
              />
            </div>

            <button type="submit" className="btnPrimary float-right">
              <FaEnvelope className="mr-2" />
              Kirim Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
