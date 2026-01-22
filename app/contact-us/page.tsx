import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col  bg-white">
      <div className="flex flex-col p-5 md:p-20 gap-5 md:gap-16.25">
        <div className="flex flex-col gap-6 w-full mb-5 p-5 md:p-20 text-slate-800 md:-mt-25">
          <h1 className="text-[24px]">How to Find Us</h1>
          <iframe
            title="St Joseph Farm location location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18977.14784166049!2d32.58472945320575!3d0.7744027827784032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1769018227278!5m2!1sen!2sug"
            loading="eager"
            className="w-full h-[80vh]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
