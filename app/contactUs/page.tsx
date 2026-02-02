'use client';

import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import contactUsHeroImage from '@assets/contact-us.jpg';
import backgroundImage from '@assets/cookingBananas.jpeg';
import InquiryFormComponent from '../components/page-specific/contactUs/InquiryFormComponent';
import HeaderBanner from '../components/shared/HeaderBanner';
import SectionSmallHeader from '../components/shared/SectionSmallHeader';

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const contactData = [
    {
      icon: faLocationDot,
      locationHeading: 'Our Location',
      contactInfo:
        'Ntangala Village, Katikamu Sub-county, Luweero District, Uganda',
    },
    {
      icon: faEnvelopeCircleCheck,
      locationHeading: 'Mail Us',
      contactInfo: 'namatamaria086@gmail.com',
    },
    {
      icon: faPhoneFlip,
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
      <HeaderBanner
        page="Contact Us"
        pageHeading="Visit, learn, partner, and grow with us"
        src={contactUsHeroImage}
      />
      <div className="flex flex-col p-5 md:px-18 gap-8 md:gap-16.25 tracking-wider leading-loose">
        <section className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-3 w-full md:w-1/2 md:gap-6 p-3">
            <SectionSmallHeader headingContent="Get In Touch" />
            <h1 className="text-gray-800 tracking-wider font-semibold text-xl md:text-3xl leading-relaxed">
              Questions, ideas or projects? We're ready to help
            </h1>
            <p className="text-slate-700 tracking-wider">
              Whether you're looking for more information about our services,
              have a specific project in mind, or just want to say hello, we're
              here to assist you. Reach out to us through any of the following
              methods, and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-3.5">
              <h2 className="text-lg  tracking-wider text-gray-800 font-semibold">
                Interested in:
              </h2>
              <ul className="list-disc gap-2">
                {interestsData.map((item, index) => (
                  <li key={index} className="text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-slate-700 tracking-wider -ml-3 font-medium">
                We welcome individuals, groups, schools, NGOs and development
                partners
              </p>
            </div>
          </div>
          <div className="flex h-auto md:w-1/2 shadow-xl border-t-4 border-t-primaryGreen">
            {' '}
            <InquiryFormComponent formName="Send us an Inquiry" />
          </div>
        </section>
        <div ref={ref} className="flex relative h-100 md:h-120 mb-10 ">
          <Image
            src={backgroundImage}
            alt="image of a cooking bananas bunch"
            style={{ objectFit: 'cover' }}
            className="flex h-full w-full"
          />
          <div className="flex absolute inset-0 bg-black/50  flex-col     md:flex-row-reverse items-center justify-center text-white p-4 tracking-wider leading-loose gap-7 md:gap-18 w-full">
            <div className="flex flex-col w-full md:w-[40%] gap-4 md:-mr-8">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className={`flex w-full max-w-md  gap-2 p-3 md:gap-4 items-center transform transition-transform duration-1000 ease-linear ${
                    inView
                      ? '-translate-x-10 opacity-100'
                      : 'translate-x-0 opacity-0'
                  }`}
                >
                  <span className="flex w-18 h-18 bg-primaryGreen justify-center items-center">
                    <FontAwesomeIcon icon={item.icon} size="xl" />
                  </span>
                  <div className="flex flex-col gap-2 w-[80%]">
                    <h2 className="text-lg font-bold">
                      {item.locationHeading}
                    </h2>
                    <p className="text-sm">{item.contactInfo}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="w-full md:w-[60%] px-2 mb-5 md:-mt-4">
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
      </div>
    </main>
  );
};

export default ContactUs;
