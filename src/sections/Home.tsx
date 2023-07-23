import { Navbar } from "../components/Navbar";
import klarnaLogo from "../assets/klarna.png";
import toyotaLogo from "../assets/toyota.png";
import insiderLogo from "../assets/insider.png";
import MITLogo from "../assets/MIT.png";
import logo from "../assets/stripe.svg";

export function Home() {
  return (
    <div className="bg-[#cafdc6] h-auto border-b-2">
      <Navbar />
      <section className="mx-4 lg:w-[61%] lg:m-auto md:h-[39.5rem]">
        <div className="lg:flex items-center justify-center lg:mt-16">
          <div>
            <div className="flex flex-col text-neutral mt-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest	">
                WorkTech
              </p>
              <h1 className="text-[40px] md:text-[65px] font-bold tracking-wider title ">
                The infrastructure of modern work
              </h1>
              <p className="mt-4 mx-1 text-[19px] tracking-wide line lg:w-[40rem]">
                Engineering new ways of connecting talents and organizations to
                enhance their financial performance and simplify compliance.
              </p>

              <div className="flex flex-col lg:flex-row lg:gap-2">
                <button className="btn mx-1 normal-case tracking-widest bg-[#003e39] capitalize text-[#cafdc6] mt-10 lg:px-[20px] ">
                  I'm a Talent
                </button>
                <button className="btn mx-1 normal-case bg-white text-neutral capitalize mt-5 lg:mt-10 lg:w-36">
                  I'm a Business
                </button>
              </div>
            </div>

            <div className="mx-2 mt-8 text-neutral text-[16px]">
              Excellent 4.5 out of 5{" "}
              <i className="fa-solid fa-star text-[#00b67a]" />{" "}
              <span className="font-bold text-[14px]">Trustpilot</span>
            </div>
          </div>

          <div className="hidden lg:flex mb-20">
            <img width={750} src={logo} alt="company logo" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-5 pt-8 pb-16 md:bottom-4 md:relative">
          <div className="home-card md:h-32 md:mt-12">
            <img className="w-32" src={klarnaLogo} alt="Klarna logo" />
          </div>
          <div className="home-card md:h-32 md:mt-12">
            <img className="w-32" src={toyotaLogo} alt="Toyota logo" />
          </div>
          <div className="home-card md:h-32 md:mt-12">
            <img className="w-32" src={insiderLogo} alt="Insider logo" />
          </div>
          <div className="home-card md:h-32 md:mt-12">
            <img className="w-32" src={MITLogo} alt="MIT logo" />
          </div>
        </div>
      </section>
    </div>
  );
}
