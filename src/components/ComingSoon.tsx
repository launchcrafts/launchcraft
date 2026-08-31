import LoadingScreen from "@/components/LoadingScreen";

type Props = {
  city?: string;
};

export default function ComingSoon({ city }: Props) {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center min-h-[calc(100vh-85px)] px-6">
      {!city && <LoadingScreen />}
      <div className="relative z-10 max-w-lg w-full text-center">

        {/* Label / Tagline */}
        {city ? (
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-10">
            {`Industry Solutions · ${city}`}
          </p>
        ) : (
          <p className="text-sm italic text-brand-green mb-10 tracking-wide">
            Your idea is our mission to bring reality.
          </p>
        )}

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl leading-[1.2] text-foreground italic mb-10">
          We craft digital<br />experiences that last.
        </h1>

        {/* Hairline */}
        <div className="w-12 h-px bg-hairline mx-auto mb-10" />

        {/* Services */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-10">
          Web Development &nbsp;&middot;&nbsp; AI Automation &nbsp;&middot;&nbsp; Brand Identity
        </p>

        {/* URL */}
        <p className="text-xs text-brand-orange tracking-wide">
          launchcraft.in
        </p>

      </div>
    </div>
  );
}
