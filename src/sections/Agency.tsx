import Ruul from "../assets/desktop-img.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

export function Agency() {
  return (
    <section className="h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[60%] lg:mx-auto lg:mt-64">
        <div className="hidden lg:block">
          <img src={Ruul} alt="Rull AOR Icon" />
        </div>

        <div className="mt-16 lg:mt-3 lg:mx-0 mx-5 lg:w-[40rem]">
          <p className="text-neutral font-bold">AGENCY OF RECORD</p>
          <h1 className="text-neutral font-bold text-[40px] lg:text-[65px] my-4 tracking-wide leading-tight">
            A new connection protocol for work
          </h1>
          <p className="text-neutral mt-8 text-[21px] leading-9">
            Say goodbye to the old and outdated payroll system. Modern work
            demands a new employment protocol between talents and businesses.
            Ruul pioneers this revolutionary transformation.
          </p>

          <div>
            <div className="border border-neutral rounded-xl flex justify-center items-center p-3 mt-10 gap-4 bg-[#feefca]">
              <div className="">
                <i className="fa-regular fa-lightbulb bg-[#013e39] p-[6px] text-[#feefca] px-2 ml-1 rounded-3xl" />
              </div>
              <p className="text-[#013e39] text-[15px] leading-7 py-2 pr-5">
                Agency of Record (AOR) service enables off-payroll talents and
                organizations to work together in a streamlined and compliant
                manner, simplifying cross-border work relations for both
                parties.
              </p>
            </div>
          </div>

          <div className="mx-10 lg:mx-0 my-10 lg:grid lg:grid-cols-2 ">
            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="imgContainer bottom-10 lg:left-1 relative">
                <img className="img" src={icon1} alt="icon" />
              </div>
              <div>
                <h2 className="text-[#013e39] font-bold text-[20px]">
                  Streamlined compliance
                </h2>
                <p className="mt-2 text-[#013e39] text-lg leading-8">
                  Remain compliant with local regulations with zero paperwork.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="imgContainer bottom-10 lg:left-1 relative">
                <img className="img" src={icon2} alt="icon" />
              </div>
              <div>
                <h2 className="text-[#013e39] font-bold text-[20px]">
                  Financial enhancement
                </h2>
                <p className="mt-2 text-[#013e39] text-lg leading-8">
                  Ease off your payroll burden with a lighter connection
                  protocol.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="imgContainer bottom-10 lg:left-1 relative">
                <img className="img" src={icon3} alt="icon" />
              </div>
              <div>
                <h2 className="text-[#013e39] font-bold text-[20px]">
                  Easy attachment & detachment
                </h2>
                <p className="mt-2 text-[#013e39] text-lg leading-8">
                  The agile connection protocol for engaging with your
                  workforce.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="imgContainer bottom-10 lg:left-1 relative">
                <img className="img" src={icon4} alt="icon" />
              </div>
              <div>
                <h2 className="text-[#013e39] font-bold text-[19px]">
                  Cross-border standardization
                </h2>
                <p className="mt-2 text-[#013e39] text-lg leading-8">
                  International work arrangements simplified for global
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
