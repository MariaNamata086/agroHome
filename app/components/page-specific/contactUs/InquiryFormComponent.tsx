import {
  // faAngleDown,
  // faAngleUp,
  faCircleExclamation,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import Button from './Button';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

interface InquiryFormComponentProps {
  formName: string;
  addressee?: string;
}

function InquiryFormComponent({ formName }: InquiryFormComponentProps) {
  // const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const validationSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    phoneNumber: yup.string().optional(),
    emailAddress: yup.string().email().required('Email is required'),
    inquiry: yup.string().required('Please enter your inquiry'),
    subject: yup.string().optional(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      subject: '',
      inquiry: '',
    },
    validationSchema,
    onSubmit: async () => {
      try {
        setLoading(true);
        setSuccessMessage('Inquiry successfully Submitted');
        //submit form data
      } catch (error) {
        setLoading(false);
        //handle Error
      } finally {
        setLoading(false);
        formik.resetForm();
         setTimeout(() => setLoading(false), 2500);
        setTimeout(() => setSuccessMessage(null), 5000);
        setTimeout(() => setErrorMessage(null), 4000);
      }
    },
  });
  return (
    <div className="flex flex-col gap-4 justify-center p-2 w-full h-auto">
      <div
        className="flex justify-between items-center"
        // onClick={() => setVisible(!visible)}
      >
        <span className="flex text-sm md:text-[22px] text-slate-800 font-semibold tracking-widest p-5 md:p-8 md:-mb-7">
          {formName}
        </span>
        {/* {visible ? (
          <FontAwesomeIcon icon={faAngleUp} fontSize={12} color="black" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} fontSize={12} color="black" />
        )} */}
      </div>
      <div
        className="h-auto w-full flex flex-col gap-6"
        // style={{ display: visible ? 'block' : 'none' }}
      >
        {errorMessage ||
          (successMessage && (
            <div
              className={`flex w-full border ${
                successMessage
                  ? 'bg-[#f7fee7] text-primaryGreen border-primaryGreen'
                  : 'border-[#fbdad0] bg-[rgb(251,218,208)] text-[#853236]'
              } rounded text-[11px] px-4 py-2 gap-3 items-center mb-3`}
            >
              <FontAwesomeIcon
                icon={successMessage ? faCircleInfo : faCircleExclamation}
                className="text-[18px]"
              />
              {successMessage || `${errorMessage}, please try again`}
            </div>
          ))}
        <form
          onSubmit={formik.handleSubmit}
          className=" text-slate-800 rounded-md p-2 lg:p-8 text-[11px] h-full flex flex-col gap-4 md:gap-6 w-full "
        >
          <FormInput
            name="name"
            type="text"
            required
            id={formik.values.name}
            placeholder="Enter your name"
            label="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          <FormInput
            name="emailAddress"
            id="emailAddress"
            required
            placeholder="Enter your email address"
            label="Email address"
            type="email"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            error={
              formik.touched.emailAddress && Boolean(formik.errors.emailAddress)
            }
          />
          <FormInput
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            label="Phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
          />
          <FormInput
            name="subject"
            id="subject"
            type="text"
            placeholder="Enter subject of inquiry"
            label="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />

          <FormTextArea
            label="Inquiry"
            name="inquiry"
            placeholder="Enter your inquiry"
            value={formik.values.inquiry}
            onChange={formik.handleChange}
            error={formik.touched.inquiry && Boolean(formik.errors.inquiry)}
          />
          <Button
            loading={loading}
            disabled={loading}
            type="submit"
            textColor="text-black"
            // onClick={() => console.log('button clicked')}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default InquiryFormComponent;
