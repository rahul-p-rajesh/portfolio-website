export default function Experience() {
  return (
    <section className="bg-[--color-dark-green] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto lg:mx-48">
        <h2 className="text-4xl font-light mb-12 text-left">Work Experience</h2>
        <div className="space-y-10">
          {/* Job 1 */}
          <div className="border-l-4 border-teal-500 pl-6">
            <h3 className="text-xl font-semibold text-teal-300">
              Software Engineer – Traceable AI
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Jun 2023 – Feb 2025 | Bangalore, India
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>
                Developed and maintained scalable frontend applications using
                React and Angular
              </li>
              <li>
                Collaborated on backend features using Node.js and MongoDB
              </li>
              <li>
                Improved performance and reduced bundle size by 30% using
                dynamic imports and tree shaking
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="border-l-4 border-teal-500 pl-6">
            <h3 className="text-xl font-semibold text-teal-300">
              Frontend Developer – XYZ Solutions
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Jan 2021 – May 2023 | Remote
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>Built modular UI components using React and Redux</li>
              <li>
                Integrated REST APIs and GraphQL endpoints into the client layer
              </li>
            </ul>
          </div>
          {/* Job 3 */}
          <div className="border-l-4 border-teal-500 pl-6">
            <h3 className="text-xl font-semibold text-teal-300">
              Frontend Developer – XYZ Solutions
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Jan 2021 – May 2023 | Remote
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-200">
              <li>Built modular UI components using React and Redux</li>
              <li>
                Integrated REST APIs and GraphQL endpoints into the client layer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
