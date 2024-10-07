import Consultation from ".././assets/consultation.svg";
import Strategy from ".././assets/strategy.svg";
import Development from ".././assets/development.svg";
import Implementation from ".././assets/implementation.svg";
import Support from ".././assets/support.svg";

const Core = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Consultation, title: "Consultation", description: "In-depth analysis of your business challenges and goals." },
          { icon: Strategy, title: "Strategy", description: "Customized solution design based on your needs." },
          { icon: Development, title: "Development", description: "Agile methodology for iterative feedback and development." },
          { icon: Implementation, title: "Implementation", description: "Smooth deployment with minimal disruption to your operations." },
          { icon: Support, title: "Support", description: "Continuous post-launch support and optimization." },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4 w-full relative pb-8 group">
            <img
              src={item.icon}
              alt={item.title}
              className="h-12 w-12 fill-greenLogo"
            />
            <div>
              <h4 className="text-xl font-medium text-greenLogo mb-1">
                {item.title}
              </h4>
              <span className="leading-tight text-zinc-800 text-base">
                {item.description}
              </span>
            </div>
            <span className="bg-zinc-300 w-full h-[2px] absolute bottom-0">
              <span className="absolute h-[2px] w-0 left-1/2 -translate-x-1/2 group-hover:bg-greenLogo group-hover:w-1/4 transition-all duration-700"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Core };
