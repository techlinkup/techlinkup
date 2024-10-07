const AboutUs = () => {

  return (
    <div className="bg-zinc-200/30 min-h-[500px] w-full flex items-center py-8" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between w-full gap-8">
          {/* Reverse order for mobile view */}

          <div className="flex flex-col justify-between items-start w-full md:w-[45%] space-y-2 order-2 md:order-1" id="1">

            {['Custom Software Development', 'Cloud & DevOps Solutions', 'API Integration & Automation', 'Mobile and Web Application Development', 'IT Infrastructure Consulting'].map((service, index) => (

              <div key={index} className={`w-full rounded-3xl ${index % 2 === 0 ? 'bg-yellowLogo' : 'bg-greenLogo'} font-semibold p-2 text-center`}>

                <span className="text-white">{service}</span>

              </div>

            ))}

          </div>

          <div className="w-full md:w-[45%] order-1 md:order-2" id="2">

            <h2 className="font-medium text-2xl sm:text-3xl text-greenLogo mb-4">About Us</h2>
            <p className="text-zinc-600">
              At Tech Link Up, we specialize in delivering comprehensive IT solutions that help businesses thrive in today’s digital landscape. Our services include custom software development, cloud migration, API integrations, and cutting-edge web and mobile applications.

              <ul className="mt-4 space-y-2">
                <li className="flex items-center">

                  <span className="text-greenLogo mr-2">•</span>
                  Custom Software Development: Tailored to your business needs.
                </li>
                <li className="flex items-center">
                  <span className="text-greenLogo mr-2">•</span>

                  Cloud & DevOps Solutions: Enabling scalability and efficiency.

                </li>

                <li className="flex items-center">

                  <span className="text-greenLogo mr-2">•</span>
                  API Integration & Automation: Streamlining workflows.

                </li>

                <li className="flex items-center">
                  <span className="text-greenLogo mr-2">•</span>

                  Mobile and Web Applications: Innovative solutions for any industry.
                </li>
                <li className="flex items-center">

                  <span className="text-greenLogo mr-2">•</span>

                  IT Infrastructure Consulting: Ensuring robust, future-proof systems.
                </li>
              </ul>
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}


export { AboutUs };