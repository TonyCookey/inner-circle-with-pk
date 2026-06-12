import { ArrowRight, Globe2, Users } from "lucide-react";

const REGISTRATION_URL = "https://www.ldmwithpk.org/inner-circle-mens-conference-registration/";

const eventLocations = [
  {
    date: "1st August 2026",
    city: "Houston",
    country: "USA",
  },
  {
    date: "8th August 2026",
    city: "Toronto",
    country: "Canada",
  },
];

const speakers = [
  {
    name: "Kingsley Okonkwo",
    role: "Host",
    image: "/pk.jpg",
  },
  {
    name: "Steve Harris",
    role: "Speaker",
    image: "/steve-harris.jpeg",
  },
  {
    name: "Dipo Adesina",
    role: "Speaker",
    image: "/dipo-adesina.jpg",
  },
];

const innerCircleFocusAreas = ["Faith", "Family", "Fatherhood", "Finance", "Fitness", "Fulfillment", "Friendships", "Freedom", "Faithfulness", "Future"];

const tickerItems = ["Inner Circle", "Not For Every Man", "Houston USA - 1st August 2026", "Toronto Canada - 8th August 2026", "Register Now"];

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
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-100">Inner Circle Men's Conference</span>
            </div>

            <h2 id="conference-heading" className="mb-7 text-4xl font-black leading-tight text-white md:text-6xl">
              Not For Every Man
            </h2>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-lg">
              The Inner Circle Men's Conference is a live experience for men who are ready to grow in leadership, strengthen their faith, build healthier
              families, and walk with a community of purpose-driven men.
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
            {eventLocations.map((event) => (
              <article key={`${event.city}-${event.country}`} className="glass-ultra rounded-2xl border border-white/10 p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">{event.date}</p>
                <h3 className="mt-3 text-4xl font-black text-white md:text-5xl">{event.city}</h3>
                <p className="mt-2 text-lg font-semibold uppercase tracking-wider text-gray-300">{event.country}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">Featured Speakers</p>
            <h3 className="text-3xl font-black text-white md:text-4xl">Voices for the Conference</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {speakers.map((speaker) => (
              <article key={speaker.name} className="group relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"></div>

                <div className="card-ultra relative overflow-hidden rounded-3xl border border-white/10 group-hover:border-yellow-500/30">
                  <div className="relative h-[420px] overflow-hidden">
                    {speaker.image ? (
                      <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                        <span className="px-8 text-center text-4xl font-black text-yellow-500 oswald-font">{speaker.name}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-yellow-400 merriweather-font">{speaker.role}</p>
                      <h4 className="text-3xl font-black text-white transition-colors duration-300 group-hover:text-yellow-500 oswald-font">{speaker.name}</h4>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
