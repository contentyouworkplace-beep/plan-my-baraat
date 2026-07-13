export interface KeywordFaq {
  q: string;
  a: string;
}

export interface KeywordContent {
  slug: string;
  intro: string;
  explanation: string;
  whatsIncluded: string;
  pricingGuidance: string;
  bookingNotes: string;
  closing: string;
  faqs: KeywordFaq[];
}

export const BARAAT_KEYWORD_CONTENT: Record<string, KeywordContent> = {
  "baraat-on-wheels": {
    slug: "baraat-on-wheels",
    intro:
      "Baraat on wheels is the name for a wedding entry built around a moving DJ truck instead of the groom just walking in with a small band. The truck carries the sound system and lights, and the whole baraati group dances alongside it as it rolls slowly toward the venue.\n\nPlanMyBaraat runs baraat on wheels packages across Gujarat: a double decker DJ truck, a dhol team, a vintage car or baggi for the groom, and a safa team for turban styling, all booked as one package instead of arranging each piece separately.",
    explanation:
      "A baraat on wheels setup replaces the old-style small speaker-on-a-cart with a proper double decker truck that has a full concert sound system, lighting rig, and space for the DJ to perform live while the truck moves. It's become the standard for a modern baraat entry because it keeps the music consistent and loud enough for a large crowd, without anyone having to carry equipment.\n\nThe groom usually arrives separately in a vintage car or on a decorated horse, joins the procession near the entrance, and the whole group — truck, dhol players, dancing guests — moves together toward the venue gate.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist as the base. Raj Tilak, our starting package, adds 2 dhol players and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer for extra entertainment. Maharaja brings moving LED panels on the truck and the groom's name lit up in lights. Signature, our top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nA vintage car and a safa team are included from Raj Tilak upward, so the entry-level package already covers the full experience, not just the truck.",
    pricingGuidance:
      "Baraat on wheels pricing depends mainly on which package you pick, how many dhol players you want, and whether you add effects like pyro or confetti. Raj Tilak is the most affordable way to get a proper truck entry. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe don't publish a single flat number because guest count, city, and date all affect the final quote. Message us on WhatsApp with your details and we'll respond with a real price, usually within the hour.",
    bookingNotes:
      "Wedding season in Gujarat runs November to February, and trucks get booked out fast during that window. 3-4 weeks' notice is a safe bet if your date falls in peak season.\n\nWhen you reach out, share your wedding date, city, venue name, and roughly how many guests are walking in the baraat. That's enough for us to recommend the right package and confirm truck availability.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and rough guest count for the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "What exactly is baraat on wheels?",
        a: "It's a baraat entry built around a moving DJ truck — the truck carries the sound system and lights while the baraati group dances alongside it toward the venue, instead of a small band walking with a portable speaker.",
      },
      {
        q: "How much does a baraat on wheels setup cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does baraat on wheels include the groom's car?",
        a: "Yes, a vintage car or baggi is included in every package from Raj Tilak upward, so you don't need to arrange transport for the groom separately.",
      },
      {
        q: "Which cities do you cover for baraat on wheels?",
        a: "We run baraat on wheels packages across Gujarat, including Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts in the state.",
      },
      {
        q: "How many dhol players come with a baraat on wheels package?",
        a: "Raj Tilak includes 2 dhol, Rajwada includes 4, and Maharaja and Signature include 6, with Signature adding extra entertainers on top.",
      },
      {
        q: "How early should I book a baraat on wheels truck?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out fast in peak months.",
      },
      {
        q: "Is the safa team part of the baraat on wheels package?",
        a: "Yes, the My Safa team ties turbans for the groom and the full baraati group, included from the starting package upward.",
      },
      {
        q: "What's the difference between the packages?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "dj-truck-for-baraat": {
    slug: "dj-truck-for-baraat",
    intro:
      "A DJ truck for baraat is the double decker vehicle that carries the sound system, lights, and DJ during a wedding procession. It leads the baraati group toward the venue, playing music the whole way so the entry feels like a proper celebration, not just a walk to the gate.\n\nPlanMyBaraat provides the DJ truck as part of a full baraat on wheels package, along with a dhol team, a vintage car, and a safa team — all booked together as one service.",
    explanation:
      "The truck itself is a mini double decker structure, built to carry a full concert-grade sound system on the lower deck and the DJ artist performing live on the upper deck, visible to the whole crowd. Lighting rigs run along the truck for night entries, and on higher packages, moving LED panels and custom name displays are added to the truck's sides.\n\nThe truck moves at walking pace so the baraati group can dance alongside it the whole way to the venue, with the dhol team usually walking just ahead or beside the truck to keep the energy up between DJ tracks.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and a professional DJ artist as the base. Raj Tilak adds 2 dhol and chhatri lights around the truck. Rajwada steps up to 4 dhol and adds a teddy or gorilla performer. Maharaja brings moving LED panels on the truck body and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects synced to the truck's arrival.\n\nA vintage car and safa team come with every package from Raj Tilak upward, so the truck isn't a standalone rental — it's part of a complete baraat entry.",
    pricingGuidance:
      "DJ truck pricing depends on the package tier, how many dhol players you add, and whether you want extra effects like pyro or confetti timed to the truck's arrival. Raj Tilak is the most affordable option with a proper truck and sound system. Signature costs more because it includes bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date, city, and guest count rather than a flat number, since truck size and add-ons vary by package. Message us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and DJ trucks get booked out early during that stretch. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your wedding date, city, and venue when you reach out, along with a rough headcount for the baraati group — that's enough for us to confirm truck availability and recommend a package.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the DJ truck's available and recommend the right package, usually within the hour.",
    faqs: [
      {
        q: "What does a DJ truck for baraat actually look like?",
        a: "It's a mini double decker structure — the sound system sits on the lower deck and the DJ performs live on the upper deck, visible to the whole crowd, with lighting rigs and (on higher packages) LED panels along the sides.",
      },
      {
        q: "How much does a DJ truck for baraat cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can the DJ truck play any songs I want?",
        a: "Yes, our DJ artists take song requests ahead of time and can build a set around your preferred entry songs and dance tracks for the baraat.",
      },
      {
        q: "Does the truck come with its own driver?",
        a: "Yes, an experienced driver comes with the truck, used to navigating baraat routes at walking pace alongside a dancing crowd.",
      },
      {
        q: "Is the dhol team separate from the DJ truck booking?",
        a: "No, the dhol team is included in the same package as the truck — you don't need to book them separately.",
      },
      {
        q: "How early should I book a DJ truck for baraat?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out early.",
      },
      {
        q: "Can the truck handle a very large baraati group?",
        a: "Yes, the sound system is built for outdoor, open-crowd use, and we adjust the route plan based on your expected guest count.",
      },
      {
        q: "What's the difference between the package tiers?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "how-much-does-baraat-cost": {
    slug: "how-much-does-baraat-cost",
    intro:
      "How much does baraat cost is one of the first questions almost every family asks us, and the honest answer is that it depends on a few clear factors: which package you pick, how many dhol players you want, and whether you add effects like pyro or confetti to the entry.\n\nPlanMyBaraat offers four packages — Raj Tilak, Rajwada, Maharaja, and Signature — each building on the last with more dhol, more visual effects, and more entertainment, so there's a real range to choose from rather than one fixed price.",
    explanation:
      "The base of every package is the same: a double decker DJ truck, a professional DJ artist, a vintage car for the groom, and a safa team for turban styling. What changes as you move up the tiers is the number of dhol players (2 in Raj Tilak, up to 6 in Signature), the lighting and LED setup, and extra elements like a teddy or gorilla performer, pyro effects, confetti cannons, and a security team on the top package.\n\nBecause the base is consistent across every tier, the price difference between packages comes down to exactly how much extra production you want on top of a solid, working baraat entry.",
    whatsIncluded:
      "Raj Tilak, our starting package, includes the DJ truck, sound system, DJ artist, 2 dhol, chhatri lights, a vintage car, and a safa team. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels on the truck and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nSo the cost isn't just for the truck — every tier includes the full entry: truck, dhol, car, and safa team together.",
    pricingGuidance:
      "We don't publish one flat number for baraat cost because your actual quote depends on the package, dhol count, extra effects, your city, and your guest count. What we can say is that Raj Tilak is the most affordable way to get a full, proper baraat entry, and Signature is the most complete, production-heavy option.\n\nThe fastest way to get a real number is to message us on WhatsApp with your wedding date, city, and rough guest count — we'll respond with an actual quote, usually within the hour, instead of a generic estimate.",
    bookingNotes:
      "Wedding season runs November to February across Gujarat, and prices and availability both tighten up during that window. Booking 3-4 weeks ahead during peak season is a safe bet, especially if you want a specific package or add-on.\n\nWhen you reach out, share your date, city, venue, and roughly how many guests will be in the baraat — that's enough for us to give you an accurate quote rather than a rough range.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll send you a real quote for the package that fits your baraat, usually within the hour.",
    faqs: [
      {
        q: "How much does baraat cost on average?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote instead of a generic estimate.",
      },
      {
        q: "What's included in the baraat cost?",
        a: "Every package includes the DJ truck, sound system, DJ artist, dhol team, a vintage car, and a safa team. Higher tiers add more dhol, LED visuals, entertainers, and effects like pyro and confetti.",
      },
      {
        q: "Why don't you list a fixed price?",
        a: "Because the real cost depends on your city, date, guest count, and which add-ons you want, so a single flat number would be misleading. We quote based on your actual details.",
      },
      {
        q: "Is the cheapest package still a full baraat entry?",
        a: "Yes, Raj Tilak includes the truck, DJ, 2 dhol, chhatri lights, a vintage car, and a safa team — it's a complete entry, just with less production than the higher tiers.",
      },
      {
        q: "Does the guest count affect the price?",
        a: "It can factor into our recommendation, since a bigger baraati group sometimes calls for a bigger sound setup or more dhol, but the packages themselves are fixed tiers.",
      },
      {
        q: "How much more does the top package cost compared to the starting one?",
        a: "Signature costs more than Raj Tilak because it includes triple the dhol count, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team — significantly more production overall.",
      },
      {
        q: "Do prices change based on the city?",
        a: "Yes, logistics can vary slightly by city, which is why we confirm your exact quote once we know your date and location rather than quoting blind.",
      },
      {
        q: "How do I get an exact quote?",
        a: "Message us on WhatsApp with your wedding date, city, venue, and rough guest count, and we'll respond with a real number, usually within the hour.",
      },
    ],
  },
};
