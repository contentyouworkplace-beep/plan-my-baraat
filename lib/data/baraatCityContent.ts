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
};
