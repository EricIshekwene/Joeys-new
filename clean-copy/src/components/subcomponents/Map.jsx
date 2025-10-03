import React from 'react';

export default function Map() {
  return (
    <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg w-full h-60 lg:h-210 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.9379125750056!2d-83.0105025!3d40.009834399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f1726285a71%3A0x205a3209310a2d8!2sJoey&#39;s%20Place!5e0!3m2!1sen!2sus!4v1758127472095!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
