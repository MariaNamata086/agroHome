'use client';

import Image from 'next/image';
import React from 'react';
import InquiryFormComponent from '../components/page-specific/contactUs/InquiryFormComponent';
import HeaderBanner from '../components/shared/HeaderBanner';
import ImageBg from '../components/shared/ImageBg';
import SectionSmallHeader from '../components/shared/SectionSmallHeader';

const ContactUs = () => {
  const contactData = [
    {
      icon: '',
      locationHeading: 'Our Location',
      contactInfo:
        'Ntangala Village, Katikamu Sub-county, Luweero District, Uganda',
    },
    {
      icon: '',
      locationHeading: 'Mail Us',
      contactInfo: 'namatamaria086@gmail.com',
    },
    {
      icon: '',
      locationHeading: 'Call Us',
      contactInfo: '+256 772 628 600 || +256 775 628 600',
    },
  ];

  const interestsData = [
    'Farm visits',
    'Institutional Partnerships',
    'Farmer training programs',
    'General inquiries',
  ];

  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <HeaderBanner page="Contact Us" pageHeading="GET IN TOUCH" />
      <ImageBg
        src={}
        alt="image of get in touch with us"
        componentMoreInfo="Visit, learn, partner, and grow with us"
      />
      <div className="flex flex-col p-5 md:px-20 gap-8 md:gap-16.25 tracking-wider leading-loose">
        <section className="flex flex-col md:flex-row gap-4 md:gap-2">
          <div className="flex flex-col gaop-3 md:gap-6 p-3">
            <SectionSmallHeader headingContent="Get In Touch" />
            <h1 className="">
              Questions, ideas or projects? We're ready to help
            </h1>
            <p className="text-slate-800">
              Whether you're looking for more information about our services,
              have a specific project in mind, or just want to say hello, we're
              here to assist you. Reach out to us through any of the following
              methods, and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-3.5 md:gap-5">
              <h2 className="text-lg font-bold">Interested in:</h2>
              <ul>
                {interestsData.map((item, index) => (
                  <li key={index} className="list-disc gap-2">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="">
                We welcome individuals, groups, schools, NGOs and development
                partners
              </p>
            </div>
          </div>
          <div className="flex h-auto md:w-1/2 shadow-sm rounded-full">
            {' '}
            <InquiryFormComponent formName="Send us an Inquiry" />
          </div>
        </section>
        <div className="flex relative h-auto ">
          <Image src={} alt="" className="" />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 tracking-wider leading-loose">
            {contactData.map((item, index) => (
              <div key={index} className="flex  gap-2 md:gap-4 items-center">
                <span className="flex "> {item.icon}</span>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{item.locationHeading}</h2>
                  <p className="text-sm">{item.contactInfo}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
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
    </main>
  );
};

export default ContactUs;
