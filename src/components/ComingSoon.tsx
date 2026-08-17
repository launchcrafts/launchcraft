type Props = {
  city?: string;
};

const services = [
  {
    title: "Web Development",
    description: "Modern, performant websites and web applications built to scale.",
  },
  {
    title: "AI Automation",
    description: "Intelligent automation solutions to streamline your business workflows.",
  },
  {
    title: "Logo & Brand Identity",
    description: "Creative logo design and brand identity that sets you apart.",
  },
];

export default function ComingSoon({ city }: Props) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-white px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
          LaunchCraft
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-3">
          Coming Soon
        </h1>

        {city ? (
          <p className="text-lg text-zinc-500 mb-3">
            Industry Solutions in <span className="font-semibold text-zinc-700">{city}</span>
          </p>
        ) : null}

        <p className="text-base text-zinc-400 mb-12">
          We are building something great. Stay tuned for our launch at{" "}
          <span className="text-zinc-600 font-medium">launchcraft.in</span>
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-zinc-100 bg-zinc-50 p-5"
            >
              <h2 className="text-sm font-semibold text-zinc-900 mb-1">
                {service.title}
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
