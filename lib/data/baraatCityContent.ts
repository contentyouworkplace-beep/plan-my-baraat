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

  "vadodara-manjalpur": {
    slug: "vadodara-manjalpur",
    intro:
      "Manjalpur has grown fast on Vadodara's south side, and it's now home to a good number of newer banquet halls and party plots that weren't there a decade ago. Weekends here get busy — a Sunday evening baraat entry in Manjalpur often means sharing the road with two or three other wedding processions heading to nearby halls.\n\nPlanMyBaraat runs baraat on wheels packages built for that kind of demand: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, handled as one booking so your entry stands out even on a busy weekend.",
    localArea:
      "Manjalpur's roads are generally wider than Vadodara's old city core, since a lot of this area developed more recently, which makes truck access easier than in Alkapuri or Sayajigunj. Parking is still tight on Sunday evenings though, given how many halls run back-to-back events during peak season.\n\nWe've worked entries across most of Manjalpur's newer venue clusters, and if your hall is in a part of the area we haven't been to yet, we'll confirm the route before your date.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — a nice way to stand out when there are multiple baraats in the area on the same evening. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and in Manjalpur that means knowing which weekends get busiest and planning your truck's parking and staging spot early, rather than trying to find space on the day when three other events are happening nearby.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and have handled plenty of Manjalpur bookings, so timing and coordination stay tight even on a packed Sunday.",
    pricingGuidance:
      "On how much does baraat cost for a Manjalpur entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, useful when the area's busy with multiple weddings.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Manjalpur's newer halls get booked out fast during that window — especially Sundays. We'd recommend locking in your baraat entry at least 3-4 weeks ahead if your date falls in peak season.\n\nSince parking can be tight when multiple events overlap, let us know your venue's exact entry point so we can plan the truck's position early. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Manjalpur, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Manjalpur, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is parking difficult for the DJ truck in Manjalpur on weekends?",
        a: "It can be, since several halls run events on the same evenings, especially Sundays during wedding season. We plan your truck's parking and staging spot in advance to avoid last-minute issues.",
      },
      {
        q: "How early should I book for a Manjalpur wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, since Manjalpur's newer venues book up quickly.",
      },
      {
        q: "Are Manjalpur's roads wide enough for a double decker truck?",
        a: "Generally yes — since this is a newer part of the city, roads tend to be wider than Vadodara's old city core, making truck access easier.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, useful when multiple baraats are happening nearby.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-gotri": {
    slug: "vadodara-gotri",
    intro:
      "Gotri is one of Vadodara's fastest-growing western suburbs, with newer residential societies and event venues that have wide, well-planned roads compared to the older parts of the city. A grand baraat entry here has plenty of room to work with, which is part of why it's become a popular spot for bigger, more elaborate processions.\n\nPlanMyBaraat runs baraat on wheels packages built for that kind of space: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Gotri's newer layout means most roads can comfortably take a full-size truck, unlike the tighter lanes in Alkapuri or old-city Vadodara. It's close to Sama and the Vasna-Bhayli Road corridor, so if your venue or guest accommodation spans that broader western pocket, our team already knows the connecting routes.\n\nWe've handled a good number of entries in Gotri's newer venue clusters, and the area continues to grow, so if your hall is somewhere very new, just flag it when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up, which reads especially well on Gotri's wider roads. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival — a strong fit for the bigger processions this area tends to host.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a fast-growing area like Gotri that means staying current on new venues and access roads as the area develops, rather than working off outdated information.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are used to the bigger, more open-road entries that Gotri's layout allows for.",
    pricingGuidance:
      "On how much does baraat cost for a Gotri entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits Gotri's bigger-scale weddings well.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Gotri's popularity as a newer venue hub means halls here can book out a few weeks ahead. We'd suggest locking in your baraat entry at least 3 weeks ahead during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially since Gotri's wider roads make bigger processions more common here than in some older parts of the city.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Gotri, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Gotri, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Gotri's roads good for a double decker truck?",
        a: "Yes, since this is a newer part of Vadodara, roads are generally wider and better planned than the old city core, making truck access straightforward.",
      },
      {
        q: "How early should I book for a Gotri wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since Gotri's newer venues have become popular and can book up.",
      },
      {
        q: "Do you cover venues near Sama and Vasna-Bhayli Road too?",
        a: "Yes, we cover the broader western Vadodara corridor including Sama and Vasna-Bhayli Road. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Gotri's bigger, open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-karelibaug": {
    slug: "vadodara-karelibaug",
    intro:
      "Karelibaug is one of Vadodara's older, more established residential neighborhoods, dense with housing societies and community halls that have hosted generations of weddings. A baraat entry here often has a genuinely local feel — neighbors watching from balconies, familiar faces in the crowd — which is part of what makes it worth getting right.\n\nPlanMyBaraat runs baraat on wheels packages built to work in a dense residential area like this: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Karelibaug's roads are a mix of moderately wide main stretches and narrower lanes leading into individual societies. It's more built-up than Vadodara's newer western suburbs, so we plan the truck's route and stopping point carefully, especially if your venue is inside a residential society rather than a standalone hall.\n\nIt's centrally located, connecting easily to Race Course Circle and Nizampura, so guests coming from either side of central Vadodara have an easy time reaching Karelibaug venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a good fit for Karelibaug's more residential character. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Karelibaug that means knowing which societies have gates or entry points that work for a full truck, and where we need to plan a shorter walk-in with the dhol leading the way.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and are used to navigating Vadodara's denser residential pockets without losing time.",
    pricingGuidance:
      "On how much does baraat cost for a Karelibaug entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often suits Karelibaug's residential scale well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Community halls in Karelibaug can book out a few weeks ahead during that window, so we'd suggest locking in your baraat entry at least 3 weeks ahead.\n\nIf your venue is inside a residential society, let us know the gate or entry point in advance so we can plan the truck's approach. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Karelibaug, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Karelibaug, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the DJ truck reach venues inside residential societies?",
        a: "In most cases yes, though some society gates are narrower than a standalone hall's entrance. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Karelibaug wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since community halls here can book out during peak dates.",
      },
      {
        q: "Is Karelibaug close to other central Vadodara areas?",
        a: "Yes, it connects easily to Race Course Circle and Nizampura, so guests from either side of central Vadodara can reach it without difficulty.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Karelibaug's residential streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-waghodia-road": {
    slug: "vadodara-waghodia-road",
    intro:
      "Waghodia Road runs out toward Vadodara's eastern industrial belt, and while the stretch closer to GIDC is mostly commercial, the residential and venue pockets nearer the city side host a steady number of weddings. A grand baraat entry here usually has more open road to work with than the older parts of central Vadodara.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Waghodia Road itself is wide and straightforward for a full truck setup, though traffic can build up near the industrial belt during weekday evenings. Most wedding venues here are closer to the city-side end of the road rather than deep into the GIDC stretch.\n\nWe've handled entries across this corridor and the connecting pockets, and if your venue is further out toward the industrial area, just flag it when you message us so we can plan the timing around any weekday traffic.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up, which works well on this open stretch of road. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Waghodia Road that means knowing when weekday traffic near the industrial belt tends to build up, so we plan weekend and evening entries around that rather than assuming the road's always clear.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight whether your venue's closer to the city side or further out.",
    pricingGuidance:
      "On how much does baraat cost for a Waghodia Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this corridor. Outside season, a week or two usually works.\n\nIf your venue is closer to the industrial end of the road, let us know so we can plan around any weekday traffic patterns. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Waghodia Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Waghodia Road, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Waghodia Road good for a double decker truck entry?",
        a: "Yes, it's generally wide and open, making truck access straightforward, though traffic can build up near the industrial belt on weekday evenings.",
      },
      {
        q: "How early should I book for a Waghodia Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week or two of notice usually works.",
      },
      {
        q: "Do you cover venues further out toward the GIDC belt?",
        a: "Yes, though most weddings happen closer to the city-side end of the road. Tell us your exact venue and we'll plan the route and timing accordingly.",
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

  "vadodara-vasna-bhayli-road": {
    slug: "vadodara-vasna-bhayli-road",
    intro:
      "Vasna-Bhayli Road is one of Vadodara's fastest-developing western corridors, connecting the Vasna side of the city out toward Bhayli, with newer residential projects and event venues going up along the way. A grand baraat entry here benefits from wide, newer roads that make for a smooth, open procession.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of growth corridor: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "This stretch is well-planned and wide for most of its length, making it one of the easier corridors in Vadodara for a full truck setup. It connects to Gotri and Sama on one side and out toward Bhayli on the other, so we're familiar with the venues spread across that whole western belt.\n\nSince this area keeps growing, if your venue is at a very new development, just mention it when you message us and we'll confirm the route ahead of time.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — a strong fit for this open, newer corridor. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a growing corridor like Vasna-Bhayli Road that means keeping up with new venues as they open, rather than working from an outdated picture of the area.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the bigger, more open-road entries this stretch typically allows for.",
    pricingGuidance:
      "On how much does baraat cost along Vasna-Bhayli Road: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and this corridor's popularity as a newer venue hub means 3 weeks' notice is a safe bet during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how much room this stretch gives for a bigger, more elaborate entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue along Vasna-Bhayli Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Vasna-Bhayli Road?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is this corridor good for a bigger baraat entry?",
        a: "Yes, since the road is wide and newer, it works well for bigger processions with a larger truck setup and more room for the dhol team.",
      },
      {
        q: "How early should I book for a wedding along this road?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how popular this corridor has become for newer venues.",
      },
      {
        q: "Do you cover both the Vasna side and the Bhayli end of this road?",
        a: "Yes, we cover the full corridor, connecting to Gotri and Sama on one side and Bhayli on the other. Tell us your exact venue when you message us.",
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

  "vadodara-old-padra-road": {
    slug: "vadodara-old-padra-road",
    intro:
      "Old Padra Road is one of Vadodara's premier wedding corridors — wide, well-lit, and lined with some of the city's bigger banquet halls and lawns. If you want a grand baraat entry with room for a full crowd, a large truck, and a dhol team that can really open up, this is one of the best stretches in the city for it.\n\nPlanMyBaraat runs baraat on wheels packages designed for exactly this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Old Padra Road is wide for most of its length, with good parking near most of the major venues. It's one of the busiest wedding corridors in Vadodara during peak season, so on a Saturday evening you'll likely see other baraats along the same stretch.\n\nWe've run a large number of entries along this road, so we know the timing and positioning that works best for each of the bigger halls here.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — this road's width and lighting make for a strong visual entry. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to the scale of weddings this corridor typically hosts.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and Old Padra Road is one of the corridors we work most often — which means we know exactly how each major hall here handles truck access and parking, and we plan around it rather than guessing.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the bigger, more competitive entries common along this stretch.",
    pricingGuidance:
      "On how much does baraat cost along Old Padra Road: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits the bigger crowds common on this stretch.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Old Padra Road is one of the most booked corridors in Vadodara during that time. We'd strongly recommend locking in your baraat entry at least 4 weeks ahead if your date falls in peak season, since both venues and our booking calendar fill up fast here.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how many bigger, more elaborate entries happen along this road.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Old Padra Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Old Padra Road?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Why is Old Padra Road popular for baraat entries?",
        a: "It's one of Vadodara's widest, best-lit wedding corridors, with several of the city's bigger banquet halls and lawns, giving plenty of room for a large truck, dhol team, and crowd.",
      },
      {
        q: "How early should I book for an Old Padra Road wedding?",
        a: "At least 4 weeks ahead during wedding season (November to February) — this is one of the most booked corridors in Vadodara, both for venues and for our truck calendar.",
      },
      {
        q: "Will there be other baraats on the same road on my wedding date?",
        a: "It's likely, especially on Saturday evenings during peak season. We plan your entry's timing and positioning to make sure it still stands out.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to the scale of Old Padra Road weddings.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-fatehgunj": {
    slug: "vadodara-fatehgunj",
    intro:
      "Fatehgunj sits close to Vadodara's railway station, and it's one of the busier, more commercial parts of the city — a mix of shops, older residential buildings, and a fair number of wedding halls tucked into the neighborhood. A baraat entry here has to work around genuinely busy streets, especially in the evening.\n\nPlanMyBaraat runs baraat on wheels packages that account for that kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Fatehgunj's roads are busy through most of the evening given how close it is to the station and the amount of commercial activity here. Parking near venues can be tighter than in the newer western suburbs, so we scout the exact route and stopping point in advance.\n\nIt's centrally located, connecting easily to Sayajigunj and Race Course Circle, which makes it convenient for guests coming from across the city even if the immediate streets are busier.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, which works well given Fatehgunj's busier, narrower streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Fatehgunj that means knowing which streets get busiest around the station in the evening, and timing your entry to avoid getting stuck en route to the venue.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and are used to navigating Vadodara's busier central pockets without losing time.",
    pricingGuidance:
      "On how much does baraat cost for a Fatehgunj entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. We'd suggest locking in your baraat entry at least 3 weeks ahead during peak season, since venues in this central pocket book up alongside the rest of Vadodara's busy season.\n\nGiven how busy the streets get near the station, let us know your venue's exact access point so we can plan the truck's timing to avoid traffic. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Fatehgunj, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Fatehgunj, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic near the railway station a problem for a baraat entry?",
        a: "It can get busy in the evening. We plan the truck's timing and route to avoid the worst of it and reach your venue on schedule.",
      },
      {
        q: "How early should I book for a Fatehgunj wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since this central pocket books up alongside the rest of the city.",
      },
      {
        q: "Is parking tight for venues in Fatehgunj?",
        a: "It can be, given how commercial and busy the area is. Let us know your venue's exact access point so we can plan the truck's stopping position in advance.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Fatehgunj's busier streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-sama": {
    slug: "vadodara-sama",
    intro:
      "Sama is one of Vadodara's more upscale western neighborhoods, with newer residential developments and event venues that tend to have better road access than the older parts of the city. A grand baraat entry here has room to be as elaborate as the family wants, given how much space the newer roads allow.\n\nPlanMyBaraat runs baraat on wheels packages built for that kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Sama's roads are generally wide and well-planned, making truck access straightforward compared to Vadodara's old city core. It sits close to Gotri and Subhanpura, so if your guests are spread across that western pocket, our team already knows how the areas connect.\n\nWe've handled a good number of entries in Sama's venue clusters, and the roads here typically allow for a bigger, more visible entry than tighter central neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up, which shows up well on Sama's wider roads. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sama that means being familiar with the newer venues that have opened here as the area's developed, and planning routes that make the most of the wider roads.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the bigger, more open entries this part of the city allows for.",
    pricingGuidance:
      "On how much does baraat cost for a Sama entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Sama's popularity as an upscale venue area means booking 3 weeks ahead during peak season is a safe bet.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how much room this area typically allows for a bigger, more elaborate entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Sama, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Sama, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Sama's roads good for a bigger baraat entry?",
        a: "Yes, the roads here are generally wide and well-planned, giving good room for a full truck setup and a bigger, more elaborate procession.",
      },
      {
        q: "How early should I book for a Sama wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how popular this area has become for weddings.",
      },
      {
        q: "Do you cover venues near Gotri and Subhanpura too?",
        a: "Yes, we cover the broader western Vadodara pocket including Gotri and Subhanpura. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Sama's bigger, open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-subhanpura": {
    slug: "vadodara-subhanpura",
    intro:
      "Subhanpura sits between Vadodara's central neighborhoods and the newer western suburbs, with a mix of established housing and a growing number of event venues. A baraat entry here often has an easy time of it — roads are reasonably wide without the congestion of the old city core.\n\nPlanMyBaraat runs baraat on wheels packages built for exactly this kind of area: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Subhanpura's roads are a comfortable middle ground — wider than Alkapuri or old-city Vadodara, but more established than the very newest western developments. It connects easily to Sama and Diwalipura, so guests coming from either direction have a straightforward route in.\n\nWe've handled a good number of entries in this part of the city, and most venues here are easy for a full truck setup to reach.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Subhanpura that means knowing the connecting routes to Sama and Diwalipura well, which helps when guests are spread across that middle pocket of the city.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Subhanpura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city. Outside season, a week or two usually works.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Subhanpura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Subhanpura, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Subhanpura's roads good for a truck entry?",
        a: "Yes, they're generally wider and more accessible than Vadodara's old city core, making a full truck setup straightforward for most venues.",
      },
      {
        q: "How early should I book for a Subhanpura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week or two of notice usually works.",
      },
      {
        q: "Do you cover venues connecting to Sama and Diwalipura?",
        a: "Yes, we cover the broader pocket including Sama and Diwalipura. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-tandalja": {
    slug: "vadodara-tandalja",
    intro:
      "Tandalja sits in south-central Vadodara, a growing residential pocket with a mix of established societies and newer venues that have opened as the area's developed. A baraat entry here tends to have a comfortable, neighborhood feel — good for families who want a proper entry without the scale and crowd of the bigger corridors.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Tandalja's roads are generally manageable for a full truck setup, though some of the older society lanes are narrower. It's close to Manjalpur and Vasna, so guests coming from that broader south Vadodara pocket have an easy route in.\n\nWe've handled entries across Tandalja's venue clusters, and if your hall is inside a specific residential society, let us know so we can check the entry point in advance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Tandalja that means knowing which society entrances work for a full-size truck and which need a shorter walk-in led by the dhol team.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping things smooth for entries across this part of south Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Tandalja entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is a safe bet for this part of the city.\n\nIf your venue is inside a residential society, let us know the entry point in advance. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Tandalja, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Tandalja, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck reach venues inside Tandalja's residential societies?",
        a: "In most cases yes, though some older society lanes are narrower. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Tandalja wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Manjalpur and Vasna too?",
        a: "Yes, we cover the broader south Vadodara pocket including Manjalpur and Vasna. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-new-vip-road": {
    slug: "vadodara-new-vip-road",
    intro:
      "New VIP Road is one of Vadodara's newer premium wedding corridors — wide, modern, and lined with some of the city's larger, more upscale venues. A grand baraat entry here has plenty of room for a full-scale production, which is why it's become a popular choice for families wanting a bigger, more elaborate entry.\n\nPlanMyBaraat runs baraat on wheels packages designed for exactly this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "New VIP Road is wide for most of its length, with good parking near most major venues — similar in scale to Old Padra Road, but generally newer development. It's become one of Vadodara's most in-demand wedding stretches, so expect other baraats on the same road during peak season weekends.\n\nWe've run a good number of entries along this corridor and know the timing and positioning that works best for the bigger halls here.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — this road's width and modern venues make for a strong visual entry. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to the scale of weddings here.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and New VIP Road is one of the corridors we work often — we know how each major venue here handles truck access and parking, and plan around it in advance.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the bigger, more competitive entries common along this stretch.",
    pricingGuidance:
      "On how much does baraat cost along New VIP Road: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits the bigger crowds common on this stretch.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and New VIP Road is one of the most booked corridors in Vadodara during that time. We'd recommend locking in your baraat entry at least 4 weeks ahead if your date falls in peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how many bigger, more elaborate entries happen along this road.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on New VIP Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on New VIP Road?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Why is New VIP Road popular for baraat entries?",
        a: "It's a wide, modern corridor with some of Vadodara's larger, more upscale venues, giving plenty of room for a big truck, dhol team, and crowd.",
      },
      {
        q: "How early should I book for a New VIP Road wedding?",
        a: "At least 4 weeks ahead during wedding season (November to February) — this is one of the most booked corridors in the city.",
      },
      {
        q: "Will there be other baraats on the same road on my wedding date?",
        a: "It's likely, especially on Saturday evenings during peak season. We plan your entry's timing and positioning to make sure it still stands out.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to New VIP Road's bigger weddings.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-harni": {
    slug: "vadodara-harni",
    intro:
      "Harni sits in Vadodara's northeast, close to the airport, and has grown into a mix of residential development and a handful of event venues that benefit from wider, newer roads. A baraat entry here has good open space to work with, and being near the airport means it's convenient for families expecting guests to fly in.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Harni's roads are generally wide, given how much of this area has developed more recently, making truck access straightforward. It's a bit further from the central Alkapuri-Sayajigunj pocket, so if your venue is out this way, factor in a slightly longer route from other parts of the city.\n\nWe've handled entries in Harni and the surrounding areas, and given the proximity to the airport, we're used to coordinating timing around guests arriving close to the wedding date.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Harni that means knowing the routes connecting this northeast pocket to the rest of Vadodara, and planning timing that accounts for guests who might be arriving from the airport close to the wedding date.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight regardless of how far out your venue is.",
    pricingGuidance:
      "On how much does baraat cost for a Harni entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet. Outside season, a week or two usually works.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth letting us know if a lot of your guests are flying in close to the date so we can plan timing accordingly.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Harni, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Harni, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Harni far from central Vadodara?",
        a: "It's a bit further out in the northeast of the city, so factor in a slightly longer route if guests are coming from Alkapuri or Sayajigunj.",
      },
      {
        q: "How early should I book for a Harni wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window. Outside season, a week or two of notice usually works.",
      },
      {
        q: "Is Harni convenient for guests flying in for the wedding?",
        a: "Yes, being close to the airport makes it convenient for out-of-town guests. We're used to coordinating baraat timing around flight-in guest schedules.",
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

  "vadodara-chhani": {
    slug: "vadodara-chhani",
    intro:
      "Chhani sits in Vadodara's north, a mix of residential growth and light industry, with roads that are generally wide since much of the area developed alongside the industrial belt. A baraat entry here has good room to work with, and the area's grown enough to have its own set of banquet halls now.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Chhani's main roads are wide and straightforward for a full truck setup, though traffic can build up near the industrial stretches on weekdays. Most wedding venues here are in the more residential pockets rather than deep into the industrial belt.\n\nWe've handled entries across Chhani and the connecting areas, and if your venue is further toward Chhani Jakatnaka, just flag it when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Chhani that means knowing when the roads near the industrial belt get busiest, so we plan weekend entries to avoid any weekday traffic carryover.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this growing part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Chhani entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is closer to the residential or industrial side of Chhani.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Chhani, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Chhani, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Chhani good for a full-size truck entry?",
        a: "Yes, roads here are generally wide, though traffic can build up near the industrial stretches on weekdays. Weekend entries are usually smoother.",
      },
      {
        q: "How early should I book for a Chhani wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Chhani Jakatnaka too?",
        a: "Yes, tell us your exact venue and we'll confirm the route, whether it's closer to central Chhani or further toward Jakatnaka.",
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

  "vadodara-diwalipura": {
    slug: "vadodara-diwalipura",
    intro:
      "Diwalipura is a well-established residential neighborhood in central-west Vadodara, known among locals for being a bit stricter about evening noise than some of the newer suburbs. That doesn't mean a baraat entry can't be grand here — it just means the timing matters more than usual.\n\nPlanMyBaraat runs baraat on wheels packages built to work with that kind of local rhythm: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, planned around the area's timing expectations.",
    localArea:
      "Diwalipura's roads are moderate in width, comfortable for a truck setup, and it connects easily to Subhanpura and Sama. Several societies here have evening noise preferences, especially after 10pm, which we factor into the timing plan for any entry in this neighborhood.\n\nWe've run a good number of entries through Diwalipura, so we already know which streets and societies tend to be stricter about timing.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, which we can time to wrap up comfortably within Diwalipura's typical evening windows.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Diwalipura specifically that means knowing which societies have earlier noise expectations, and building the dhol and pyro timing around that from the start, rather than scrambling to adjust on the day.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are used to planning tighter timing windows for neighborhoods like this one.",
    pricingGuidance:
      "On how much does baraat cost for a Diwalipura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet.\n\nSince several Diwalipura societies prefer music to wrap up by 10pm, let us know your venue's specific timing expectations when you enquire, and we'll plan the truck arrival, dhol, and any pyro or confetti to finish comfortably before then.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Diwalipura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Diwalipura, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Does Diwalipura have a noise curfew for evening events?",
        a: "Several societies here prefer music to wrap up by around 10pm. Tell us the cutoff time for your venue and we'll plan the dhol and any pyro or confetti to finish before then.",
      },
      {
        q: "How early should I book for a Diwalipura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues connecting to Subhanpura and Sama?",
        a: "Yes, we cover the broader central-west pocket including Subhanpura and Sama. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team — all of which we can time to fit Diwalipura's evening expectations.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-race-course-circle": {
    slug: "vadodara-race-course-circle",
    intro:
      "Race Course Circle is one of Vadodara's most central landmarks, and venues around it draw from across the city given how easy it is to find and reach. A baraat entry near the circle gets a lot of visibility, simply because of how much traffic — both vehicle and foot — passes through this junction.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that visibility: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "The roads radiating out from Race Course Circle are generally well-maintained, though the circle itself can get busy with regular traffic, so we plan truck timing carefully around that. It connects easily to Alkapuri, Karelibaug, and Sayajigunj, making it one of the most central and accessible spots in Vadodara.\n\nWe've run a number of entries through this area and know the timing that works best to avoid the circle's regular traffic peaks.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — visible to a lot of passing traffic given the area's central location. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for an area as central as Race Course Circle that means knowing exactly when the regular traffic peaks are, so we can time your baraat's arrival to avoid getting stuck at the junction.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries through busy, central parts of the city.",
    pricingGuidance:
      "On how much does baraat cost near Race Course Circle: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Given how central this location is, we'd suggest booking your baraat entry at least 3 weeks ahead during peak season.\n\nSince the circle itself gets regular traffic, let us know your venue's exact access point so we can plan the truck's approach to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Race Course Circle, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Race Course Circle?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry near the circle?",
        a: "It can get busy with regular traffic, so we plan the truck's timing carefully to avoid the junction's peak periods and reach your venue smoothly.",
      },
      {
        q: "How early should I book for a wedding near Race Course Circle?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how central and popular this location is.",
      },
      {
        q: "Is this area convenient for guests from across Vadodara?",
        a: "Yes, it connects easily to Alkapuri, Karelibaug, and Sayajigunj, making it one of the most accessible spots in the city for guests coming from different directions.",
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

  "vadodara-nizampura": {
    slug: "vadodara-nizampura",
    intro:
      "Nizampura is a well-established, central-north neighborhood in Vadodara, dense with housing societies and community halls similar in character to Karelibaug. A baraat entry here has a genuinely local feel, with familiar faces from the neighborhood often watching the procession go by.\n\nPlanMyBaraat runs baraat on wheels packages built to work in a dense residential setting like this: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Nizampura's roads are a mix of moderate-width main stretches and narrower society lanes, so we plan the truck's route and stopping point carefully, especially for venues inside residential complexes. It connects easily to Karelibaug and Race Course Circle, making it convenient for guests from either side of central Vadodara.\n\nWe've handled a good number of entries here, and know which streets and societies work best for a full-size truck versus a shorter walk-in approach.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a good fit for Nizampura's residential character. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Nizampura that means knowing which society gates work for a full truck and where a shorter walk-in with the dhol leading is the better approach.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and are used to navigating Vadodara's denser residential neighborhoods without losing time.",
    pricingGuidance:
      "On how much does baraat cost for a Nizampura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often suits Nizampura's residential scale well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, since community halls here can book out during busy dates.\n\nIf your venue is inside a residential society, let us know the gate or entry point in advance. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Nizampura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Nizampura, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the DJ truck reach venues inside Nizampura's residential societies?",
        a: "In most cases yes, though some gates are narrower than a standalone hall's entrance. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Nizampura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since community halls here can book out during peak dates.",
      },
      {
        q: "Is Nizampura close to other central Vadodara areas?",
        a: "Yes, it connects easily to Karelibaug and Race Course Circle, so guests from either side of central Vadodara can reach it without difficulty.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Nizampura's residential streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-makarpura": {
    slug: "vadodara-makarpura",
    intro:
      "Makarpura is best known for its industrial GIDC belt in south Vadodara, but the residential pockets around it host a steady number of weddings too. A baraat entry here usually means wide, functional roads built for industrial traffic, which actually works in favor of a big truck setup.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Makarpura's roads are generally wide given the industrial development in the area, making truck access straightforward. Most wedding venues here are in the residential pockets rather than the industrial core, and we've handled a number of entries in this part of south Vadodara.\n\nIf your venue is closer to the GIDC belt itself, let us know so we can plan around any weekday industrial traffic.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Makarpura that means knowing which stretches are purely industrial versus residential, and planning weekend entries to avoid any weekday traffic patterns tied to the GIDC belt.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Makarpura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is closer to the residential or industrial side of Makarpura.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Makarpura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Makarpura, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Makarpura good for a double decker truck entry?",
        a: "Yes, roads here are generally wide given the industrial development, making truck access straightforward for most venues.",
      },
      {
        q: "How early should I book for a Makarpura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near the GIDC belt itself?",
        a: "Yes, though most weddings happen in the residential pockets. Tell us your exact venue and we'll plan around any weekday industrial traffic if needed.",
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

  "vadodara-gorwa": {
    slug: "vadodara-gorwa",
    intro:
      "Gorwa sits in west Vadodara, a settled residential neighborhood with a mix of older and newer housing, and a growing number of event venues as the area's developed. A baraat entry here tends to be a comfortable, mid-scale affair — not as tight as the old city core, not as sprawling as the newest western suburbs.\n\nPlanMyBaraat runs baraat on wheels packages built for exactly this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Gorwa's roads are generally manageable for a full truck setup, with a mix of wider main stretches and some narrower society lanes. It connects easily to Vasna and the broader western pocket of the city, so guests from that side have an easy route in.\n\nWe've handled a good number of entries across Gorwa's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Gorwa that means knowing which societies have wider entry points for a full truck and which need a shorter walk-in led by the dhol team.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this part of west Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Gorwa entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nIf your venue is inside a residential society, let us know the entry point in advance. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Gorwa, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Gorwa, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck reach venues inside Gorwa's residential societies?",
        a: "In most cases yes, though some society lanes are narrower. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Gorwa wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Vasna too?",
        a: "Yes, we cover the broader western Vadodara pocket including Vasna. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-bhayli": {
    slug: "vadodara-bhayli",
    intro:
      "Bhayli sits at the far western edge of Vadodara's growth corridor, and it's one of the newest residential and event-venue zones in the city. A grand baraat entry here often has the most open road of anywhere in Vadodara, since this area is still developing and roads haven't gotten congested the way older parts of the city have.\n\nPlanMyBaraat runs baraat on wheels packages that make the most of that space: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Bhayli's roads are wide and new, making it one of the easiest parts of the city for a full truck setup. Being at the far western end, it's a bit further from central Vadodara, so factor in a slightly longer route if a lot of your guests are coming from Alkapuri or Sayajigunj.\n\nWe've handled entries at several of Bhayli's newer venues, and since the area keeps expanding, if your hall is somewhere very recently built, just flag it when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — Bhayli's wide roads make this a strong visual choice. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to the bigger, more open entries this area allows for.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a fast-developing area like Bhayli that means staying current on new venues as they open, and planning routes that make full use of the open roads here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the bigger, more elaborate entries Bhayli's layout allows for.",
    pricingGuidance:
      "On how much does baraat cost for a Bhayli entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits the scale of weddings this newer area tends to host.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Bhayli's popularity as a newer venue hub means booking 3-4 weeks ahead during peak season is a safe bet.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how much room this area allows for a bigger entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Bhayli, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bhayli, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Bhayli far from central Vadodara?",
        a: "It's at the far western edge of the city, so factor in a slightly longer route if guests are coming from Alkapuri or Sayajigunj.",
      },
      {
        q: "How early should I book for a Bhayli wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this newer area has become.",
      },
      {
        q: "Are Bhayli's roads good for a bigger baraat entry?",
        a: "Yes, since this is one of the newest parts of Vadodara, the roads are wide and open, giving plenty of room for a bigger, more elaborate procession.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Bhayli's bigger, open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-vasna": {
    slug: "vadodara-vasna",
    intro:
      "Vasna is one of Vadodara's older west-central neighborhoods, established well before the newer developments further out toward Gotri and Bhayli, with a settled residential character and a fair number of community halls. A baraat entry here has a comfortable, established feel to it.\n\nPlanMyBaraat runs baraat on wheels packages built to work in this kind of settled neighborhood: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Vasna's roads are a mix of moderately wide main stretches and narrower society lanes, comfortable for a truck setup in most cases. It connects easily to Gorwa and Ellora Park, and sits along the route toward the newer Gotri and Bhayli developments.\n\nWe've handled a good number of entries across Vasna's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Vasna that means knowing which streets and society entrances work best for a full truck versus a shorter walk-in led by the dhol team.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this established part of west Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Vasna entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nIf your venue is inside a residential society, let us know the entry point in advance. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Vasna, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Vasna, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck reach venues inside Vasna's residential societies?",
        a: "In most cases yes, though some society lanes are narrower. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Vasna wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Gorwa and Ellora Park too?",
        a: "Yes, we cover the broader west-central Vadodara pocket including Gorwa and Ellora Park. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-ellora-park": {
    slug: "vadodara-ellora-park",
    intro:
      "Ellora Park is a quieter, mostly residential pocket in west Vadodara, with a handful of community venues that host smaller, more intimate baraat entries. It's a good fit for families who want the full package — truck, dhol, car, and safa team — without needing the scale of a bigger corridor entry.\n\nPlanMyBaraat runs baraat on wheels packages that work well for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Ellora Park's roads are generally manageable for a truck setup, being a fairly settled residential pocket. It's close to Vasna and Gorwa, so guests coming from that broader west Vadodara area have an easy route in.\n\nWe've handled entries in Ellora Park's venue clusters and nearby residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a strong fit for Ellora Park's more intimate scale. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Ellora Park that means knowing the residential streets well enough to plan a smooth, well-timed entry, even in a quieter part of the city where the routes are less obvious than on a main corridor.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight regardless of neighborhood size.",
    pricingGuidance:
      "On how much does baraat cost for an Ellora Park entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often suits this area's more intimate scale well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this quieter part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Ellora Park, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Ellora Park, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Ellora Park good for a smaller, more intimate baraat entry?",
        a: "Yes, it's a quieter residential pocket, well suited to a more intimate entry with our Raj Tilak or Rajwada packages, though bigger packages work here too if you want a larger production.",
      },
      {
        q: "How early should I book for an Ellora Park wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Vasna and Gorwa too?",
        a: "Yes, we cover the broader west Vadodara pocket including Vasna and Gorwa. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-gendigate": {
    slug: "vadodara-gendigate",
    intro:
      "Gendigate is part of Vadodara's old city core, with narrow lanes and a genuinely traditional feel that newer suburbs don't have. A baraat entry through here is a different experience than one on a wide corridor like Old Padra Road — it's louder, closer, and the whole street feels part of the celebration.\n\nPlanMyBaraat runs baraat on wheels packages adapted for this kind of old-city setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with the truck configuration adjusted for narrower streets when needed.",
    localArea:
      "Gendigate's lanes are narrower than most of Vadodara's newer areas, so we typically plan for the truck to park at the nearest accessible point, with the dhol team and baraati group walking the final stretch — a common and effective approach in the old city.\n\nWe've handled a number of entries through this part of Vadodara and know exactly where the truck can get closest without causing access issues on the narrower lanes.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights — often the most practical choice for Gendigate's narrower streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, which we adjust carefully for tighter old-city spaces.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Gendigate specifically that means knowing exactly which lanes a truck can reach and where the walking portion of the entry needs to begin — planning that in advance instead of discovering it on the wedding day.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with old-city entries where the setup has to adapt to the space.",
    pricingGuidance:
      "On how much does baraat cost for a Gendigate entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often works best given the narrower streets. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, adapted for old-city access.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and it's especially useful for us to know your exact venue early so we can plan the truck's stopping point and the walking route in advance.\n\nA rough headcount for the baraati group helps us plan how much space the group needs for the walking portion of the entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Gendigate, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Gendigate, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can a double decker truck reach venues in Gendigate's old-city lanes?",
        a: "Not always all the way — we typically park the truck at the nearest accessible point and have the dhol team lead the final walking stretch, which is standard practice for old-city entries.",
      },
      {
        q: "How early should I book for a Gendigate wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, and earlier notice helps us plan the walking route properly.",
      },
      {
        q: "Does an old-city entry still include the full package?",
        a: "Yes, the truck, dhol, car, and safa team are all included — we just adapt where the truck parks and where the walking portion begins based on the lane width.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to narrower old-city streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-raopura": {
    slug: "vadodara-raopura",
    intro:
      "Raopura is one of Vadodara's oldest commercial neighborhoods, known for its jewelry market and dense, historic streets. A baraat entry through Raopura carries a certain weight — this is where generations of families have shopped for weddings, so walking a baraat through here connects to something bigger than just the procession itself.\n\nPlanMyBaraat runs baraat on wheels packages adapted for old-city settings like this: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with truck positioning planned around the narrower market streets.",
    localArea:
      "Raopura's lanes are narrow and often busy with market activity, so we plan the truck's stopping point carefully and typically have the group walk the final stretch with the dhol team leading. Evening timing matters here since the market area can still be active.\n\nWe've handled entries through Raopura before and know how to time things around the market's typical closing hours.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for Raopura's narrower streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, adapted for the market area's tighter spaces.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Raopura that means knowing the market's rhythm — when it's busiest, when it starts winding down — and planning your baraat's timing around that rather than fighting through peak market hours.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the specific logistics of an old-market entry.",
    pricingGuidance:
      "On how much does baraat cost for a Raopura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and works well for the narrower streets here. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and it helps us plan the timing around market hours in this area specifically.\n\nA rough headcount for the baraati group helps us plan the walking portion of the entry properly.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Raopura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Raopura, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck navigate Raopura's market streets?",
        a: "The truck typically parks at the nearest accessible point outside the busiest market lanes, with the dhol team leading a walking entry through the narrower streets.",
      },
      {
        q: "How early should I book for a Raopura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does market activity affect baraat timing in Raopura?",
        a: "It can, so we plan the entry timing around when the market typically winds down for the evening, to avoid the busiest hours.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to Raopura's narrower streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-mandvi": {
    slug: "vadodara-mandvi",
    intro:
      "Mandvi sits right at the heart of old Vadodara, near the historic clock tower, and it's one of the most iconic spots in the city for a baraat entry — the kind of location where the procession becomes part of the neighborhood's own history for a day. It's also one of the narrowest, busiest old-city stretches, so it takes real planning to get right.\n\nPlanMyBaraat runs baraat on wheels packages adapted for exactly this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with the truck route planned carefully around the old-city layout.",
    localArea:
      "Mandvi's streets near the clock tower are narrow and dense, so a full-size truck typically can't get all the way to the venue — we plan a stopping point nearby and have the dhol team and baraati group walk the rest of the way, which is standard for this part of the city and often makes for a more memorable entry.\n\nWe've handled entries through Mandvi and the surrounding old-city lanes, and know the walking routes that work best.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical and traditional choice for a Mandvi entry. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, carefully adapted for the old city's tighter spaces.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car — which we position for photos near the accessible stretch — and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and Mandvi is one of the old-city locations we know best — exactly where the truck can safely stop, and how to route the walking portion so the dhol team and baraati group have room to move.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and have handled plenty of entries through Vadodara's historic core.",
    pricingGuidance:
      "On how much does baraat cost for a Mandvi entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and suits the old-city walking format well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, adapted for the historic core.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3-4 weeks' notice during peak season is a safe bet, since planning the walking route for a Mandvi entry takes a bit more coordination than a standard road entry.\n\nA rough headcount for the baraati group helps us plan how much space the group needs for the walking portion.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Mandvi, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Mandvi, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can a double decker truck reach the Mandvi clock tower area?",
        a: "Not all the way — we park the truck at the nearest accessible point and route the dhol team and baraati group on foot through the historic lanes, which is standard for this part of the city.",
      },
      {
        q: "How early should I book for a Mandvi wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given the extra route planning a Mandvi entry needs.",
      },
      {
        q: "Is a walking entry through the old city still a full baraat experience?",
        a: "Yes — the truck, dhol, car, and safa team are all part of it, we just adjust where each element is positioned given the narrower historic streets.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to the old-city walking format. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-panigate": {
    slug: "vadodara-panigate",
    intro:
      "Panigate takes its name from one of Vadodara's historic city gates, and the neighborhood around it is still dense with older housing and community halls tucked into residential lanes. A baraat entry here is a genuinely neighborhood affair — narrower streets mean the whole block tends to notice when a procession comes through.\n\nPlanMyBaraat runs baraat on wheels packages adapted for this kind of old-city residential setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with the route planned around the area's narrower lanes.",
    localArea:
      "Panigate's lanes are tighter than Vadodara's newer suburbs, similar in character to nearby Gendigate and Salatwada, so we typically plan for the truck to stop at the closest accessible point with the dhol team leading the final stretch on foot.\n\nWe've handled entries through this part of the old city and know which lanes work for foot traffic and where the truck has the best access.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for Panigate's narrower streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, adapted carefully for tighter old-city spaces.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Panigate that means knowing exactly where the truck can park closest to your venue and how to route the walking portion so the dhol team has room to perform properly.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are used to adapting the setup for Vadodara's older residential lanes.",
    pricingGuidance:
      "On how much does baraat cost for a Panigate entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and works well given the narrower streets. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and knowing your exact venue early helps us plan the walking route properly.\n\nA rough headcount for the baraati group helps us plan how much space the group needs for the walking portion of the entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Panigate, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Panigate, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck reach venues in Panigate's residential lanes?",
        a: "Not always all the way — we park at the nearest accessible point and have the dhol team lead the group on foot for the final stretch, which is standard for this part of the old city.",
      },
      {
        q: "How early should I book for a Panigate wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Is Panigate close to other old-city areas like Gendigate?",
        a: "Yes, it's part of the same historic core as Gendigate and Salatwada, and we handle entries across this whole pocket regularly.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to Panigate's narrower lanes. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-salatwada": {
    slug: "vadodara-salatwada",
    intro:
      "Salatwada sits close to Sursagar Lake, right in the heart of old Vadodara, with a mix of commercial activity and residential lanes that have hosted weddings for generations. A baraat entry near the lake has a certain charm to it — open water on one side, dense old-city streets on the other.\n\nPlanMyBaraat runs baraat on wheels packages adapted for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with the route planned around both the lakeside stretch and the narrower lanes further in.",
    localArea:
      "The road along Sursagar Lake itself is reasonably open, but the lanes further into Salatwada narrow quickly, similar to nearby Panigate and Gendigate. We plan the truck's route to make the most of the lakeside stretch before switching to a walking approach if your venue is deeper into the old city.\n\nWe've handled entries in this part of Vadodara and know how to sequence the truck and walking portions for the best effect near the lake.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up, which looks striking along the open lakeside stretch. Signature, the top package, adds a security team plus pyro and confetti effects, positioned carefully depending on how close your venue is to the lake versus the narrower inner lanes.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car — a great photo opportunity near Sursagar — and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Salatwada that means knowing exactly how far the truck can go along the lakeside road before the streets narrow, and planning the most scenic and practical route for your specific venue.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with this mix of open lakeside road and tighter old-city lanes.",
    pricingGuidance:
      "On how much does baraat cost for a Salatwada entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and telling us your exact venue helps us plan whether the entry stays along the open lakeside road or needs a walking portion further in.\n\nA rough headcount for the baraati group also helps with planning the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Salatwada, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Salatwada, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck go all the way along Sursagar Lake?",
        a: "The lakeside stretch itself is reasonably open, but lanes further into Salatwada narrow quickly. We plan the route based on exactly where your venue is.",
      },
      {
        q: "How early should I book for a Salatwada wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does a lakeside baraat entry cost more?",
        a: "Not necessarily — pricing is based on the package and effects you choose, not the specific route, though we do factor in whether a walking portion is needed.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car — a nice option for photos near the lake.",
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

  "vadodara-kirti-mandir-road": {
    slug: "vadodara-kirti-mandir-road",
    intro:
      "Kirti Mandir Road takes its name from the royal cenotaph nearby, and it sits at something of a crossing point between Vadodara's old city and its more modern central areas. A baraat entry along this stretch gets some of both worlds — a bit of history in the surroundings, but roads wide enough for a proper truck setup.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of in-between location: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Kirti Mandir Road itself is wider than the deep old-city lanes nearby, making it more manageable for a full truck setup than areas like Mandvi or Panigate. It connects central Vadodara to the older parts of the city, so it's a useful route for guests coming from either direction.\n\nWe've handled entries along this stretch and in the surrounding pockets, and know the timing that works best given how central this location is.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group — a fitting touch given the heritage character of this part of the city.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Kirti Mandir Road that means knowing how to use the wider stretch here effectively while still being ready to adapt if your venue is a bit further into the older lanes nearby.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with this kind of transitional area between old and new Vadodara.",
    pricingGuidance:
      "On how much does baraat cost along Kirti Mandir Road: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and letting us know your exact venue helps us confirm whether the entry stays on the main road or needs to adapt for narrower lanes nearby.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Kirti Mandir Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Kirti Mandir Road?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is this road wide enough for a full truck entry?",
        a: "Yes, it's generally wider than the deep old-city lanes nearby, making truck access more straightforward than areas like Mandvi.",
      },
      {
        q: "How early should I book for a wedding near Kirti Mandir Road?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does this location connect well to both old and new Vadodara?",
        a: "Yes, it sits between the historic core and the more modern central areas, making it a convenient route for guests from either direction.",
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

  "vadodara-jetalpur-road": {
    slug: "vadodara-jetalpur-road",
    intro:
      "Jetalpur Road runs through south Vadodara, a mostly residential stretch with a handful of banquet halls that have become popular for their easy access and reasonable rates. A baraat entry here tends to be a straightforward, well-organized affair, without the crowding of the busier central corridors.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Jetalpur Road is reasonably wide for most of its length, making truck access straightforward for the venues along it. It connects to Manjalpur and Vadsar, so guests from that broader south Vadodara pocket have an easy route in.\n\nWe've handled a good number of entries along Jetalpur Road and the connecting residential lanes.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Jetalpur Road that means knowing the connecting routes to Manjalpur and Vadsar well, which helps when guests are spread across that broader south Vadodara pocket.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Jetalpur Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for venues along this stretch.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Jetalpur Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Jetalpur Road, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Jetalpur Road good for a full truck entry?",
        a: "Yes, it's reasonably wide for most of its length, making truck access straightforward for the venues along it.",
      },
      {
        q: "How early should I book for a Jetalpur Road wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Manjalpur and Vadsar too?",
        a: "Yes, we cover the broader south Vadodara pocket including Manjalpur and Vadsar. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-genda-circle": {
    slug: "vadodara-genda-circle",
    intro:
      "Genda Circle is a well-known central junction in Vadodara, and venues around it draw guests from across the city given how easy the location is to find. A baraat entry near the circle gets noticed, simply because of how much regular traffic passes through this part of town.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that central visibility: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "The roads around Genda Circle are generally well-maintained, though the junction itself sees regular traffic, so we plan the truck's timing carefully around that. It's centrally positioned, making it convenient for guests coming from most parts of Vadodara.\n\nWe've run entries through this area and know the timing that works best to avoid the circle's busiest periods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — visible to a good amount of passing traffic given the central location. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for an area as central as Genda Circle that means knowing when the regular traffic peaks are, so we time your baraat's arrival to avoid getting stuck at the junction.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries through busy, central parts of the city.",
    pricingGuidance:
      "On how much does baraat cost near Genda Circle: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Given how central this location is, we'd suggest booking your baraat entry at least 3 weeks ahead during peak season.\n\nSince the circle gets regular traffic, let us know your venue's exact access point so we can plan the truck's approach to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Genda Circle, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Genda Circle?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry near Genda Circle?",
        a: "It can get busy with regular traffic, so we plan the truck's timing carefully to avoid the junction's peak periods.",
      },
      {
        q: "How early should I book for a wedding near Genda Circle?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how central and popular this location is.",
      },
      {
        q: "Is Genda Circle convenient for guests from across Vadodara?",
        a: "Yes, its central position makes it easy to reach for guests coming from most parts of the city.",
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

  "vadodara-vadsar": {
    slug: "vadodara-vadsar",
    intro:
      "Vadsar is a growing residential pocket in south Vadodara, with newer housing developments and a handful of venues that have opened as the area's expanded. A baraat entry here tends to have a straightforward, uncrowded feel compared to the busier central corridors.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Vadsar's roads are generally manageable for a full truck setup, being a newer residential development. It's close to Jetalpur Road and Manjalpur, so guests from that broader south Vadodara pocket have an easy route in.\n\nWe've handled entries across Vadsar's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Vadsar that means staying current on the newer venues opening as the area develops, and planning routes that work with the residential layout here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this part of south Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Vadsar entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this growing part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Vadsar, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Vadsar, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Vadsar's roads good for a truck entry?",
        a: "Yes, since this is a newer residential development, roads are generally manageable for a full truck setup.",
      },
      {
        q: "How early should I book for a Vadsar wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Jetalpur Road and Manjalpur too?",
        a: "Yes, we cover the broader south Vadodara pocket including Jetalpur Road and Manjalpur. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-sunpharma-road": {
    slug: "vadodara-sunpharma-road",
    intro:
      "Sunpharma Road runs through east Vadodara, named for the pharmaceutical plant nearby, and while the area has an industrial edge, the residential pockets along it host a fair number of weddings. A baraat entry here usually has decent open road to work with, similar to other industrial-adjacent corridors in Vadodara.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Sunpharma Road is generally wide, given the industrial development in the area, making truck access straightforward. Most wedding venues are in the residential pockets rather than close to the plant itself.\n\nWe've handled entries along this stretch and the connecting eastern Vadodara neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sunpharma Road that means knowing which stretches are residential versus industrial, and planning weekend entries around any weekday plant traffic.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of east Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Sunpharma Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is closer to the residential or industrial side of the road.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Sunpharma Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Sunpharma Road, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Sunpharma Road good for a full-size truck entry?",
        a: "Yes, roads here are generally wide given the industrial development, making truck access straightforward for most residential venues.",
      },
      {
        q: "How early should I book for a Sunpharma Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you plan around industrial traffic near the plant?",
        a: "Yes, weekend entries are usually smoother, and we plan timing to avoid any weekday traffic tied to the plant.",
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

  "vadodara-kalali": {
    slug: "vadodara-kalali",
    intro:
      "Kalali sits in south Vadodara, a quieter residential pocket that's grown steadily over the years, with a handful of local venues that host smaller, community-style baraat entries. It's a good fit for families who want the full setup without the scale of a bigger corridor entry.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Kalali's roads are generally manageable for a truck setup, being a settled residential area. It's close to Undera and the broader southern belt of Vadodara, so guests from that side of the city have an easy route in.\n\nWe've handled entries in Kalali's venue clusters and nearby residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a strong fit for Kalali's more intimate scale. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Kalali that means knowing the residential streets well enough to plan a smooth, well-timed entry in this quieter part of the city.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight regardless of neighborhood size.",
    pricingGuidance:
      "On how much does baraat cost for a Kalali entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often suits this area's scale well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2 weeks' notice during peak season is usually enough for this quieter part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Kalali, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Kalali, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Kalali good for a smaller, more intimate baraat entry?",
        a: "Yes, it's a quieter residential pocket, well suited to a more intimate entry, though bigger packages work here too if you want a larger production.",
      },
      {
        q: "How early should I book for a Kalali wedding?",
        a: "2 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Undera too?",
        a: "Yes, we cover the broader southern Vadodara belt including Undera. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-undera": {
    slug: "vadodara-undera",
    intro:
      "Undera sits at the southern edge of Vadodara, more semi-rural in character than the city's core neighborhoods, with open roads and a handful of venues that suit bigger, more spread-out baraat entries. If your family wants an entry with genuine room to move, Undera has that space.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that openness: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Undera's roads are open and rural in character compared to the rest of Vadodara, which makes truck access very straightforward, though it's a bit further from the central city, so factor in a slightly longer route for guests coming from areas like Alkapuri or Sayajigunj.\n\nWe've handled entries in Undera and the surrounding semi-rural venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — very visible given how much open space this area has. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to bigger, more elaborate entries.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Undera that means being ready to make the most of the open roads here for a bigger, more visible entry than what's practical in Vadodara's denser neighborhoods.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the longer routes and open-road setups common in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for an Undera entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how spread out this area is.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Undera, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Undera, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Undera far from central Vadodara?",
        a: "It's at the southern edge of the city, more semi-rural in character, so factor in a slightly longer route for guests coming from central areas.",
      },
      {
        q: "How early should I book for an Undera wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are Undera's roads good for a bigger baraat entry?",
        a: "Yes, the open, semi-rural layout gives plenty of room for a bigger, more elaborate procession.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Undera's open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "vadodara-new-sama-road": {
    slug: "vadodara-new-sama-road",
    intro:
      "New Sama Road is a newer stretch within Vadodara's broader Sama development, with wide roads and venues that have opened more recently than the older parts of the neighborhood. A baraat entry here benefits from the same open, well-planned layout that's made the wider Sama area popular for weddings.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "New Sama Road is wide and straightforward for a full truck setup, similar to the rest of the Sama corridor. It connects easily to Subhanpura and Gotri, so guests from that broader western pocket have an easy route in.\n\nWe've handled entries at venues along this specific stretch and the surrounding newer developments.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for New Sama Road that means staying current on the newer venues opening along this stretch as the area keeps developing.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the open-road entries this part of the city allows for.",
    pricingGuidance:
      "On how much does baraat cost for a New Sama Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, since this corridor has become popular for newer venues.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on New Sama Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on New Sama Road, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is New Sama Road different from the main Sama area?",
        a: "It's a newer stretch within the broader Sama development, with venues that opened more recently. The road layout is similarly wide and truck-friendly.",
      },
      {
        q: "How early should I book for a New Sama Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues connecting to Subhanpura and Gotri?",
        a: "Yes, we cover the broader western Vadodara pocket including Subhanpura and Gotri. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-ajwa-road": {
    slug: "vadodara-ajwa-road",
    intro:
      "Ajwa Road runs north out of Vadodara toward Ajwa Lake, a popular recreational spot for the city, and the stretch closer to town has a good number of residential pockets and event venues. A baraat entry along this road often has open space to work with, especially compared to the older central neighborhoods.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Ajwa Road is generally wide, especially the stretch closer to the city, making truck access straightforward. It connects to Chhani and the northern parts of Vadodara, so guests from that side of the city have an easy route in.\n\nWe've handled entries along Ajwa Road and the surrounding neighborhoods, and if your venue is further out toward the lake itself, just flag it when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Ajwa Road that means knowing the stretch well from the city side out toward the lake, so we can plan the right route whether your venue is close to town or further north.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries along this corridor.",
    pricingGuidance:
      "On how much does baraat cost for an Ajwa Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how far this road stretches.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Ajwa Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Ajwa Road, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover venues near Ajwa Lake as well as closer to the city?",
        a: "Yes, we cover the full corridor. Tell us your exact venue and we'll confirm the route, whether it's closer to town or further out toward the lake.",
      },
      {
        q: "How early should I book for an Ajwa Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Is Ajwa Road good for a full truck entry?",
        a: "Yes, especially the stretch closer to the city, which is generally wide and straightforward for a double decker truck.",
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

  "vadodara-chhani-jakatnaka": {
    slug: "vadodara-chhani-jakatnaka",
    intro:
      "Chhani Jakatnaka sits at the edge of the Chhani area, historically a toll-checkpoint location, and it's grown into a busier junction pocket with its own mix of residential and small commercial venues. A baraat entry here has a bit of everything — decent road width, but also a fair amount of regular traffic to plan around.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "The main roads through Chhani Jakatnaka are reasonably wide, though the junction area itself can get busy at peak times. It connects to the rest of Chhani and out toward Ajwa Road, so we're familiar with how the routes link up across this part of north Vadodara.\n\nWe've handled entries in this area and know the timing that works best to avoid the junction's busier periods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Chhani Jakatnaka that means knowing when the junction gets busiest, so we plan your baraat's timing to avoid getting stuck at the checkpoint area.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of north Vadodara.",
    pricingGuidance:
      "On how much does baraat cost for a Chhani Jakatnaka entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nSince the junction area gets regular traffic, let us know your venue's exact access point so we can plan the truck's approach to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Chhani Jakatnaka, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Chhani Jakatnaka?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry near the junction?",
        a: "It can get busy at peak times, so we plan the truck's timing carefully to avoid the junction's busiest periods and reach your venue smoothly.",
      },
      {
        q: "How early should I book for a wedding near Chhani Jakatnaka?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover the rest of Chhani and Ajwa Road too?",
        a: "Yes, we cover the connecting areas including the rest of Chhani and out toward Ajwa Road. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-vaghodia-gidc-belt": {
    slug: "vadodara-vaghodia-gidc-belt",
    intro:
      "The Vaghodia GIDC belt sits further out along Waghodia Road, a mostly industrial stretch, but the residential pockets on its edges still host a fair number of weddings, particularly for families connected to the businesses in the area. A baraat entry here tends to have wide, open roads to work with.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Roads through the GIDC belt are wide, built for industrial traffic, which actually works well for a full truck setup, though weekday traffic can be heavier than in purely residential areas. Most wedding venues here are on the residential fringes rather than inside the industrial zone itself.\n\nWe've handled entries in this belt before and know how to plan around any weekday industrial traffic for a smooth weekend entry.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for the Vaghodia GIDC belt that means knowing exactly where the residential venues sit relative to the industrial zone, and planning routes and timing that avoid any unnecessary detours through the busier industrial stretches.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Vaghodia GIDC belt entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and weekend entries here are usually smoother than weekday ones given the industrial traffic.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how spread out this belt is.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in the Vaghodia GIDC belt, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in the Vaghodia GIDC belt?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is this area good for a full-size truck entry?",
        a: "Yes, the roads are wide, built for industrial traffic, which works well for a large truck setup, though weekend entries avoid the busier weekday traffic.",
      },
      {
        q: "How early should I book for a wedding in this belt?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Are wedding venues inside the industrial zone or on its edges?",
        a: "Almost always on the residential fringes rather than inside the industrial zone itself. Tell us your exact venue and we'll plan the route accordingly.",
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

  "vadodara-atladra": {
    slug: "vadodara-atladra",
    intro:
      "Atladra sits in east Vadodara, a settled residential neighborhood with a handful of community halls that host regular local weddings. A baraat entry here has that same neighborhood feel found in other established residential pockets of the city — familiar, straightforward, and genuinely local.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Atladra's roads are generally manageable for a full truck setup, being an established residential area. It connects to the Waghodia Road corridor and Sunpharma Road, so guests from that eastern pocket of the city have an easy route in.\n\nWe've handled entries across Atladra's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Atladra that means knowing the connecting routes to Waghodia Road and Sunpharma Road well, which helps when guests are spread across that broader eastern pocket.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for an Atladra entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Atladra, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Atladra, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Atladra's roads good for a truck entry?",
        a: "Yes, this is an established residential area with generally manageable roads for a full truck setup.",
      },
      {
        q: "How early should I book for an Atladra wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Waghodia Road and Sunpharma Road too?",
        a: "Yes, we cover the broader eastern Vadodara pocket including Waghodia Road and Sunpharma Road. Tell us your exact venue and we'll confirm the route.",
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

  "vadodara-bill": {
    slug: "vadodara-bill",
    intro:
      "Bill is a smaller outskirt neighborhood on Vadodara's edge, quieter than the city's core, with open roads and a more relaxed pace. A baraat entry here has a comfortable, unhurried feel compared to the busier central corridors, with plenty of room for the truck and dhol team to work.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Bill's roads are open and generally uncrowded, being on the outskirts of the city, which makes truck access very straightforward. It's a bit further from central Vadodara, so factor in a slightly longer route for guests coming from areas like Alkapuri or Sayajigunj.\n\nWe've handled entries in Bill and the surrounding outskirt venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for an outskirt area like Bill that means planning routes and timing that account for the extra distance from central Vadodara, so nothing runs late on the day.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the longer routes that outskirt entries sometimes need.",
    pricingGuidance:
      "On how much does baraat cost for a Bill entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this outskirt area.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given the distance from central Vadodara.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Bill, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bill, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Bill far from central Vadodara?",
        a: "It's on the outskirts, so factor in a slightly longer route for guests coming from central areas like Alkapuri or Sayajigunj.",
      },
      {
        q: "How early should I book for a Bill wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are the roads good for a full truck entry in Bill?",
        a: "Yes, being on the outskirts, roads here are generally open and uncrowded, making truck access very straightforward.",
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

  "vadodara-sherkhi": {
    slug: "vadodara-sherkhi",
    intro:
      "Sherkhi is another of Vadodara's outer neighborhoods, quiet and open, similar in character to nearby Bill. Families here often choose it precisely for that relaxed pace, and a baraat entry has plenty of room to be as grand as the occasion calls for.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Sherkhi's roads are open and uncrowded, being on Vadodara's outer edge, which makes truck access straightforward. It's a bit further out from the central city, so factor in a slightly longer route if guests are coming from Alkapuri or Sayajigunj.\n\nWe've handled entries in Sherkhi and the surrounding outskirt venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sherkhi that means planning routes and timing that account for the distance from central Vadodara, keeping the whole schedule on track despite the longer drive.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with outskirt entries like this one.",
    pricingGuidance:
      "On how much does baraat cost for a Sherkhi entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this outskirt area.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given the distance involved.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Sherkhi, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Sherkhi, Vadodara?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Sherkhi far from central Vadodara?",
        a: "It's on the outer edge of the city, so factor in a slightly longer route for guests coming from central areas.",
      },
      {
        q: "How early should I book for a Sherkhi wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are the roads good for a full truck entry in Sherkhi?",
        a: "Yes, being on the outskirts, roads here are generally open and uncrowded, making truck access very straightforward.",
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

  "surat-vesu": {
    slug: "surat-vesu",
    intro:
      "Vesu is Surat's premier wedding neighborhood — wide roads, some of the city's biggest banquet halls, and enough scale that a baraat entry here needs to be genuinely impressive to stand out. On a peak-season weekend, it's common to see multiple grand baraat entries happening within the same few blocks.\n\nPlanMyBaraat runs baraat on wheels packages built for that level of competition: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, so your entry gets the attention it deserves.",
    localArea:
      "Vesu's roads are wide and well-planned, among the easiest in Surat for a full truck setup. Parking near the bigger halls can still fill up fast on weekend evenings, so we scope the exact venue and plan the truck's position in advance.\n\nIt connects easily to Adajan and Vesu-Bharthana, so if your guests are spread across that broader western Surat pocket, our team already knows the routes.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — this shows up especially well on Vesu's wide roads and against its bigger venues. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, built for the scale of weddings this area typically hosts.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and Vesu is one of the areas we work most often — we know exactly how each major hall handles truck access and parking, and we plan around it instead of guessing.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the bigger, more competitive entries common in this part of Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Vesu entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits the bigger crowds common in Vesu.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Vesu is one of the most booked areas in Surat during that time. We'd strongly recommend locking in your baraat entry at least 4 weeks ahead if your date falls in peak season, since both venues and our truck calendar fill up fast here.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how many bigger, more elaborate entries happen in this part of the city.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Vesu, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Vesu, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Why is Vesu so popular for baraat entries?",
        a: "It has some of Surat's biggest, newest banquet halls and wide roads, giving plenty of room for a large truck, dhol team, and crowd — a strong fit for a grand entry.",
      },
      {
        q: "How early should I book for a Vesu wedding?",
        a: "At least 4 weeks ahead during wedding season (November to February) — this is one of the most booked areas in Surat, both for venues and for our truck calendar.",
      },
      {
        q: "Will there be other baraats in Vesu on my wedding date?",
        a: "It's likely, especially on Saturday evenings during peak season. We plan your entry's timing and positioning to make sure it still stands out.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Vesu's bigger weddings.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-adajan": {
    slug: "surat-adajan",
    intro:
      "Adajan sits along the Tapi river, one of Surat's most established upscale neighborhoods, with a strong mix of residential societies and popular banquet halls. A grand baraat entry here has both the scale of a bigger corridor and the settled, familiar feel of an established neighborhood.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Adajan's main roads are wide and well-maintained, making truck access straightforward for most venues. It connects easily to Vesu and Adajan Patiya, and some venues sit close enough to the Tapi riverfront to make for a scenic entry.\n\nWe've handled a large number of entries in Adajan and know the timing and positioning that works best for the area's popular halls.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to the scale of weddings common here.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and Adajan is one of the neighborhoods we work most regularly — we know how each major venue handles truck access and parking, and plan around it in advance.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the bigger, more competitive entries common in this part of Surat.",
    pricingGuidance:
      "On how much does baraat cost for an Adajan entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Adajan's popular halls get booked out early during that window. We'd recommend locking in your baraat entry at least 4 weeks ahead if your date falls in peak season.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how many bigger entries happen in this part of the city.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Adajan, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Adajan, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Adajan good for a bigger baraat entry?",
        a: "Yes, the roads are wide and well-maintained, and the area has some of Surat's most popular banquet halls, giving plenty of room for a bigger production.",
      },
      {
        q: "How early should I book for an Adajan wedding?",
        a: "At least 4 weeks ahead during wedding season (November to February), since this is one of the most in-demand areas in Surat.",
      },
      {
        q: "Do you cover venues near the Tapi riverfront?",
        a: "Yes, some Adajan venues are close enough to the riverfront for a scenic entry. Tell us your exact venue and we'll confirm the route.",
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

  "surat-city-light": {
    slug: "surat-city-light",
    intro:
      "City Light is one of Surat's best-known commercial and residential hubs, named after the area's landmark road, and it draws a mix of upscale halls and society venues. A baraat entry here gets noticed simply because of how much foot and vehicle traffic passes through on any given evening.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that visibility: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "City Light's main roads are wide, though the commercial density means more regular traffic than some purely residential pockets. It connects easily to Piplod and Athwalines, so guests from that broader central-west Surat pocket have an easy route in.\n\nWe've run a good number of entries through City Light and know the timing that works best to avoid the area's busier commercial hours.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — visible to plenty of passing traffic given how commercial this area is. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for City Light that means knowing when the commercial traffic peaks are, so we can time your baraat's arrival to avoid getting stuck en route to the venue.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries through busy, central parts of Surat like this one.",
    pricingGuidance:
      "On how much does baraat cost for a City Light entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. We'd suggest booking your baraat entry at least 3-4 weeks ahead during peak season given how popular this area is.\n\nGiven the commercial traffic, let us know your venue's exact access point so we can plan the truck's timing to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in City Light, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in City Light, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry in City Light?",
        a: "It can get busy given how commercial the area is. We plan the truck's timing to avoid the worst of it and reach your venue on schedule.",
      },
      {
        q: "How early should I book for a City Light wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this area is.",
      },
      {
        q: "Do you cover venues near Piplod and Athwalines too?",
        a: "Yes, we cover the broader central-west Surat pocket including Piplod and Athwalines. Tell us your exact venue and we'll confirm the route.",
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

  "surat-piplod": {
    slug: "surat-piplod",
    intro:
      "Piplod sits close to City Light, another of Surat's upscale, well-connected neighborhoods, with a good mix of banquet halls and society venues. A baraat entry here benefits from wide roads and a genuinely central location that most guests can reach easily.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Piplod's roads are generally wide, making truck access straightforward for most venues. It connects easily to City Light and Athwalines, so guests from that broader central Surat pocket have an easy route in.\n\nWe've handled a good number of entries in Piplod's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Piplod that means knowing the connecting routes to City Light and Athwalines well, which helps when guests are spread across that central Surat pocket.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Piplod entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3-4 weeks' notice during peak season is a safe bet given how popular this central pocket is.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Piplod, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Piplod, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Piplod's roads good for a truck entry?",
        a: "Yes, they're generally wide, making truck access straightforward for most venues in the area.",
      },
      {
        q: "How early should I book for a Piplod wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this pocket is.",
      },
      {
        q: "Do you cover venues near City Light and Athwalines too?",
        a: "Yes, we cover the broader central Surat pocket including City Light and Athwalines. Tell us your exact venue and we'll confirm the route.",
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

  "surat-athwalines": {
    slug: "surat-athwalines",
    intro:
      "Athwalines is one of Surat's older, more established neighborhoods, central and dense, with a mix of residential buildings and long-running community halls. A baraat entry here has a genuinely local character, closer in feel to Vadodara's Alkapuri than to Surat's newer western suburbs.\n\nPlanMyBaraat runs baraat on wheels packages adapted for this kind of busier, more established setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Athwalines' roads are busier and a bit narrower than City Light or Vesu, given how central and established this neighborhood is. Parking near venues can be tighter, so we scope the exact route and stopping point in advance.\n\nIt's centrally located, connecting easily to Ghod Dod Road and Nanpura, making it convenient for guests coming from across the city even with busier immediate streets.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a solid fit for Athwalines' busier, more central streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, useful given how much foot traffic this area gets in the evening.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Athwalines that means knowing which streets can take a full-size truck and where we need to plan a shorter final stretch on foot with the dhol team leading.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and several have handled entries in this exact part of Surat before.",
    pricingGuidance:
      "On how much does baraat cost for an Athwalines entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often works well here given the tighter street layout. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. We'd recommend locking in your baraat entry at least 3 weeks ahead if your date falls in peak season, since this central neighborhood books up alongside the rest of Surat's busy season.\n\nGiven the tighter parking, let us know your venue's exact access point so we can plan the truck's position in advance. A rough headcount for the baraati group also helps.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Athwalines, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Athwalines, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can a double decker truck reach venues in Athwalines?",
        a: "In most cases yes, though some streets are narrower than Surat's newer suburbs. We check your exact venue in advance and plan the truck's stopping point accordingly.",
      },
      {
        q: "How early should I book for an Athwalines wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, since this central neighborhood is one of Surat's busiest.",
      },
      {
        q: "Is parking a problem for the DJ truck near Athwalines venues?",
        a: "It can be tighter than newer parts of the city. Let us know your venue's exact access point and we'll plan the truck's position accordingly.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Athwalines' narrower streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-ghod-dod-road": {
    slug: "surat-ghod-dod-road",
    intro:
      "Ghod Dod Road is one of Surat's busiest commercial arteries, lined with shops, offices, and a number of wedding halls that have hosted baraat entries for years. It's a high-visibility spot — a lot of people will see your entry, simply because of how much traffic this road carries.\n\nPlanMyBaraat runs baraat on wheels packages built to work with that kind of busy commercial corridor: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Ghod Dod Road is busy through most of the evening given the commercial activity, so parking near venues can be tighter than in the newer western suburbs. We scout the exact route and plan the truck's stopping point in advance to avoid delays.\n\nIt connects easily to Athwalines and Nanpura, making it convenient for guests coming from across central Surat.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, which works well given this road's busier, narrower stretches in parts. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, useful given the amount of foot traffic on this road.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Ghod Dod Road that means knowing which stretches get busiest in the evening, and timing your entry to avoid getting stuck en route to the venue.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and are used to navigating Surat's busier commercial corridors without losing time.",
    pricingGuidance:
      "On how much does baraat cost for a Ghod Dod Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. We'd suggest locking in your baraat entry at least 3 weeks ahead during peak season, since venues on this busy corridor book up alongside the rest of Surat's season.\n\nGiven how busy the road gets, let us know your venue's exact access point so we can plan the truck's timing to avoid traffic. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Ghod Dod Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Ghod Dod Road, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry on Ghod Dod Road?",
        a: "It can get busy in the evening given the commercial activity. We plan the truck's timing and route to avoid the worst of it and reach your venue on schedule.",
      },
      {
        q: "How early should I book for a Ghod Dod Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Is parking tight for venues on this road?",
        a: "It can be, given how commercial and busy the area is. Let us know your venue's exact access point so we can plan the truck's stopping position in advance.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for this road's busier stretches. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-varachha": {
    slug: "surat-varachha",
    intro:
      "Varachha is one of Surat's most densely populated neighborhoods, home to a huge number of diamond-cutting and textile workers, and weddings here happen close together on the calendar during peak season. A baraat entry needs to be planned carefully given how much activity this part of the city sees on any given evening.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Varachha's streets are dense and can get busy, especially in the evening when the diamond and textile workshops let out. Some societies here have earlier noise timing preferences than newer parts of Surat, so we factor that into the plan.\n\nWe've handled a large number of entries in Varachha and know which streets and timing windows work best for this densely populated part of the city.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for Varachha's busier streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, which we can time to fit within the area's typical evening windows.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Varachha that means knowing when the streets are busiest with workshop traffic, and which societies prefer music to wrap up earlier in the evening.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the specific timing needs of this densely populated neighborhood.",
    pricingGuidance:
      "On how much does baraat cost for a Varachha entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Varachha sees a huge volume of weddings during that window given the population density. We'd recommend booking your baraat entry at least 3-4 weeks ahead during peak season.\n\nIf your society has an evening noise preference, let us know the cutoff time and we'll plan the dhol and any pyro or confetti to finish before then. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Varachha, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Varachha, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Does Varachha get very busy during wedding season?",
        a: "Yes, given how densely populated it is, this area sees a huge number of weddings during peak season. Booking early is especially important here.",
      },
      {
        q: "How early should I book for a Varachha wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how much demand this area sees.",
      },
      {
        q: "Are there noise timing preferences in Varachha societies?",
        a: "Some societies here prefer music to wrap up earlier in the evening. Tell us the cutoff time and we'll plan the dhol and any effects to finish before then.",
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

  "surat-katargam": {
    slug: "surat-katargam",
    intro:
      "Katargam is another of Surat's busy northern neighborhoods, closely tied to the city's textile and diamond industries, with dense housing and a steady stream of weddings during peak season. A baraat entry here happens against a genuinely lively neighborhood backdrop.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Katargam's streets can get busy, especially around the Katargam Ring Road stretch, and some residential lanes are narrower than Surat's newer western suburbs. We plan the truck's route and timing carefully for this part of the city.\n\nWe've handled a good number of entries in Katargam and know which streets and timing windows work best.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for Katargam's busier streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, timed carefully for this part of the city.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Katargam that means knowing which streets get busiest and planning around the area's evening rhythms tied to the textile and diamond trades.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries in this densely populated part of Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Katargam entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Katargam sees a lot of wedding activity during that window. We'd recommend booking your baraat entry at least 3 weeks ahead during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is near the Ring Road or deeper into the residential lanes.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Katargam, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Katargam, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover both Katargam and the Katargam Ring Road area?",
        a: "Yes, we cover the whole Katargam pocket including the Ring Road stretch. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "How early should I book for a Katargam wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how much wedding activity this area sees.",
      },
      {
        q: "Are Katargam's streets good for a full-size truck?",
        a: "Some residential lanes are narrower than newer parts of Surat, so we plan the truck's route carefully based on your exact venue.",
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

  "surat-pal": {
    slug: "surat-pal",
    intro:
      "Pal is one of Surat's newer, more upscale neighborhoods, close to Adajan, with wide roads and a growing number of banquet halls and lawns. A grand baraat entry here has plenty of room to be as elaborate as the family wants.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Pal's roads are wide and well-planned, making truck access straightforward for most venues. It connects easily to Adajan and Adajan Patiya, so guests from that broader western Surat pocket have an easy route in.\n\nWe've handled a good number of entries in Pal's newer venue clusters.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — this reads especially well on Pal's wider roads. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a fast-growing area like Pal that means staying current on new venues as they open, and planning routes that make full use of the wider roads here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the bigger, more open entries Pal's layout allows for.",
    pricingGuidance:
      "On how much does baraat cost for a Pal entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Pal's popularity as a newer venue hub means booking 3-4 weeks ahead during peak season is a safe bet.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how much room this area allows for a bigger entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Pal, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Pal, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Pal's roads good for a bigger baraat entry?",
        a: "Yes, since this is a newer part of Surat, the roads are wide and well-planned, giving good room for a bigger, more elaborate procession.",
      },
      {
        q: "How early should I book for a Pal wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this area has become.",
      },
      {
        q: "Do you cover venues near Adajan and Adajan Patiya too?",
        a: "Yes, we cover the broader western Surat pocket including Adajan and Adajan Patiya. Tell us your exact venue and we'll confirm the route.",
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

  "surat-dumas-road": {
    slug: "surat-dumas-road",
    intro:
      "Dumas Road runs out toward Surat's well-known Dumas Beach, and the venues along this stretch benefit from a more open, scenic setting than the denser parts of the city. A grand baraat entry here has that seaside-adjacent feel, with wide roads for most of the way.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Dumas Road is generally wide and straightforward for a full truck setup, especially the stretch closer to the city. It connects to Athwalines and Bhatar, so guests from that broader central-west Surat pocket have an easy route in.\n\nWe've handled entries along Dumas Road and, if your venue is closer to the beach itself, we'll confirm the route and timing in advance.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car — a great photo opportunity given the scenic surroundings — and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Dumas Road that means knowing the stretch from the city side out toward the beach, so we can plan the right route whether your venue is close to town or further out.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries along this corridor.",
    pricingGuidance:
      "On how much does baraat cost for a Dumas Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how far this road stretches toward the coast.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Dumas Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Dumas Road, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover venues near Dumas Beach as well as closer to the city?",
        a: "Yes, we cover the full corridor. Tell us your exact venue and we'll confirm the route, whether it's closer to town or further out toward the beach.",
      },
      {
        q: "How early should I book for a Dumas Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Is Dumas Road good for a full truck entry?",
        a: "Yes, especially the stretch closer to the city, which is generally wide and straightforward for a double decker truck.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car — a good option for photos given the scenic setting.",
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

  "surat-rander": {
    slug: "surat-rander",
    intro:
      "Rander sits across the Tapi river from central Surat, one of the city's oldest neighborhoods with a genuinely historic character all its own. A baraat entry here often means crossing the river as part of the route, which adds a bit of its own drama to the procession.\n\nPlanMyBaraat runs baraat on wheels packages that account for that kind of route: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Rander's older lanes are narrower than the newer parts of Surat, similar in character to some of Vadodara's old-city neighborhoods, so we typically plan for the truck to stop at the nearest accessible point with the dhol team leading the final stretch.\n\nWe've handled entries in Rander before and know the crossing timing that works best to avoid river-bridge traffic.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for Rander's older, narrower streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, adapted carefully for this historic part of the city.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Rander that means knowing the bridge crossing timing and exactly where the truck can reach before the streets narrow into the old town.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the specific logistics of a river-crossing, old-town entry.",
    pricingGuidance:
      "On how much does baraat cost for a Rander entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and works well given the narrower old-town streets. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3-4 weeks' notice during peak season is a safe bet, with a bit of extra buffer given the bridge crossing involved.\n\nA rough headcount for the baraati group helps us plan how much space the group needs for any walking portion of the entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Rander, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Rander, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Does the baraat route cross the Tapi river to reach Rander?",
        a: "It can, depending on where your venue and starting point are. We plan the timing around bridge traffic so the procession stays on schedule.",
      },
      {
        q: "How early should I book for a Rander wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, with a bit of extra buffer if the route involves crossing the river.",
      },
      {
        q: "Can a truck reach venues in Rander's old-town lanes?",
        a: "Not always all the way — we park at the nearest accessible point and have the dhol team lead the group on foot for the final stretch, which is standard for this historic part of the city.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to Rander's narrower streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-bhatar": {
    slug: "surat-bhatar",
    intro:
      "Bhatar is a settled residential neighborhood connecting Athwalines and Ghod Dod Road, with a good number of community halls and a comfortable, established feel. A baraat entry here tends to be a straightforward affair, without the scale of Vesu or the density of Varachha.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Bhatar's roads are moderate in width, comfortable for a truck setup in most cases. It connects easily to Athwalines and Ghod Dod Road, so guests coming from either side of central Surat have a straightforward route in.\n\nWe've handled a good number of entries in this part of the city.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Bhatar that means knowing the connecting routes to Athwalines and Ghod Dod Road well, which helps when guests are spread across that broader central Surat pocket.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Bhatar entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Bhatar, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bhatar, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Bhatar's roads good for a truck entry?",
        a: "Yes, they're moderate in width and generally comfortable for a full truck setup.",
      },
      {
        q: "How early should I book for a Bhatar wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Athwalines and Ghod Dod Road too?",
        a: "Yes, we cover the broader central Surat pocket including Athwalines and Ghod Dod Road. Tell us your exact venue and we'll confirm the route.",
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

  "surat-palanpur-road": {
    slug: "surat-palanpur-road",
    intro:
      "Palanpur Road connects toward Adajan, a mixed commercial and residential stretch with a handful of banquet halls that have become popular for their easy access. A baraat entry here benefits from reasonably wide roads and a central location within western Surat.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Palanpur Road is generally wide enough for a full truck setup, though commercial sections can get busy in the evening. It connects easily to Adajan and Pal, so guests from that broader western Surat pocket have an easy route in.\n\nWe've handled a good number of entries along this stretch and the connecting neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Palanpur Road that means knowing when the commercial stretches get busiest, so we can time your baraat's arrival to avoid delays.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries along this corridor.",
    pricingGuidance:
      "On how much does baraat cost for a Palanpur Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Palanpur Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Palanpur Road, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Palanpur Road good for a full truck entry?",
        a: "Yes, it's generally wide enough for a full truck setup, though commercial sections can get busy in the evening.",
      },
      {
        q: "How early should I book for a Palanpur Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Adajan and Pal too?",
        a: "Yes, we cover the broader western Surat pocket including Adajan and Pal. Tell us your exact venue and we'll confirm the route.",
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

  "surat-nanpura": {
    slug: "surat-nanpura",
    intro:
      "Nanpura is an established, central Surat neighborhood, connecting Athwalines and Ghod Dod Road, with a mix of older residential buildings and long-running community halls. A baraat entry here has a genuinely local, neighborhood feel.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Nanpura's roads are a mix of moderate-width main stretches and narrower society lanes, similar in character to Athwalines nearby. We plan the truck's route and stopping point carefully, especially for venues inside residential complexes.\n\nWe've handled a good number of entries in Nanpura and the surrounding central Surat neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a good fit for Nanpura's residential character. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Nanpura that means knowing which society gates work for a full truck and where a shorter walk-in with the dhol team leading is the better approach.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly and are used to navigating Surat's denser central neighborhoods without losing time.",
    pricingGuidance:
      "On how much does baraat cost for a Nanpura entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point and often suits Nanpura's residential scale well. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, since community halls here can book out during busy dates.\n\nIf your venue is inside a residential society, let us know the entry point in advance. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Nanpura, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Nanpura, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the DJ truck reach venues inside Nanpura's residential societies?",
        a: "In most cases yes, though some gates are narrower than a standalone hall's entrance. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for a Nanpura wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Is Nanpura close to Athwalines and Ghod Dod Road?",
        a: "Yes, it connects easily to both, so guests from either side of central Surat can reach it without difficulty.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, sized well for Nanpura's residential streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-udhna": {
    slug: "surat-udhna",
    intro:
      "Udhna sits in south Surat, tied closely to the city's textile industry and railway network, with a busy, working character. A baraat entry here happens against a genuinely industrious backdrop — this is a part of the city that's always in motion.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Udhna's roads are generally wide given the industrial and rail-adjacent development, though traffic can build up near the station and textile market areas. Most wedding venues are in the residential pockets rather than the industrial core.\n\nWe've handled entries across Udhna and the connecting south Surat neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Udhna that means knowing when the station and market areas get busiest, so we plan your baraat's timing to avoid the heaviest traffic.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this busy part of south Surat.",
    pricingGuidance:
      "On how much does baraat cost for an Udhna entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nGiven how busy this area gets near the station and market, let us know your venue's exact access point so we can plan the truck's timing to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Udhna, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Udhna, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic near Udhna station a problem for a baraat entry?",
        a: "It can get busy, especially near the station and textile market areas. We plan the truck's timing and route to avoid the worst of it.",
      },
      {
        q: "How early should I book for an Udhna wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Are wedding venues in Udhna close to the industrial zone?",
        a: "Most are in residential pockets rather than the industrial core. Tell us your exact venue and we'll plan the route accordingly.",
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

  "surat-althan": {
    slug: "surat-althan",
    intro:
      "Althan sits close to Vesu, part of the same upscale southwestern growth belt, with wide roads and a steady stream of newer banquet halls. A grand baraat entry here fits right in with the scale of weddings this part of Surat typically hosts.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Althan's roads are wide and well-planned, similar to neighboring Vesu, making truck access straightforward. It connects easily to Vesu and Vesu-Bharthana, so guests from that broader southwestern Surat pocket have an easy route in.\n\nWe've handled a good number of entries in Althan's venue clusters.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — this shows up especially well on Althan's wide roads. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and Althan is one of the areas we work often given its proximity to Vesu — we know how the newer venues here handle truck access and parking.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the bigger entries common in this part of Surat.",
    pricingGuidance:
      "On how much does baraat cost for an Althan entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Althan's popularity alongside Vesu means booking 3-4 weeks ahead during peak season is a safe bet.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how many bigger entries happen in this part of the city.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Althan, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Althan, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Althan similar to Vesu for baraat entries?",
        a: "Yes, it's part of the same upscale southwestern growth belt, with wide roads and newer venues suited to bigger, more elaborate entries.",
      },
      {
        q: "How early should I book for an Althan wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this area has become.",
      },
      {
        q: "Do you cover venues near Vesu and Vesu-Bharthana too?",
        a: "Yes, we cover the broader southwestern Surat pocket including Vesu and Vesu-Bharthana. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Althan's bigger weddings.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-vesu-bharthana": {
    slug: "surat-vesu-bharthana",
    intro:
      "Vesu-Bharthana is the further edge of Surat's Vesu growth belt, newer still than the main Vesu stretch, with wide open roads and venues that keep opening as the area expands. A grand baraat entry here has about as much open space to work with as anywhere in Surat.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Vesu-Bharthana's roads are wide and new, making it one of the easiest parts of Surat for a full truck setup. Being at the edge of the growth corridor, it's a bit further from central Surat, so factor in a slightly longer route if a lot of your guests are coming from Athwalines or City Light.\n\nWe've handled entries at several of the newer venues here, and since the area keeps expanding, if your hall is somewhere very recently built, just flag it when you message us.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — Vesu-Bharthana's wide roads make this a strong visual choice. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to the bigger, more open entries this area allows for.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for a fast-developing area like Vesu-Bharthana that means staying current on new venues as they open, and planning routes that make full use of the open roads here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the bigger, more elaborate entries this area allows for.",
    pricingGuidance:
      "On how much does baraat cost for a Vesu-Bharthana entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team, which suits the scale of weddings this newer area tends to host.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and this area's popularity as a newer venue hub means booking 3-4 weeks ahead during peak season is a safe bet.\n\nA rough headcount for the baraati group helps us plan the setup, especially given how much room this area allows for a bigger entry.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Vesu-Bharthana, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Vesu-Bharthana, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Vesu-Bharthana far from central Surat?",
        a: "It's at the edge of the Vesu growth corridor, so factor in a slightly longer route if guests are coming from Athwalines or City Light.",
      },
      {
        q: "How early should I book for a Vesu-Bharthana wedding?",
        a: "3-4 weeks ahead during wedding season (November to February) is a safe window, given how popular this newer area has become.",
      },
      {
        q: "Are Vesu-Bharthana's roads good for a bigger baraat entry?",
        a: "Yes, since this is one of the newest parts of Surat, the roads are wide and open, giving plenty of room for a bigger, more elaborate procession.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Vesu-Bharthana's open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-magdalla": {
    slug: "surat-magdalla",
    intro:
      "Magdalla sits toward Surat's port and industrial belt in the south, with a mix of working neighborhoods and open roads. A baraat entry here has practical space to work with, similar to other industrial-adjacent parts of the city.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Magdalla's main roads are generally wide, given the industrial and port-adjacent development, making truck access straightforward. Most wedding venues here are in the residential pockets rather than the port area itself.\n\nWe've handled entries in Magdalla and the surrounding southern Surat neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Magdalla that means knowing which stretches are residential versus port-industrial, and planning weekend entries around any weekday traffic patterns.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of south Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Magdalla entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is closer to the residential or port-industrial side of Magdalla.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Magdalla, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Magdalla, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Magdalla good for a full-size truck entry?",
        a: "Yes, roads here are generally wide given the industrial and port-adjacent development, making truck access straightforward for most venues.",
      },
      {
        q: "How early should I book for a Magdalla wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are wedding venues in Magdalla near the port itself?",
        a: "Most are in the residential pockets rather than close to the port area. Tell us your exact venue and we'll plan the route accordingly.",
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

  "surat-sarthana": {
    slug: "surat-sarthana",
    intro:
      "Sarthana sits in northeast Surat, known locally for its nature park, and the surrounding residential pockets have grown steadily with a handful of venues suited to mid-scale baraat entries. It's a quieter part of the city compared to the busier southwestern corridors.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Sarthana's roads are generally manageable for a full truck setup, being a more residential, less commercially dense part of the city. It's a bit further from central Surat, so factor in a slightly longer route if guests are coming from Athwalines or City Light.\n\nWe've handled entries in Sarthana and the surrounding northeast Surat venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sarthana that means knowing the routes connecting this northeast pocket to the rest of Surat, which helps when guests are coming from across the city.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight regardless of how far out your venue is.",
    pricingGuidance:
      "On how much does baraat cost for a Sarthana entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this quieter part of the city.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Sarthana, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Sarthana, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Sarthana far from central Surat?",
        a: "It's in the northeast of the city, so factor in a slightly longer route if guests are coming from Athwalines or City Light.",
      },
      {
        q: "How early should I book for a Sarthana wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are Sarthana's roads good for a truck entry?",
        a: "Yes, being a more residential, quieter part of the city, roads are generally manageable for a full truck setup.",
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

  "surat-puna": {
    slug: "surat-puna",
    intro:
      "Puna is a growing residential neighborhood in east Surat, with newer housing developments and a handful of venues that have opened as the area's expanded. A baraat entry here tends to have a straightforward, uncrowded feel.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Puna's roads are generally manageable for a full truck setup, being a newer residential development. It connects to Godadara and the broader eastern Surat pocket, so guests from that side of the city have an easy route in.\n\nWe've handled entries across Puna's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Puna that means staying current on the newer venues opening as the area develops, and planning routes that work with the residential layout here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this part of east Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Puna entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this growing part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Puna, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Puna, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Puna's roads good for a truck entry?",
        a: "Yes, since this is a newer residential development, roads are generally manageable for a full truck setup.",
      },
      {
        q: "How early should I book for a Puna wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Godadara too?",
        a: "Yes, we cover the broader eastern Surat pocket including Godadara. Tell us your exact venue and we'll confirm the route.",
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

  "surat-godadara": {
    slug: "surat-godadara",
    intro:
      "Godadara is another of east Surat's growing residential pockets, close to Puna, with a mix of newer housing and a handful of local venues. A baraat entry here has room to move without the crowding of the busier southwestern corridors.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Godadara's roads are generally manageable for a full truck setup, similar to neighboring Puna. It's part of the broader eastern growth corridor, so guests from that side of Surat have an easy route in.\n\nWe've handled entries in Godadara's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Godadara that means staying current on the area's growth and keeping our route knowledge up to date as new venues open.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of east Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Godadara entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this growing part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Godadara, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Godadara, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Godadara's roads good for a truck entry?",
        a: "Yes, being part of the newer eastern growth corridor, roads are generally manageable for a full truck setup.",
      },
      {
        q: "How early should I book for a Godadara wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Do you cover venues near Puna too?",
        a: "Yes, we cover the broader eastern Surat pocket including Puna. Tell us your exact venue and we'll confirm the route.",
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

  "surat-pandesara": {
    slug: "surat-pandesara",
    intro:
      "Pandesara is part of Surat's southern industrial belt, tied closely to the GIDC zone, but the residential neighborhoods around it host a steady number of weddings. A baraat entry here usually has wide, functional roads to work with, built originally for industrial traffic.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Pandesara's roads are generally wide given the industrial development, making truck access straightforward. Most wedding venues here are on the residential side rather than inside the GIDC zone itself.\n\nWe've handled entries in Pandesara and the surrounding southern Surat neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Pandesara that means knowing which stretches are residential versus industrial, and planning weekend entries around any weekday GIDC traffic.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of south Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Pandesara entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is closer to the residential or industrial side of Pandesara.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Pandesara, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Pandesara, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Pandesara good for a full-size truck entry?",
        a: "Yes, roads here are generally wide given the industrial development, making truck access straightforward for most residential venues.",
      },
      {
        q: "How early should I book for a Pandesara wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you plan around GIDC traffic near Pandesara?",
        a: "Yes, weekend entries are usually smoother, and we plan timing to avoid any weekday traffic tied to the industrial zone.",
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

  "surat-adajan-patiya": {
    slug: "surat-adajan-patiya",
    intro:
      "Adajan Patiya is a busy junction within the broader Adajan neighborhood, a natural landmark for directions and a hub in its own right, with venues clustered around the crossing. A baraat entry here gets noticed simply because of how much traffic passes through this junction.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that visibility: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "The roads around Adajan Patiya are generally well-maintained, though the junction itself sees regular traffic, so we plan the truck's timing carefully around that. It's centrally positioned within Adajan, making it convenient for guests coming from most parts of western Surat.\n\nWe've run entries through this area and know the timing that works best to avoid the junction's busiest periods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — visible to a good amount of passing traffic given the central junction location. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for an area as central as Adajan Patiya that means knowing when the regular traffic peaks are, so we time your baraat's arrival to avoid getting stuck at the junction.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries through busy, central parts of Surat like this one.",
    pricingGuidance:
      "On how much does baraat cost near Adajan Patiya: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. Given how central this location is, we'd suggest booking your baraat entry at least 3 weeks ahead during peak season.\n\nSince the junction gets regular traffic, let us know your venue's exact access point so we can plan the truck's approach to avoid delays. A rough headcount for the baraati group also helps with setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Adajan Patiya, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Adajan Patiya?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is traffic a problem for a baraat entry near Adajan Patiya?",
        a: "It can get busy with regular traffic, so we plan the truck's timing carefully to avoid the junction's peak periods.",
      },
      {
        q: "How early should I book for a wedding near Adajan Patiya?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how central and popular this location is.",
      },
      {
        q: "Is Adajan Patiya convenient for guests from across Surat?",
        a: "Yes, its central position within Adajan makes it easy to reach for guests coming from most parts of western Surat.",
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

  "surat-ring-road": {
    slug: "surat-ring-road",
    intro:
      "Ring Road circles a good portion of Surat, and venues along it draw from multiple neighborhoods given how connected this corridor is to the rest of the city. A baraat entry along Ring Road benefits from wide lanes and easy access from almost any direction.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of connector road: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Ring Road is wide for most of its length, making it one of the easier corridors in Surat for a full truck setup. Because it connects so many neighborhoods, traffic volume varies by stretch and time of day, so we plan the exact timing based on your venue's specific location along the road.\n\nWe've handled entries at multiple points along Ring Road and know the timing that works best for each stretch.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Ring Road that means knowing which stretches connect to which neighborhoods, and planning the most efficient route based on exactly where your venue sits along this long corridor.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable navigating this connector road's varying traffic patterns.",
    pricingGuidance:
      "On how much does baraat cost along Ring Road: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, since venues along Ring Road serve a large catchment of the city.\n\nA rough headcount for the baraati group helps us plan the setup, and letting us know exactly which stretch of Ring Road your venue is on helps us plan the route and timing.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Ring Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Ring Road, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Ring Road good for a full truck entry?",
        a: "Yes, it's wide for most of its length, making it one of the easier corridors in Surat for a double decker truck.",
      },
      {
        q: "How early should I book for a Ring Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does traffic vary a lot along Ring Road?",
        a: "Yes, since it connects many neighborhoods, traffic volume changes by stretch and time of day. We plan timing based on your venue's exact location.",
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

  "surat-ved-road": {
    slug: "surat-ved-road",
    intro:
      "Ved Road runs through north Surat near Varachha, a busy stretch with a mix of commercial activity and dense residential pockets. A baraat entry here happens against a genuinely lively backdrop, similar in character to the neighboring Varachha and Katargam areas.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Ved Road can get busy, particularly in the evening, so we plan the truck's route and timing carefully. It connects to Varachha and Katargam, so we're familiar with the areas surrounding this stretch of north Surat.\n\nWe've handled a good number of entries along Ved Road and the connecting neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for this busier stretch. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, timed carefully for this part of the city.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Ved Road that means knowing which stretches get busiest and planning around the area's evening rhythms.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries in this densely populated part of north Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Ved Road entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and this part of the city sees a lot of wedding activity during that window. We'd recommend booking your baraat entry at least 3 weeks ahead during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location along this stretch.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue on Ved Road, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost on Ved Road, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Do you cover both Ved Road and neighboring Varachha and Katargam?",
        a: "Yes, we cover this whole northern pocket of Surat. Tell us your exact venue and we'll confirm the route.",
      },
      {
        q: "How early should I book for a Ved Road wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how much wedding activity this area sees.",
      },
      {
        q: "Is Ved Road busy in the evenings?",
        a: "It can be, so we plan the truck's timing and route to avoid the busiest periods and reach your venue on schedule.",
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

  "surat-parvat-patiya": {
    slug: "surat-parvat-patiya",
    intro:
      "Parvat Patiya is a busy junction and neighborhood in north Surat, closely tied to the diamond trade, with dense housing and a lot of wedding activity during peak season. A baraat entry here happens amid a genuinely bustling local rhythm.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Parvat Patiya's streets can get busy, especially around the main junction, and some residential lanes are narrower than Surat's newer suburbs. We plan the truck's route and timing carefully for this part of the city.\n\nWe've handled a good number of entries in Parvat Patiya and know which streets and timing windows work best.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for this busier junction area. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, timed carefully for this part of the city.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Parvat Patiya that means knowing which streets get busiest and planning around the area's evening rhythms tied to the diamond trade.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with entries in this densely populated part of Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Parvat Patiya entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and Parvat Patiya sees a lot of wedding activity during that window. We'd recommend booking your baraat entry at least 3 weeks ahead during peak season.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming whether your venue is near the main junction or deeper into the residential lanes.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Parvat Patiya, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Parvat Patiya, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Does Parvat Patiya get very busy during wedding season?",
        a: "Yes, given how densely populated it is, this area sees a lot of weddings during peak season. Booking early is especially important here.",
      },
      {
        q: "How early should I book for a Parvat Patiya wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how much demand this area sees.",
      },
      {
        q: "Are Parvat Patiya's streets good for a full-size truck?",
        a: "Some residential lanes are narrower than newer parts of Surat, so we plan the truck's route carefully based on your exact venue.",
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

  "surat-amroli": {
    slug: "surat-amroli",
    intro:
      "Amroli sits in north Surat, a growing residential neighborhood with a mix of established housing and newer development. A baraat entry here has a comfortable, mid-scale feel, without the density of Varachha or the openness of Surat's far western suburbs.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Amroli's roads are generally manageable for a full truck setup, with a mix of wider main stretches and some narrower society lanes. It connects to the broader northern Surat pocket including Katargam and Ved Road.\n\nWe've handled a good number of entries across Amroli's venue clusters and residential societies.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Amroli that means knowing which societies have wider entry points for a full truck and which need a shorter walk-in led by the dhol team.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this part of north Surat.",
    pricingGuidance:
      "On how much does baraat cost for an Amroli entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nIf your venue is inside a residential society, let us know the entry point in advance. A rough headcount for the baraati group also helps us plan the setup.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Amroli, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Amroli, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck reach venues inside Amroli's residential societies?",
        a: "In most cases yes, though some society lanes are narrower. Tell us your exact venue and we'll check access in advance.",
      },
      {
        q: "How early should I book for an Amroli wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Katargam and Ved Road too?",
        a: "Yes, we cover the broader northern Surat pocket including Katargam and Ved Road. Tell us your exact venue and we'll confirm the route.",
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

  "surat-sachin-gidc": {
    slug: "surat-sachin-gidc",
    intro:
      "Sachin GIDC sits at the far southern edge of Surat, a major industrial zone, but the residential pockets around it still host a steady number of weddings, particularly for families connected to the businesses here. A baraat entry has wide, functional roads to work with, similar to other industrial-adjacent parts of the city.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Roads through Sachin GIDC are wide, built for industrial traffic, which works well for a full truck setup, though weekday traffic can be heavier than in purely residential areas. Most wedding venues are on the residential fringes rather than inside the industrial zone itself.\n\nWe've handled entries in this belt before and know how to plan around any weekday industrial traffic for a smooth weekend entry.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Sachin GIDC that means knowing exactly where the residential venues sit relative to the industrial zone, and planning routes and timing that avoid any unnecessary detours through the busier industrial stretches.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Sachin GIDC entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and weekend entries here are usually smoother than weekday ones given the industrial traffic.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how far south this belt sits.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near Sachin GIDC, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near Sachin GIDC?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is this area good for a full-size truck entry?",
        a: "Yes, the roads are wide, built for industrial traffic, which works well for a large truck setup, though weekend entries avoid the busier weekday traffic.",
      },
      {
        q: "How early should I book for a wedding near Sachin GIDC?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Are wedding venues inside the industrial zone or on its edges?",
        a: "Almost always on the residential fringes rather than inside the industrial zone itself. Tell us your exact venue and we'll plan the route accordingly.",
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

  "surat-kamrej": {
    slug: "surat-kamrej",
    intro:
      "Kamrej sits at Surat's northern outskirts, more semi-rural in character than the city's core neighborhoods, with open roads and a handful of venues that suit bigger, more spread-out baraat entries. Families here often have genuine room to plan a grand entry.\n\nPlanMyBaraat runs baraat on wheels packages built to make the most of that openness: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Kamrej's roads are open and rural in character compared to central Surat, which makes truck access very straightforward, though it's a fair distance from the central city, so factor in a longer route for guests coming from Athwalines or City Light.\n\nWe've handled entries in Kamrej and the surrounding semi-rural venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up — very visible given how much open space this area has. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival, well suited to bigger, more elaborate entries.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Kamrej that means being ready to make the most of the open roads here for a bigger, more visible entry than what's practical in Surat's denser neighborhoods.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are comfortable with the longer routes and open-road setups common in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Kamrej entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, given the extra travel time involved.\n\nA rough headcount for the baraati group helps us plan the setup, and it's worth confirming your exact venue location given how spread out this area is.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Kamrej, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Kamrej, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Kamrej far from central Surat?",
        a: "It's at the city's northern outskirts, more semi-rural in character, so factor in a longer route for guests coming from central areas.",
      },
      {
        q: "How early should I book for a Kamrej wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Are Kamrej's roads good for a bigger baraat entry?",
        a: "Yes, the open, semi-rural layout gives plenty of room for a bigger, more elaborate procession.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team, well suited to Kamrej's open-road entries.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-bhestan": {
    slug: "surat-bhestan",
    intro:
      "Bhestan sits in south Surat, close to the city's industrial belt, with a mix of working-class residential neighborhoods and a handful of local venues. A baraat entry here has a genuinely local, community feel, similar in spirit to some of north Surat's denser pockets.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Bhestan's roads are generally manageable for a full truck setup, being close to but distinct from the deeper industrial zone. It connects to Udhna and the broader southern Surat pocket, so guests from that side of the city have an easy route in.\n\nWe've handled entries in Bhestan and the surrounding south Surat neighborhoods.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Bhestan that means knowing the connecting routes to Udhna and the broader southern pocket well, which helps when guests are spread across that side of Surat.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries in this part of the city.",
    pricingGuidance:
      "On how much does baraat cost for a Bhestan entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet for this part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Bhestan, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Bhestan, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Are Bhestan's roads good for a truck entry?",
        a: "Yes, they're generally manageable for a full truck setup, being close to but distinct from the deeper industrial zone.",
      },
      {
        q: "How early should I book for a Bhestan wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Do you cover venues near Udhna too?",
        a: "Yes, we cover the broader southern Surat pocket including Udhna. Tell us your exact venue and we'll confirm the route.",
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

  "surat-new-textile-market-belt": {
    slug: "surat-new-textile-market-belt",
    intro:
      "The New Textile Market belt sits at the heart of Surat's famous textile trade, a genuinely commercial pocket, but many families connected to the trade host their weddings in nearby venues. A baraat entry here has a special resonance — this is the trade that built much of the city's wealth.\n\nPlanMyBaraat runs baraat on wheels packages adapted for this kind of commercial-adjacent setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking, with timing planned around market hours.",
    localArea:
      "The textile market streets themselves are busy through the day and into the evening, so we typically plan the truck's route around the venue rather than through the deepest market lanes, timing the entry for when trading activity has wound down.\n\nWe've handled entries connected to this belt before and know the timing that works best around the market's typical hours.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, adapted carefully for this busier commercial pocket.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for the textile market belt that means knowing the market's rhythm — when it's busiest, when it starts winding down — and planning your baraat's timing around that.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the specific logistics of an entry connected to this busy commercial area.",
    pricingGuidance:
      "On how much does baraat cost for an entry near the New Textile Market belt: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 3 weeks' notice during peak season is a safe bet, and it helps us plan the timing around market hours specifically.\n\nA rough headcount for the baraati group helps us plan the setup properly for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue near the New Textile Market belt, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost near the New Textile Market belt?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Can the truck navigate the textile market streets?",
        a: "The truck typically parks at the nearest accessible point outside the busiest market lanes, with timing planned around when trading activity winds down for the evening.",
      },
      {
        q: "How early should I book for a wedding near this belt?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window.",
      },
      {
        q: "Does market activity affect baraat timing here?",
        a: "It can, so we plan the entry timing around typical market hours to avoid the busiest periods.",
      },
      {
        q: "Is the vintage car included in every package?",
        a: "Yes, starting from Raj Tilak. You don't need to arrange a car separately. The Signature package upgrades this to a premium American vintage car.",
      },
      {
        q: "What's the difference between Raj Tilak and Signature?",
        a: "Raj Tilak covers the essentials — truck, DJ, 2 dhol, chhatri lights, car, and safa team, well suited to this commercial pocket's busier streets. Signature adds 6 dhol, moving LED screens, the groom's name in lights, pyro and confetti effects, and a security team.",
      },
      {
        q: "Does the safa team cover the whole baraati group?",
        a: "Yes, the My Safa team ties turbans for the groom and everyone walking in the baraat, not just the groom, and arrives early enough for everyone to be ready on time.",
      },
    ],
  },

  "surat-dindoli": {
    slug: "surat-dindoli",
    intro:
      "Dindoli is a growing residential neighborhood in southeast Surat, with newer housing developments and a handful of local venues. A baraat entry here tends to be a comfortable, uncrowded affair, similar to other newer pockets on the city's edges.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Dindoli's roads are generally manageable for a full truck setup, being a newer residential development. It's a bit further from central Surat, so factor in a slightly longer route for guests coming from Athwalines or City Light.\n\nWe've handled entries in Dindoli and the surrounding southeast Surat venues.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects timed to the truck's arrival.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Dindoli that means staying current on the newer venues opening as the area develops, and planning routes that work with the residential layout here.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, keeping timing tight for entries across this part of southeast Surat.",
    pricingGuidance:
      "On how much does baraat cost for a Dindoli entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February. 2-3 weeks' notice during peak season is usually enough for this growing part of the city.\n\nA rough headcount for the baraati group helps us plan the right setup for your venue.",
    closing:
      "Message us on WhatsApp with your wedding date, your venue in Dindoli, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Dindoli, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and venue on WhatsApp for a real quote.",
      },
      {
        q: "Is Dindoli far from central Surat?",
        a: "It's a newer neighborhood in the southeast, so factor in a slightly longer route for guests coming from central areas like Athwalines or City Light.",
      },
      {
        q: "How early should I book for a Dindoli wedding?",
        a: "2-3 weeks ahead during wedding season (November to February) is usually enough.",
      },
      {
        q: "Are Dindoli's roads good for a truck entry?",
        a: "Yes, since this is a newer residential development, roads are generally manageable for a full truck setup.",
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

  "surat-nana-varachha": {
    slug: "surat-nana-varachha",
    intro:
      "Nana Varachha is a distinct pocket within the broader Varachha area, similarly dense and residential, with its own set of community halls. A baraat entry here shares much of Varachha's lively, closely-packed character.\n\nPlanMyBaraat runs baraat on wheels packages built for this kind of setting: a double decker dj truck for baraat, a dhol team, a vintage car or baggi, and a safa team, all handled as one booking.",
    localArea:
      "Nana Varachha's streets are dense and can get busy, similar to the wider Varachha pocket, with some noise timing preferences among local societies. We plan the truck's route and timing carefully for this densely populated part of the city.\n\nWe've handled a number of entries in Nana Varachha and know which streets and timing windows work best.",
    whatsIncluded:
      "Every package includes the DJ truck, sound system, and DJ artist. Raj Tilak comes with 2 dhol and chhatri lights, a practical choice for this area's busier streets. Rajwada adds 2 more dhol and a teddy or gorilla performer. Maharaja brings moving LED panels and the groom's name lit up. Signature, the top package, adds a security team plus pyro and confetti effects, which we can time to fit within typical evening windows here.\n\nThe vintage car and safa team come with every package from Raj Tilak upward, so even the entry-level package includes a proper car and full turban styling for the baraati group.",
    whyUs:
      "We're a Gujarat-based baraat planner, and for Nana Varachha that means knowing when the streets are busiest and which societies prefer music to wrap up earlier in the evening.\n\nOur drivers, DJs, dhol players, and safa artists work with us regularly, and are experienced with the specific timing needs of this densely populated neighborhood.",
    pricingGuidance:
      "On how much does baraat cost for a Nana Varachha entry: it depends on the package, dhol count, and any extra effects like pyro or confetti. Raj Tilak is the most affordable starting point. Signature costs more because it includes more — bigger truck branding, more dhol, LED visuals, and a security team.\n\nWe quote based on your actual date and guest count. Message us on WhatsApp and we'll respond with a real quote, usually within the hour.",
    planningNotes:
      "Wedding season runs November to February, and this pocket sees a lot of wedding activity during that window given the population density. We'd recommend booking your baraat entry at least 3 weeks ahead during peak season.\n\nIf your society has an evening noise preference, let us know the cutoff time and we'll plan the dhol and any pyro or confetti to finish before then.",
    closing:
      "Message us on WhatsApp with your wedding date, your area in Nana Varachha, and roughly how many guests are in the baraat. We'll recommend a package and confirm the truck's available, usually within the hour.",
    faqs: [
      {
        q: "How much does a baraat setup cost in Nana Varachha, Surat?",
        a: "It depends on the package, dhol count, and any extra effects. Raj Tilak is our most affordable package and Signature is the most complete. Message your date and area on WhatsApp for a real quote.",
      },
      {
        q: "Is Nana Varachha different from the main Varachha area?",
        a: "It's a distinct pocket within the broader Varachha neighborhood, with a similar dense, residential character and its own community halls.",
      },
      {
        q: "How early should I book for a Nana Varachha wedding?",
        a: "3 weeks ahead during wedding season (November to February) is a safe window, given how much wedding activity this area sees.",
      },
      {
        q: "Are there noise timing preferences in Nana Varachha societies?",
        a: "Some societies here prefer music to wrap up earlier in the evening. Tell us the cutoff time and we'll plan the dhol and any effects to finish before then.",
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
