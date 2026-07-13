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

  "concert-style-sound-system-wedding": {
    slug: "concert-style-sound-system-wedding",
    intro:
      "A concert style sound system for wedding baraat entries means audio that's actually built for a large outdoor crowd, not a small party speaker stretched beyond its limits. PlanMyBaraat's trucks carry exactly this kind of setup.\n\nThe concert style sound system comes as part of a full baraat package, alongside a dhol team, a vintage car, and a safa team.",
    explanation:
      "Concert-grade audio means clean, powerful sound that holds up over distance and crowd noise, run by a professional DJ artist who knows how to manage levels for an outdoor, moving environment. This is a meaningful step up from a standard party PA system, which often distorts or loses clarity once you add a large dancing crowd and open-air acoustics.\n\nThe system sits on the lower deck of our double decker truck, with the DJ performing live on the upper deck, so both power and control stay consistent as the truck moves through the procession.",
    whatsIncluded:
      "Every package includes the concert style sound system, truck, and DJ artist. Raj Tilak adds 2 dhol and chhatri lights. Rajwada steps up to 4 dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects.\n\nA vintage car and safa team come with every package from Raj Tilak upward.",
    pricingGuidance:
      "Pricing depends on the package, dhol count, and any extra effects. Raj Tilak is the most affordable option with a proper concert-grade system included. Signature costs more because it includes more overall production.\n\nMessage us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for full sound production peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm availability, usually within the hour.",
    faqs: [
      {
        q: "Is the sound system really concert grade?",
        a: "Yes, it's professional-grade audio equipment built for outdoor, large-crowd use, run by a trained DJ artist rather than a basic party speaker.",
      },
      {
        q: "How much does a concert style sound system for wedding cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Does it distort at higher volumes?",
        a: "No, the system is sized to run clean at the volumes needed for an outdoor baraat crowd without distortion.",
      },
      {
        q: "Can the system handle both music and live dhol sound?",
        a: "Yes, the sound is balanced to work alongside the live dhol drumming rather than competing with it.",
      },
      {
        q: "How early should I book for a full sound production?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since demand peaks then.",
      },
      {
        q: "Is the system operated by a trained technician?",
        a: "The DJ artist manages the sound levels and mix throughout the performance as part of the package.",
      },
      {
        q: "Does the sound system come with the truck automatically?",
        a: "Yes, the sound system, DJ, and truck are all bundled together in every package.",
      },
      {
        q: "What's included in the starting package?",
        a: "Raj Tilak covers the sound system, DJ artist, truck, 2 dhol, chhatri lights, a vintage car, and a safa team.",
      },
    ],
  },

  "intelligent-lighting-rental-wedding": {
    slug: "intelligent-lighting-rental-wedding",
    intro:
      "Intelligent lighting rental for wedding baraat entries refers to programmable, moving lights — not just static bulbs — that add visual movement and effects to the truck as it processes toward the venue.\n\nPlanMyBaraat's higher packages include intelligent, moving LED lighting as part of the truck setup, alongside a dhol team, vintage car, and safa team.",
    explanation:
      "Standard chhatri lights give a warm, traditional glow, but intelligent lighting adds programmable movement — panels that shift patterns, colors that sync with the music, and custom effects that make the truck feel more like a moving stage production. This is included from our Maharaja package upward.\n\nCombined with the groom's name spelled out in LED lettering, the intelligent lighting setup turns the truck into a visual centerpiece that's noticeable well before it arrives at the venue.",
    whatsIncluded:
      "Raj Tilak includes chhatri lights as the base lighting. Rajwada adds full body branding with additional lighting. Maharaja introduces moving LED panels and the groom's name in LED letters — the intelligent lighting tier. Signature includes all of this plus pyro and confetti effects synced to the truck's arrival.",
    pricingGuidance:
      "Intelligent lighting is included from the Maharaja package upward, so pricing reflects that tier and above. Message us on WhatsApp with your date and city, and we'll walk you through what's included at each level and give you a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for higher-tier packages with full lighting production peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll confirm availability for a package with intelligent lighting, usually within the hour.",
    faqs: [
      {
        q: "Which package includes intelligent lighting?",
        a: "Maharaja and Signature include moving LED panels and custom LED name lettering — our intelligent, programmable lighting tier.",
      },
      {
        q: "How much does intelligent lighting rental for wedding cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote covering the full package.",
      },
      {
        q: "Does the lighting sync with the music?",
        a: "Yes, the moving LED panels are set up to complement the DJ's set and the overall energy of the procession.",
      },
      {
        q: "Can the lights display our names?",
        a: "Yes, the groom's name is displayed in custom LED lettering as part of the Maharaja and Signature packages.",
      },
      {
        q: "Is intelligent lighting worth it over the base chhatri lights?",
        a: "It depends on how much visual production you want — chhatri lights give a traditional look, while intelligent lighting adds movement and a more modern, dramatic effect.",
      },
      {
        q: "How early should I book a package with intelligent lighting?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since higher-tier packages are popular during peak season.",
      },
      {
        q: "Does the lighting work well for daytime entries too?",
        a: "It's most visually striking in evening or night entries, though it's included regardless of timing in the relevant packages.",
      },
      {
        q: "What else comes with the Maharaja package besides lighting?",
        a: "Maharaja includes 6 dhol, moving LED panels, the groom's name in lights, the truck, DJ, vintage car, and safa team.",
      },
    ],
  },

  "baraat-entry-ideas": {
    slug: "baraat-entry-ideas",
    intro:
      "Looking for baraat entry ideas usually means you want the entry to feel memorable, not just functional — something guests talk about afterward. PlanMyBaraat's four packages give you a clear set of options to build from, rather than a blank page.\n\nEach package combines a DJ truck, dhol team, vintage car, and safa team differently, so the 'idea' really comes down to how much production you want layered on top of that base.",
    explanation:
      "The simplest strong idea is the classic double decker truck entry with a solid dhol team and good lighting — that alone, done well, is memorable. From there, ideas scale up: adding a teddy or gorilla performer for crowd engagement, moving LED visuals and the groom's name in lights, or going all the way to pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team add another layer regardless of which truck package you pick, since the groom's arrival and the baraati group's turban styling are both part of how the entry looks as a whole.",
    whatsIncluded:
      "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name in lights. Signature, the top package, adds a security team plus pyro and confetti effects.",
    pricingGuidance:
      "Pricing depends on which package matches your entry idea, dhol count, and any extra effects. Raj Tilak is the most affordable option and Signature is the most complete.\n\nMessage us on WhatsApp with your date and city, and describe the kind of entry you're imagining — we'll match it to a package and give you a real quote.",
    bookingNotes:
      "Wedding season runs November to February. If you have a specific idea in mind, mention it early — 3-4 weeks' notice gives us time to plan any custom details.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and any entry ideas you have in mind, and we'll recommend the package that fits.",
    faqs: [
      {
        q: "What are some good baraat entry ideas?",
        a: "A double decker DJ truck with a strong dhol team and good lighting is a solid, memorable base — from there, adding entertainers, LED visuals, or pyro and confetti effects builds up the production further.",
      },
      {
        q: "How much does a baraat entry cost?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can I mix ideas from different packages?",
        a: "Message us with what you're imagining and we'll let you know what's possible — some elements are tied to specific package tiers.",
      },
      {
        q: "Do you have example videos of past entries?",
        a: "Yes, message us on WhatsApp and we'll share videos of past baraat entries for inspiration.",
      },
      {
        q: "How early should I plan a custom entry idea?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, and earlier is better if you want specific customization.",
      },
      {
        q: "Is the vintage car part of every entry idea?",
        a: "Yes, a vintage car or baggi is included in every package from Raj Tilak upward, regardless of which truck production level you choose.",
      },
      {
        q: "What makes an entry feel more 'grand'?",
        a: "More dhol players, moving LED visuals, entertainers, and effects like pyro or confetti all add to a grander feel — that's the difference between our package tiers.",
      },
      {
        q: "Can I get help deciding which package fits my idea?",
        a: "Yes, describe what you're imagining on WhatsApp and we'll recommend the package that matches best.",
      },
    ],
  },

  "unique-baraat-entry-ideas": {
    slug: "unique-baraat-entry-ideas",
    intro:
      "Unique baraat entry ideas usually mean adding something beyond the standard truck-and-dhol setup — a specific lighting theme, a custom LED name display, or an entertainer that makes your entry stand out from others your guests have seen.\n\nPlanMyBaraat's Maharaja and Signature packages are built for exactly this kind of customization, on top of the same reliable base every package includes.",
    explanation:
      "A unique entry doesn't necessarily mean starting from scratch — it usually means picking specific add-ons that reflect your personality as a couple. Custom LED lettering with the groom's name, a teddy or gorilla performer for crowd engagement, moving LED panels with a particular color theme, or pyro and confetti timed to a specific moment are all ways to make a standard package feel personal.\n\nBecause the truck, dhol, car, and safa team are consistent across every tier, the 'unique' part comes from layering these specific touches on top rather than reinventing the whole format.",
    whatsIncluded:
      "Raj Tilak covers the essentials. Rajwada adds a teddy or gorilla performer. Maharaja brings moving LED panels and custom LED name lettering. Signature adds pyro and confetti effects plus a security team — the most room for a distinctive, layered entry.",
    pricingGuidance:
      "Pricing depends on the package tier and any custom touches you want. Maharaja and Signature offer the most room for unique customization. Message us on WhatsApp with your ideas and we'll let you know what's possible within your budget.",
    bookingNotes:
      "Wedding season runs November to February. If you want something specific and custom, mention it as early as possible — 3-4 weeks' notice gives us time to plan the details properly.\n\nShare your date, city, venue, and any specific ideas when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and any unique ideas you're considering, and we'll let you know what fits your package.",
    faqs: [
      {
        q: "What makes an entry feel unique rather than standard?",
        a: "Specific touches like custom LED name lettering, a particular lighting theme, an entertainer, or effects timed to a specific moment — layered on top of the reliable truck-and-dhol base.",
      },
      {
        q: "Which package offers the most customization?",
        a: "Maharaja and Signature offer the most room for unique touches — moving LED panels, custom lettering, entertainers, and effects like pyro and confetti.",
      },
      {
        q: "How much does a unique baraat entry cost?",
        a: "It depends on the package and any custom touches you add. Message your date and city on WhatsApp for a real quote based on your specific ideas.",
      },
      {
        q: "Can I request a specific color theme for the lighting?",
        a: "Message us with your preferences and we'll let you know what's possible for your package.",
      },
      {
        q: "How early should I discuss custom ideas?",
        a: "As early as possible, ideally 3-4 weeks ahead, so we have time to plan any specific requests properly.",
      },
      {
        q: "Is a unique entry much more expensive than a standard one?",
        a: "It depends on how many custom elements you add — the price scales with the package tier and effects, not a separate 'unique' surcharge.",
      },
      {
        q: "Can you show me examples of custom entries you've done?",
        a: "Yes, message us on WhatsApp and we'll share photos and videos of past custom entries for inspiration.",
      },
      {
        q: "Do custom LED names cost extra?",
        a: "Custom LED name lettering is included as part of the Maharaja and Signature packages, not a separate add-on charge.",
      },
    ],
  },

  "best-baraat-entry-ideas": {
    slug: "best-baraat-entry-ideas",
    intro:
      "The best baraat entry ideas usually combine three things well: strong, consistent music, a lively dhol team, and enough visual production to match the scale of your celebration — not just the flashiest single element.\n\nPlanMyBaraat's packages are built around that balance, from Raj Tilak's solid basics to Signature's full production with pyro, confetti, and security.",
    explanation:
      "In our experience running entries across Gujarat, the best ones aren't necessarily the most expensive — they're the ones where the package matches the venue, guest count, and family's style. A smaller, tighter guest list often works beautifully with Raj Tilak's straightforward truck-and-dhol entry, while a large destination-style wedding might call for Signature's full production.\n\nWhat consistently makes an entry feel like 'the best' is good timing — the truck, dhol, and groom's arrival all coordinated together — more than any single flashy add-on.",
    whatsIncluded:
      "Raj Tilak covers the truck, DJ, 2 dhol, chhatri lights, car, and safa team. Rajwada adds more dhol and an entertainer. Maharaja brings LED visuals and custom lettering. Signature adds pyro, confetti, and security for the most complete production.",
    pricingGuidance:
      "Pricing depends on the package that fits your event best, dhol count, and any extra effects. Message us on WhatsApp with your date, city, venue, and guest count, and we'll recommend what actually suits your event rather than just the most expensive option.",
    bookingNotes:
      "Wedding season runs November to February. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and venue, and we'll recommend the package that fits your event best.",
    faqs: [
      {
        q: "What's actually the best baraat entry idea?",
        a: "The one that matches your venue, guest count, and family's style — a smaller entry often works beautifully with Raj Tilak, while a bigger celebration might call for Signature's full production.",
      },
      {
        q: "Is the most expensive package always the best choice?",
        a: "Not necessarily — the right fit depends on your specific event, not just spending the most. We help you pick based on your actual details.",
      },
      {
        q: "How much does the best entry package cost?",
        a: "It depends on which package fits your event. Raj Tilak is our most affordable and Signature is the most complete. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "What matters most for a great baraat entry?",
        a: "Good coordination — the truck, dhol, and groom's arrival timed together well — matters more than any single flashy add-on.",
      },
      {
        q: "How do I know which package is right for my event?",
        a: "Share your date, city, venue, and guest count on WhatsApp and we'll recommend a package based on what actually fits.",
      },
      {
        q: "How early should I book for the best availability?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window for the best chance at your preferred package and date.",
      },
      {
        q: "Can I see examples of well-executed past entries?",
        a: "Yes, message us on WhatsApp and we'll share photos and videos of past baraat entries.",
      },
      {
        q: "Does a bigger guest count need a bigger package?",
        a: "Often yes, since a larger crowd benefits from a stronger sound system and more dhol players, but we'll advise based on your specific numbers.",
      },
    ],
  },

  "royal-baraat-entry": {
    slug: "royal-baraat-entry",
    intro:
      "A royal baraat entry aims for that grand, Rajwada-style feel — vintage cars, rich lighting, a full dhol team, and an overall sense of occasion that matches Gujarat's royal wedding traditions.\n\nPlanMyBaraat's Rajwada and Maharaja packages are named and built specifically for this kind of entry, layering more dhol, lighting, and entertainment on top of the base truck setup.",
    explanation:
      "The royal feel comes from a combination of things working together: the vintage car for the groom's arrival, chhatri lights or moving LED panels on the truck, a strong dhol team keeping the traditional energy up, and the safa team's turban styling tying the whole look together for the groom and baraatis.\n\nOur Rajwada package specifically builds toward this with full body truck branding and a teddy or gorilla performer for extra entertainment, while Maharaja pushes further with custom LED lettering and moving visual panels.",
    whatsIncluded:
      "Raj Tilak covers the essentials with a royal touch through chhatri lights and the vintage car. Rajwada adds full body branding and a performer. Maharaja brings moving LED panels and custom lettering. Signature, the top package, adds security and pyro effects for the most complete royal production.",
    pricingGuidance:
      "Pricing depends on the package tier and how much royal-style production you want. Rajwada and Maharaja are built specifically for this look. Message us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and royal-style entries are especially popular during that window. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll recommend the package that gives you the royal entry you're picturing.",
    faqs: [
      {
        q: "What makes an entry feel 'royal'?",
        a: "A combination of the vintage car, rich lighting, a strong dhol team, and coordinated safa styling — the elements our Rajwada and Maharaja packages are built around.",
      },
      {
        q: "Which package is best for a royal baraat entry?",
        a: "Rajwada and Maharaja are specifically built for this look, with full body branding, moving LED visuals, and extra entertainment on top of the base setup.",
      },
      {
        q: "How much does a royal baraat entry cost?",
        a: "It depends on the package tier and production level. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Is the vintage car part of the royal look?",
        a: "Yes, the vintage car or baggi is a key part of the royal feel and is included in every package from Raj Tilak upward.",
      },
      {
        q: "Does the dhol team play traditional music for a royal entry?",
        a: "Yes, our dhol players keep the traditional energy that fits a royal-style baraat entry.",
      },
      {
        q: "How early should I book for a royal entry?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since these entries are especially popular.",
      },
      {
        q: "Can the truck lighting match a royal color theme?",
        a: "Message us with your preferences and we'll let you know what's possible for your package.",
      },
      {
        q: "Is the safa team part of the royal look too?",
        a: "Yes, the My Safa team's turban styling for the groom and baraatis is part of every package and adds to the overall royal presentation.",
      },
    ],
  },

  "grand-baraat-entry": {
    slug: "grand-baraat-entry",
    intro:
      "A grand baraat entry is about scale — more dhol, more lighting, a bigger visual production, and enough energy to fill a larger guest list. PlanMyBaraat's Maharaja and Signature packages are built for exactly this kind of scale.\n\nBoth packages layer more dhol players, moving LED visuals, and additional effects on top of the same reliable truck and DJ base every package includes.",
    explanation:
      "Scale for a baraat entry mostly comes down to three things: how many dhol players are keeping the energy up, how much visual production the truck carries, and whether there are extra effects timed to the arrival. Maharaja brings 6 dhol and moving LED panels with custom name lettering. Signature adds pyro and confetti effects plus a security team, making it our most production-heavy option.\n\nA grand entry also benefits from good route planning — wider roads let the truck and dancing crowd move more freely, which is something we factor in when recommending a package for your specific venue.",
    whatsIncluded:
      "Maharaja includes 6 dhol, moving LED panels, and the groom's name in lights, on top of the truck, DJ, car, and safa team every package has. Signature adds a security team plus pyro and confetti effects for the most complete, grand production.",
    pricingGuidance:
      "Pricing depends on the package tier and scale of production. Maharaja and Signature are built specifically for a grand entry. Message us on WhatsApp with your date, city, and guest count for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and grand entries with fuller production are especially popular during peak dates. 3-4 weeks' notice is a safe bet, sometimes longer for very large events.\n\nShare your date, city, venue, and guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and guest count, and we'll recommend the package that matches the scale you're going for.",
    faqs: [
      {
        q: "What makes an entry 'grand'?",
        a: "More dhol players, moving LED visuals, extra entertainers, and effects like pyro or confetti — the elements that scale up through Maharaja and Signature.",
      },
      {
        q: "Which package is best for a grand baraat entry?",
        a: "Maharaja and Signature are built specifically for scale, with 6 dhol, moving LED panels, and (in Signature) pyro and confetti effects plus security.",
      },
      {
        q: "How much does a grand baraat entry cost?",
        a: "It depends on the package tier. Message your date, city, and guest count on WhatsApp for a real quote.",
      },
      {
        q: "Does a grand entry need a bigger venue or wider roads?",
        a: "Wider roads help the truck and dancing crowd move more freely, so mention your venue details and we'll factor that into our recommendation.",
      },
      {
        q: "How many dhol players come with the grand package options?",
        a: "Maharaja includes 6 dhol, and Signature includes 6 plus extra entertainment on top.",
      },
      {
        q: "How early should I book for a very large event?",
        a: "3-4 weeks ahead is a safe minimum during wedding season (November to February), and earlier is better for very large or destination-style events.",
      },
      {
        q: "Does Signature include a security team?",
        a: "Yes, Signature includes 4 professional bouncers as part of its full production package.",
      },
      {
        q: "Can I combine effects like pyro and confetti with moving LED panels?",
        a: "Yes, that combination is exactly what the Signature package includes.",
      },
    ],
  },

  "baraat-entry-effects": {
    slug: "baraat-entry-effects",
    intro:
      "Baraat entry effects refer to the extra visual and audio moments layered onto the core truck-and-dhol setup — things like pyro, confetti, LED lighting, and live entertainers that punctuate the entry at key moments.\n\nPlanMyBaraat's packages include a growing range of these effects as you move up the tiers, from Raj Tilak's clean basics to Signature's full production.",
    explanation:
      "Effects work best when they're timed well, not just present. Our packages sync effects like pyro guns and confetti cannons to the truck's arrival at the venue, so they land as a climax rather than going off randomly mid-procession. LED lighting effects run throughout the entry, building visual interest the whole way.\n\nEntertainers like a teddy or gorilla performer add a different kind of effect — interactive, crowd-engaging moments rather than a one-off visual burst — and are included from the Rajwada package upward.",
    whatsIncluded:
      "Raj Tilak includes chhatri lights and a liquid CO2 gun for a dazzling entry moment. Rajwada adds a teddy or gorilla performer. Maharaja brings moving LED panels, confetti CO2 gun, and hand pyro gun. Signature, the top package, adds pyro highlights, confetti, hand pyro, and a fake money gun for the most complete effects lineup.",
    pricingGuidance:
      "Pricing depends on the package tier and which effects are included at that level. Message us on WhatsApp with your date and city, and mention any specific effects you're interested in — we'll match it to a package.",
    bookingNotes:
      "Wedding season runs November to February. If you want specific effects timed to a particular moment, mention it early — 3-4 weeks' notice gives us time to plan the details properly.\n\nShare your date, city, venue, and any effect preferences when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and any effects you're interested in, and we'll recommend the right package.",
    faqs: [
      {
        q: "What baraat entry effects do you offer?",
        a: "Liquid CO2 guns, confetti cannons, hand pyro guns, moving LED panels, and fake money guns, layered across our package tiers from Raj Tilak to Signature.",
      },
      {
        q: "Which package has the most effects?",
        a: "Signature, our top package, includes the fullest range: pyro highlights, confetti, hand pyro, a fake money gun, moving LED panels, and custom LED lettering.",
      },
      {
        q: "Are the effects safe for a large crowd?",
        a: "Yes, our effects are handled by experienced operators and timed to the truck's arrival for a controlled, safe moment.",
      },
      {
        q: "How much do baraat entry effects cost?",
        a: "They're included as part of the package tiers rather than priced separately. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can effects be timed to a specific moment, like the groom stepping down?",
        a: "Yes, message us with your preference and we'll plan the timing around that moment.",
      },
      {
        q: "Does the starting package include any effects?",
        a: "Yes, Raj Tilak includes a liquid CO2 gun for a dazzling entry moment, on top of chhatri lighting.",
      },
      {
        q: "How early should I request specific effects?",
        a: "As early as possible, ideally 3-4 weeks ahead, so we have time to plan and confirm the details.",
      },
      {
        q: "Is a security team included with the effects packages?",
        a: "Yes, Signature includes a professional bouncer team alongside its full effects lineup, useful for crowd management during a bigger production.",
      },
    ],
  },

  "led-screen-for-wedding-truck": {
    slug: "led-screen-for-wedding-truck",
    intro:
      "An LED screen for wedding truck usually refers to the moving LED panels mounted on the truck body that display visuals, patterns, or lighting effects as the baraat procession moves toward the venue.\n\nPlanMyBaraat includes moving LED panels from our Maharaja package upward, as part of a full baraat entry with a dhol team, vintage car, and safa team.",
    explanation:
      "The LED screens run along the truck body and add a dynamic visual layer beyond static chhatri lights — patterns, colors, and effects that catch the eye from a distance and build anticipation as the truck approaches. Combined with the groom's name spelled out in LED lettering, the truck becomes a visual centerpiece as much as a sound source.\n\nThe screens are built into the truck structure rather than added separately, so they're properly integrated with the sound and lighting system rather than a bolt-on extra.",
    whatsIncluded:
      "Raj Tilak and Rajwada include chhatri lights and truck branding without LED screens. Maharaja introduces moving LED panels and custom name lettering. Signature includes the same LED setup plus pyro and confetti effects for the most complete visual production.",
    pricingGuidance:
      "LED screens are included from the Maharaja package upward. Message us on WhatsApp with your date and city, and we'll walk you through what's included at each tier and give you a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for LED-equipped packages peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll confirm availability for a package with LED screens, usually within the hour.",
    faqs: [
      {
        q: "Which package includes LED screens on the truck?",
        a: "Maharaja and Signature include moving LED panels mounted on the truck body, along with custom LED name lettering.",
      },
      {
        q: "How much does an LED screen for wedding truck cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote covering the full package.",
      },
      {
        q: "Are the LED screens visible during the day too?",
        a: "They're most visually striking in evening or night entries, though they're included regardless of timing in the relevant packages.",
      },
      {
        q: "Can the screens display custom graphics?",
        a: "Message us with your specific requests on WhatsApp and we'll let you know what's possible.",
      },
      {
        q: "How early should I book a package with LED screens?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since these higher-tier packages are popular.",
      },
      {
        q: "Do the LED screens work while the truck is moving?",
        a: "Yes, they're designed to stay visible and functional throughout the moving procession.",
      },
      {
        q: "Is the LED screen part of the truck or a separate rental?",
        a: "It's built into the truck structure as part of the Maharaja and Signature packages, not a separate rental.",
      },
      {
        q: "What else comes with a package that has LED screens?",
        a: "Maharaja includes 6 dhol, the groom's name in lights, a vintage car, and a safa team alongside the LED panels.",
      },
    ],
  },

  "moving-led-panel-rental-india": {
    slug: "moving-led-panel-rental-india",
    intro:
      "Moving LED panel rental in India for wedding baraats usually means finding a vendor who can integrate the panels properly with the truck, sound, and lighting setup, not just rent a screen on its own.\n\nPlanMyBaraat includes moving LED panels as part of our Maharaja and Signature packages, fully integrated with the truck, dhol team, vintage car, and safa team.",
    explanation:
      "A standalone LED panel rental would need to be mounted, powered, and synced separately from your truck and sound system, adding coordination complexity on the wedding day. Our approach builds the LED panels directly into the truck package, so everything works together as one unit from the start.\n\nWe operate across Gujarat specifically, so if you're searching more broadly for India-wide options, we can confirm whether we cover your city directly.",
    whatsIncluded:
      "Maharaja includes moving LED panels and custom name lettering on the truck, alongside 6 dhol, a vintage car, and a safa team. Signature includes the same LED setup plus pyro, confetti, and a security team.",
    pricingGuidance:
      "Pricing depends on the package tier, since LED panels are included as part of Maharaja and Signature rather than priced as a standalone rental. Message us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for LED-equipped packages peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll confirm coverage and availability for a package with moving LED panels.",
    faqs: [
      {
        q: "Do you rent LED panels on their own?",
        a: "No, our moving LED panels come integrated with the truck as part of the Maharaja and Signature packages, not as a standalone rental.",
      },
      {
        q: "Which cities in India do you cover?",
        a: "We're Gujarat-based, covering Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts in the state. Message us your city to confirm.",
      },
      {
        q: "How much does moving LED panel inclusion cost?",
        a: "It's part of the Maharaja and Signature package pricing. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Is the LED panel setup reliable for outdoor use?",
        a: "Yes, it's built into the truck structure specifically for outdoor, moving-crowd baraat use.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since these packages are popular.",
      },
      {
        q: "Can the panels be synced with the DJ's set?",
        a: "The lighting is coordinated to complement the overall energy of the procession alongside the DJ's performance.",
      },
      {
        q: "Do the panels come with a technician on-site?",
        a: "The setup is handled as part of our team's coordinated operation, so it's managed alongside the truck and sound system.",
      },
      {
        q: "What's the difference between Maharaja and Signature for LED panels?",
        a: "Both include the same moving LED panels and custom lettering; Signature adds pyro, confetti, and a security team on top.",
      },
    ],
  },

  "groom-name-light-display": {
    slug: "groom-name-light-display",
    intro:
      "A groom name light display is custom LED lettering mounted on the truck that spells out the groom's name, visible to guests well before the truck arrives at the venue — a popular personal touch for a baraat entry.\n\nPlanMyBaraat includes this as part of our Maharaja and Signature packages, alongside moving LED panels and the rest of the truck production.",
    explanation:
      "The name display sits on the truck body alongside the moving LED panels, custom-built for each booking rather than a generic template. It's one of the most personal touches available in our packages, since it's specific to your wedding rather than a standard visual effect.\n\nCombined with the rest of the LED setup, the name display makes the truck instantly identifiable and adds a memorable, personal element that guests notice and remember.",
    whatsIncluded:
      "Maharaja includes the groom's name in custom LED letters alongside moving LED panels, 6 dhol, a vintage car, and a safa team. Signature includes the same name display plus pyro, confetti, and a security team.",
    pricingGuidance:
      "The name display is included as part of the Maharaja and Signature packages, not priced separately. Message us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February. Since the name display is custom-built, mention it early — 3-4 weeks' notice gives us time to prepare it properly.\n\nShare your date, city, venue, and the exact spelling of the name when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and the groom's name, and we'll confirm the custom display for your package.",
    faqs: [
      {
        q: "Which package includes the groom's name in lights?",
        a: "Maharaja and Signature both include custom LED lettering displaying the groom's name on the truck.",
      },
      {
        q: "How much does a groom name light display cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can I choose the font or style of the lettering?",
        a: "Message us with your preferences and we'll let you know what's possible for your booking.",
      },
      {
        q: "How far in advance do you need the name for the display?",
        a: "As early as possible, ideally 3-4 weeks ahead, since the lettering is custom-built for each booking.",
      },
      {
        q: "Is the display visible during the day?",
        a: "It's most visually striking in evening or night entries, though it's part of the package regardless of timing.",
      },
      {
        q: "Can the display include both names, like the couple's names together?",
        a: "Message us with your specific request and we'll let you know what's possible.",
      },
      {
        q: "Does the name display work while the truck is moving?",
        a: "Yes, it's mounted securely on the truck body and stays visible throughout the moving procession.",
      },
      {
        q: "What else comes with the package that includes the name display?",
        a: "Maharaja includes moving LED panels, 6 dhol, the truck, DJ, vintage car, and safa team alongside the name display.",
      },
    ],
  },

  "custom-led-name-board-wedding": {
    slug: "custom-led-name-board-wedding",
    intro:
      "A custom LED name board for wedding baraats is the mounted display on the truck that spells out the groom's name in lights, built specifically for each booking rather than a generic stock sign.\n\nPlanMyBaraat includes this custom LED name board as part of our Maharaja and Signature packages, alongside moving LED panels and the rest of the truck production.",
    explanation:
      "The name board is prepared ahead of time based on the exact spelling and details you provide, then mounted securely on the truck body alongside the moving LED panels. It's designed to stay legible and bright from a distance, so guests can spot the truck and recognize the personal touch as it approaches.\n\nBecause it's custom for each wedding, this is one of the more personal elements in our packages compared to standard lighting or effects that look the same for every booking.",
    whatsIncluded:
      "Maharaja includes the custom LED name board alongside moving LED panels, 6 dhol, a vintage car, and a safa team. Signature includes the same name board plus pyro, confetti, and a security team.",
    pricingGuidance:
      "The custom LED name board is included as part of the Maharaja and Signature packages, not priced separately. Message us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February. Since the board is custom-built, share the exact name spelling as early as possible — 3-4 weeks' notice gives us time to prepare it properly.\n\nShare your date, city, venue, and the name details when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date, city, and the exact name spelling, and we'll confirm the custom board for your package.",
    faqs: [
      {
        q: "Which package includes a custom LED name board?",
        a: "Maharaja and Signature both include a custom LED name board displaying the groom's name on the truck.",
      },
      {
        q: "How much does a custom LED name board for wedding cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "How long does the board take to prepare?",
        a: "We recommend sharing the name details as early as possible, ideally 3-4 weeks ahead, since the board is custom-built for each booking.",
      },
      {
        q: "Can the board include a wedding date or short message too?",
        a: "Message us with your specific request and we'll let you know what's possible.",
      },
      {
        q: "Is the board secure on the truck while it's moving?",
        a: "Yes, it's mounted securely and stays visible and stable throughout the moving procession.",
      },
      {
        q: "Can I see a sample of a past name board before booking?",
        a: "Yes, message us on WhatsApp and we'll share photos of past custom boards for reference.",
      },
      {
        q: "Does the board work for daytime entries too?",
        a: "It's most visually striking in the evening, though it's included as part of the package regardless of timing.",
      },
      {
        q: "What else comes with the Maharaja package?",
        a: "Moving LED panels, 6 dhol, the truck, DJ, vintage car, and safa team, alongside the custom name board.",
      },
    ],
  },

  "confetti-cannon-for-wedding": {
    slug: "confetti-cannon-for-wedding",
    intro:
      "A confetti cannon for wedding baraats adds a burst of celebration timed to a specific moment — usually the truck's arrival at the venue or the groom stepping down — turning that instant into a clear visual climax.\n\nPlanMyBaraat includes confetti cannon effects as part of our Maharaja and Signature packages, alongside the rest of the truck production.",
    explanation:
      "The confetti cannon is operated by our team, not a self-service unit, so the timing is coordinated with the truck's arrival and the DJ's set for maximum impact. It's one of several effects available at the higher package tiers, alongside pyro and moving LED visuals.\n\nBecause it's a physical effect involving equipment and safety considerations, we handle the setup and operation as part of the package rather than renting out the cannon itself.",
    whatsIncluded:
      "Maharaja includes a confetti CO2 gun as part of its effects lineup, alongside moving LED panels, 6 dhol, a vintage car, and a safa team. Signature includes the same confetti effect plus pyro highlights, hand pyro, and a security team.",
    pricingGuidance:
      "The confetti cannon effect is included as part of the Maharaja and Signature packages, not priced as a standalone rental. Message us on WhatsApp with your date and city for a real quote.",
    bookingNotes:
      "Wedding season runs November to February. If you want the confetti timed to a specific moment, mention it early — 3-4 weeks' notice gives us time to plan the details.\n\nShare your date, city, venue, and any timing preferences when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll confirm the confetti effect for your package.",
    faqs: [
      {
        q: "Which package includes a confetti cannon?",
        a: "Maharaja and Signature both include confetti CO2 gun effects as part of their production.",
      },
      {
        q: "How much does a confetti cannon for wedding cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Is the confetti cannon safe for guests nearby?",
        a: "Yes, it's operated by our experienced team with safety in mind, timed and positioned appropriately for the crowd.",
      },
      {
        q: "Can the confetti be timed to a specific moment?",
        a: "Yes, message us with your preference — usually the truck's arrival or the groom stepping down — and we'll plan the timing.",
      },
      {
        q: "How early should I request this effect?",
        a: "As early as possible, ideally 3-4 weeks ahead, so we can plan the timing and logistics properly.",
      },
      {
        q: "Does the confetti create a mess that needs cleanup?",
        a: "There is some cleanup involved after a confetti effect, which is worth discussing with your venue in advance.",
      },
      {
        q: "Can I combine confetti with pyro effects?",
        a: "Yes, that combination is part of the Signature package's full effects lineup.",
      },
      {
        q: "Is the confetti cannon rented separately from the truck?",
        a: "No, it's included and operated as part of the Maharaja and Signature packages, coordinated with the rest of the truck production.",
      },
    ],
  },

  "confetti-cannon-rental-near-me": {
    slug: "confetti-cannon-rental-near-me",
    intro:
      "Confetti cannon rental near me for a baraat entry means finding a local team who can operate the effect safely and time it to your truck's arrival, not just a generic party rental.\n\nPlanMyBaraat operates across Gujarat, including confetti cannon effects as part of our Maharaja and Signature baraat packages.",
    explanation:
      "Rather than renting the cannon on its own, our confetti effect comes operated by our team, coordinated with the truck's timing, the DJ's set, and any other effects like pyro. This ensures the moment lands properly rather than going off at the wrong time or in the wrong spot relative to your guests.\n\nWe cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most cities and towns across Gujarat, so message us your city to confirm coverage near you.",
    whatsIncluded:
      "Maharaja includes a confetti CO2 gun as part of its effects lineup, alongside moving LED panels, 6 dhol, a vintage car, and a safa team. Signature includes the same confetti effect plus pyro highlights and a security team.",
    pricingGuidance:
      "The confetti effect is included as part of the Maharaja and Signature packages. Message us on WhatsApp with your city and date for a real quote.",
    bookingNotes:
      "Wedding season runs November to February, and demand for full-effects packages peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your city, date, venue, and any timing preferences when you reach out.",
    closing:
      "Message us on WhatsApp with your city and wedding date, and we'll confirm the confetti effect's available near you.",
    faqs: [
      {
        q: "Do you offer confetti cannon rental near my city?",
        a: "We cover Vadodara, Surat, Ahmedabad, Gandhinagar, Rajkot, and most major towns and districts across Gujarat. Message us your city to confirm.",
      },
      {
        q: "How much does confetti cannon rental near me cost?",
        a: "It's included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Is the confetti cannon operated by your team or self-service?",
        a: "It's operated by our experienced team, coordinated with the truck's arrival timing rather than a self-service rental.",
      },
      {
        q: "Can I rent just the confetti cannon without the truck?",
        a: "No, it's included as part of the Maharaja and Signature baraat packages rather than a standalone rental.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since full-effects packages are popular during peak season.",
      },
      {
        q: "Does the effect work well with an outdoor venue?",
        a: "Yes, it's designed for outdoor baraat use and coordinated with the truck's arrival at the venue.",
      },
      {
        q: "Is cleanup included after the confetti effect?",
        a: "This is worth discussing with your venue directly, since cleanup expectations can vary by location.",
      },
      {
        q: "What's the difference between Maharaja and Signature for this effect?",
        a: "Both include the confetti cannon; Signature adds pyro highlights, hand pyro, a fake money gun, and a security team on top.",
      },
    ],
  },

  "confetti-gun-rental-price-wedding": {
    slug: "confetti-gun-rental-price-wedding",
    intro:
      "Confetti gun rental price for wedding baraats isn't a standalone number with PlanMyBaraat, since the confetti effect comes bundled into our Maharaja and Signature packages rather than priced as a separate rental.\n\nThat means the price you get covers the confetti effect plus the truck, dhol team, vintage car, safa team, and the rest of the package production.",
    explanation:
      "Because the confetti gun is operated by our team as part of a coordinated baraat entry, it isn't rented out separately the way a party supply store might rent one for a birthday. The cost is folded into the Maharaja and Signature package pricing, which also includes moving LED panels, extra dhol, and other effects.\n\nThis bundled approach means the confetti effect is properly timed and safely operated as part of your entry, rather than a separate piece you'd need to coordinate yourself.",
    whatsIncluded:
      "Maharaja includes the confetti CO2 gun alongside moving LED panels, 6 dhol, a vintage car, and a safa team. Signature includes the same confetti effect plus pyro highlights, hand pyro, and a security team.",
    pricingGuidance:
      "There's no separate confetti gun rental price — it's part of the Maharaja and Signature package cost. Message us on WhatsApp with your date and city, and we'll give you a real quote covering the full package.",
    bookingNotes:
      "Wedding season runs November to February, and demand for full-effects packages peaks then. 3-4 weeks' notice is a safe bet.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll send you a real quote covering the confetti effect and full package.",
    faqs: [
      {
        q: "What's the confetti gun rental price for a wedding baraat?",
        a: "There's no separate price — the confetti effect is included as part of the Maharaja and Signature packages. Message your date and city on WhatsApp for a real quote covering the full entry.",
      },
      {
        q: "Can I rent just the confetti gun without the rest of the package?",
        a: "No, it's included as part of our Maharaja and Signature baraat packages, operated by our team alongside the truck and other effects.",
      },
      {
        q: "Is the confetti effect worth the higher package price?",
        a: "It depends on how much visual production you want — if confetti and other effects matter to you, Maharaja or Signature give you that on top of the reliable base every package includes.",
      },
      {
        q: "How much more does Maharaja cost compared to Raj Tilak?",
        a: "Maharaja adds 6 dhol, moving LED panels, custom name lighting, and the confetti effect compared to Raj Tilak's essentials — message us for an exact price comparison.",
      },
      {
        q: "How early should I decide if I want the confetti effect?",
        a: "As early as possible, ideally 3-4 weeks ahead, so we can confirm your package and plan the timing.",
      },
      {
        q: "Does the price change based on my city?",
        a: "Logistics can vary slightly, which is why we confirm your exact price once we know your date and location.",
      },
      {
        q: "Can I get a quote comparing packages with and without confetti?",
        a: "Yes, message us on WhatsApp and we'll walk you through what each package tier includes and the price difference.",
      },
      {
        q: "How do I get an exact quote?",
        a: "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real number, usually within the hour.",
      },
    ],
  },

  "co2-gun-for-wedding": {
    slug: "co2-gun-for-wedding",
    intro:
      "A CO2 gun for wedding baraats creates a dramatic burst of vapor effect, timed to the truck's arrival or another key moment in the procession, adding a striking visual punctuation to the entry.\n\nPlanMyBaraat includes a liquid CO2 gun starting from our Raj Tilak package, with confetti and pyro CO2 effects added at higher tiers.",
    explanation:
      "Unlike confetti or pyro, the CO2 gun produces a dense, dramatic vapor burst that's visually striking without any mess or fire risk, which is why it's included even in our starting package. It gives every entry, even the most affordable one, a moment of visual drama.\n\nHigher packages layer on additional CO2-based effects — the confetti CO2 gun at Maharaja and CO2 jet effects that add more sustained visual impact throughout the entry.",
    whatsIncluded:
      "Raj Tilak includes a liquid CO2 gun as part of its base package. Rajwada carries the same effect forward. Maharaja adds a confetti CO2 gun and CO2 jet effects on top. Signature includes the full liquid CO2 gun effect alongside pyro and confetti.",
    pricingGuidance:
      "The CO2 gun effect is included starting from Raj Tilak, our most affordable package. Message us on WhatsApp with your date and city for a real quote covering the full entry.",
    bookingNotes:
      "Wedding season runs November to February. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll confirm availability, usually within the hour.",
    faqs: [
      {
        q: "Is a CO2 gun included even in the starting package?",
        a: "Yes, Raj Tilak includes a liquid CO2 gun for a dazzling entry moment, even at our most affordable tier.",
      },
      {
        q: "How much does a CO2 gun for wedding cost?",
        a: "It's included as part of every package, starting from Raj Tilak. Message your date and city on WhatsApp for a real quote covering the full entry.",
      },
      {
        q: "Is the CO2 effect safe for guests?",
        a: "Yes, it's operated by our experienced team with safety and crowd positioning in mind.",
      },
      {
        q: "Does the CO2 gun leave any mess afterward?",
        a: "No, unlike confetti, the CO2 vapor effect doesn't leave debris that needs cleanup.",
      },
      {
        q: "Can the CO2 effect be timed to a specific moment?",
        a: "Yes, message us with your preference and we'll plan the timing around the truck's arrival or another key moment.",
      },
      {
        q: "How early should I book?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since trucks and effects get booked out fast.",
      },
      {
        q: "What's the difference between a CO2 gun and CO2 jet effects?",
        a: "The CO2 gun creates a single dramatic burst, while CO2 jet effects (included in Maharaja and Signature) add more sustained visual impact throughout the entry.",
      },
      {
        q: "Which package has the most CO2-based effects?",
        a: "Maharaja and Signature include the confetti CO2 gun and CO2 jet effects alongside the base liquid CO2 gun.",
      },
    ],
  },

  "co2-cannon-rental-price": {
    slug: "co2-cannon-rental-price",
    intro:
      "CO2 cannon rental price for a wedding baraat isn't a separate line item with PlanMyBaraat, since the CO2 gun effect is included as part of every package starting from Raj Tilak, our most affordable tier.\n\nThe price you get covers the CO2 effect plus the truck, dhol team, vintage car, safa team, and the rest of the package.",
    explanation:
      "Because the CO2 gun is operated by our team as part of a coordinated entry, it isn't priced or rented as a standalone item. It's built into every package from the start, with additional CO2-based effects like the confetti CO2 gun and CO2 jet effects added at the Maharaja and Signature tiers.\n\nThis means even our most affordable package includes a proper visual effect moment, not just the truck and dhol alone.",
    whatsIncluded:
      "Raj Tilak includes a liquid CO2 gun as part of its base package, alongside the truck, DJ, 2 dhol, chhatri lights, a vintage car, and a safa team. Higher tiers add more CO2-based effects on top.",
    pricingGuidance:
      "There's no separate CO2 cannon rental price — it's included starting from Raj Tilak. Message us on WhatsApp with your date and city, and we'll give you a real quote for the full package.",
    bookingNotes:
      "Wedding season runs November to February. 3-4 weeks' notice is a safe bet for peak season dates.\n\nShare your date, city, venue, and rough guest count when you reach out.",
    closing:
      "Message us on WhatsApp with your wedding date and city, and we'll send you a real quote covering the CO2 effect and full package.",
    faqs: [
      {
        q: "What's the CO2 cannon rental price for a wedding?",
        a: "There's no separate price — the CO2 gun effect is included starting from Raj Tilak, our most affordable package. Message your date and city on WhatsApp for a real quote.",
      },
      {
        q: "Can I rent just the CO2 cannon without the rest of the package?",
        a: "No, it's included as part of our baraat packages, operated by our team alongside the truck and dhol.",
      },
      {
        q: "Is the CO2 effect included even in the cheapest package?",
        a: "Yes, Raj Tilak includes a liquid CO2 gun even at our most affordable tier.",
      },
      {
        q: "Does adding more CO2 effects cost extra?",
        a: "Additional CO2-based effects like confetti CO2 and jet effects are included as you move up to Maharaja and Signature, reflected in that package's price rather than as separate add-ons.",
      },
      {
        q: "How early should I book to include this effect?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since it's included by default and just requires confirming your package.",
      },
      {
        q: "Is the CO2 effect worth it compared to no effects at all?",
        a: "Since it's included even in Raj Tilak at no extra charge, it's part of the standard entry rather than an optional upgrade.",
      },
      {
        q: "Does the price change based on my city?",
        a: "Logistics can vary slightly, which is why we confirm your exact price once we know your date and location.",
      },
      {
        q: "How do I get an exact quote?",
        a: "Message us on WhatsApp with your wedding date, city, and rough guest count, and we'll respond with a real number, usually within the hour.",
      },
    ],
  },
};
