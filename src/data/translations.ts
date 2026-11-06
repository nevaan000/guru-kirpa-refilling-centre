import type { Locale } from "./site";

/**
 * Every visible string on the site lives here, in English and Hindi.
 * Hindi is written the way people actually speak around a Delhi print shop,
 * not textbook Hindi. Brand and model names stay as they are.
 */

const en = {
  nav: {
    services: "Services",
    howItWorks: "How it works",
    finder: "Find cartridge",
    faq: "FAQs",
    voucher: "First-visit gift",
    contact: "Contact",
    call: "Call now",
    quote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    mainMenu: "Main menu",
    languageLabel: "Choose language",
    englishLabel: "English",
    hindiLabel: "Hindi",
    skipToContent: "Skip to main content",
  },
  hero: {
    eyebrow: "Your local cartridge shop · New Ranjeet Nagar",
    title: "Printer cartridge refilling in New Ranjeet Nagar, New Delhi",
    titleHighlight: "New Ranjeet Nagar",
    description:
      "New cartridges and expert refills for inkjet, laser and toner printers — for homes, students, shops, offices and schools. Save money, skip the mall run, and keep printing.",
    callNow: "Call now",
    whatsapp: "WhatsApp us",
    phonesLabel: "Both numbers reach the shop",
    trust: [
      "Inkjet · Laser · Toner",
      "Pickup & delivery available",
      "Bulk supply for offices & schools",
    ],
    visualLabel: "CMYK",
    visualCaption: "One cartridge. Three colours. Refilled locally.",
    scrollCue: "Scroll",
  },
  services: {
    eyebrow: "What we do",
    title: "One shop for everything your printer needs",
    description:
      "From a quick ink refill to a month of supplies for your office, it all happens here.",
    items: [
      {
        tag: "Refill",
        title: "Cartridge refilling",
        description:
          "Bring your used inkjet or laser cartridge. We clean it, refill it with quality ink or toner, and test-print it before handover.",
      },
      {
        tag: "New",
        title: "New cartridges",
        description:
          "New original and compatible cartridges for HP, Canon, Epson, Brother, Samsung and other printers. We'll help you pick the right one.",
      },
      {
        tag: "Toner",
        title: "Toner refilling",
        description:
          "Laser printer toner refilled and checked, with a test print before you take it home.",
      },
      {
        tag: "Accessories",
        title: "Printer accessories",
        description:
          "Ink bottles, toner, cables and everyday printer supplies. Call to check what's in stock.",
      },
      {
        tag: "Bulk",
        title: "Bulk & office supply",
        description:
          "Regular refills and cartridge supply for offices, schools and shops. Tell us your monthly need and we'll quote.",
      },
    ],
  },
  steps: {
    eyebrow: "How refilling works",
    title: "Four simple steps. No jargon.",
    description:
      "From dropping off the cartridge to the test print, everything is explained upfront.",
    items: [
      {
        title: "Tell us your model",
        description:
          "Send a photo on WhatsApp or give us a call. We'll confirm whether your cartridge can be refilled.",
      },
      {
        title: "Know the price first",
        description:
          "We quote before starting the work. No surprise add-ons when you collect.",
      },
      {
        title: "We refill and test",
        description:
          "Your cartridge is cleaned, refilled and test-printed so you know it works before you leave.",
      },
      {
        title: "Collect or ask about delivery",
        description:
          "Pick it up from the shop, or ask us about pickup and delivery for your area.",
      },
    ],
    cta: "Send a photo on WhatsApp",
    note: "Not sure of the model? A clear photo of the cartridge label is enough.",
    waMessage:
      "Hello Guru Kirpa Refilling Centre, I'd like a refill quote. I'm sending a photo of my cartridge.",
  },
  why: {
    eyebrow: "Why Guru Kirpa",
    title: "Why Customers Choose Guru Kirpa",
    description:
      "Reliable printing solutions, honest pricing and personal service — everything your printer needs in one place.",
    items: [
      {
        title: "Affordable Printing",
        description:
          "Save money by refilling instead of unnecessarily buying new.",
      },
      {
        title: "Quality Assurance",
        description:
          "Cartridges are cleaned, refilled and test-printed before handover.",
      },
      {
        title: "Transparent Pricing",
        description:
          "You get a price quotation before any work begins.",
      },
      {
        title: "Multiple Printer Brands",
        description:
          "HP, Canon, Epson, Brother, Samsung and other compatible brands.",
      },
      {
        title: "Convenient Local Service",
        description:
          "A trusted local shop in New Ranjeet Nagar, New Delhi.",
      },
      {
        title: "Pickup and Delivery",
        description: "Convenient options in supported areas.",
      },
      {
        title: "Personal Assistance",
        description:
          "Help identifying the correct cartridge and choosing suitable products.",
      },
    ],
    finderCta: "Find your cartridge",
    waCta: "Chat on WhatsApp",
    waMessage:
      "Hello Guru Kirpa Refilling Centre, I'd like to know more about your cartridge refilling and printing services.",
  },
  usp: {
    eyebrow: "Our advantage",
    title: "Your Complete Printing Partner, Right Around the Corner.",
    description:
      "From affordable cartridge refilling to new cartridges, toner solutions and printer accessories, Guru Kirpa provides convenient printing solutions for homes, students, offices, schools and businesses.",
    items: [
      {
        letter: "A",
        title: "SAVE MORE",
        description:
          "Affordable refilling options that reduce your printing expenses.",
      },
      {
        letter: "B",
        title: "TRUST EVERY PRINT",
        description:
          "Cleaning, refilling and test-printing before your cartridge is handed over.",
      },
      {
        letter: "C",
        title: "EVERYTHING IN ONE PLACE",
        description:
          "Cartridge refilling, new cartridges, toner, printer accessories and bulk supply.",
      },
    ],
    finderCta: "Find your cartridge",
    waCta: "Contact us on WhatsApp",
    waMessage:
      "Hello Guru Kirpa Refilling Centre, I'd like to know which printing solution suits my needs.",
  },
  voucher: {
    eyebrow: "Welcome gift",
    title: "Your First Visit Comes With a Gift!",
    description:
      "New to Guru Kirpa? Enjoy a special welcome voucher on your first eligible purchase or cartridge refill.",
    previewTag: "Promotional preview",
    previewNote:
      "This voucher is a promotional preview and is not active yet. Message us and the shop will confirm the current offer and its terms.",
    cardTitle: "Welcome Gift",
    cardSubtitle: "For first-time customers",
    codeLabel: "Voucher code",
    sampleCodeLabel: "Sample voucher code",
    discountLabel: "Welcome offer",
    minimumLabel: "Minimum purchase",
    validityLabel: "Valid until",
    eligibilityLabel: "Eligible on",
    oneTimeLabel: "One-time use",
    toBeConfirmed: "To be confirmed by the shop",
    claimCta: "Claim Your Welcome Voucher",
    quoteCta: "Get a Free Quote",
    contactCta: "Questions? Contact us on WhatsApp",
    claimNote:
      "Tapping the button only opens WhatsApp. The voucher is claimed when the shop confirms your eligibility and terms.",
    steps: [
      {
        title: "Message us",
        description: "Send the voucher message on WhatsApp.",
      },
      {
        title: "We confirm the offer",
        description: "The shop shares the current discount and terms.",
      },
      {
        title: "Claim on your visit",
        description: "The voucher is applied only after the shop confirms.",
      },
    ],
    waMessage:
      "Hello Guru Kirpa! I am a first-time customer and would like to claim my welcome voucher. Please share the current offer and its terms.",
    waGeneral:
      "Hello Guru Kirpa Refilling Centre, I have a question about the first-time welcome voucher.",
  },
  finder: {
    eyebrow: "Cartridge finder",
    title: "Find your cartridge in seconds",
    description:
      "Type your printer model or cartridge number. We'll show whether a refill is available and how to ask us on WhatsApp.",
    searchLabel: "Printer model or cartridge number",
    placeholder: "Try “HP 1005” or “Canon G2012”",
    quickLabel: "Try a model",
    clear: "Clear search",
    resultsLabel: "Matching cartridges",
    match: "match",
    matches: "matches",
    refillAvailable: "Refill available",
    newOnly: "New cartridge only",
    priceOnRequest: "Price on request",
    startingFrom: "Starting from",
    ask: "Ask on WhatsApp",
    modelsLabel: "Works with",
    moreModels: "+{count} more",
    typeInk: "Inkjet",
    typeToner: "Toner",
    sampleNote:
      "Sample catalogue — stock and prices must be confirmed. Send us your exact model on WhatsApp.",
    noResultsTitle: "That model isn't in our sample list yet.",
    noResultsDescription:
      "No problem — send us the model name or a photo on WhatsApp and we'll check it for you.",
    noResultsCta: "Send the model on WhatsApp",
    browseHint: "Type your model above, or pick one of the examples.",
    waMessage:
      "Hello Guru Kirpa Refilling Centre, my printer model is {model}. Is the {cartridge} cartridge available for refill? What would it cost?",
    waNoResult:
      "Hello Guru Kirpa Refilling Centre, my model wasn't in your online list: {model}. Can you check if you can refill or supply it?",
  },
  pickup: {
    eyebrow: "Pickup, delivery & bulk",
    title: "We can come to you, too",
    description:
      "Pickup and delivery are available — ask us about your area. Offices, schools and shops can plan regular refills and supplies with one point of contact.",
    badge: "Pickup & delivery available",
    cards: [
      {
        title: "Homes & students",
        description:
          "Keep assignments, notes and everyday printing moving without a trip to the market.",
      },
      {
        title: "Offices & schools",
        description:
          "Tell us your monthly need and we'll quote for regular refills and cartridge supply.",
      },
      {
        title: "Shops & institutions",
        description:
          "A dependable local refill partner for the cartridges your customers bring in.",
      },
    ],
    areasLabel: "Delivery area",
    areasFallback:
      "We deliver — message us with your area to confirm coverage.",
    cta: "Ask about pickup & bulk supply",
    waMessage:
      "Hello Guru Kirpa Refilling Centre, I'd like to ask about pickup, delivery and bulk supply for my area.",
  },
  brands: {
    eyebrow: "Supported brands",
    title: "Fits the printer you already own",
    description:
      "Inkjet, laser and toner cartridges from the brands you see every day.",
    similar: "and similar",
    note: "Brand names are used only to show compatibility.",
  },
  quote: {
    eyebrow: "Get a quote",
    title: "Tell us what you need",
    description:
      "Fill this in and WhatsApp will open with your details ready to send. We'll reply with availability and a price.",
    name: "Your name",
    namePlaceholder: "e.g. Rahul",
    phone: "Phone number",
    phonePlaceholder: "e.g. 98XXXXXXXX",
    model: "Printer or cartridge model",
    modelPlaceholder: "e.g. HP LaserJet 1005 / Q2612A",
    message: "Message",
    messagePlaceholder: "Anything else we should know?",
    optional: "optional",
    submit: "Send on WhatsApp",
    note: "This opens WhatsApp with your message filled in. Nothing is stored on this website.",
    waOpened: "WhatsApp should have opened in a new tab.",
    waFallback: "If it didn't open, tap here to send your message.",
    required: "required",
    waIntro: "Hello Guru Kirpa Refilling Centre, I'd like a quote.",
    sidePoints: [
      {
        title: "Goes straight to WhatsApp",
        description:
          "Your details arrive as a ready-to-send WhatsApp message on our main number.",
      },
      {
        title: "Nothing saved on the site",
        description:
          "We don't run a backend here. Your details stay in your browser until you send.",
      },
      {
        title: "Write in Hindi or English",
        description: "Use whichever language feels easier. We'll reply the same way.",
      },
    ],
    errors: {
      name: "Please enter your name.",
      phone: "Enter a valid phone number (at least 10 digits).",
      model: "Tell us your printer or cartridge model.",
    },
  },
  faq: {
    eyebrow: "FAQs",
    title: "Questions, answered",
    description:
      "Still unsure about something? Call or WhatsApp us — we'd rather explain than have you guess.",
    items: [
      {
        question: "Do refilled cartridges print as well as new ones?",
        answer:
          "A proper refill with quality ink gives clean results for everyday printing. The outcome also depends on the condition of your cartridge and printer. We test before handover and will tell you honestly if a refill isn't worth it.",
      },
      {
        question: "How long does a refill take?",
        answer:
          "It depends on the cartridge and how busy the day is. Call or WhatsApp ahead and we'll give you a realistic time for your model.",
      },
      {
        question: "Which brands do you handle?",
        answer:
          "HP, Canon, Epson, Brother, Samsung and similar inkjet, laser and toner cartridges. Send us your model and we'll confirm.",
      },
      {
        question: "Do you offer pickup and delivery?",
        answer:
          "Yes, pickup and delivery are available. Send your area on WhatsApp and we'll confirm whether we cover it.",
      },
      {
        question: "Can offices and schools get bulk rates?",
        answer:
          "Yes. Tell us your monthly cartridge use and we'll quote for regular refills or supply.",
      },
      {
        question: "What do you check before taking my cartridge?",
        answer:
          "We look at the condition of the cartridge first and tell you if a refill will work reliably before we start.",
      },
      {
        question: "Will refilling affect my printer warranty?",
        answer:
          "Refilling is done on your cartridge. Warranty terms vary between printers, so check with your printer maker if you're unsure. We're happy to explain exactly what we do.",
      },
    ],
    stillStuck: "Still have a question?",
    chatCta: "Ask on WhatsApp",
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit the shop, call, or WhatsApp",
    description:
      "We're in New Ranjeet Nagar, New Delhi. Both numbers below reach the shop; WhatsApp is usually the fastest.",
    addressLabel: "Address",
    phoneLabel: "Call or WhatsApp",
    hoursLabel: "Opening hours",
    areasLabel: "Areas served",
    call: "Call",
    whatsapp: "WhatsApp",
    directions: "Get directions",
    openMap: "Open in Google Maps",
    mapTitle:
      "Google Map showing Guru Kirpa Refilling Centre in New Ranjeet Nagar, New Delhi",
    mapLoading: "Loading map…",
    hoursFallback: "Call or WhatsApp for current timings.",
    areasFallback: "Ask us about your area.",
    pickupNote: "Pickup & delivery available — ask about your area.",
    deliveryBadge: "Pickup & delivery available",
    primaryBadge: "Main WhatsApp",
    secondaryBadge: "Second number",
  },
  footer: {
    about:
      "New cartridges and refills for inkjet, laser and toner printers — from a local shop in New Ranjeet Nagar, New Delhi.",
    explore: "Explore",
    servicesTitle: "Services",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    legal:
      "Brand names are used only to show compatibility. Guru Kirpa Refilling Centre is not affiliated with or endorsed by HP, Canon, Epson, Brother, Samsung or any other brand mentioned.",
    rights: "All rights reserved.",
    sampleNote:
      "The cartridge finder uses a sample catalogue. Confirm your exact model on WhatsApp.",
    servingYears: "Serving New Ranjeet Nagar for {years} years.",
  },
  common: {
    call: "Call",
    whatsapp: "WhatsApp",
    backHome: "Back to home",
    waHello:
      "Hello Guru Kirpa Refilling Centre, I'd like to ask about printer cartridge refilling.",
  },
  notFound: {
    title: "This page went for a refill.",
    description:
      "The page you're looking for isn't here. Head back home or message us on WhatsApp.",
    home: "Back to home",
  },
};

