import { ArrowRight, Globe2, Users } from "lucide-react";

const REGISTRATION_URL = "https://www.ldmwithpk.org/inner-circle-mens-conference-registration/";

const eventLocations = ["Canada", "USA"];

const innerCircleFocusAreas = ["Faith", "Family", "Fatherhood", "Finance", "Fitness", "Fulfillment", "Friendships", "Freedom", "Faithfulness", "Future"];

const tickerItems = ["Inner Circle Men's Conference", "Canada", "USA", "Register Now"];

export function ConferenceTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <a
      href={REGISTRATION_URL}
      className="relative z-40 mt-24 block overflow-hidden border-y border-yellow-500/20 bg-black/95 py-3 text-yellow-100 shadow-soft md:mt-28"
      aria-label="Register for the Inner Circle Men's Conference"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-wider md:text-base">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-yellow-500" aria-hidden="true">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </a>
  );
}

export function MenConference() {
  return (
    <section id="conference" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="conference-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(245,158,11,0.14)_0%,transparent_38%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_72%,rgba(59,130,246,0.1)_0%,transparent_42%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-6 py-3">
              <Globe2 className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-100">Canada and USA</span>
            </div>

            <h2 id="conference-heading" className="mb-7 text-4xl font-black leading-tight text-white md:text-6xl">
              Inner Circle Men's Conference
            </h2>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              A live conference experience for men who are ready to grow in leadership, strengthen their faith, build healthier families, and walk with a
              community of purpose-driven men.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {innerCircleFocusAreas.map((focusArea) => (
                <span key={focusArea} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200">
                  {focusArea}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={REGISTRATION_URL}
                className="btn-ultra group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold"
                aria-label="Register for the upcoming men's conference"
              >
                <span>Register for the Conference</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="btn-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white hover:text-yellow-500"
              >
                <Users className="h-5 w-5" />
                <span>Explore Inner Circle</span>
              </a>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-md gap-5">
            {eventLocations.map((country) => (
              <article key={country} className="glass-ultra rounded-2xl border border-white/10 p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">Conference Location</p>
                <h3 className="mt-3 text-4xl font-black text-white md:text-5xl">{country}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
