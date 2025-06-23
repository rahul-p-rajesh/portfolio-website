export default function Experience() {
  return (
    <>
      <section className=" text-white py-20 px-6">
        <div className="max-w-3xl mx-auto lg:mx-48">
          <h2 className="text-4xl font-light mb-12 text-left">
            Work Experience
          </h2>
          <div className="space-y-10">
            {/* Job 1 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-semibold text-teal-300">
                Software Engineer – Traceable AI
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Oct 2023 – Feb 2025 | Bangalore, Karnataka
              </p>
              {/* <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>
                Led UI development of Threat Activity, improving security
                analysis efficiency by 30%, enabling faster threat detection.
              </li>
              <li>
                Collaborated on backend features using Node.js and MongoDB
              </li>
              <li>
                Improved performance and reduced bundle size by 30% using
                dynamic imports and tree shaking
              </li>
            </ul> */}
            </div>

            {/* Job 2 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-semibold text-teal-300">
                Software Development Engineer - 2 – Truwaves Software
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Aug 2022 – Oct 2023 | Chennai, Tamil Nadu
              </p>
              {/* <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>Built modular UI components using React and Redux</li>
              <li>
                Integrated REST APIs and GraphQL endpoints into the client layer
              </li>
            </ul> */}
            </div>
            {/* Job 3 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-semibold text-teal-300">
                Software Engineer – Experion Technologies
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Jan 2021 – July 2022 | Kochi, Kerala
              </p>
              {/* <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>Built modular UI components using React and Redux</li>
              <li>
                Integrated REST APIs and GraphQL endpoints into the client layer
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