const hi: typeof en = {
  nav: {
    services: "सर्विस",
    howItWorks: "कैसे होता है",
    finder: "कार्ट्रिज खोजें",
    faq: "सवाल-जवाब",
    voucher: "पहली विज़िट का तोहफ़ा",
    contact: "संपर्क",
    call: "कॉल कीजिए",
    quote: "रेट पूछिए",
    openMenu: "मेनू खोलिए",
    closeMenu: "मेनू बंद कीजिए",
    menuTitle: "मेनू",
    mainMenu: "मुख्य मेनू",
    languageLabel: "भाषा चुनिए",
    englishLabel: "English",
    hindiLabel: "हिंदी",
    skipToContent: "सीधे मुख्य जानकारी पर जाइए",
  },
  hero: {
    eyebrow: "आपके इलाके की कार्ट्रिज दुकान · न्यू रंजीत नगर",
    title: "न्यू रंजीत नगर, नई दिल्ली में प्रिंटर कार्ट्रिज रिफिलिंग",
    titleHighlight: "न्यू रंजीत नगर",
    description:
      "इंकजेट, लेज़र और टोनर प्रिंटर के लिए नए कार्ट्रिज और भरोसेमंद रिफिल — घर, स्टूडेंट्स, दुकानों, ऑफिस और स्कूलों के लिए। पैसे बचाइए, मार्केट के चक्कर छोड़िए और छपाई चलती रखिए।",
    callNow: "कॉल कीजिए",
    whatsapp: "WhatsApp कीजिए",
    phonesLabel: "दोनों नंबर दुकान के हैं",
    trust: [
      "इंकजेट · लेज़र · टोनर",
      "पिकअप और डिलीवरी उपलब्ध",
      "ऑफिस और स्कूलों के लिए बल्क सप्लाई",
    ],
    visualLabel: "CMYK",
    visualCaption: "एक कार्ट्रिज। तीन रंग। आपके इलाके में रिफिल।",
    scrollCue: "स्क्रॉल",
  },
  services: {
    eyebrow: "हम क्या करते हैं",
    title: "आपके प्रिंटर की हर ज़रूरत, एक ही दुकान पर",
    description:
      "छोटे इंक रिफिल से लेकर ऑफिस की महीने भर की सप्लाई तक — सब कुछ यहीं मिल जाएगा।",
    items: [
      {
        tag: "रिफिल",
        title: "कार्ट्रिज रिफिलिंग",
        description:
          "पुराना इंकजेट या लेज़र कार्ट्रिज लाइए। हम उसे साफ करते हैं, अच्छी स्याही या टोनर से भरते हैं और देने से पहले टेस्ट प्रिंट करते हैं।",
      },
      {
        tag: "नया",
        title: "नए कार्ट्रिज",
        description:
          "HP, Canon, Epson, Brother, Samsung और दूसरे प्रिंटर के लिए नए ओरिजिनल और कंपैटिबल कार्ट्रिज। सही वाला चुनने में हम मदद करेंगे।",
      },
      {
        tag: "टोनर",
        title: "टोनर रिफिलिंग",
        description:
          "लेज़र प्रिंटर का टोनर भरते और जाँचते हैं, हैंडओवर से पहले टेस्ट प्रिंट के साथ।",
      },
      {
        tag: "एक्सेसरीज़",
        title: "प्रिंटर एक्सेसरीज़",
        description:
          "इंक बोतल, टोनर, केबल और रोज़मर्रा की प्रिंटर सामग्री। स्टॉक की जानकारी के लिए कॉल कीजिए।",
      },
      {
        tag: "बल्क",
        title: "बल्क और ऑफिस सप्लाई",
        description:
          "ऑफिस, स्कूल और दुकानों के लिए नियमित रिफिल और कार्ट्रिज सप्लाई। अपनी ज़रूरत बताइए, हम रेट बताएँगे।",
      },
    ],
  },
  steps: {
    eyebrow: "रिफिलिंग कैसे होती है",
    title: "चार आसान स्टेप। कोई उलझन नहीं।",
    description:
      "कार्ट्रिज देने से लेकर टेस्ट प्रिंट तक, सब कुछ पहले से साफ़-साफ़ बता दिया जाता है।",
    items: [
      {
        title: "अपना मॉडल बताइए",
        description:
          "WhatsApp पर कार्ट्रिज की फोटो भेजिए या कॉल कीजिए। हम बता देंगे कि रिफिल हो सकता है या नहीं।",
      },
      {
        title: "पहले रेट जानिए",
        description:
          "काम शुरू करने से पहले रेट बता देते हैं। बाद में कोई छिपा हुआ खर्च नहीं।",
      },
      {
        title: "हम रिफिल करके टेस्ट करते हैं",
        description:
          "कार्ट्रिज साफ करके भरा जाता है और आपको देने से पहले टेस्ट प्रिंट किया जाता है।",
      },
      {
        title: "ले जाइए या डिलीवरी पूछिए",
        description:
          "दुकान से खुद ले जाइए, या अपने इलाके में पिकअप-डिलीवरी के बारे में पूछिए।",
      },
    ],
    cta: "WhatsApp पर फोटो भेजिए",
    note: "मॉडल पता न हो तो कार्ट्रिज के लेबल की साफ़ फोटो भेज दीजिए।",
    waMessage:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे रिफिल का रेट जानना है। मैं कार्ट्रिज की फोटो भेज रहा/रही हूँ।",
  },
  why: {
    eyebrow: "Guru Kirpa क्यों?",
    title: "ग्राहक Guru Kirpa को क्यों चुनते हैं",
    description:
      "भरोसेमंद प्रिंटिंग सुविधाएँ, साफ़-साफ़ रेट और अपनापन — आपके प्रिंटर की हर ज़रूरत एक ही जगह।",
    items: [
      {
        title: "किफ़ायती प्रिंटिंग",
        description:
          "नया कार्ट्रिज बेवजह खरीदने के बजाय रिफिल कराइए और पैसे बचाइए।",
      },
      {
        title: "क्वालिटी की जाँच",
        description:
          "हैंडओवर से पहले कार्ट्रिज साफ किया जाता है, भरा जाता है और टेस्ट प्रिंट होता है।",
      },
      {
        title: "साफ़ रेट, कोई छिपा खर्च नहीं",
        description: "काम शुरू होने से पहले रेट की पूरी जानकारी दी जाती है।",
      },
      {
        title: "कई प्रिंटर ब्रांड",
        description:
          "HP, Canon, Epson, Brother, Samsung और दूसरे कंपैटिबल ब्रांड के लिए।",
      },
      {
        title: "आस-पास की भरोसेमंद दुकान",
        description: "न्यू रंजीत नगर, नई दिल्ली की लोकल दुकान।",
      },
      {
        title: "पिकअप और डिलीवरी",
        description:
          "जिन इलाकों में सुविधा उपलब्ध है, वहाँ पिकअप और डिलीवरी के विकल्प।",
      },
      {
        title: "निजी मदद",
        description:
          "सही कार्ट्रिज पहचानने और अपने हिसाब से प्रोडक्ट चुनने में मदद।",
      },
    ],
    finderCta: "अपना कार्ट्रिज खोजिए",
    waCta: "WhatsApp पर बात कीजिए",
    waMessage:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे आपकी कार्ट्रिज रिफिलिंग और प्रिंटिंग सर्विस के बारे में और जानना है।",
  },
  usp: {
    eyebrow: "हमारी खास बात",
    title: "आपका पूरा प्रिंटिंग पार्टनर, बिल्कुल आपके पास।",
    description:
      "किफ़ायती कार्ट्रिज रिफिलिंग से लेकर नए कार्ट्रिज, टोनर समाधान और प्रिंटर एक्सेसरीज़ तक — Guru Kirpa घरों, स्टूडेंट्स, ऑफिस, स्कूलों और दुकानों के लिए आसान प्रिंटिंग सुविधाएँ देता है।",
    items: [
      {
        letter: "A",
        title: "ज़्यादा बचत",
        description:
          "किफ़ायती रिफिल विकल्प, जिससे प्रिंटिंग का खर्च कम होता है।",
      },
      {
        letter: "B",
        title: "हर प्रिंट पर भरोसा",
        description:
          "कार्ट्रिज देने से पहले सफ़ाई, रिफिल और टेस्ट प्रिंट — तीनों किए जाते हैं।",
      },
      {
        letter: "C",
        title: "सब कुछ एक ही जगह",
        description:
          "कार्ट्रिज रिफिलिंग, नए कार्ट्रिज, टोनर, प्रिंटर एक्सेसरीज़ और बल्क सप्लाई।",
      },
    ],
    finderCta: "अपना कार्ट्रिज खोजिए",
    waCta: "WhatsApp पर संपर्क कीजिए",
    waMessage:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे बताइए कि मेरी ज़रूरत के लिए कौन-सी प्रिंटिंग सुविधा सही रहेगी।",
  },
  voucher: {
    eyebrow: "स्वागत तोहफ़ा",
    title: "आपकी पहली विज़िट पर एक तोहफ़ा!",
    description:
      "Guru Kirpa पर पहली बार आ रहे हैं? अपनी पहली पात्र खरीदारी या कार्ट्रिज रिफिल पर खास स्वागत वाउचर पाइए।",
    previewTag: "प्रोमोशनल प्रीव्यू",
    previewNote:
      "यह वाउचर अभी सिर्फ़ प्रीव्यू है और चालू नहीं हुआ है। WhatsApp पर मैसेज कीजिए, दुकान वर्तमान ऑफ़र और उसकी शर्तें बता देगी।",
    cardTitle: "स्वागत तोहफ़ा",
    cardSubtitle: "पहली बार आने वाले ग्राहकों के लिए",
    codeLabel: "वाउचर कोड",
    sampleCodeLabel: "सैंपल वाउचर कोड",
    discountLabel: "स्वागत ऑफ़र",
    minimumLabel: "कम से कम खरीदारी",
    validityLabel: "कब तक मान्य",
    eligibilityLabel: "किस पर लागू",
    oneTimeLabel: "एक बार इस्तेमाल",
    toBeConfirmed: "दुकान से पुष्टि होगी",
    claimCta: "अपना स्वागत वाउचर क्लेम कीजिए",
    quoteCta: "मुफ़्त रेट पूछिए",
    contactCta: "सवाल है? WhatsApp पर संपर्क कीजिए",
    claimNote:
      "बटन दबाने से सिर्फ़ WhatsApp खुलता है। दुकान आपकी पात्रता और शर्तें पुष्टि करने के बाद ही वाउचर क्लेम माना जाएगा।",
    steps: [
      {
        title: "मैसेज कीजिए",
        description: "वाउचर वाला संदेश WhatsApp पर भेजिए।",
      },
      {
        title: "हम ऑफ़र पुष्टि करेंगे",
        description: "दुकान वर्तमान छूट और शर्तें बता देगी।",
      },
      {
        title: "विज़िट पर क्लेम कीजिए",
        description: "दुकान की पुष्टि के बाद ही वाउचर लागू होगा।",
      },
    ],
    waMessage:
      "नमस्ते Guru Kirpa! मैं पहली बार आने वाला/वाली ग्राहक हूँ और अपना स्वागत वाउचर क्लेम करना चाहता/चाहती हूँ। कृपया वर्तमान ऑफ़र और उसकी शर्तें बताइए।",
    waGeneral:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे पहली विज़िट वाले स्वागत वाउचर के बारे में पूछना है।",
  },
  finder: {
    eyebrow: "कार्ट्रिज फाइंडर",
    title: "अपना कार्ट्रिज सेकंडों में ढूँढ़िए",
    description:
      "अपने प्रिंटर का मॉडल या कार्ट्रिज नंबर लिखिए। हम दिखा देंगे कि रिफिल उपलब्ध है या नहीं और WhatsApp पर कैसे पूछना है।",
    searchLabel: "प्रिंटर मॉडल या कार्ट्रिज नंबर",
    placeholder: "जैसे “HP 1005” या “Canon G2012”",
    quickLabel: "आज़माकर देखिए",
    clear: "सर्च साफ़ कीजिए",
    resultsLabel: "मिलते-जुलते कार्ट्रिज",
    match: "नतीजा",
    matches: "नतीजे",
    refillAvailable: "रिफिल उपलब्ध",
    newOnly: "सिर्फ़ नया कार्ट्रिज",
    priceOnRequest: "रेट के लिए पूछिए",
    startingFrom: "शुरुआती रेट",
    ask: "WhatsApp पर पूछिए",
    modelsLabel: "इन प्रिंटरों के लिए",
    moreModels: "+{count} और",
    typeInk: "इंकजेट",
    typeToner: "टोनर",
    sampleNote:
      "सैंपल कैटलॉग — रेट और स्टॉक की पुष्टि दुकान से करनी होगी। अपना सही मॉडल WhatsApp पर भेजिए।",
    noResultsTitle: "यह मॉडल हमारी सैंपल लिस्ट में नहीं मिला।",
    noResultsDescription:
      "कोई बात नहीं — मॉडल का नाम या फोटो WhatsApp पर भेजिए, हम देख लेंगे।",
    noResultsCta: "WhatsApp पर मॉडल भेजिए",
    browseHint: "ऊपर अपना मॉडल लिखिए, या नीचे से कोई उदाहरण चुनिए।",
    waMessage:
      "नमस्ते Guru Kirpa Refilling Centre, मेरे प्रिंटर का मॉडल है: {model}. क्या {cartridge} का रिफिल उपलब्ध है? रेट क्या होगा?",
    waNoResult:
      "नमस्ते Guru Kirpa Refilling Centre, मेरा मॉडल आपकी ऑनलाइन लिस्ट में नहीं मिला: {model}. क्या आप देख सकते हैं कि इसका रिफिल या कार्ट्रिज मिल सकता है?",
  },
  pickup: {
    eyebrow: "पिकअप, डिलीवरी और बल्क",
    title: "ज़रूरत हो तो हम आपके पास भी आते हैं",
    description:
      "पिकअप और डिलीवरी उपलब्ध है — अपने इलाके के बारे में हमसे पूछ लीजिए। ऑफिस, स्कूल और दुकानें एक ही जगह से नियमित रिफिल और सप्लाई करा सकती हैं।",
    badge: "पिकअप और डिलीवरी उपलब्ध",
    cards: [
      {
        title: "घर और स्टूडेंट्स",
        description:
          "असाइनमेंट, नोट्स और रोज़ की प्रिंटिंग के लिए बाजार जाने की ज़रूरत नहीं।",
      },
      {
        title: "ऑफिस और स्कूल",
        description:
          "महीने की ज़रूरत बताइए, हम नियमित रिफिल और कार्ट्रिज सप्लाई का रेट बता देंगे।",
      },
      {
        title: "दुकानें और संस्थान",
        description:
          "अपने ग्राहकों के कार्ट्रिज के लिए एक भरोसेमंद लोकल रिफिल पार्टनर।",
      },
    ],
    areasLabel: "डिलीवरी एरिया",
    areasFallback:
      "हम डिलीवरी करते हैं — अपना इलाका WhatsApp पर भेजिए, हम बता देंगे कि हम वहाँ आते हैं या नहीं।",
    cta: "पिकअप और बल्क के बारे में पूछिए",
    waMessage:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे अपने इलाके में पिकअप, डिलीवरी और बल्क सप्लाई के बारे में पूछना है।",
  },
  brands: {
    eyebrow: "सपोर्टेड ब्रांड",
    title: "आपके प्रिंटर के लिए सही कार्ट्रिज",
    description:
      "इंकजेट, लेज़र और टोनर — रोज़ इस्तेमाल होने वाले ब्रांड्स के कार्ट्रिज।",
    similar: "और ऐसे ही दूसरे",
    note: "ब्रांड के नाम सिर्फ़ कंपैटिबिलिटी बताने के लिए हैं।",
  },
  quote: {
    eyebrow: "रेट पूछिए",
    title: "बताइए आपको क्या चाहिए",
    description:
      "फॉर्म भरिए — WhatsApp खुल जाएगा और आपकी जानकारी पहले से लिखी होगी। हम उपलब्धता और रेट बता देंगे।",
    name: "आपका नाम",
    namePlaceholder: "जैसे: राहुल",
    phone: "फोन नंबर",
    phonePlaceholder: "जैसे: 98XXXXXXXX",
    model: "प्रिंटर या कार्ट्रिज मॉडल",
    modelPlaceholder: "जैसे: HP LaserJet 1005 / Q2612A",
    message: "संदेश",
    messagePlaceholder: "कोई और बात बतानी हो तो लिखिए…",
    optional: "ज़रूरी नहीं",
    submit: "WhatsApp पर भेजिए",
    note: "इससे WhatsApp खुलेगा और आपका मैसेज भरा हुआ मिलेगा। इस वेबसाइट पर आपकी जानकारी सेव नहीं होती।",
    waOpened: "WhatsApp नई टैब में खुलना चाहिए।",
    waFallback: "अगर नहीं खुला, तो यहाँ दबाकर मैसेज भेजिए।",
    required: "ज़रूरी",
    waIntro: "नमस्ते Guru Kirpa Refilling Centre, मुझे रेट जानना है।",
    sidePoints: [
      {
        title: "सीधे WhatsApp पर",
        description:
          "आपकी जानकारी हमारे मुख्य नंबर पर भेजने के लिए तैयार WhatsApp मैसेज में आ जाती है।",
      },
      {
        title: "साइट पर कुछ सेव नहीं होता",
        description:
          "यहाँ कोई बैकएंड नहीं है। जब तक आप भेजते नहीं, जानकारी आपके ब्राउज़र में ही रहती है।",
      },
      {
        title: "हिंदी या English में लिखिए",
        description: "जैसे चाहें, वैसे मैसेज कीजिए। जवाब भी उसी भाषा में मिलेगा।",
      },
    ],
    errors: {
      name: "अपना नाम लिखिए।",
      phone: "सही फोन नंबर डालिए (कम से कम 10 अंक)।",
      model: "अपने प्रिंटर या कार्ट्रिज का मॉडल बताइए।",
    },
  },
  faq: {
    eyebrow: "सवाल-जवाब",
    title: "आपके सवाल, सीधे जवाब",
    description:
      "कुछ और पूछना है? कॉल या WhatsApp कीजिए — अंदाज़ा लगाने से बेहतर है सीधे बात करना।",
    items: [
      {
        question: "रिफिल किया कार्ट्रिज नए जैसा छापता है?",
        answer:
          "अच्छी स्याही से सही तरीके से किया गया रिफिल रोज़ की छपाई के लिए अच्छा रिज़ल्ट देता है। नतीजा कार्ट्रिज की हालत और प्रिंटर पर भी निर्भर करता है। हम देने से पहले टेस्ट करते हैं और अगर रिफिल फ़ायदे का नहीं है तो साफ़ बता देते हैं।",
      },
      {
        question: "रिफिल में कितना समय लगता है?",
        answer:
          "यह कार्ट्रिज और उस दिन की भीड़ पर निर्भर करता है। पहले से कॉल या WhatsApp कीजिए, हम आपको सही समय बता देंगे।",
      },
      {
        question: "कौन-कौन से ब्रांड हैंडल करते हैं?",
        answer:
          "HP, Canon, Epson, Brother, Samsung और ऐसे ही दूसरे ब्रांड्स के इंकजेट, लेज़र और टोनर कार्ट्रिज। अपना मॉडल भेजिए, हम पुष्टि कर देंगे।",
      },
      {
        question: "पिकअप और डिलीवरी मिलती है?",
        answer:
          "जी हाँ, पिकअप और डिलीवरी उपलब्ध है। अपने इलाके का नाम WhatsApp पर भेजिए, हम बता देंगे कि हम वहाँ आते हैं या नहीं।",
      },
      {
        question: "ऑफिस और स्कूल के लिए बल्क रेट मिलते हैं?",
        answer:
          "जी हाँ। अपनी महीने की ज़रूरत बताइए — नियमित रिफिल या कार्ट्रिज सप्लाई का रेट हम बता देंगे।",
      },
      {
        question: "कार्ट्रिज लेने से पहले आप क्या जाँचते हैं?",
        answer:
          "हम पहले कार्ट्रिज की हालत देखते हैं और काम शुरू करने से पहले बता देते हैं कि रिफिल भरोसे से काम करेगा या नहीं।",
      },
      {
        question: "रिफिल से प्रिंटर की वारंटी पर असर पड़ता है?",
        answer:
          "रिफिल आपके कार्ट्रिज पर किया जाता है। वारंटी की शर्तें हर प्रिंटर में अलग होती हैं, इसलिए शक हो तो प्रिंटर बनाने वाली कंपनी से पूछ लीजिए। हम आपको पूरी बात साफ़ बता देंगे।",
      },
    ],
    stillStuck: "कुछ और पूछना है?",
    chatCta: "WhatsApp पर पूछिए",
  },
  contact: {
    eyebrow: "संपर्क",
    title: "दुकान पर आइए, कॉल कीजिए या WhatsApp कीजिए",
    description:
      "हम न्यू रंजीत नगर, नई दिल्ली में हैं। नीचे दोनों नंबर दुकान के हैं; WhatsApp आमतौर पर सबसे जल्दी जवाब देता है।",
    addressLabel: "पता",
    phoneLabel: "कॉल या WhatsApp",
    hoursLabel: "दुकान का समय",
    areasLabel: "सर्विस एरिया",
    call: "कॉल",
    whatsapp: "WhatsApp",
    directions: "रास्ता देखिए",
    openMap: "Google Maps में खोलिए",
    mapTitle:
      "Guru Kirpa Refilling Centre, न्यू रंजीत नगर, नई दिल्ली का Google नक्शा",
    mapLoading: "नक्शा लोड हो रहा है…",
    hoursFallback: "आज का समय जानने के लिए कॉल या WhatsApp कीजिए।",
    areasFallback: "अपने इलाके के बारे में पूछ लीजिए।",
    pickupNote: "पिकअप और डिलीवरी उपलब्ध — अपने इलाके के बारे में पूछिए।",
    deliveryBadge: "पिकअप और डिलीवरी उपलब्ध",
    primaryBadge: "मुख्य WhatsApp",
    secondaryBadge: "दूसरा नंबर",
  },
  footer: {
    about:
      "इंकजेट, लेज़र और टोनर प्रिंटर के लिए नए कार्ट्रिज और रिफिल — न्यू रंजीत नगर, नई दिल्ली की लोकल दुकान से।",
    explore: "पेज",
    servicesTitle: "सर्विस",
    contactTitle: "संपर्क",
    hoursTitle: "समय",
    legal:
      "ब्रांड के नाम सिर्फ़ यह बताने के लिए इस्तेमाल किए गए हैं कि कौन-सा कार्ट्रिज किस प्रिंटर में लगता है। Guru Kirpa Refilling Centre का HP, Canon, Epson, Brother, Samsung या यहाँ बताए गए किसी भी दूसरे ब्रांड से कोई संबंध या अनुमोदन नहीं है।",
    rights: "सभी अधिकार सुरक्षित।",
    sampleNote:
      "कार्ट्रिज फाइंडर में सैंपल लिस्ट है। अपने सही मॉडल की पुष्टि WhatsApp पर कीजिए।",
    servingYears: "न्यू रंजीत नगर में {years} साल से सेवा में।",
  },
  common: {
    call: "कॉल",
    whatsapp: "WhatsApp",
    backHome: "होम पर वापस",
    waHello:
      "नमस्ते Guru Kirpa Refilling Centre, मुझे प्रिंटर कार्ट्रिज रिफिलिंग के बारे में पूछना है।",
  },
  notFound: {
    title: "यह पेज रिफिलिंग के लिए चला गया।",
    description:
      "जो पेज आप ढूँढ़ रहे हैं वह यहाँ नहीं है। होम पर वापस जाइए या WhatsApp पर मैसेज कीजिए।",
    home: "होम पर वापस जाइए",
  },
};

export const translations = { en, hi } as const;

export type Translation = typeof en;
export type { Locale };
