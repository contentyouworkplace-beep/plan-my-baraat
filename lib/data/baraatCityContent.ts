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

  surat: {
    slug: "surat",
    intro:
      "Surat weddings are big. It's known for that — large families, large budgets, large banquet halls in Vesu and Adajan that can host 500+ guests at once. When you're planning a baraat on wheels in a city like this, a small speaker and a borrowed car just don't cut it. People expect a grand baraat entry, and they remember the ones that deliver it.\n\nPlanMyBaraat runs baraat packages built exactly for that. A double decker DJ truck for baraat, a dhol team, a vintage car or baggi, and a safa team — all in one booking. You don't call a DJ truck rental company, then a separate dhol group, then a car rental, then a turban stylist. One team, one WhatsApp thread, one price. That's the whole idea.",
    localArea:
      "Surat's wedding crowd is spread across a few big pockets. Vesu and Adajan are where most of the newer, bigger banquet halls are — wide roads, good parking, easy for a double decker DJ truck to move through. City Light and Piplod are similar, slightly more central. Ghod Dod Road and Athwalines are older and busier, so timing the entry matters more there — more traffic, tighter spots outside some halls.\n\nVarachha, Katargam, and Pal are on the other side of the river, mostly residential, and some societies there have earlier noise cutoffs than the newer areas. We also cover Rander, Bhatar, Palanpur Road, Nanpura, Udhna, Althan, Dumas Road, and out toward Sachin GIDC and Hazira for weddings further out. If your venue isn't on this list, just tell us — we'll check the route.",
    whatsIncluded:
      "Every package starts with the same base: DJ truck, sound system, and a DJ artist. From there it scales. Raj Tilak is the starting package — 2 dhol, chhatri lights, still a proper baraat dj truck setup, just sized for a smaller or tighter-budget entry. Rajwada steps it up with 4 dhol and a teddy or gorilla performer to keep the crowd moving. Maharaja adds moving LED panels and the groom's name lit up. Signature, the top one, adds a security team plus pyro and confetti effects timed to the truck pulling in.\n\nThe vintage car and the safa team come with every package, not just the top ones. So even the entry-level package still gets you a proper car and full turban styling for the groom and his group — not something you have to add on later.",
    whyUs:
      "We're a Gujarat-based baraat planner, not an outside company that flies in for one weekend. That matters in a city like Surat because we already know where the tight spots are — the traffic around Ghod Dod Road at evening time, the narrower lanes near Nanpura, which Varachha societies want the music down by 10pm. That's not something you can fake on the day of a wedding.\n\nWe also don't rent out our name to random freelancers for the day. Our drivers, DJs, dhol players, and safa team work with us regularly. The same people who did a wedding in Vesu last month are the ones who'll show up for yours — which means less guesswork on timing and coordination.",
    pricingGuidance:
      "People often search things like \"how much does baraat cost\" or \"baraat cost india\" before they message anyone, so here's the honest answer: it depends on the package, how many dhol players you want, and whether you're adding effects like pyro or confetti. Raj Tilak is the most affordable entry point. Signature costs the most because it includes the most — bigger truck branding, more dhol, LED visuals, security staff.\n\nVenue location can shift things slightly too — a longer route or a busier area like central Surat needs a bit more planning than a straightforward one in Vesu. We don't publish one number because it wouldn't be right for most people. Message us your date, area, and rough guest count on WhatsApp and we'll give you a real quote, usually within the hour.",
    planningNotes:
      "Surat's wedding season runs November through February, same as the rest of Gujarat, and it gets busy fast — venues in Vesu and Adajan especially. If you're getting married in that window, try to lock in your baraat entry at least 3-4 weeks ahead. Outside season, a week or two is usually fine.\n\nIf your venue or society has a noise curfew — more common in the older parts of the city like Varachha or Katargam — tell us the cutoff time and we'll plan the dhol and any pyro or confetti to wrap up before it. It also helps to have a rough headcount for the baraati group early on, since that changes how much room the dhol team needs on the road.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Surat, and roughly how many guests are walking in the baraat. We'll recommend a package and confirm the truck's free on your date — usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Surat?",
        a: "It depends on the package, how many dhol players you add, and whether you want extra effects like pyro or confetti. Raj Tilak is our lowest-cost package and Signature is the most complete. Message us your date and area on WhatsApp and we'll give you a real price, not a guess.",
      },
      {
        q: "Do you do baraat on wheels in Surat outside the main areas, like Sachin or Hazira?",
        a: "Yes. We cover Surat city and the belt around it, including Sachin GIDC, Hazira, and Kamrej. For venues further out, mention it when you message us so we can plan the truck route and timing properly.",
      },
      {
        q: "How far ahead should I book a dj truck for baraat in Surat?",
        a: "During wedding season (November to February), 3-4 weeks ahead is safest, especially for venues in Vesu and Adajan where halls and our booking calendar both fill up fast. Outside season, a week or two of notice usually works.",
      },
      {
        q: "Can the dhol and pyro timing work around a noise curfew?",
        a: "Yes. Some areas in Surat, especially older pockets like Varachha and Katargam, have evening noise rules. Tell us the cutoff time and we'll plan the truck arrival, dhol, and any pyro or confetti to finish before then.",
      },
      {
        q: "Is the vintage car for baraat included, or is it separate?",
        a: "It's included in every package starting from Raj Tilak. You don't need to book a car on your own. The Signature package upgrades this to a premium American vintage car for a bigger entrance.",
      },
      {
        q: "What's actually different between the cheapest and most expensive package?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds more: 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team. Signature suits bigger processions or busier venues where you want a bigger impact.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. If you want more dhol than what's in a package, tell us and we can usually add more for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group or just the groom?",
        a: "The My Safa team ties turbans for the groom and the full group walking in the baraat, not just the groom. They arrive early enough that everyone's ready before the procession starts, so nobody's rushing at the last minute.",
      },
    ],
  },

  ahmedabad: {
    slug: "ahmedabad",
    intro:
      "Ahmedabad has some of the biggest wedding venues in Gujarat, and the baraat is where all that scale shows up first. On SG Highway or Sindhu Bhavan Road, it's common to have 300-400 people walking behind the groom before the ceremony even starts. A royal baraat entry here means the truck, the sound, and the dhol all need to be strong enough to carry that size of crowd.\n\nPlanMyBaraat runs baraat on wheels packages built for exactly that. A double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all under one booking. Instead of separately hiring a dj truck rental company, a dhol group, a car, and a turban stylist, you deal with one team and one price for the whole entry.",
    localArea:
      "Most of the newer, bigger venues are along SG Highway, Sindhu Bhavan Road, and Science City Road — wide roads, plenty of parking, easy for a double decker truck to get in and out. Satellite, Bodakdev, Prahlad Nagar, and Vastrapur are the established upscale pockets nearby, with a good mix of banquet halls and lawns.\n\nManinagar, Paldi, and Ellisbridge are older parts of the city — narrower roads, more traffic, and halls that are trickier for a big truck to approach, so we plan those entries a bit differently. We also cover Navrangpura, Bopal, South Bopal, Thaltej, Gota, Chandkheda, Naranpura, Shahibaug, Nikol, Ghatlodia, Vejalpur, Jodhpur, Shela, Motera, and Sabarmati. If your venue's somewhere else in the city, just mention it — we'll check the route before confirming.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and a DJ artist as the base. Raj Tilak keeps things simple — 2 dhol, chhatri lights — and works well for a smaller or more budget-conscious entry. Rajwada steps up to 4 dhol and adds a teddy or gorilla performer to keep the energy going. Maharaja brings in moving LED panels and the groom's name lit up, which reads well on the wider roads around SG Highway. Signature, the top package, adds a security team plus pyro and confetti timed to the truck's arrival — useful for the bigger processions Ahmedabad weddings tend to have.\n\nThe vintage car and the safa team are included in every package, not just the higher tiers. So even the entry-level Raj Tilak gets you a proper car and full turban styling for the groom and his group.",
    whyUs:
      "We're a Gujarat-based baraat planner, which matters in a city as spread out as Ahmedabad. We know that SG Highway traffic builds up fast on a Saturday evening, that Sindhu Bhavan Road venues need entries timed a bit earlier to beat the rush, and that some Paldi and Ellisbridge societies have tighter roads that need a smaller truck configuration. That's local knowledge you can't fake on the actual wedding day.\n\nWe also don't outsource to random freelancers picked up for the week. Our drivers, DJs, dhol players, and safa artists work with us on a regular basis. The team that ran a wedding in Bopal last month is the same team that'll show up for yours, which cuts down on coordination mistakes.",
    pricingGuidance:
      "A lot of people search \"how much does baraat cost\" before reaching out, so here's the real answer: it comes down to the package, the number of dhol players, and whether you're adding effects like pyro or confetti. Raj Tilak is the lowest-cost entry point. Signature costs more because it's genuinely more — bigger truck branding, more dhol, LED visuals, and a security team for crowd management.\n\nVenue also plays a small role — a longer route through central Ahmedabad takes more planning than a straightforward SG Highway entry. We don't post one flat number because it wouldn't be right for most people. Message your date, area, and rough guest count on WhatsApp and we'll get back with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season in Ahmedabad runs November to February, same as the rest of Gujarat, and SG Highway and Sindhu Bhavan Road venues in particular get booked out early. If your date falls in that window, try to lock in your baraat entry at least 4 weeks ahead — those areas fill up faster than most.\n\nIf your venue is in an older part of the city with a noise curfew — more common around Maninagar and Paldi — let us know the cutoff time so we can plan the dhol and pyro segments to wrap up before it. A rough headcount for your baraati group also helps early on, since a bigger group needs more space for the dhol team to move.",
    closing:
      "Send us your wedding date, your area in Ahmedabad, and roughly how many guests are walking in the baraat, on WhatsApp. We'll recommend a package and confirm the truck's available for your date, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Ahmedabad?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable option and Signature is the most complete. Message your date and area on WhatsApp and we'll give you a real quote, not a guess.",
      },
      {
        q: "Do you cover both SG Highway venues and older areas like Maninagar?",
        a: "Yes, we cover all of Ahmedabad, from the newer venues on SG Highway and Sindhu Bhavan Road to older, busier areas like Maninagar and Paldi. Just tell us your exact venue so we can plan the truck route properly.",
      },
      {
        q: "How far in advance should I book a dj truck for baraat in Ahmedabad?",
        a: "During wedding season (November to February), 4 weeks ahead is a safe bet, especially for popular areas like SG Highway and Sindhu Bhavan Road. Outside season, a week or two of notice is usually fine.",
      },
      {
        q: "Can you plan around noise curfews in residential areas?",
        a: "Yes. Some societies in older parts of Ahmedabad, like Maninagar and Paldi, have evening noise rules. Tell us the cutoff time and we'll plan the truck arrival, dhol, and any pyro or confetti to finish before then.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car for a bigger entrance.",
      },
      {
        q: "What's the real difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the basics — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team. Signature suits the bigger processions common in areas like SG Highway.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. If you want more dhol than what's in a package, we can usually add extra for a small additional cost.",
      },
      {
        q: "Does the safa team style the whole group or just the groom?",
        a: "The My Safa team ties turbans for the groom and the full baraati group, not just the groom alone. They arrive early enough that everyone's ready before the procession starts.",
      },
    ],
  },

  gandhinagar: {
    slug: "gandhinagar",
    intro:
      "Gandhinagar is laid out differently from most Gujarat cities — wide sector roads, planned junctions, and a lot more breathing room than the older parts of Ahmedabad or Vadodara. That actually makes it a great city for a grand baraat entry. A double decker dj truck for baraat has room to move, the sound carries properly on the open sector roads, and the whole procession looks bigger because there's space around it.\n\nPlanMyBaraat runs baraat on wheels packages built for that kind of setup. A DJ truck, a dhol team, a vintage car or baggi, and a safa team, all in one booking. You're not calling a dj truck rental company, then a separate dhol group, then a car, then a turban stylist — it's one team, one price, one WhatsApp thread.",
    localArea:
      "Gandhinagar is organized by sectors, and we cover the ones where most weddings happen — Sector 7, 11, 16, 21, 22, 26, 28, 29, and 30. These have a mix of community halls and private venues, all easy to reach with a double decker truck given how wide the roads are.\n\nWe also cover Kudasan, Raysan, Koba, and Infocity — the newer, more upscale side of the city where a lot of bigger private events happen — plus Adalaj, Randesan, Pethapur, Sargasan, Vavol, Kolvada, Por, Ognaj, and the areas around Chiloda and PDPU Road. If your venue's in a sector or pocket we haven't listed, just tell us — Gandhinagar's road layout usually makes it an easy check either way.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and a DJ artist to start. Raj Tilak comes with 2 dhol and chhatri lights, a solid choice for a smaller entry or tighter budget. Rajwada adds 2 more dhol and a teddy or gorilla performer to keep guests engaged. Maharaja brings moving LED panels and the groom's name lit up — this reads really well on Gandhinagar's wide, open roads. Signature, our top package, adds a security team along with pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team are part of every package, including Raj Tilak. So even the entry-level package gets you a proper car for the groom and full turban styling for the whole baraati group.",
    whyUs:
      "We're based in Gujarat, so we already know how Gandhinagar's sector system works — which roads have the space for a bigger truck, which sector venues have parking restrictions, and how early to plan entries near government or institutional areas so nothing clashes with local traffic patterns. That's the kind of thing you only know from actually working the city, not from a generic vendor list.\n\nOur drivers, DJs, dhol players, and safa artists aren't picked up fresh for each booking — they work with us regularly. That means less risk of miscommunication on timing, and a team that's used to coordinating with each other under one plan.",
    pricingGuidance:
      "If you're wondering how much does baraat cost in Gandhinagar, the honest answer is it depends on the package, how many dhol players you add, and whether you want extra effects like pyro or confetti. Raj Tilak is the most budget-friendly starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nGandhinagar's wide roads generally make logistics simpler than some other cities, so pricing here tends to be a bit more predictable. Still, we don't publish a flat number since guest count and exact sector matter. Message your date, sector, and rough guest count on WhatsApp and we'll send a real quote, usually within the hour.",
    planningNotes:
      "Wedding season here runs November through February like the rest of Gujarat. Sector venues and the Kudasan-Raysan-Infocity belt get booked early during this window, so we'd recommend locking in your baraat entry at least 3 weeks ahead. Outside peak season, a week or two is usually enough notice.\n\nSince Gandhinagar's roads are wider and better planned than most cities, curfews and access issues are less common here — but if your venue does have a specific timing requirement, let us know and we'll build the dhol and pyro sequence around it. A rough headcount for the baraati group also helps us plan the right amount of space on the road.",
    closing:
      "Message us on WhatsApp with your wedding date, your sector or area in Gandhinagar, and roughly how many guests are in the baraat. We'll recommend a package and confirm truck availability, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Gandhinagar?",
        a: "It depends on the package, dhol count, and any extra effects you add. Raj Tilak is our lowest-cost option and Signature is the most complete. Message your date and sector on WhatsApp and we'll give you a real quote.",
      },
      {
        q: "Do you cover all sectors of Gandhinagar, or just the main ones?",
        a: "We cover the city broadly — the main sectors (7, 11, 16, 21, 22, 26, 28, 29, 30) as well as Kudasan, Raysan, Koba, Infocity, and surrounding areas. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "How early should I book a dj truck for baraat in Gandhinagar?",
        a: "During wedding season (November to February), 3 weeks ahead is a safe window, especially for the busier Kudasan-Raysan-Infocity belt. Outside season, a week or two of notice is usually fine.",
      },
      {
        q: "Are there noise or access restrictions in Gandhinagar's sectors?",
        a: "Generally fewer than in older cities, since the roads and layout are more planned. If your specific sector venue does have timing requirements, let us know and we'll plan the dhol and any effects around it.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car for a bigger entrance.",
      },
      {
        q: "What's the real difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, which suits Gandhinagar's wider roads well.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost if you want a bigger sound.",
      },
      {
        q: "Does the safa team cover the full baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom. They arrive early enough that the whole group is ready before the procession starts.",
      },
    ],
  },

  rajkot: {
    slug: "rajkot",
    intro:
      "Rajkot weddings have a reputation across Saurashtra for being big, loud, and genuinely fun — this is a city that doesn't hold back on a baraat entry. Wide roads like Kalawad Road and 150 Feet Ring Road are made for exactly that kind of grand baraat entry, with room for a full crowd, a proper truck, and the dhol team to really open up.\n\nPlanMyBaraat brings the whole entry together as one booking: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team. Instead of arranging a dj truck rental, a separate dhol group, a car, and a turban stylist on your own, you deal with one team for the whole thing.",
    localArea:
      "Kalawad Road and University Road are where a lot of Rajkot's bigger, newer venues are — wide, straightforward for a double decker truck, plenty of parking. Gondal Road and 150 Feet Ring Road are similar, good open stretches for a loud, high-energy entry.\n\nRaiya Road, Nana Mava Road, Kotharia Road, and Yagnik Road cover more of the residential and mixed-use side of the city, and we've worked entries in Amin Marg, Kothariya, Bhaktinagar, Race Course Ring Road, Madhapar Chowk, Sadar, Panchvati, Vavdi, Ayodhya Chowk, and Aji Dam Road. If your venue's somewhere else in Rajkot, mention it when you message us and we'll confirm the route works for our truck.",
    whatsIncluded:
      "Every package starts with the DJ truck, sound system, and DJ artist. Raj Tilak includes 2 dhol and chhatri lights, a solid choice for a tighter budget or a smaller crowd. Rajwada steps up to 4 dhol and adds a teddy or gorilla performer to keep the energy high — which fits Rajkot's high-energy wedding style well. Maharaja adds moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, built for the bigger processions common here.\n\nThe vintage car and safa team come with every package, starting from Raj Tilak. So even the entry-level package includes a proper car and full turban styling for the groom's whole group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and that local knowledge matters in Rajkot specifically — we know Kalawad Road gets busy on wedding weekends, we know which Race Course and Sadar venues have tighter entry points, and we know how Rajkot crowds like their baraat entries loud and full of energy, not understated. That's not something you learn from a brochure.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly rather than being hired fresh for each wedding. That means the team that ran an entry on University Road last month is the same team showing up for yours — less risk of things going wrong on timing.",
    pricingGuidance:
      "If you're asking how much does baraat cost in Rajkot, it comes down to the package, dhol count, and any extra effects like pyro or confetti you add. Raj Tilak is the most affordable starting point. Signature costs more because it's genuinely bigger — more truck branding, more dhol, LED visuals, and a security team.\n\nMost Rajkot venues are on wide, accessible roads, which keeps logistics fairly simple compared to older cities. Still, we quote based on your actual date, area, and guest count rather than a flat number. Message us on WhatsApp and we'll get back with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season in Rajkot runs November to February, same as the rest of Gujarat, and Kalawad Road and University Road venues fill up quickly during that window. We'd recommend booking your baraat entry at least 3 weeks ahead if your date falls in peak season. Outside that window, a week or two is usually enough.\n\nRajkot doesn't have as many strict noise curfews as some of the older cities, but if your venue does have one, let us know the cutoff time and we'll plan the dhol and pyro segments around it. A rough headcount for the baraati group also helps us plan the right setup for the road.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Rajkot, and roughly how many guests are walking in the baraat. We'll recommend the right package and confirm the truck's free on your date, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Rajkot?",
        a: "It depends on the package, how many dhol players you want, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message us your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover areas outside the main roads, like Kothariya or Aji Dam Road?",
        a: "Yes, we cover all of Rajkot, including Kothariya, Bhaktinagar, Aji Dam Road, and other residential pockets. Just tell us your exact venue so we can confirm the route for our truck.",
      },
      {
        q: "How early should I book a dj truck for baraat in Rajkot?",
        a: "During wedding season (November to February), 3 weeks ahead is a safe window, especially for venues on Kalawad Road and University Road. Outside season, a week or two of notice is usually enough.",
      },
      {
        q: "Does Rajkot have noise curfews that affect the dhol or pyro timing?",
        a: "Fewer than in older, denser cities, but if your specific venue has a timing requirement, let us know and we'll plan the dhol and any pyro or confetti effects around it.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to book a car separately. The Signature package upgrades this to a premium American vintage car for a bigger entrance.",
      },
      {
        q: "What's the real difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, which suits Rajkot's bigger, louder wedding style.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team style the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom. They arrive early enough that everyone's ready before the procession starts.",
      },
    ],
  },

  bhavnagar: {
    slug: "bhavnagar",
    intro:
      "Bhavnagar is a smaller, tighter city than Ahmedabad or Surat, but weddings here are taken just as seriously — if anything, in a smaller city everyone in the community notices the baraat entry, so it matters even more. A grand baraat entry on Waghawadi Road or through Kaliyabid gets talked about for weeks.\n\nPlanMyBaraat brings the full setup as one package: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team. Rather than piecing together a dj truck rental, a separate dhol group, a car, and a turban stylist on your own, it's one booking, one team, one price.",
    localArea:
      "Waghawadi Road is where most of the newer venues are, wide enough for a proper truck entry. Kaliyabid and Bhavnagar Town Center are more central and a bit tighter on space, so we plan the route and truck positioning a little more carefully there.\n\nWe also cover Ghogha Circle, Sardarnagar, Ghoghari Bazaar, Ambavadi, Nari Road, and the Takhteshwar area. Bhavnagar's a compact city, so most venues aren't far from each other — if your venue isn't on this list, it's very likely still within easy reach, just tell us when you message us.",
    whatsIncluded:
      "Every package starts with the DJ truck, sound system, and DJ artist. Raj Tilak includes 2 dhol and chhatri lights, a good fit for a smaller entry or tighter budget — which suits a lot of Bhavnagar weddings well. Rajwada adds 2 more dhol and a teddy or gorilla performer for extra energy. Maharaja brings moving LED panels and the groom's name lit up. Signature, our top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team are included from Raj Tilak upward, so even the smallest package gets you a proper car and full turban styling for the groom's group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in a city the size of Bhavnagar that local knowledge counts for a lot — we know which roads near Kaliyabid get tight on a wedding evening, and which venues around Ghogha Circle need a bit more planning for truck access. That's the kind of detail you only get from actually working the city.\n\nOur team — drivers, DJs, dhol players, safa artists — works with us regularly rather than being pulled together fresh each time. That consistency matters even more in a smaller city where word travels fast if something goes wrong.",
    pricingGuidance:
      "On how much does baraat cost in Bhavnagar: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point, and it's often the right fit for Bhavnagar's venue sizes. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nSince Bhavnagar is compact, logistics are usually simpler here than in bigger cities, which can keep costs a bit more predictable. We still quote based on your actual date and guest count rather than a flat number — message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February here as it does across Gujarat. Bhavnagar doesn't get quite as booked-out as bigger cities, but popular venues on Waghawadi Road still fill up during peak weekends, so 2-3 weeks' notice is a safe bet. Outside season, even a week's notice is usually fine.\n\nIf your venue is closer to the town center or Kaliyabid where things are more residential, let us know if there's a noise cutoff so we can plan the dhol and pyro segments around it. A rough guest count for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Bhavnagar, and roughly how many guests are walking in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bhavnagar?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package, which works well for Bhavnagar's typical venue sizes. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover areas outside the main roads, like Ghogha Circle or Sardarnagar?",
        a: "Yes, we cover all of Bhavnagar, including Ghogha Circle, Sardarnagar, Ghoghari Bazaar, and Ambavadi. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "How early should I book a dj truck for baraat in Bhavnagar?",
        a: "2-3 weeks ahead is usually enough during wedding season (November to February). Bhavnagar doesn't get as booked out as bigger cities, but popular venues on Waghawadi Road can still fill up on peak weekends.",
      },
      {
        q: "Are there noise restrictions in central Bhavnagar?",
        a: "Some residential pockets near Kaliyabid and the town center may have evening timing preferences. Let us know if your venue has one and we'll plan the dhol and pyro accordingly.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  jamnagar: {
    slug: "jamnagar",
    intro:
      "Jamnagar has a strong royal wedding tradition — this was a princely state, and that sense of occasion still shows up in how families here approach a baraat entry. A grand baraat entry through Pandit Nehru Marg or near Jamnagar Town isn't just decoration, it's part of keeping that tradition alive.\n\nPlanMyBaraat runs baraat on wheels packages that fit that scale: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all under one booking. Instead of arranging a dj truck rental, a dhol group, a car, and a turban stylist separately, it's one team handling the whole entry.",
    localArea:
      "We cover Bedi, Digjam, Pandit Nehru Marg, Patel Colony, Bedi Bandar Road, Jamnagar Town, Ranjit Sagar Road, and Guru Gobind Singh Marg. Jamnagar's roads vary — some of the newer stretches near Digjam and Patel Colony are wide and easy for a double decker truck, while the older Jamnagar Town area is tighter and needs a bit more route planning.\n\nIf your venue is somewhere else in the city, mention it when you message us — we'll check accessibility for the truck before confirming.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist as the base. Raj Tilak comes with 2 dhol and chhatri lights, a strong option for a classic, traditional-style entry. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team and pyro and confetti effects timed to the truck's arrival — a good fit for the bigger, more elaborate baraats some Jamnagar families plan.\n\nThe vintage car and safa team are included from Raj Tilak upward, so even the entry-level package comes with a proper car and full turban styling for the groom's group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Jamnagar that means knowing which roads near the older town area are too tight for a full-size truck, and which venues around Bedi and Patel Colony have easier access. That kind of local detail matters when you're coordinating a procession through a city with a mix of old and new layouts.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, not hired fresh for each event. That consistency is what keeps the timing tight on the actual wedding day.",
    pricingGuidance:
      "On how much does baraat cost in Jamnagar: it depends on the package you choose, the number of dhol players, and whether you add effects like pyro or confetti. Raj Tilak is the most affordable entry point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe don't publish a flat number since guest count and exact venue location both matter. Message us your date, area, and rough guest count on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February across Gujarat, including Jamnagar. Popular venues can get booked out a few weeks ahead during peak season, so 2-3 weeks' notice is a safe bet. Outside season, a week's notice usually works.\n\nIf your venue is in the older Jamnagar Town area, there may be tighter access or timing considerations — let us know and we'll plan the route and dhol timing around it. A rough headcount for the baraati group also helps us plan the setup properly.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Jamnagar, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Jamnagar?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover the older parts of Jamnagar Town as well as newer areas?",
        a: "Yes, we cover all of Jamnagar, including Jamnagar Town, Bedi, Digjam, and Patel Colony. Older, tighter areas need a bit more route planning, so tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Jamnagar?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Can you manage a truck entry through Jamnagar's older, narrower roads?",
        a: "Yes, we plan the route in advance for tighter areas like Jamnagar Town, and can adjust the truck configuration if needed to make sure it reaches your venue smoothly.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team style the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  junagadh: {
    slug: "junagadh",
    intro:
      "Junagadh sits right at the base of Girnar hill, and weddings here carry a lot of that old-city, traditional character — narrower streets near the town center, but a strong sense of occasion around any baraat entry. Areas like Girnar Road and MG Road are common venue stretches, and a well-run entry still gets talked about around the neighborhood.\n\nPlanMyBaraat handles the whole setup as one booking: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team. Rather than arranging a dj truck rental, a dhol group, a car, and a turban stylist on your own, it's one team and one price for the entry.",
    localArea:
      "We cover Girnar Road, Junagadh Town, MG Road, Zanzarda Road, Moti Baug, and College Road. Junagadh's town center has some narrower, older streets, so for venues closer in we plan the truck route a bit more carefully. Girnar Road and Zanzarda Road tend to be wider and easier for a full setup.\n\nIf your venue is somewhere else in Junagadh, let us know when you message us — we'll check the road access before confirming a package.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a solid fit for Junagadh's more traditional entry style. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja adds moving LED panels and the groom's name lit up. Signature, our top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package starting from Raj Tilak, so even the smallest package includes a proper car and full turban styling for the groom's baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in a city like Junagadh with some tighter, older streets near the town center, that local knowledge is what keeps an entry running smoothly. We know where a full-size truck fits comfortably and where we need to adjust.\n\nOur drivers, DJs, dhol players, and safa artists are a regular team, not people picked up fresh for each wedding. That means fewer surprises with timing and coordination on the actual day.",
    pricingGuidance:
      "On how much does baraat cost in Junagadh: it depends on the package, dhol count, and whether you add effects like pyro or confetti. Raj Tilak is the most affordable option. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date, area, and guest count rather than a flat number. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Junagadh doesn't get as booked out as the bigger cities, but it's still worth locking in your baraat entry 2-3 weeks ahead during peak season. Outside that window, a week's notice is usually enough.\n\nIf your venue is near the town center where roads are tighter, let us know so we can plan the route and timing properly. A rough headcount for the baraati group also helps us plan the right setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Junagadh, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Junagadh?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Can you manage truck access near Junagadh's older town center?",
        a: "Yes, we plan the route in advance for narrower streets closer to the town center, and can adjust the setup if needed so the truck reaches your venue smoothly.",
      },
      {
        q: "How early should I book a dj truck for baraat in Junagadh?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice usually works.",
      },
      {
        q: "Do you cover venues near Girnar Road and Zanzarda Road?",
        a: "Yes, we cover Girnar Road, Zanzarda Road, MG Road, Moti Baug, College Road, and Junagadh Town. Tell us your exact venue when you message us.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  anand: {
    slug: "anand",
    intro:
      "Anand has a lot of NRI families — people who grew up here and now live abroad, coming back for weddings that need to feel like a proper Gujarati celebration. A grand baraat entry matters even more in that context, since it's often the one big, unmistakably Indian moment of the whole event, captured for family watching from overseas too.\n\nPlanMyBaraat runs baraat on wheels packages built for exactly that. A double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, so you're not managing four different vendors while juggling everything else that comes with an NRI wedding.",
    localArea:
      "We cover Anand Town, Vidyanagar, the Anand-Vidyanagar Road corridor, Karamsad, Grid, Sardar Gunj, and V V Nagar. Vidyanagar, with its university crowd and newer venues, tends to have wider roads and easier truck access. Anand Town and Sardar Gunj are more central and a bit busier, so we plan those entries with a little more care.\n\nIf your venue is somewhere else around Anand, mention it when you message us and we'll confirm the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja adds moving LED panels and the groom's name lit up — a nice touch for weddings with a lot of family flying in for the occasion. Signature, our top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the whole baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Anand's NRI-heavy wedding crowd, that local reliability matters a lot — families flying in don't want to be troubleshooting vendor coordination from a different time zone. We handle the truck, dhol, car, and safa team as one team, so there's one point of contact throughout.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly. That consistency is what keeps timing tight, which matters even more when relatives have flown in specifically for this one day.",
    pricingGuidance:
      "On how much does baraat cost in Anand: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date, area, and guest count, not a flat number. Message us on WhatsApp with your details and we'll respond with a real quote, usually within the hour — even if you're coordinating from abroad.",
    planningNotes:
      "Wedding season runs November to February, and for NRI families this is often planned around when relatives can travel, so dates can be set further in advance. If that's the case for you, feel free to reach out early, even a couple of months ahead, to lock in the date — though 2-3 weeks' notice is the minimum we'd suggest during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially since NRI weddings sometimes have larger, more spread-out guest lists than usual.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Anand, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Anand?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Can you coordinate with family members planning from abroad?",
        a: "Yes, we regularly work with NRI families booking from overseas. WhatsApp works well across time zones, and we'll confirm all the details clearly so there's no confusion closer to the date.",
      },
      {
        q: "How early should I book a dj truck for baraat in Anand?",
        a: "For NRI weddings planned well in advance, you're welcome to reach out a couple of months early. Otherwise, 2-3 weeks ahead during wedding season (November to February) is a safe minimum.",
      },
      {
        q: "Do you cover Vidyanagar and Karamsad as well as Anand Town?",
        a: "Yes, we cover Anand Town, Vidyanagar, Karamsad, Grid, Sardar Gunj, and V V Nagar. Tell us your exact venue when you message us.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  mehsana: {
    slug: "mehsana",
    intro:
      "Mehsana is a smaller North Gujarat city, but it's a busy one — a lot of local trade, dairy business, and steady wedding activity year-round. A grand baraat entry through Highway Road or near Mehsana Town still draws a crowd, and families here care about getting the entry right, same as anywhere else in Gujarat.\n\nPlanMyBaraat runs baraat on wheels packages for exactly that: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, handled as one booking so you're not juggling separate vendors in the days before the wedding.",
    localArea:
      "We cover Mehsana Town, Modhera Road, Highway Road, Radhanpur Road, and Malanpur. Highway Road tends to be the widest and easiest for a full truck setup. Mehsana Town itself is more central and a bit busier, so we plan those entries with a little more care around timing and route.\n\nIf your venue is somewhere else near Mehsana, let us know when you message us and we'll confirm accessibility for the truck.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a solid choice for a smaller or more budget-friendly entry. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the smallest package includes a proper car and full turban styling for the groom's group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and we know Mehsana's roads well enough to plan an entry that actually works — which stretches near Mehsana Town get busy in the evening, and where Highway Road gives us the most room to work with.\n\nOur drivers, DJs, dhol players, and safa artists are a regular team, not people picked up for a single event. That consistency is what keeps everything on schedule on the actual wedding day.",
    pricingGuidance:
      "On how much does baraat cost in Mehsana: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date, area, and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Mehsana doesn't get as booked out as the bigger cities, but 2-3 weeks' notice during peak season is still a safe bet. Outside season, a week's notice usually works.\n\nA rough headcount for the baraati group helps us plan the right truck and dhol setup for your entry, whichever part of the city you're in.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Mehsana, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Mehsana?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover areas outside Mehsana Town, like Radhanpur Road?",
        a: "Yes, we cover Mehsana Town, Modhera Road, Highway Road, Radhanpur Road, and Malanpur. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Mehsana?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can you plan an entry around Mehsana's busier central roads?",
        a: "Yes, we know Mehsana Town's evening traffic patterns and plan the truck route and timing to avoid getting stuck en route to your venue.",
      },
    ],
  },

  bharuch: {
    slug: "bharuch",
    intro:
      "Bharuch sits right on the Narmada river, and the city has a distinct old-town character near the Golden Bridge, along with a busy industrial belt toward Ankleshwar. A grand baraat entry here often means planning around both — the older streets near Bharuch Town and the wider roads out toward the Ankleshwar-Bharuch belt.\n\nPlanMyBaraat runs baraat on wheels packages that work for either setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all in one booking, so the whole entry is handled by one team.",
    localArea:
      "We cover Zadeshwar, Kasak, Bharuch Town, the Ankleshwar-Bharuch belt, Station Road, and the Golden Bridge area. Zadeshwar and the Ankleshwar-Bharuch belt tend to have wider roads, good for a full truck setup. Bharuch Town and the area near Station Road are older and busier, so we plan the route a bit more carefully there.\n\nIf your venue is somewhere else around Bharuch, let us know when you message us and we'll check the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Bharuch that means knowing which roads near the old town and Golden Bridge area are tighter, and which stretches out toward Ankleshwar give us more room to work with for a bigger entry.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, so the timing and coordination stay tight regardless of which part of Bharuch your venue is in.",
    pricingGuidance:
      "On how much does baraat cost in Bharuch: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count rather than a flat number. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is a safe bet, and outside season a week's notice usually works.\n\nIf your venue is near the older town center or Golden Bridge area, let us know so we can plan the route around the tighter streets. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Bharuch, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bharuch?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover the Ankleshwar-Bharuch belt as well as Bharuch Town?",
        a: "Yes, we cover Zadeshwar, Kasak, Bharuch Town, the Ankleshwar-Bharuch belt, Station Road, and the Golden Bridge area. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Bharuch?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Can you manage a truck entry near the older Bharuch Town streets?",
        a: "Yes, we plan the route in advance for the tighter, older streets near the town center and Golden Bridge area, adjusting the setup if needed.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  navsari: {
    slug: "navsari",
    intro:
      "Navsari has a distinct character — old Parsi heritage in parts of the town, and Dandi just down the road, tied to a well-known moment in India's history. Weddings here mix that traditional character with the same energy any Gujarati baraat entry brings, especially around Navsari Town and Sayaji Road.\n\nPlanMyBaraat runs baraat on wheels packages built for exactly that: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "We cover Navsari Town, Lunsikui, Eru Char Rasta, Dandi Road, and Sayaji Road. Sayaji Road and Eru Char Rasta tend to be wider and easier for a full truck setup. Navsari Town itself is older and a bit tighter, so we plan the route with a little more care there.\n\nIf your venue is somewhere else around Navsari, let us know when you message us and we'll confirm the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Navsari that means knowing which streets near the old town are tighter and which stretches along Sayaji Road give more room for a bigger entry.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, so timing stays tight regardless of which part of Navsari your venue is in.",
    pricingGuidance:
      "On how much does baraat cost in Navsari: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is a safe bet, and outside season a week's notice usually works.\n\nIf your venue is near Navsari's older town area, let us know so we can plan the route around the tighter streets. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Navsari, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Navsari?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover areas near Dandi Road as well as Navsari Town?",
        a: "Yes, we cover Navsari Town, Lunsikui, Eru Char Rasta, Dandi Road, and Sayaji Road. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Navsari?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Can you manage a truck entry near Navsari's older town streets?",
        a: "Yes, we plan the route in advance for tighter, older streets in the town center and adjust the setup if needed.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  valsad: {
    slug: "valsad",
    intro:
      "Valsad is close enough to the coast that a lot of weddings here have that relaxed, seaside feel, with Tithal beach just a short drive from most venues. A grand baraat entry still gets the same attention as anywhere else in Gujarat — Valsad Town and the Tithal Road stretch see a fair share of them during wedding season.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setup: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all in one booking.",
    localArea:
      "We cover Valsad Town, Tithal Road, Halar, and the Sam Talav area. Tithal Road tends to be wider and easier for a full truck setup, while Valsad Town itself is a bit more compact, so we plan the route with a little more care there.\n\nIf your venue is somewhere else around Valsad, let us know when you message us and we'll confirm the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Valsad that means knowing the roads around Tithal and the town center well enough to plan a smooth entry regardless of which part of the city your venue is in.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight on the actual wedding day.",
    pricingGuidance:
      "On how much does baraat cost in Valsad: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is a safe bet, and outside season a week's notice usually works.\n\nA rough headcount for the baraati group helps us plan the right setup, whether your venue is near Tithal Road or closer to Valsad Town.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Valsad, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Valsad?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover venues near Tithal Road as well as Valsad Town?",
        a: "Yes, we cover Valsad Town, Tithal Road, Halar, and Sam Talav area. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Valsad?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can the entry be planned around a coastal or beachside venue?",
        a: "Yes, we've handled entries near Tithal and other coastal-adjacent venues. Tell us the exact location and we'll plan the truck route and setup accordingly.",
      },
    ],
  },

  vapi: {
    slug: "vapi",
    intro:
      "Vapi is a busy industrial town right on the Gujarat-Maharashtra border, close to Silvassa, and weddings here often draw guests from both sides of that border. A grand baraat entry through Vapi Town or near the Char Rasta area is a chance to make a strong first impression on a mixed crowd.\n\nPlanMyBaraat runs baraat on wheels packages built for that: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, handled as one booking.",
    localArea:
      "We cover Vapi GIDC, Chala, the Silvassa border belt, Vapi Town, Char Rasta area, and Dungra Road. Vapi GIDC and Dungra Road tend to have wider roads, good for a full truck setup. Vapi Town and Char Rasta are busier and more central, so we plan the route with a bit more care there.\n\nIf your venue is somewhere else around Vapi or near the Silvassa border, let us know when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Vapi that means knowing the roads well enough to handle entries close to the Silvassa border and through the busier GIDC and town center areas without losing time.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight regardless of exactly where your venue sits.",
    pricingGuidance:
      "On how much does baraat cost in Vapi: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is a safe bet, and outside season a week's notice usually works.\n\nA rough headcount for the baraati group helps us plan the setup, especially if your venue is near the busier Vapi Town or Char Rasta stretch.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Vapi, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Vapi?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover venues near the Silvassa border?",
        a: "Yes, we cover the Silvassa border belt along with Vapi GIDC, Chala, Vapi Town, Char Rasta area, and Dungra Road. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Vapi?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week's notice is usually enough.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can you handle entries through the busier Vapi GIDC area?",
        a: "Yes, we plan the route in advance for the industrial belt and busier town stretches so the truck reaches your venue on schedule.",
      },
    ],
  },

  rajpipla: {
    slug: "rajpipla",
    intro:
      "Rajpipla was once a princely state, and that royal history is still visible around the old fort area — which makes it a fitting backdrop for a grand baraat entry. Families here often lean into that heritage feel, especially for entries through Rajpipla Town or near the fort.\n\nPlanMyBaraat runs baraat on wheels packages built to match that: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "We cover Rajpipla Town, Netrang Road, and the Rajpipla Fort area. Netrang Road tends to be wider and easier for a full truck setup, while the town center and fort area are more compact, so we plan those entries with a bit more care.\n\nIf your venue is somewhere else around Rajpipla, let us know when you message us and we'll confirm the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights — which suits Rajpipla's heritage character well. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car — which fits especially well against Rajpipla's palace backdrop — and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in a smaller heritage town like Rajpipla that means knowing exactly where a full-size truck fits near the older fort area and where we have more room to work with.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, so timing stays tight regardless of which part of Rajpipla your venue is in.",
    pricingGuidance:
      "On how much does baraat cost in Rajpipla: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Rajpipla is smaller, so 2 weeks' notice is usually enough even during peak season, and outside season even less notice typically works.\n\nA rough headcount for the baraati group helps us plan the setup, especially for entries near the older fort area.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Rajpipla, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Rajpipla?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover venues near the Rajpipla Fort area?",
        a: "Yes, we cover Rajpipla Town, Netrang Road, and the Rajpipla Fort area. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Rajpipla?",
        a: "2 weeks ahead is usually enough, even during wedding season (November to February), since Rajpipla is a smaller town with less booking pressure than the bigger cities.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can the entry work with a heritage or palace-style venue?",
        a: "Yes, we've planned entries near Rajpipla's fort area before, and a vintage car especially suits that kind of backdrop well.",
      },
    ],
  },

  kevadia: {
    slug: "kevadia",
    intro:
      "Kevadia has changed a lot in the last few years — it's now known across India as the home of the Statue of Unity, and that's brought new resorts and event venues into what used to be a quiet spot near the Sardar Sarovar Dam. A grand baraat entry near Ekta Nagar or the Statue of Unity belt has a backdrop most cities can't match.\n\nPlanMyBaraat runs baraat on wheels packages built for this setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "We cover the Statue of Unity belt, Kevadia Colony, Ekta Nagar, and the Sardar Sarovar Dam area. Roads here are newer and well-built, given how much tourism infrastructure has gone in, which generally makes truck access straightforward.\n\nIf your venue is at one of the resorts or event spaces in this belt, let us know when you message us so we can confirm access in advance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up, which stands out well against Kevadia's newer venue backdrops. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and we've kept up with how quickly Kevadia has developed — new resorts, new access roads, and venues that didn't exist a few years ago. That means we plan each entry here based on the venue's current setup, not outdated assumptions.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, which matters especially for a destination-style wedding where everything needs to come together smoothly in one visit.",
    pricingGuidance:
      "On how much does baraat cost in Kevadia: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nSince some Kevadia venues are resort-style and a bit further from other cities, factor in a little extra planning time. Message us on WhatsApp with your date and venue and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Kevadia's resort venues can book out early given how popular the area's become for destination-style events. If you're planning a wedding here, we'd suggest reaching out a bit earlier than usual — 3-4 weeks ahead is a safer window.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming venue access details early since some resorts have specific entry protocols.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Kevadia, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Kevadia?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover resort venues near the Statue of Unity?",
        a: "Yes, we cover the Statue of Unity belt, Kevadia Colony, Ekta Nagar, and the Sardar Sarovar Dam area. Tell us your exact venue and we'll confirm access in advance.",
      },
      {
        q: "How early should I book a dj truck for baraat in Kevadia?",
        a: "3-4 weeks ahead is a safer window here, since Kevadia's resort venues have gotten popular for destination-style weddings and can book out early.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can you handle entries at newer resort venues in the area?",
        a: "Yes, we regularly check in on new venues as Kevadia continues to develop, and we'll confirm access and setup specifics with the resort ahead of your date.",
      },
    ],
  },

  "chhota-udepur": {
    slug: "chhota-udepur",
    intro:
      "Chhota Udepur is a smaller town with a strong tribal cultural identity, and weddings here often blend that local character with the same energy any Gujarati baraat brings. A grand baraat entry through Chhota Udepur Town or along Kawant Road still draws attention in a close-knit community like this.\n\nPlanMyBaraat runs baraat on wheels packages built for that: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "We cover Chhota Udepur Town, Kawant Road, and the Bodeli belt. Roads here are more rural and open in stretches, which generally works well for a full truck setup, though the town center itself is more compact.\n\nIf your venue is somewhere else around Chhota Udepur, let us know when you message us and we'll confirm the route.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a solid fit for a smaller-town entry. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a smaller town like Chhota Udepur that means planning the route carefully for the more compact town center while making the most of the wider stretches along Kawant Road and toward Bodeli.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, which keeps things running smoothly even in a smaller, tighter-knit town where word travels fast.",
    pricingGuidance:
      "On how much does baraat cost in Chhota Udepur: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Chhota Udepur is a smaller town, so 2 weeks' notice is usually enough even during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially for entries through the more compact town center.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Chhota Udepur, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Chhota Udepur?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover areas near Kawant Road and Bodeli?",
        a: "Yes, we cover Chhota Udepur Town, Kawant Road, and the Bodeli belt. Tell us your exact venue when you message us.",
      },
      {
        q: "How early should I book a dj truck for baraat in Chhota Udepur?",
        a: "2 weeks ahead is usually enough, even during wedding season (November to February), since it's a smaller town with less booking pressure.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "How many dhol players come with each package?",
        a: "Raj Tilak includes 2, Rajwada includes 4, Maharaja includes 6, and Signature includes 6 plus extra effects. We can usually add more dhol players for a small additional cost.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
      {
        q: "Can you manage a truck entry through the compact town center?",
        a: "Yes, we plan the route in advance and can adjust the setup if the town center streets are tighter, making the most of the wider roads nearby.",
      },
    ],
  },

  "vadodara-alkapuri": {
    slug: "vadodara-alkapuri",
    intro:
      "Alkapuri is one of Vadodara's most established addresses — close to Sayaji Baug and MS University, with a mix of older residential buildings and some of the city's busiest commercial stretches. It's also one of the most competitive spots for a baraat entry, since on a wedding weekend you might see two or three processions heading to halls within a few streets of each other.\n\nPlanMyBaraat runs baraat on wheels packages built for that kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all in one booking, so your entry doesn't get lost in the noise of a busy area.",
    localArea:
      "Alkapuri's roads are a mix — some wider commercial stretches near the main market area, and narrower residential lanes closer to the older housing societies. Parking is tighter here than in Vadodara's newer western suburbs, so we scout the exact venue and plan the truck's stopping point in advance rather than assuming there's open space.\n\nIt's close to Sayajigunj and Race Course Circle, so if your venue or guest accommodation is spread across that pocket, our team already knows the connecting routes and won't be figuring it out on the day.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, which works well for Alkapuri's narrower streets since the truck configuration doesn't need to be oversized. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects — useful here given how much foot traffic Alkapuri gets on a wedding evening.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're based in Gujarat, and for an area like Alkapuri that means knowing exactly which streets can take a full-size truck and where we need to plan a shorter final stretch on foot with the dhol team leading in. That's not something you want to discover for the first time on the wedding day.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and several of them have handled entries in this exact part of Vadodara before — which matters when parking and road width are tighter than average.",
    pricingGuidance:
      "On how much does baraat cost for an Alkapuri entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often works well here given the tighter street layout. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team for the bigger crowds this area tends to draw.\n\nWe quote based on your actual date, exact venue, and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Alkapuri's halls are some of the most booked in Vadodara during that stretch — we'd recommend locking in your baraat entry at least 3-4 weeks ahead if your date falls in peak season.\n\nBecause parking is tighter here, let us know if your venue has a designated drop-off or staging area. A rough headcount for the baraati group also helps us plan how much of the entry happens by truck versus on foot for the final approach.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Alkapuri, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Alkapuri, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can a double decker truck actually reach venues in Alkapuri?",
        a: "In most cases yes, though some streets are narrower than Vadodara's newer suburbs. We check your exact venue in advance and plan the truck's stopping point, sometimes with a short final stretch on foot led by the dhol team.",
      },
      {
        q: "How early should I book for an Alkapuri wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since Alkapuri's halls are some of the busiest in Vadodara during that period.",
      },
      {
        q: "Is parking a problem for the DJ truck near Alkapuri venues?",
        a: "It can be tighter than newer parts of the city. Let us know if your venue has a designated drop-off or staging area, and we'll plan the truck's position accordingly.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature for an Alkapuri entry?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Alkapuri's narrower streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team for bigger crowds.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-sayajigunj": {
    slug: "vadodara-sayajigunj",
    intro:
      "Sayajigunj sits right next to Sayaji Baug and the MS University campus, which makes it one of the most central and recognizable parts of Vadodara. It's also a common stretch for baraat entries, especially for families with a venue near the garden or university side of the city.\n\nPlanMyBaraat runs baraat on wheels packages designed to work in a busy, central area like this: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, handled as one booking.",
    localArea:
      "Sayajigunj is dense and commercial in parts, with a lot of activity around the university and garden entrances. Roads here can get congested in the evening, especially near market stretches, so timing the truck's arrival matters more than in some of Vadodara's quieter suburbs.\n\nIt connects easily to Alkapuri and Race Course Circle, so if your guests are staying across that broader central pocket, our team already knows how the roads link up.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — visible well given the foot traffic in this part of the city. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sayajigunj that means knowing when the roads near the university and garden get busiest, so we can plan the truck's timing to avoid getting stuck in evening traffic on the way to your venue.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are used to handling entries through central, busier parts of Vadodara like this one.",
    pricingGuidance:
      "On how much does baraat cost for a Sayajigunj entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and central venues near Sayajigunj get booked early. We'd suggest locking in your baraat entry at least 3 weeks ahead during peak season.\n\nGiven how busy this area gets in the evening, let us know your venue's exact access point so we can plan the truck's arrival timing to avoid traffic. A rough headcount for the baraati group also helps with planning.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Sayajigunj, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Sayajigunj, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry near Sayajigunj?",
        a: "It can get busy in the evening near the university and market areas, so we plan the truck's arrival timing around that to avoid delays reaching your venue.",
      },
      {
        q: "How early should I book for a Sayajigunj wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since central venues here fill up quickly.",
      },
      {
        q: "Do you cover venues near MS University and Sayaji Baug?",
        a: "Yes, we regularly handle entries in this part of Vadodara. Tell us your exact venue and we'll confirm the route and timing.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-akota": {
    slug: "vadodara-akota",
    intro:
      "Akota sits along the Vishwamitri river, connected to the older parts of Vadodara by the Sayaji Bridge, and it's grown into a solid mix of residential societies and mid-size event venues. A grand baraat entry through Akota often means crossing that bridge as part of the route, which adds its own bit of drama to the procession.\n\nPlanMyBaraat runs baraat on wheels packages that account for that kind of route: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Akota's roads are generally decent width, though the approach near Sayaji Bridge can get congested at peak times. The area has a good number of banquet halls and society-adjacent venues, and it's close enough to Alkapuri and Race Course Circle that guests from either side of the city can reach it easily.\n\nIf your venue is deeper into one of Akota's residential societies, let us know so we can check the final stretch of the route in advance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Akota that means knowing the timing around Sayaji Bridge traffic and which residential societies have entry points that work for a full-size truck versus a shorter walk-in from the main road.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, so the crossing and final approach into Akota stays on schedule.",
    pricingGuidance:
      "On how much does baraat cost for an Akota entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. We'd suggest booking your baraat entry at least 3 weeks ahead if your date falls in peak season, since bridge-crossing routes need a bit more timing buffer than a straightforward one-side-of-town entry.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming which side of the river your venue and most of your guests are coming from.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Akota, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Akota, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Does the baraat route cross Sayaji Bridge to reach Akota?",
        a: "It can, depending on where your venue and starting point are. We plan the timing around bridge traffic so the procession stays on schedule.",
      },
      {
        q: "How early should I book for an Akota wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, with a bit of extra buffer if the route involves crossing the bridge.",
      },
      {
        q: "Do you cover venues inside residential societies in Akota?",
        a: "Yes, tell us your exact venue and we'll check the final stretch of the route in advance, since some society entrances need a shorter walk-in approach.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },
};
