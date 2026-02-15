import Image from 'next/image';
import notFoundImage from '@assets/notFound.jpg';
import CallToActionButton from './components/shared/CallToActionButton';
import Motion from './components/shared/Motion';

function NotFound() {
  return (
    <section className="relative mt-2 mb-1 w-full h-125 md:h-150">
      <Image
        src={notFoundImage}
        alt="Deep litter poultry house"
        fill
        className="object-contain"
        priority
      />

      <div className="absolute inset-0 bg-black/70 flex flex-col  justify-center px-10 md:px-20 h-auto gap-6 md:gap-8 text-center text-white">
        <h1 className="font-bold text-7xl text-left tracking-widest md:text-9xl">
          404
        </h1>
        <h2 className="flex font-semibold tracking-wider text-2xl md:text-4xl">
          Sorry, page not found
        </h2>
        <p className="flex tracking-widest w-full leading-loose text-[15px] md:text-xl md:w-[60%] text-left">
          The page you are looking for does not exist. perhaps you can return to
          our homepage and see if you can find what you are looking for.
        </p>
        <Motion direction="up">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <CallToActionButton callToAction="Home Page" href="/" />
            <CallToActionButton
              callToAction="Contact Us"
              href="/contactUs"
              backgroundColor="bg-slate-200"
            />
          </div>
        </Motion>
      </div>
    </section>
  );
}

export default NotFound;
