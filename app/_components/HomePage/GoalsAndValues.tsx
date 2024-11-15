const GoalsAndValues = () => {
  return (
    <div className="flex justify-center items-center lg:my-8 flex-col lg:gap-y-6">
      <h1 className="lg:mt-10 lg:mb-4 dark:text-white font-unbounded lg:text-4xl text-2xl font-semibold text-center capitalize">
        Our Goals and Values
      </h1>
      <div className="lg:flex justify-center items-center lg:gap-x-16 gap-y-10 lg:flex-row lg:p-10 p-8 font-circular text-muted-foreground lg:text-lg text-base">
        <p>
          Our{" "}
          <span className="text-purple-700 dark:text-purple-500">
            main objective
          </span>{" "}
          is to empower your organization to attain exceptional levels of
          operational efficiency, superior quality standards, and elevated
          customer satisfaction. By focusing on optimizing internal processes
          and aligning them with{" "}
          <span className="text-purple-700 dark:text-purple-500">
            strategic business goals
          </span>
          , we drive measurable performance improvements across every facet of
          your enterprise. This commitment to excellence not only strengthens
          customer loyalty and satisfaction but also enhances your
          organization&apos;s adaptability and responsiveness in an{" "}
          <span className="text-purple-700 dark:text-purple-500">
            ever-evolving
          </span>{" "}
          market landscape. Through tailored solutions and innovative
          approaches, we strive to foster sustainable business growth, bolster
          your competitive edge, and ensure long-term success. Our expertise is
          dedicated to elevating your business impact and achieving outstanding
          results.
        </p>
        <br />
        <p>
          <span className="text-purple-700 dark:text-purple-500">Speed</span>:
          nXtribe emphasizes rapid response times and superior project
          execution, ensuring clients maintain a competitive edge through
          innovative and expert-driven solutions.{" "}
          <span className="text-purple-700 dark:text-purple-500">Clarity</span>:
          Transparent and precise communication fosters meaningful collaboration
          between clients and nXtribe, empowering informed decision-making and
          confidently overcoming challenges to achieve optimal outcomes.{" "}
          <span className="text-purple-700 dark:text-purple-500">
            Confidence
          </span>
          : Rooted in an unwavering belief in the strength of our team, nXtribe
          imparts trust and confidence to every client and project, delivering
          assurance and excellence.
        </p>
      </div>
    </div>
  );
};

export default GoalsAndValues;
