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

  "double-decker-dj-truck": {
    slug: "double-decker-dj-truck",
    intro:
      "A double decker DJ truck is a two-level vehicle built specifically for wedding entries — the sound system and equipment sit on the lower deck, while the DJ performs live on the upper deck, raised above the crowd so everyone can see them working the set.\n\nPlanMyBaraat's double decker DJ truck comes as part of a full baraat package, alongside a dhol team, a vintage car, and a safa team, not as a standalone rental.",
    explanation:
      "The two-level design solves a real problem: a DJ standing at ground level in a crowd gets lost, and a static speaker setup can't move with the procession. The double decker structure raises the performance above the baraati group, keeps the sound equipment stable and protected, and lets the truck roll slowly at walking pace while the whole crowd dances around it.\n\nLighting rigs run along both decks, and on higher packages, moving LED panels and custom name displays are added to the truck body itself, making the truck as much a visual centerpiece as a sound source.",
    whatsIncluded:
      "Every package includes the double decker truck, sound system, and a professional DJ artist as the base. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up on the truck. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nA vintage car and safa team come with every package from Raj Tilak upward, so the truck is always part of a complete entry, not a rental on its own.",
    pricingGuidance:
      "Double decker DJ truck pricing depends on the package tier, dhol count, and any extra effects you add. Raj Tilak is the most affordable option that still includes a proper double decker setup. Signature costs more because it includes bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your date, city, and guest count rather than a flat number. Message us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and double decker trucks get booked out fast during that window. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your wedding date, city, and venue when you reach out, along with a rough headcount for the baraati group — that's enough for us to confirm truck availability.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the double decker truck's available, usually within the hour.",
    faqs: [
      {
        q: "What makes a double decker DJ truck different from a regular DJ setup?",
        a: "The two-level structure raises the DJ above the crowd on the upper deck while the sound system sits on the lower deck, so the performance is visible and the equipment stays stable while the truck moves.",
      },
      {
        q: "How much does a double decker DJ truck cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the truck move during the baraat or stay parked?",
        a: "It moves at walking pace alongside the baraati group for the whole procession, not just parked at one spot.",
      },
      {
        q: "Is the double decker truck safe for a large crowd?",
        a: "Yes, the driver is experienced with navigating baraat routes slowly through a dancing crowd, and the structure is built for this exact use.",
      },
      {
        q: "Can I see photos of the truck before booking?",
        a: "Yes, message us on WhatsApp and we'll share photos and videos of the truck setup for your reference.",
      },
      {
        q: "How early should I book a double decker DJ truck?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out fast.",
      },
      {
        q: "Does the truck come with lighting built in?",
        a: "Yes, chhatri lights come with the starting package, and higher tiers add moving LED panels and custom name displays on the truck body.",
      },
      {
        q: "What's the difference between the package tiers?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "dj-truck-rental-for-wedding": {
    slug: "dj-truck-rental-for-wedding",
    intro:
      "Searching for a DJ truck rental for wedding usually means you want the truck itself — the sound, the lights, the moving stage — without having to think about the rest of the baraat separately. That's exactly how PlanMyBaraat packages it.\n\nInstead of a standalone rental, our DJ truck comes bundled with a dhol team, a vintage car for the groom, and a safa team, all as one booking with one point of contact.",
    explanation:
      "A pure equipment rental leaves you to arrange the dhol group, the groom's transport, and turban styling separately, often with different vendors who don't coordinate with each other. Our approach treats the truck as one piece of a complete entry, so timing, routing, and styling are all planned together rather than stitched together on the day.\n\nThe truck itself carries a full sound system and DJ setup, with the artist performing live as the truck moves slowly toward the venue at the pace of the dancing crowd.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist as the base. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team are included from Raj Tilak upward, so you're not renting a truck — you're booking a full entry.",
    pricingGuidance:
      "Pricing depends on the package tier, dhol count, and any extra effects. Raj Tilak is the most affordable way to get a proper truck rental bundled with the rest of the entry. Signature costs more because it includes more — bigger branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date, city, and guest count. Message us on WhatsApp for a real number.",
    bookingNotes:
      "Wedding season runs November to February, and trucks get booked out fast during that window. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your wedding date, city, venue, and rough guest count when you reach out — that's enough for us to confirm availability and recommend a package.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available and recommend the right package, usually within the hour.",
    faqs: [
      {
        q: "Can I rent just the DJ truck without the other services?",
        a: "We package the truck with the dhol team, vintage car, and safa team as one complete entry rather than renting the truck alone, since that's what makes the baraat cohesive.",
      },
      {
        q: "How much does a DJ truck rental for wedding cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the rental include the DJ artist?",
        a: "Yes, a professional DJ artist performing live on the truck is included in every package, not billed separately.",
      },
      {
        q: "What cities do you offer this in?",
        a: "We cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts across Gujarat.",
      },
      {
        q: "How far in advance should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out fast.",
      },
      {
        q: "Is there a difference between a rental and a package?",
        a: "Our package bundles the truck with dhol, car, and safa team as one coordinated booking, which is more reliable than piecing together separate rentals from different vendors.",
      },
      {
        q: "Can the truck be customized with our names or theme?",
        a: "Yes, the Maharaja and Signature packages include the groom's name displayed in LED lights on the truck, and custom branding can be discussed on request.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the truck, DJ, 2 dhol, chhatri lights, a vintage car, and a safa team — a complete entry at the most affordable tier.",
      },
    ],
  },

  "dj-truck-hire-for-baraat": {
    slug: "dj-truck-hire-for-baraat",
    intro:
      "DJ truck hire for baraat is the search families use when they want to book the truck that leads the wedding procession — the double decker vehicle with the sound system and DJ that everyone dances alongside on the way to the venue.\n\nPlanMyBaraat handles this as part of a complete baraat package: the truck, a dhol team, a vintage car, and a safa team, all under one booking.",
    explanation:
      "Hiring the truck on its own means you'd still need to separately find dhol players, arrange the groom's transport, and book someone for turban styling — three more vendors to coordinate on the wedding day. Our packages remove that friction by bundling everything the baraat entry needs into one booking with one point of contact.\n\nThe truck itself moves at walking pace with the DJ performing live, while the dhol team keeps the energy up alongside it, and the groom arrives in a vintage car that joins the procession near the entrance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team are included from Raj Tilak upward, so hiring the truck through us means hiring the full entry.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your actual date, city, and guest count rather than a flat number.\n\nMessage us on WhatsApp with your details and we'll respond with a real quote, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and trucks book out fast during that stretch. 3-4 weeks' notice is a safe bet for peak season.\n\nShare your date, city, venue, and rough guest count when you reach out — that's enough for us to confirm the truck's available.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available and recommend a package, usually within the hour.",
    faqs: [
      {
        q: "How do I hire a DJ truck for my baraat?",
        a: "Message us on WhatsApp with your wedding date, city, venue, and rough guest count. We'll recommend a package and confirm the truck's available, usually within the hour.",
      },
      {
        q: "How much does DJ truck hire for baraat cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Do I need to hire the dhol team separately?",
        a: "No, the dhol team is included in the same package as the truck, so you don't need to book them separately.",
      },
      {
        q: "Does hiring the truck include a driver?",
        a: "Yes, an experienced driver comes with the truck, used to navigating baraat routes at walking pace alongside a dancing crowd.",
      },
      {
        q: "Can I hire the truck for a single evening only?",
        a: "Yes, our packages are built around a single baraat entry, typically for a few hours around the procession and venue arrival.",
      },
      {
        q: "How far in advance should I hire the truck?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks book out fast.",
      },
      {
        q: "Is the vintage car included when I hire the truck?",
        a: "Yes, a vintage car or baggi for the groom is included in every package from Raj Tilak upward.",
      },
      {
        q: "What's the difference between the package tiers?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "dj-truck-booking-price": {
    slug: "dj-truck-booking-price",
    intro:
      "DJ truck booking price is what most people are really asking when they search for baraat truck costs — they want a sense of the range before they reach out. The honest answer: it depends on the package, dhol count, and any extra effects, not a single fixed number.\n\nPlanMyBaraat's DJ truck comes as part of a full baraat package — truck, dhol team, vintage car, and safa team — so the booking price covers the whole entry, not just the vehicle.",
    explanation:
      "The base of every package — truck, sound system, and DJ artist — stays the same across all four tiers. What changes the booking price is the number of dhol players (2 to 6), the lighting and LED setup on the truck, and add-ons like a teddy or gorilla performer, pyro effects, confetti cannons, and a security team on the top package.\n\nBecause the truck is never sold as a standalone item, the booking price you get quoted already includes the vintage car and safa team, which is worth keeping in mind when comparing against a bare equipment rental elsewhere.",
    whatsIncluded:
      "Raj Tilak, our starting package, includes the truck, DJ artist, 2 dhol, chhatri lights, a vintage car, and a safa team. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.",
    pricingGuidance:
      "We don't publish one flat number because the real booking price depends on your city, date, guest count, and which package and add-ons you want. Raj Tilak is the most affordable way to get a proper truck entry, and Signature is the most complete, production-heavy option.\n\nThe fastest way to get an exact price is to message us on WhatsApp with your wedding date, city, and rough guest count — we'll respond with a real quote, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and truck booking prices and availability both tighten during that window. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your date, city, venue, and guest count when you reach out — that's enough for an accurate quote.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll send you a real booking price, usually within the hour.",
    faqs: [
      {
        q: "What's the DJ truck booking price range?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the booking price include the dhol team?",
        a: "Yes, dhol players are included in every package — 2 in Raj Tilak, up to 6 in Signature — so it's not a separate line item.",
      },
      {
        q: "Is a deposit needed to confirm the booking?",
        a: "Yes, we usually take an advance payment to lock in your date, with the balance due closer to the event. We'll share exact terms once you confirm your package.",
      },
      {
        q: "Why do prices vary between quotes I've seen online?",
        a: "Different vendors bundle different things — some quote the truck alone, others include dhol, car, and safa team like we do. Compare what's actually included, not just the number.",
      },
      {
        q: "Does the price change by city?",
        a: "Logistics can vary slightly by city, which is why we confirm your exact price once we know your date and location rather than quoting blind.",
      },
      {
        q: "How early should I lock in a booking price?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since prices and truck availability both tighten during peak season.",
      },
      {
        q: "Can I customize a package to fit my budget?",
        a: "Yes, tell us your budget and requirements on WhatsApp and we'll recommend the package tier that fits best.",
      },
      {
        q: "What's the cheapest way to book a DJ truck?",
        a: "Raj Tilak is our most affordable package and still includes the full entry — truck, DJ, 2 dhol, chhatri lights, car, and safa team.",
      },
    ],
  },

  "dj-van-for-wedding": {
    slug: "dj-van-for-wedding",
    intro:
      "A DJ van for wedding is another name for the same double decker truck setup — a vehicle carrying the sound system and DJ that leads the baraat procession toward the venue, with the whole group dancing alongside it.\n\nPlanMyBaraat's DJ van comes as part of a complete baraat package: the vehicle itself, a dhol team, a vintage car for the groom, and a safa team, booked together as one service.",
    explanation:
      "Whether you call it a DJ van, DJ truck, or baraat truck, the setup is the same — a two-level structure with the sound system on the lower deck and the DJ performing live on the upper deck, visible above the crowd. The vehicle moves at walking pace so the baraati group can dance alongside it the whole way to the venue.\n\nWe use a mini double decker structure specifically, which gives better visibility and sound projection than a regular van with speakers mounted on top.",
    whatsIncluded:
      "Every package includes the DJ van, sound system, and DJ artist as the base. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package tier, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your actual date, city, and guest count.\n\nMessage us on WhatsApp with your details and we'll respond with a real quote, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and DJ vans get booked out fast during that window. 3-4 weeks' notice is a safe bet for peak season.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the DJ van's available, usually within the hour.",
    faqs: [
      {
        q: "Is a DJ van the same as a DJ truck?",
        a: "Yes, we use the same double decker truck structure for both — the terms are used interchangeably by different families searching for the same setup.",
      },
      {
        q: "How much does a DJ van for wedding cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the DJ van come with lighting?",
        a: "Yes, chhatri lights come with the starting package, and higher tiers add moving LED panels and custom name displays on the vehicle.",
      },
      {
        q: "Can the DJ van play a custom playlist?",
        a: "Yes, our DJ artists take song requests ahead of time and build a set around your preferred entry and dance tracks.",
      },
      {
        q: "How far in advance should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since vans get booked out fast.",
      },
      {
        q: "Does the van include the dhol team?",
        a: "Yes, dhol players are included in every package, not booked separately.",
      },
      {
        q: "What cities do you offer this in?",
        a: "We cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts across Gujarat.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the DJ van, DJ artist, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "dj-on-wheels-for-wedding": {
    slug: "dj-on-wheels-for-wedding",
    intro:
      "DJ on wheels for wedding describes a moving DJ setup mounted on a truck, built for baraat entries where the music needs to travel with the procession rather than stay fixed in one spot.\n\nPlanMyBaraat runs this as a full package: a double decker DJ truck, a dhol team, a vintage car, and a safa team, booked together for your baraat entry.",
    explanation:
      "A DJ on wheels setup solves the core problem of a moving procession — a fixed sound system can't follow the crowd, and a portable speaker isn't loud enough for a large group. Our double decker truck carries a full concert sound system and the DJ artist performs live from the upper deck as the truck moves at walking pace.\n\nThe dhol team walks alongside or just ahead of the truck to keep the energy up between DJ tracks, and the whole procession moves together toward the venue entrance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team are included from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for DJ on wheels setups peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm availability, usually within the hour.",
    faqs: [
      {
        q: "What does DJ on wheels mean exactly?",
        a: "It's a DJ setup mounted on a moving truck, so the music travels with the baraat procession instead of staying fixed at the venue entrance.",
      },
      {
        q: "How much does DJ on wheels for wedding cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the truck stop at the venue or keep moving?",
        a: "It moves the whole way from the starting point to the venue entrance, then typically stops once the baraat has arrived.",
      },
      {
        q: "Is the sound quality good for an outdoor crowd?",
        a: "Yes, the truck carries a concert-grade sound system built for open-air, moving-crowd use.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does the package include the groom's transport?",
        a: "Yes, a vintage car or baggi is included in every package from Raj Tilak upward.",
      },
      {
        q: "Can I request specific songs for the entry?",
        a: "Yes, our DJ artists take requests ahead of time and build the set around your preferred entry and dance tracks.",
      },
      {
        q: "What's the difference between the packages?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "mobile-dj-truck-for-baraat": {
    slug: "mobile-dj-truck-for-baraat",
    intro:
      "A mobile DJ truck for baraat is exactly what it sounds like — a truck-mounted DJ setup that moves with the procession instead of staying fixed at one point, so the music never stops as the baraati group walks toward the venue.\n\nPlanMyBaraat's mobile DJ truck comes as part of a full baraat package, alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "The mobility is the whole point — a fixed sound system at the venue entrance means the baraat walks in silence until they arrive, which defeats the purpose of a grand entry. Our truck carries the sound system and DJ artist and moves at walking pace for the entire route, so the music and energy build the whole way, not just at the last few steps.\n\nThe dhol team walks alongside the truck to keep rhythm going between DJ tracks, and the whole procession arrives at the venue together as one continuous celebration.",
    whatsIncluded:
      "Every package includes the mobile DJ truck, sound system, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team are included from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and mobile DJ trucks get booked out fast during that window. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "Does the mobile DJ truck play music the whole route?",
        a: "Yes, the DJ performs live from the truck for the entire walk from the starting point to the venue, not just at the entrance.",
      },
      {
        q: "How much does a mobile DJ truck for baraat cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "What speed does the truck move at?",
        a: "It moves at walking pace so the baraati group can dance alongside it comfortably the whole way.",
      },
      {
        q: "Can the truck navigate narrow lanes?",
        a: "In most cases yes, though we check your exact venue's approach road in advance since some older neighborhoods have narrower lanes.",
      },
      {
        q: "How early should I book a mobile DJ truck?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out fast.",
      },
      {
        q: "Is the dhol team included with the truck?",
        a: "Yes, dhol players are included in every package alongside the truck, not booked separately.",
      },
      {
        q: "Does the truck have lighting for evening entries?",
        a: "Yes, chhatri lights come with the starting package, and higher tiers add moving LED panels.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the truck, DJ, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "wedding-dj-truck-with-lights": {
    slug: "wedding-dj-truck-with-lights",
    intro:
      "A wedding DJ truck with lights is the standard setup for an evening baraat entry — the truck carries not just the sound system but a full lighting rig, so the entry looks as good as it sounds once the sun goes down.\n\nPlanMyBaraat's DJ truck comes with lighting built in from the starting package, as part of a complete baraat entry alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "Chhatri lights — traditional umbrella-style lights carried or mounted around the truck — come standard with every package, giving the entry a warm, festive glow for evening processions. On higher packages, we add moving LED panels along the truck body and custom LED lettering that spells out the groom's name, visible from a distance as the truck approaches.\n\nThe lighting is designed to work with the truck's movement, so it stays bright and visible the whole route, not just when the truck is stationary.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, DJ artist, and lighting as the base. Raj Tilak includes 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package tier, dhol count, and how much lighting and effects you want. Raj Tilak is the most affordable option with proper chhatri lighting included. Signature costs more because it includes moving LED panels, custom name lighting, and more.\n\nMessage us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and evening entries with full lighting are especially popular during that stretch. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "Does every package include lighting on the truck?",
        a: "Yes, chhatri lights come with every package starting from Raj Tilak, and higher tiers add moving LED panels and custom name lettering.",
      },
      {
        q: "How much does a wedding DJ truck with lights cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can the lights spell out our names?",
        a: "Yes, the Maharaja and Signature packages include the groom's name displayed in custom LED lettering on the truck.",
      },
      {
        q: "Is the lighting good enough for a night entry?",
        a: "Yes, the lighting setup is built specifically for evening and night baraat entries, when it has the most visual impact.",
      },
      {
        q: "How early should I book for an evening entry?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since evening slots are especially popular.",
      },
      {
        q: "Does the lighting work while the truck is moving?",
        a: "Yes, it's designed to stay bright and visible for the whole moving procession, not just when the truck is parked.",
      },
      {
        q: "Can I choose a specific lighting color theme?",
        a: "Message us on WhatsApp with your preferences and we'll let you know what's possible for your package.",
      },
      {
        q: "What's the difference between the package tiers?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "dj-truck-with-sound-system-rental": {
    slug: "dj-truck-with-sound-system-rental",
    intro:
      "Searching for a DJ truck with sound system rental usually means you want to be sure the audio quality is genuinely good, not just a truck with a small speaker bolted on. PlanMyBaraat's trucks carry a concert-grade sound system built for outdoor, moving-crowd use.\n\nThe truck and sound system come as part of a full baraat package, alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "Outdoor sound for a moving crowd is different from indoor venue audio — it needs to project clearly over dhol drums, crowd noise, and open-air acoustics without distortion. Our trucks are fitted with a professional sound system sized for this exact use, run by a DJ artist who performs live rather than just playing a fixed playlist.\n\nThe sound system sits on the lower deck of the double decker truck, with the DJ performing on the upper deck, so the audio quality holds up even as the truck moves at walking pace through a dancing crowd.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist as the base. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package tier, dhol count, and any extra effects. Raj Tilak is the most affordable option with a proper sound system included. Signature costs more because it includes more overall production.\n\nMessage us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for full sound setups peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm availability, usually within the hour.",
    faqs: [
      {
        q: "Is the sound system good enough for a large outdoor crowd?",
        a: "Yes, the truck carries a concert-grade sound system specifically built for outdoor, moving-crowd baraat use.",
      },
      {
        q: "How much does a DJ truck with sound system rental cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does a live DJ operate the sound system?",
        a: "Yes, a professional DJ artist performs live from the truck rather than just running a fixed playlist.",
      },
      {
        q: "Can the sound system handle both music and announcements?",
        a: "Yes, it's set up for both continuous music and any announcements you might need during the procession.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks get booked out fast.",
      },
      {
        q: "Does the sound quality hold up while the truck is moving?",
        a: "Yes, it's designed for exactly that — steady, clear sound as the truck moves at walking pace through the crowd.",
      },
      {
        q: "Is the dhol team included with the sound system rental?",
        a: "Yes, dhol players are included in every package, not booked separately from the truck.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the truck, sound system, DJ artist, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "baraat-entry-truck-booking": {
    slug: "baraat-entry-truck-booking",
    intro:
      "Baraat entry truck booking is the process of reserving the double decker DJ truck that leads your wedding procession — and with PlanMyBaraat, that booking covers the whole entry, not just the vehicle.\n\nOne booking gets you the truck, a dhol team, a vintage car for the groom, and a safa team, coordinated as a single service from date confirmation through the entry itself.",
    explanation:
      "A baraat entry truck booking typically starts with a WhatsApp conversation about your date, city, venue, and rough guest count. From there we recommend a package, confirm the truck's availability, and lock in the date. On the day, our team handles the truck, dhol, car, and safa styling as one coordinated operation rather than separate vendors showing up independently.\n\nThis matters because timing is everything in a baraat — the truck, dhol, and groom's car all need to arrive and move together, which is much easier when one team is managing all of it.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and truck booking slots fill up fast during that window. 3-4 weeks' notice is a safe bet for peak season dates.\n\nWhen you reach out, share your date, city, venue, and rough guest count — we'll confirm availability and walk you through the packages.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How does baraat entry truck booking work?",
        a: "Message us on WhatsApp with your date, city, venue, and rough guest count. We'll recommend a package, confirm truck availability, and lock in your date.",
      },
      {
        q: "How much does baraat entry truck booking cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Do I need to pay a deposit to confirm the booking?",
        a: "Yes, we usually take an advance payment to lock in your date, with the balance due closer to the event. We'll share exact terms once you confirm a package.",
      },
      {
        q: "What happens if my wedding date changes?",
        a: "Message us as soon as you know so we can check truck availability for the new date and adjust the booking.",
      },
      {
        q: "How far in advance should I complete the booking?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since booking slots fill up fast.",
      },
      {
        q: "Is the whole team coordinated under one booking?",
        a: "Yes, the truck, dhol team, car, and safa team are all managed by us as one operation, not separate vendors.",
      },
      {
        q: "Can I change my package after booking?",
        a: "Message us and we'll see what's possible depending on your date and how far out we are from the event.",
      },
      {
        q: "What info do you need to confirm a booking?",
        a: "Your wedding date, city, venue, rough guest count, and preferred package — that's enough for us to confirm and lock in the truck.",
      },
    ],
  },

  "baraat-truck-decoration-ideas": {
    slug: "baraat-truck-decoration-ideas",
    intro:
      "Baraat truck decoration ideas usually come up once families have picked a package and start thinking about how to make the truck feel personal — custom branding, lighting themes, and small touches that make the entry feel like theirs specifically.\n\nPlanMyBaraat's packages come with a base level of decoration and lighting built in, with more customization available as you move up the package tiers.",
    explanation:
      "Every truck comes with chhatri lights as standard, giving a warm, traditional look right out of the starting package. From there, decoration options scale up: full body flex branding on the truck at the Rajwada tier, custom theme branding at Maharaja, and the groom's name spelled out in LED lettering from Maharaja upward.\n\nBeyond the truck itself, decoration extends to the overall look of the entry — the vintage car is styled for the occasion, and the safa team's turban styling for the groom and baraatis adds another visual layer to the whole procession.",
    whatsIncluded:
      "Raj Tilak includes chhatri lights around the truck. Rajwada adds full body custom flex branding. Maharaja brings custom theme branding, moving LED panels, and the groom's name in LED letters. Signature includes all of this plus pyro and confetti effects timed to the truck's arrival for maximum visual impact.\n\nA vintage car and safa team are styled as part of every package, adding to the overall decorated look of the entry.",
    pricingGuidance:
      "Decoration level scales with the package tier — the more elaborate the branding and lighting you want, the higher up the tiers you'll look. Raj Tilak covers the basics well, while Maharaja and Signature offer the most customization.\n\nMessage us on WhatsApp with your date and city, and mention any specific decoration ideas you have — we'll let you know what's possible within each package.",
    bookingNotes:
      "Wedding season runs November to February. If you have specific decoration or branding requests, mention them early — 3-4 weeks' notice gives us time to plan the details properly.\n\nShare your date, city, venue, and any decoration preferences when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and any decoration ideas you have in mind, and we'll let you know what fits your package.",
    faqs: [
      {
        q: "Can I customize the truck's decoration?",
        a: "Yes, decoration options scale with the package — full body branding from Rajwada upward, and custom theme branding with LED name lettering from Maharaja upward.",
      },
      {
        q: "What decoration comes with the starting package?",
        a: "Raj Tilak includes chhatri lights around the truck, giving a warm, traditional look for the entry.",
      },
      {
        q: "Can the truck display our names?",
        a: "Yes, the Maharaja and Signature packages include the groom's name displayed in custom LED lettering on the truck.",
      },
      {
        q: "Are there theme options for the truck branding?",
        a: "Yes, custom theme branding is available from the Maharaja package upward — message us with your ideas on WhatsApp.",
      },
      {
        q: "Does decoration cost extra on top of the package price?",
        a: "No, the decoration level is built into each package tier, so there's no separate add-on charge for the base decoration included in your chosen package.",
      },
      {
        q: "How early should I share decoration ideas?",
        a: "As early as possible, ideally 3-4 weeks ahead, so we have time to plan any specific branding or theme details properly.",
      },
      {
        q: "Is the vintage car decorated too?",
        a: "Yes, the vintage car is styled for the occasion as part of every package, not left plain.",
      },
      {
        q: "Which package has the most decoration options?",
        a: "Signature, our top package, includes the most decoration along with pyro and confetti effects for maximum visual impact.",
      },
    ],
  },

  "baraat-truck-price": {
    slug: "baraat-truck-price",
    intro:
      "Baraat truck price depends on which package you pick, how many dhol players you want, and whether you add effects like pyro or confetti — there's no single flat number, but there is a clear range across our four packages.\n\nPlanMyBaraat's baraat truck price always covers the full entry: the truck, dhol team, vintage car, and safa team together, not the truck alone.",
    explanation:
      "The base — truck, sound system, and DJ artist — is consistent across every package. What moves the price up as you go through the tiers is the dhol count (2 to 6), the lighting and LED setup, and extras like a teddy or gorilla performer, pyro effects, confetti cannons, and a security team on Signature, our top package.\n\nBecause the price always includes the vintage car and safa team too, it's worth comparing against the full entry cost elsewhere, not just a bare truck rental quote.",
    whatsIncluded:
      "Raj Tilak includes the truck, DJ artist, 2 dhol, chhatri lights, a vintage car, and a safa team. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature adds a security team plus pyro and confetti effects.",
    pricingGuidance:
      "We don't publish a flat baraat truck price because it depends on your city, date, guest count, and package choice. Raj Tilak is the most affordable way to get a proper truck entry, and Signature is the most complete.\n\nMessage us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real price, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and both price and truck availability tighten during that window. 3-4 weeks' notice is a safe bet for peak season.\n\nShare your date, city, venue, and guest count when you reach out for an accurate quote.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll send you a real baraat truck price, usually within the hour.",
    faqs: [
      {
        q: "What's the baraat truck price range?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the price include just the truck or the full entry?",
        a: "The full entry — truck, dhol team, vintage car, and safa team are all included in every package price.",
      },
      {
        q: "Is Raj Tilak a full baraat entry or a stripped-down version?",
        a: "It's a complete entry with the truck, DJ, 2 dhol, chhatri lights, car, and safa team — just with less production than the higher tiers, not missing any core piece.",
      },
      {
        q: "Why is Signature more expensive?",
        a: "It includes 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team — significantly more production than the starting package.",
      },
      {
        q: "Does the price change based on my city?",
        a: "Logistics can vary slightly, which is why we confirm your exact price once we know your date and location rather than quoting blind.",
      },
      {
        q: "How early should I lock in a price?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since prices and availability both tighten during peak season.",
      },
      {
        q: "Can I negotiate the baraat truck price?",
        a: "Message us with your budget and requirements on WhatsApp and we'll recommend the package that fits best.",
      },
      {
        q: "How do I get an exact price for my date?",
        a: "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real number, usually within the hour.",
      },
    ],
  },

  "book-baraat-dj-truck-online": {
    slug: "book-baraat-dj-truck-online",
    intro:
      "Booking a baraat DJ truck online with PlanMyBaraat starts with a WhatsApp message, not a long form — you tell us your date, city, and rough guest count, and we take it from there.\n\nThe online booking process covers the full entry: the truck, a dhol team, a vintage car, and a safa team, not just the vehicle.",
    explanation:
      "Instead of filling out a lengthy form and waiting for a callback, our process is built around WhatsApp because that's where most of the actual back-and-forth happens anyway — sharing photos, confirming dates, answering questions. You reach out, we respond with package options and a real quote, and once you confirm, we lock in your date.\n\nThis online-first approach also means you can browse packages, see what's included, and start the conversation whenever it's convenient, without needing to call during office hours.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and online booking slots fill up fast during that window. 3-4 weeks' notice is a safe bet for peak season.\n\nShare your date, city, venue, and rough guest count when you message us — that's enough to get started.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue to start the booking process, usually confirmed within the hour.",
    faqs: [
      {
        q: "How do I book a baraat DJ truck online?",
        a: "Message us on WhatsApp with your wedding date, city, venue, and rough guest count. We'll recommend a package and confirm availability, usually within the hour.",
      },
      {
        q: "Is there a website form I need to fill out?",
        a: "No, WhatsApp is our main booking channel — it's faster and lets us share photos, quotes, and answer questions directly.",
      },
      {
        q: "How much does the truck cost when booked online?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city for a real quote.",
      },
      {
        q: "Can I pay a deposit online?",
        a: "Yes, we'll share payment details once you confirm your package and date, and take an advance to lock in the booking.",
      },
      {
        q: "How quickly do you respond to online inquiries?",
        a: "Usually within the hour during business hours, sometimes faster during less busy periods.",
      },
      {
        q: "Can I see photos of the truck before booking online?",
        a: "Yes, message us on WhatsApp and we'll share photos and videos of the truck and past setups.",
      },
      {
        q: "How early should I book online for peak season?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since slots fill up fast.",
      },
      {
        q: "What details do I need to book online?",
        a: "Your wedding date, city, venue, rough guest count, and preferred package — that's enough for us to confirm.",
      },
    ],
  },

  "baraat-dj-on-rent": {
    slug: "baraat-dj-on-rent",
    intro:
      "Baraat DJ on rent typically means you want a DJ specifically for the wedding procession, not the whole reception — someone who can perform live from a truck as the baraati group dances toward the venue.\n\nPlanMyBaraat's DJ comes as part of a full baraat package: the truck, the DJ artist, a dhol team, a vintage car, and a safa team, all together.",
    explanation:
      "Renting just a DJ without the truck and sound infrastructure leaves you without a way to actually deliver that sound to a moving crowd outdoors. Our packages solve this by pairing the DJ with the double decker truck that carries the sound system, so the DJ has a proper stage and equipment built for exactly this use.\n\nThe DJ artist performs live, taking song requests ahead of time and building a set that works with the dhol team's rhythm, rather than just running a fixed playlist.",
    whatsIncluded:
      "Every package includes the DJ artist, truck, and sound system as the base. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and DJ availability tightens during that window. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the DJ and truck are available, usually within the hour.",
    faqs: [
      {
        q: "Can I rent just a DJ without the truck?",
        a: "We package the DJ with the truck and sound system, since that's what makes the performance actually work for a moving baraat crowd outdoors.",
      },
      {
        q: "How much does baraat DJ on rent cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the DJ take song requests?",
        a: "Yes, our DJ artists take requests ahead of time and build a set around your preferred entry and dance tracks.",
      },
      {
        q: "Is the DJ experienced with baraat entries specifically?",
        a: "Yes, our DJs work with us regularly and are experienced with the pacing and energy a baraat procession needs, not just standard party sets.",
      },
      {
        q: "How early should I book the DJ?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since DJ and truck availability both tighten during peak season.",
      },
      {
        q: "Does the DJ coordinate with the dhol team?",
        a: "Yes, the DJ and dhol team work together during the procession to keep the energy consistent throughout.",
      },
      {
        q: "What equipment does the DJ use?",
        a: "A professional sound system mounted on the truck, sized for outdoor, moving-crowd baraat use.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the DJ artist, truck, sound system, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "dj-on-rent-for-wedding": {
    slug: "dj-on-rent-for-wedding",
    intro:
      "DJ on rent for wedding is a broad search, but if you're planning the baraat entry specifically, PlanMyBaraat's DJ comes as part of a complete package built for exactly that moment — the walk from the starting point to the venue.\n\nThe DJ, truck, dhol team, vintage car, and safa team are all booked together as one service.",
    explanation:
      "A general wedding DJ rental usually covers the reception or sangeet, playing from a fixed setup indoors or at a stage. A baraat DJ is different — they perform live from a moving truck, outdoors, with a crowd walking and dancing around the vehicle the whole time.\n\nOur DJ artists are specifically experienced with this format: reading the crowd's energy while the truck moves, working with the dhol team's rhythm, and building toward the venue arrival as a climax.",
    whatsIncluded:
      "Every package includes the DJ artist, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and DJ availability tightens during that window. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm availability, usually within the hour.",
    faqs: [
      {
        q: "Is a baraat DJ different from a reception DJ?",
        a: "Yes, a baraat DJ performs live from a moving truck outdoors, working with a walking, dancing crowd — different pacing and setup than a fixed reception DJ.",
      },
      {
        q: "How much does DJ on rent for wedding cost for the baraat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can I also book a separate DJ for the reception?",
        a: "Our packages focus specifically on the baraat entry — for reception DJ needs, mention it to us and we'll let you know what's possible.",
      },
      {
        q: "Does the baraat DJ come with the truck automatically?",
        a: "Yes, the DJ, truck, and sound system are bundled together in every package, not booked separately.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since availability tightens during peak season.",
      },
      {
        q: "Can the DJ play regional and Bollywood songs?",
        a: "Yes, our DJ artists take requests across genres and build a set that matches your preferences.",
      },
      {
        q: "Is the dhol team part of the same booking?",
        a: "Yes, dhol players are included in every package alongside the DJ and truck.",
      },
      {
        q: "What's the difference between the packages?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "wedding-dj-hire-price": {
    slug: "wedding-dj-hire-price",
    intro:
      "Wedding DJ hire price for a baraat entry specifically depends on the package, dhol count, and any extra effects — not a flat number, since the DJ is always bundled with the truck, dhol team, vintage car, and safa team in our packages.\n\nPlanMyBaraat quotes based on your actual date, city, and guest count, so the price you get reflects your real event, not a generic estimate.",
    explanation:
      "Because the DJ performs from a truck as part of a moving baraat entry, the hire price includes more than just the artist's time — it covers the truck, sound system, and the coordination needed to keep the DJ working alongside a dhol team and a moving procession. This is different from hiring a DJ for a fixed reception stage.\n\nThe base package price stays the same structure across all tiers: truck, DJ, and dhol as the core, with lighting, effects, and extra entertainers added as you move up.",
    whatsIncluded:
      "Every package includes the DJ artist, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "We don't publish a flat wedding DJ hire price because it depends on your city, date, guest count, and package choice. Raj Tilak is the most affordable way to get a proper DJ and truck entry, and Signature is the most complete.\n\nMessage us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real price, usually within the hour.",
    bookingNotes:
      "Wedding season runs November to February, and DJ hire prices and availability both tighten during that window. 3-4 weeks' notice is a safe bet for peak season.\n\nShare your date, city, venue, and guest count when you reach out for an accurate quote.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll send you a real DJ hire price, usually within the hour.",
    faqs: [
      {
        q: "What's the wedding DJ hire price for a baraat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the price include the truck or just the DJ?",
        a: "The full entry — DJ, truck, sound system, dhol team, vintage car, and safa team are all included in the package price.",
      },
      {
        q: "Why is baraat DJ hire different from reception DJ hire?",
        a: "A baraat DJ performs live from a moving truck outdoors with a dancing crowd, which requires different equipment and coordination than a fixed reception setup.",
      },
      {
        q: "Is the starting package good value?",
        a: "Yes, Raj Tilak includes the truck, DJ, 2 dhol, chhatri lights, car, and safa team — a complete entry at our most affordable tier.",
      },
      {
        q: "Does the price vary by city?",
        a: "Logistics can vary slightly, which is why we confirm your exact price once we know your date and location.",
      },
      {
        q: "How early should I lock in a hire price?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since prices and availability tighten during peak season.",
      },
      {
        q: "Can I negotiate based on my budget?",
        a: "Message us with your budget and requirements on WhatsApp and we'll recommend the package that fits best.",
      },
      {
        q: "How do I get an exact hire price?",
        a: "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real number, usually within the hour.",
      },
    ],
  },

  "wedding-dj-near-me-price": {
    slug: "wedding-dj-near-me-price",
    intro:
      "Searching for a wedding DJ near me for the baraat entry usually means you want someone local who knows the area, not a DJ flown in from elsewhere. PlanMyBaraat is Gujarat-based, covering Vadodara, Surat, Ahmedabad, Rajkot, and most cities and towns across the state.\n\nOur DJ comes as part of a full baraat package: the truck, dhol team, vintage car, and safa team, priced based on your actual date and location.",
    explanation:
      "Being local matters for a baraat specifically, because the DJ and truck driver need to know how to navigate your city's roads at walking pace with a dancing crowd around them. Our team works across Gujarat regularly, so we're familiar with route planning in most cities, not learning the area for the first time on your wedding day.\n\nWhen you search \"near me,\" we match that to your actual city and confirm truck and DJ availability for your specific date and venue.",
    whatsIncluded:
      "Every package includes the DJ artist, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects, and we confirm the exact price once we know your city and date. Raj Tilak is the most affordable option and Signature is the most complete.\n\nMessage us on WhatsApp with your city and we'll respond with a real quote for your area.",
    bookingNotes:
      "Wedding season runs November to February, and local DJ and truck availability tightens during that window. 3-4 weeks' notice is a safe bet.\n\nShare your city, date, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your city and wedding date, and we'll confirm availability near you, usually within the hour.",
    faqs: [
      {
        q: "Do you cover DJ services near my city?",
        a: "We cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts across Gujarat. Message us your city to confirm.",
      },
      {
        q: "How much does a wedding DJ near me cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does being local mean lower travel costs?",
        a: "Being Gujarat-based helps us plan logistics efficiently, though the final price is based on your package choice rather than travel distance in most cases.",
      },
      {
        q: "How do you confirm coverage for my specific area?",
        a: "Message us your exact city and venue on WhatsApp and we'll confirm truck and DJ availability directly.",
      },
      {
        q: "How early should I book a local DJ?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since local slots fill up fast in peak season.",
      },
      {
        q: "Is the truck driver familiar with local roads?",
        a: "Yes, our drivers work across Gujarat regularly and are experienced with route planning in most cities and towns we cover.",
      },
      {
        q: "Can I request a specific DJ if I've seen them before?",
        a: "Message us with details and we'll let you know if that's possible for your date.",
      },
      {
        q: "What's the difference between the packages?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "professional-dj-for-baraat-entry": {
    slug: "professional-dj-for-baraat-entry",
    intro:
      "A professional DJ for baraat entry means someone experienced specifically with this format — performing live from a moving truck, reading a dancing crowd's energy, and working alongside a dhol team, not just running a standard party playlist.\n\nPlanMyBaraat's DJ artists work with us regularly and are experienced with exactly this kind of entry, included as part of a full baraat package.",
    explanation:
      "A baraat entry has a different rhythm than a typical party set — it needs to build energy gradually as the procession moves, sync with the dhol team's live drumming, and peak right around the venue arrival. Our DJs are chosen and trained for this specific skill, not generalist party DJs doing baraat work occasionally.\n\nBecause they work with us regularly rather than being hired last-minute, they're also familiar with how our truck setup works and how to coordinate with the dhol team in real time.",
    whatsIncluded:
      "Every package includes the professional DJ artist, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for experienced baraat DJs peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm a professional DJ is available, usually within the hour.",
    faqs: [
      {
        q: "What makes a DJ 'professional' for a baraat entry specifically?",
        a: "Experience with the format — building energy as the procession moves, syncing with live dhol drumming, and peaking around the venue arrival, not just running a standard playlist.",
      },
      {
        q: "How much does a professional DJ for baraat entry cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Do your DJs work with the dhol team in real time?",
        a: "Yes, they coordinate with the dhol players throughout the procession to keep the energy consistent and build toward the venue arrival.",
      },
      {
        q: "Can I hear samples of the DJ's work before booking?",
        a: "Message us on WhatsApp and we'll share videos of past entries so you can get a sense of the style.",
      },
      {
        q: "How early should I book a professional DJ?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since experienced DJs get booked out fast.",
      },
      {
        q: "Do the DJs take custom song requests?",
        a: "Yes, they take requests ahead of time and build a set around your preferred entry and dance tracks.",
      },
      {
        q: "Is the DJ the same person who manages the truck?",
        a: "The DJ focuses on the performance while a separate driver handles the truck, so both jobs are done by specialists.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the professional DJ artist, truck, sound system, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "non-stop-dj-for-wedding": {
    slug: "non-stop-dj-for-wedding",
    intro:
      "A non stop DJ for wedding means the music doesn't cut out between the starting point and the venue — the DJ keeps the set going continuously for the whole baraat procession, so the energy never drops.\n\nPlanMyBaraat's DJ performs live from the truck for the entire route, included as part of a full baraat package alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "Gaps in the music during a baraat can kill the momentum, especially if the procession is long or the route has stops. Our DJs are experienced with keeping a continuous set running, transitioning smoothly between tracks and working with the dhol team's live drumming to fill any natural pauses.\n\nThe truck's sound system is built for sustained outdoor use too, so there's no risk of the equipment cutting out partway through the entry.",
    whatsIncluded:
      "Every package includes the DJ artist, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your date, city, venue, and rough guest count, along with your expected route length, when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "Does the music really run non stop the whole route?",
        a: "Yes, the DJ keeps the set continuous for the whole procession, transitioning smoothly between tracks and working with the dhol team during any natural pauses.",
      },
      {
        q: "How much does a non stop DJ for wedding cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "What if my baraat route is unusually long?",
        a: "Let us know the expected route length when you book so we can plan the set and timing accordingly.",
      },
      {
        q: "Can the sound system handle a long, continuous set?",
        a: "Yes, it's built for sustained outdoor use throughout the whole entry, not just short bursts.",
      },
      {
        q: "Does the dhol team play the whole time too?",
        a: "The dhol team works alongside the DJ, keeping the energy up especially between tracks or during any natural transitions.",
      },
      {
        q: "How early should I book for a longer route?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, and mentioning your route length helps us plan properly.",
      },
      {
        q: "Can the DJ take requests throughout the set?",
        a: "Yes, our DJs take requests ahead of time and build a continuous set around your preferred tracks.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the DJ artist, truck, sound system, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "dj-jockey-hire-near-me": {
    slug: "dj-jockey-hire-near-me",
    intro:
      "DJ jockey hire near me for a baraat means finding a live performer local to your city who can work the truck setup, not just play a fixed track list from a laptop.\n\nPlanMyBaraat's DJ jockeys work across Gujarat regularly and come as part of a full baraat package: the truck, dhol team, vintage car, and safa team.",
    explanation:
      "A DJ jockey specifically refers to the live performer working the decks and reading the crowd, as opposed to a pre-recorded playlist system. For a baraat, this matters because the DJ needs to adjust in real time — building energy as the procession moves, responding to the dhol team, and timing the set to peak around the venue arrival.\n\nOur DJ jockeys are experienced with exactly this format and work with us regularly across the cities and towns we cover in Gujarat.",
    whatsIncluded:
      "Every package includes the DJ jockey, truck, and sound system. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete. We quote based on your date, city, and guest count.\n\nMessage us on WhatsApp for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and DJ jockey availability tightens during that window. 3-4 weeks' notice is a safe bet.\n\nShare your city, date, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your city and wedding date, and we'll confirm a DJ jockey's available near you, usually within the hour.",
    faqs: [
      {
        q: "Do you have DJ jockeys near my city?",
        a: "We cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts across Gujarat. Message us your city to confirm.",
      },
      {
        q: "How much does DJ jockey hire near me cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Is the DJ jockey a live performer or a fixed playlist?",
        a: "A live performer who reads the crowd and adjusts the set in real time, not a pre-set playlist running unattended.",
      },
      {
        q: "Does the jockey work with the truck sound system?",
        a: "Yes, the DJ jockey performs from the truck using the built-in sound system, included as part of the package.",
      },
      {
        q: "How early should I book a DJ jockey near me?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since availability tightens during peak season.",
      },
      {
        q: "Can I request specific tracks for the jockey to play?",
        a: "Yes, our DJ jockeys take requests ahead of time and build a set around your preferences.",
      },
      {
        q: "Is the jockey experienced with baraat-specific pacing?",
        a: "Yes, they're chosen and experienced specifically for baraat entries, not generalist party DJing.",
      },
      {
        q: "What's the difference between the packages?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
    ],
  },

  "sound-and-light-setup-for-wedding": {
    slug: "sound-and-light-setup-for-wedding",
    intro:
      "A sound and light setup for wedding baraat entries needs to work outdoors, on the move, and be visible and audible to a large dancing crowd — which is exactly what PlanMyBaraat's truck-mounted system is built for.\n\nThe sound and light setup comes as part of a full baraat package, alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "Sound and lighting for a baraat is different from a fixed venue setup — everything needs to be mounted on a vehicle that moves at walking pace while still delivering clear audio and visible lighting to a crowd around it. Our double decker truck carries a concert-grade sound system on the lower deck and lighting rigs across both levels.\n\nChhatri lights come standard, giving the entry a warm, traditional evening look. Higher packages add moving LED panels and custom name lettering, making the truck a visual centerpiece as much as a sound source.",
    whatsIncluded:
      "Every package includes the sound system, DJ artist, and base lighting. Raj Tilak includes chhatri lights. Rajwada adds branding on the truck body. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds pyro and confetti effects on top of the full lighting setup.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, how elaborate a lighting setup you want, and any extra effects. Raj Tilak is the most affordable option with solid sound and lighting included. Signature costs more because it includes the most complete visual and audio production.\n\nMessage us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and evening entries with full sound and light setups are especially popular during that stretch. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm the setup's available, usually within the hour.",
    faqs: [
      {
        q: "Is the sound and light setup built for outdoor use?",
        a: "Yes, it's specifically designed for outdoor, moving-crowd baraat use, not adapted from an indoor venue setup.",
      },
      {
        q: "How much does a sound and light setup for wedding cost?",
        a: "It depends on the package, dhol count, and how elaborate the lighting is. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does the lighting work while the truck is moving?",
        a: "Yes, it's designed to stay bright and visible for the whole moving procession, not just when parked.",
      },
      {
        q: "Can I get custom LED name lighting?",
        a: "Yes, the Maharaja and Signature packages include the groom's name displayed in custom LED lettering on the truck.",
      },
      {
        q: "How early should I book for a full sound and light setup?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since evening entries with full setups are popular.",
      },
      {
        q: "Is the sound quality good enough for a large crowd?",
        a: "Yes, the truck carries a concert-grade sound system sized for outdoor, moving-crowd use.",
      },
      {
        q: "What lighting comes with the starting package?",
        a: "Raj Tilak includes chhatri lights around the truck, giving a warm, traditional evening look.",
      },
      {
        q: "Which package has the most complete sound and light production?",
        a: "Signature, our top package, includes the full sound system, moving LED panels, custom name lighting, and pyro and confetti effects.",
      },
    ],
  },
};
