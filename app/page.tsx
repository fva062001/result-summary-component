import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex justify-center items-center h-[100vh] w-[100vw] bg-[#ECF2FF]">
      <div className=" md:max-h-[32rem] md:max-w-[46rem] md:w-[46rem] md:h-[32rem] w-full h-full flex md:flex-row flex-col bg-white md:rounded-[2rem]">
        <div className="md:w-6/12 h-4/5  md:h-full bg-gradient-to-b from-[rgb(105,67,255)] to-[rgb(47,44,233)] md:rounded-[2rem] rounded-b-[2rem] text-center">
          <div className="w-9/12 mx-auto">
            <h4 className="text-[#CAC9FF] font-bold text-[1.125rem] md:text-[1.5rem] my-8">
              Your Result
            </h4>
            <p className="md:w-[12.5rem] w-[8.5rem] h-[8.5rem] leading-tight flex flex-col justify-center items-center md:h-[12.5rem] mx-auto rounded-full bg-gradient-to-b from-[rgb(77,33,201,100%)] to-[rgb(37,33,201,0%)]">
              <span className="text-[4.5rem] font-bold text-white">76</span>
              <span className="text-[#CAC9FF] text-[1rem] md:text-[1.125rem] font-bold opacity-[0.5]">
                of 100
              </span>
            </p>
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-white my-4">
              Great
            </h2>
            <p className="text-[#CAC9FF] md:text-[1.125rem] text-[1rem]">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
        <div className="w-6/12 h-full"></div>
      </div>
    </div>
  );
}
