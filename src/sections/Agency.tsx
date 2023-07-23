import Ruul from "../assets/desktop-img.svg";

export function Agency() {
  return (
    <section className="h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <img src={Ruul} alt="Rull AOR Icon" />
        </div>

        <div className="mt-16 mx-5">
          <p className="text-neutral font-bold">AGENCY OF RECORD</p>
          <h1 className="text-neutral font-bold text-[40px] my-4 tracking-wide leading-tight">
            A new connection protocol for work
          </h1>
          <p className="text-neutral mt-8 text-[21px] leading-9">
            Say goodbye to the old and outdated payroll system. Modern work
            demands a new employment protocol between talents and businesses.
            Ruul pioneers this revolutionary transformation.
          </p>

          <div className="border border-neutral rounded-xl flex justify-center items-center p-3 mt-10 gap-4 bg-[#feefca]">
            <div className="">
              <i className="fa-regular fa-lightbulb bg-[#013e39] p-[6px] text-[#feefca] px-2 ml-1 rounded-3xl" />
            </div>
            <p className="text-[#013e39] text-[15px] leading-7 py-2 pr-5">
              Agency of Record (AOR) service enables off-payroll talents and
              organizations to work together in a streamlined and compliant
              manner, simplifying cross-border work relations for both parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
