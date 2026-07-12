export interface CityFaq {
  q: string;
  a: string;
}

export interface CityContent {
  slug: string;
  intro: string;
  localArea: string;
  whatsIncluded: string;
  whyUs: string;
  pricingGuidance: string;
  planningNotes: string;
  closing: string;
  faqs: CityFaq[];
}

export const BARAAT_CITY_CONTENT: Record<string, CityContent> = {
  vadodara: {
    slug: "vadodara",
    intro:
      "Vadodara has a lot of weddings, especially in areas like Alkapuri and Sayajigunj. On a busy weekend, you might see three or four baraats near the same banquet hall. So the entry matters — you want people to remember it. PlanMyBaraat brings everything together in one package: a double-decker DJ truck, a dhol team, a vintage car or baggi, and a safa team for the groom and his friends. You don't have to call five different vendors. We handle it as one booking.\n\nA baraat is usually the most photographed part of the whole wedding. It's the first big moment — the groom arriving, the music starting, everyone dancing before the ceremony even begins. If the truck is too quiet, or the dhol team shows up late, that moment doesn't land the way it should. That's the problem we're solving. Everyone on our team — the truck driver, the DJ, the dhol players, the safa artists — works together on the same booking, so the timing actually holds.",
    localArea:
      "Vadodara's wedding halls are spread across a few main pockets, and each one has its own quirks. Alkapuri and Sayajigunj are older, more central areas — narrower roads, less space for a large truck to turn, but a lot of foot traffic, so a loud entry gets noticed. Old Padra Road and New VIP Road are newer and wider, with bigger venues that can host larger processions. Manjalpur, Gotri, and the Sama-Bhayli belt are quieter residential pockets, where some societies are strict about noise after a certain hour. Karelibaug and Waghodia Road sit further out, with more open space around most halls.\n\nWe've worked across all of these — Fatehgunj, Subhanpura, Tandalja, Harni, Chhani, Diwalipura, Nizampura, Makarpura, Race Course Circle, and more. If your venue is somewhere we haven't listed here, that's fine too — mention it on WhatsApp and we'll check the route before confirming.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and a DJ artist. From there, it depends on the package. Raj Tilak comes with 2 dhol and chhatri lights — a good starting point for a smaller, tighter budget. Rajwada adds 2 more dhol and a teddy/gorilla performer to keep the crowd excited. Maharaja adds moving LED panels and the groom's name in lights, for a bigger visual entrance. Signature, our biggest package, adds security staff plus pyro and confetti effects timed with the truck's arrival.\n\nThe vintage car and the safa team come with every package — they're not extra add-ons you negotiate later. The safa team, run by My Safa, ties turbans for the groom and the full baraati group before the procession starts, so nobody's rushing to get ready at the last minute.",
    whyUs:
      "We are based in Gujarat, so our team knows Vadodara well. We know the tight roads near old Sayajigunj halls. We know parking gets hard around Manjalpur on Sundays. We know some societies near Gotri don't allow loud music after 10pm. This kind of local knowledge is part of the service — it's not something extra.\n\nWe also don't subcontract out the truck or the dhol team to whoever's free that week. Our drivers, DJs, dhol players, and safa artists work with us regularly, which means the same people who did a booking last month are the ones showing up for yours. That matters more than it sounds — a team that's worked together before doesn't need to figure out timing on the day of your wedding.",
    pricingGuidance:
      "Baraat package prices in Vadodara depend mainly on three things: which package you pick, how many dhol players you want, and whether you add extra effects like pyro or confetti. Raj Tilak is the most affordable starting point, built for smaller processions. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nGuest count and venue location can also shift the price slightly, since a longer route or a tighter road needs more planning. We don't publish one flat number because it wouldn't be accurate for most people — instead, message us your date, area, and rough guest count on WhatsApp, and we'll give you a real quote, usually within the hour.",
    planningNotes:
      "If your venue is near Old Padra Road, New VIP Road, or the Sama-Gotri area, try to book at least 3 weeks early during wedding season (November to February). Halls get busy and trucks get booked fast during this time. If your society has a noise cutoff — common in Diwalipura and Nizampura — just tell us the time. We'll plan the dhol and pyro parts to finish before the cutoff.\n\nIt also helps to know roughly how many people will be walking in the procession. A bigger baraati group needs more room for the dhol team to move, and it changes how we plan the truck's position on the road. If you're not sure yet, a rough number is enough to start planning.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Vadodara, and how many guests you expect. We'll suggest the right package and confirm the truck is free on your date — usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat package cost in Vadodara?",
        a: "It depends on the package, the truck size, dhol count, and any extra effects you want. Raj Tilak is our smallest package and Signature is the biggest. Because every wedding is different, we give you a real price over WhatsApp once we know your date and area — not a fixed number that may not fit your event.",
      },
      {
        q: "Do you cover areas outside central Vadodara, like Waghodia Road or Chhani?",
        a: "Yes. We cover all of Vadodara city and nearby areas like Waghodia Road, Chhani, Gorwa, and Vasna-Bhayli Road. Just tell us your exact venue when you message us so we can plan the truck route properly.",
      },
      {
        q: "How early should I book a baraat entry in Vadodara?",
        a: "During wedding season (November to February), book at least 3-4 weeks ahead. Popular areas like Alkapuri, Sayajigunj, and Old Padra Road fill up fast. Outside wedding season, even a week or two of notice is usually enough.",
      },
      {
        q: "Can you work around a noise curfew?",
        a: "Yes. Some areas in Vadodara, especially near Diwalipura and Nizampura, have evening noise rules. Just tell us the cutoff time when you enquire, and we'll plan the truck arrival, dhol, and any pyro or confetti to finish before then.",
      },
      {
        q: "Is the vintage car included, or do I book it separately?",
        a: "It's included in every package, starting from Raj Tilak. You don't need to arrange a car on your own. The Signature package upgrades this to a premium American vintage car for a bigger entrance.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the basics well — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds more — 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team. Signature works well for bigger processions or busier venues.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2 dhol players, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus additional effects. If you want more than what's in a package, tell us and we can usually add extra dhol players for a small additional cost.",
      },
      {
        q: "Do you provide the safa (turban) styling for the whole baraati group, or just the groom?",
        a: "The My Safa team ties turbans for the groom and the full baraati group, not just the groom alone. They arrive early enough that everyone is ready before the procession starts, so there's no last-minute rush.",
      },
    ],
  },
};
