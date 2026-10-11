// ============================================================
// PMC COLLECTIVE — SITE DATA
// ============================================================

export const NAV_LINKS = [
  { id: 'home',    label: 'Home' },
  { id: 'about',   label: 'About' },
  { id: 'vision',  label: 'Vision' },
  { id: 'mission', label: 'Mission' },
  {
    id: 'hub', label: 'The Hub', special: 'hub',
    children: [
      { id: 'hub',   label: 'The Collective Hub', icon: 'fas fa-store' },
      { id: 'books', label: 'Books',              icon: 'fas fa-book' },
    ],
  },
  { id: 'insights', label: 'Insights' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact', special: 'contact' },
];

export const STATS = [
  { count: 5000, label: 'Lives Impacted',     suffix: '+' },
  { count: 150,  label: 'Projects Completed', suffix: '+' },
  { count: 12,   label: 'Countries Reached',  suffix: '+' },
];

export const SERVICES = [
  {
    icon: 'fas fa-rocket',
    title: 'Entrepreneurship & Innovation',
    description: 'Building the next generation of African entrepreneurs through practical training and mentorship.',
    features: ['Business Development', 'Startup Mentoring', 'Innovation Workshops'],
    link: 'hub',
  },
  {
    icon: 'fas fa-users',
    title: 'Mentorship & Leadership',
    description: 'Developing confident, purpose-driven leaders through structured programmes and real-world guidance.',
    features: ['1-on-1 Coaching', 'Leadership Seminars', 'Community Circles'],
    link: 'mission',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Education & Development',
    description: 'Equipping minds with tools for lifelong learning and personal transformation.',
    features: ['Workshops & Training', 'Books & Resources', 'Online Learning'],
    link: 'hub',
  },
  {
    icon: 'fas fa-heart',
    title: 'Faith & Ministry',
    description: 'Anchoring growth in purpose, faith, and community values that transcend culture.',
    features: ['Faith Communities', 'Outreach Programmes', 'Spiritual Growth'],
    link: 'about',
  },
];

export const BOOKS = [
  {
    id: 'magical-tales',
    title: 'Magical Tales of Happy Tots',
    author: 'Tricia Chris-Omon',
    price: 2500,
    oldPrice: 3500,
    rating: 4.5,
    badge: 'Bestseller',
    image: '/magical tots.jpg',
    description: 'A collection of enchanting stories that inspire joy, creativity, and imagination in children and adults alike.',
    tags: ["Children's Literature", 'Inspirational', 'Family Reading'],
  },
  {
    id: 'uplift-kit',
    title: 'The Uplift Kit',
    author: 'Tricia Chris-Omon',
    price: 3000,
    oldPrice: 4500,
    rating: 5.0,
    badge: 'New Release',
    image: '/the uplift kitt.jpg',
    description: 'A practical guide to personal upliftment, filled with strategies for overcoming challenges and reaching your highest potential.',
    tags: ['Self-Help', 'Personal Growth', 'Motivation'],
  },
  {
    id: 'golden-seeds',
    title: 'The Golden Seeds',
    author: 'Tricia Chris-Omon',
    price: 2500,
    oldPrice: 3200,
    rating: 4.7,
    badge: 'Handcrafted',
    image: '/The Golden seeds.jpg',
    description: 'Plant seeds of wisdom and watch them grow into opportunities for success and fulfilment in all areas of life.',
    tags: ['Wisdom', 'Success Guide', 'Inspiration'],
  },
];

export const TESTIMONIALS = [
  {
    text: "The book launch was absolutely beautiful! The stories in 'Magical Tales' touched everyone's hearts. The atmosphere at Glorious Nation Church was filled with positivity and inspiration.",
    name: 'Sarah Johnson',
    role: 'Parent & Educator',
    avatar: '/reviewer1.jpg',
    rating: 5,
  },
  {
    text: "PMC Collective transformed my approach to business. The mentorship I received helped me launch my own successful enterprise. The practical strategies and ongoing support made all the difference.",
    name: 'Michael Adebayo',
    role: 'Entrepreneur',
    avatar: '/reviewer2.jpg',
    rating: 5,
  },
  {
    text: "The Uplift Kit came at the perfect time in my life. The practical strategies helped me navigate challenging times and emerge stronger than ever. The community support was invaluable.",
    name: 'Chinenye Okoro',
    role: 'Life Coach',
    avatar: '/reviewer3.jpg',
    rating: 5,
  },
];

export const ADIGUN_REVIEW = `"Yeah, quite impactful. I read it all yesterday morning. It is a very resourceful material in teaching life's values. As simple and prose as it is, it is very valuable even for adults with its simple but relatable stories. The Q&A section could serve as an interactive strategy session in understanding how different individuals interpret and understand values universally and locally. Also, the workbook is a very good guide to structure and self-organise one's goals in life from teenage to adulthood and keep track of milestones and performance appraisals. Bottom line, they are all very resourceful materials to teach life's key lessons in leading and living an intentional God-guided, purposeful, fulfilling, and meaningful quality of life for every born child for a purposeful sustainable global productive citizenry and life."`;

export const EVENTS = [
  { image: '/pmc 3.jpg',            title: 'Magical Tales Book Launch', date: 'March 2024',    location: 'The Glorious Nation Church' },
  { image: '/comm celebration.jpg', title: 'Community Impact Day',      date: 'February 2024', location: 'Seaside Estate, Lagos' },
  { image: '/pmc 3.jpg',            title: 'Leadership Masterclass',    date: 'January 2024',  location: 'Online Event' },
];

export const SOCIAL_LINKS = [
  { icon: 'fab fa-twitter',     url: 'https://x.com/patitogang',                                label: 'Twitter' },
  { icon: 'fab fa-instagram',   url: 'https://instagram.com/triciachrisomon',                   label: 'Instagram' },
  { icon: 'fab fa-facebook-f',  url: 'https://facebook.com/TriciaChris-Omon',                  label: 'Facebook' },
  { icon: 'fab fa-tiktok',      url: 'https://tiktok.com/@pmceee',                              label: 'TikTok' },
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/tricia-chris-omon-070bb1b2/',label: 'LinkedIn' },
  { icon: 'fab fa-whatsapp',    url: 'https://chat.whatsapp.com/YOUR_COMMUNITY_LINK',          label: 'WhatsApp Community' },
];

export const CONTACT_INFO = {
  address:  'Seaside Estate, Ajah, Lagos',
  email:    'triciacares2020@gmail.com',
  phone:    '+234 802 313 8594',
  hours:    'Mon – Fri: 9AM – 5PM',
  saturday: 'Saturday: 10AM – 2PM',
  whatsapp: 'https://chat.whatsapp.com/YOUR_COMMUNITY_LINK',
  // Formspree form ID for the contact form (from your Formspree dashboard)
  formspreeId: 'mvzjgnvr',
};

// ── PAYMENT CONFIG ──────────────────────────────────────────
// EDIT THESE before going live.
export const PAYMENT_CONFIG = {
  // 1) Your Paystack Payment Page link. Create one at:
  //    Paystack Dashboard → Payment Pages → Create Page → copy the link.
  //    Example: 'https://paystack.com/pay/pmc-collective'
  paystackLink: 'https://paystack.com/pay/YOUR_PAYSTACK_PAGE',

  // 2) Bank account for manual transfers
  bank: {
    bankName:      'Optimus Bank',
    accountName:   'PMC Collective',
    accountNumber: '2002174994',
  },

  // 3) Where transfer receipts should be sent
  //    receiptEmail: shown so customers can email the receipt
  //    whatsappNumber: digits only, with country code, no + or spaces
  receiptEmail:   'triciacares2020@gmail.com',
  whatsappNumber: '2348023138594',
};

export const MISSION_POINTS = [
  { icon: 'fas fa-flag',         title: 'Cultivating Leadership',  text: "Equipping individuals to lead with purpose, integrity, and visionary thinking in their personal and professional lives." },
  { icon: 'fas fa-globe-africa', title: 'Community Impact',        text: "Creating sustainable positive change through collaborative efforts and community engagement initiatives." },
  { icon: 'fas fa-brain',        title: 'Growth Mindset',          text: "Promoting confidence, resilience, and lifelong learning to help individuals overcome challenges and achieve success." },
  { icon: 'fas fa-hands-helping',title: 'Personal Development',    text: "Providing mentorship and guidance to help individuals unlock their full potential and achieve their goals." },
  { icon: 'fas fa-pray',         title: 'Faith & Purpose',         text: "Integrating faith-driven principles to inspire success and fulfilment in life, business, and ministry." },
  { icon: 'fas fa-lightbulb',    title: 'Fostering Innovation',    text: "Encouraging creative problem-solving and entrepreneurial thinking to drive positive change in various sectors." },
];

export const IMPACT_STATS = [
  { number: '500+', label: 'Individuals Empowered' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '25+',  label: 'Communities Reached' },
  { number: '8+',   label: 'Countries Impacted' },
  { number: '75+',  label: 'Training Programmes' },
  { number: '15+',  label: 'Leadership Workshops' },
];

export const METHODOLOGIES = [
  'Action-oriented learning programmes',
  'One-on-one mentorship sessions',
  'Practical skill development workshops',
  'Community support networks',
  'Faith-based leadership principles',
  'Real-world application projects',
];

export const VALUES = [
  { icon: 'fas fa-hand-holding-heart', title: 'Empowerment', text: "We believe in lifting others up and providing the tools, resources, and support needed for sustainable success and growth." },
  { icon: 'fas fa-crown',              title: 'Leadership',  text: "We cultivate leaders who inspire others, make bold decisions, and carry responsibility with grace and courage." },
  { icon: 'fas fa-users',              title: 'Community',   text: "We foster meaningful connections, collaborative growth, and a supportive network that uplifts every member." },
  { icon: 'fas fa-lightbulb',          title: 'Innovation',  text: "We embrace creativity, forward-thinking, and innovative approaches to problem-solving and personal development." },
  { icon: 'fas fa-heart',              title: 'Integrity',   text: "We operate with unwavering honesty, transparency, and ethical principles in all our interactions and initiatives." },
];

export const VISION_ASPIRATIONS = [
  { icon: 'fas fa-globe',     title: 'Global African Leadership', text: "Cultivating a new generation of African leaders who shape narratives on the world stage." },
  { icon: 'fas fa-building',  title: 'Institutional Excellence',  text: "Building world-class institutions that sustain community growth for generations." },
  { icon: 'fas fa-book-open', title: 'Literary Revolution',       text: "Producing books and content that reframe African identity, potential, and purpose." },
  { icon: 'fas fa-users',     title: 'Community Ecosystems',      text: "Fostering thriving networks of entrepreneurs, educators, and change-makers across Africa." },
];

export const TIMELINE = [
  { year: '2020',  title: 'PMC Collective Founded',        text: 'Tricia launches the vision — a platform to empower African leaders, entrepreneurs, and changemakers.', icon: '🌱' },
  { year: '2021',  title: 'Community Programmes Launch',   text: 'First round of leadership workshops and entrepreneurship training sessions delivered in Lagos.', icon: '🚀' },
  { year: '2022',  title: 'Literary Journey Begins',       text: 'Authoring begins — research, writing, and community focus groups shape the first publications.', icon: '✍️' },
  { year: '2023',  title: 'First Books Published',         text: '"Magical Tales of Happy Tots" and "The Uplift Kit" are released to enthusiastic reception across Nigeria.', icon: '📚' },
  { year: '2024',  title: 'Book Launch and Expansion',     text: 'Landmark book launch at The Glorious Nation Church. "The Golden Seeds" is added. International reach grows.', icon: '🌍' },
  { year: '2025+', title: 'The Vision Continues',          text: 'Scaling mentorship programmes, expanding the Collective Hub, and building community ecosystems across Africa.', icon: '✨' },
];

// ── HUB CATEGORIES & PRODUCTS ──

export const HUB_CATEGORIES = [
  { id: 'all',        label: 'All Products',       icon: 'fas fa-th' },
  { id: 'books',      label: 'Books',              icon: 'fas fa-book' },
  { id: 'patma',      label: 'Patma Products',     icon: 'fas fa-soap' },
  { id: 'mentorship', label: 'Mentorship',         icon: 'fas fa-users' },
  { id: 'sessions',   label: '1-on-1 Sessions',    icon: 'fas fa-user-check' },
  { id: 'community',  label: 'Community Projects', icon: 'fas fa-hands-helping' },
];

// ── GROWING GREAT KIDS (video series) ───────────────────────
// The series lives on social media (Facebook / TikTok / Instagram).
// The website is the "front door": it pitches the series, sends
// viewers to her platforms, and captures leads via WhatsApp.
// Nothing here needs updating per-episode — it's zero-maintenance.
//
// EDIT the social links + WhatsApp toolkit wording below.

// ── INSIGHTS & EVENTS (updatable content hub) ───────────────
// This is how the website earns repeat visits + Google traffic.
// To ADD A POST: copy one block, put it at the TOP (newest first),
// change the fields. No other code changes needed.
//   type:    'article' (parenting tip/insight) or 'event' (school/community event)
//   slug:    short unique id, lowercase-with-dashes (used for the link)
//   date:    'YYYY-MM-DD' (controls ordering + what shows)
//   image:   optional /public image name; omit for a clean text card
//   excerpt: 1–2 sentence teaser shown on the card
//   body:    full post — use \n\n between paragraphs
//   eventDate/eventLocation: only for type 'event'
export const POSTS = [
  {
    type: 'article',
    slug: 'screen-time-without-the-fight',
    title: 'Screen Time Without the Daily Fight',
    date: '2026-10-06',
    author: 'Tricia Chris-Omon',
    tags: ['Parenting', 'Discipline', 'Screen Time'],
    image: '',
    excerpt: 'The goal isn’t zero screens — it’s a child who can put the screen down. Three small shifts that change the whole dynamic.',
    body:
      'Most parents frame screen time as a battle to be won. But a child who only stops because you forced them hasn’t learned anything — they’ve just lost this round.\n\n' +
      'The shift that matters is moving from control to ownership. When a child helps set the rule, they help keep it.\n\n' +
      '1. Agree the rule together, in a calm moment — not mid-tantrum.\n' +
      '2. Make the boundary about the clock, not about you ("screens go off at 7", not "I said off").\n' +
      '3. Give a five-minute warning every single time, so the ending is never a surprise.\n\n' +
      'None of this is magic. But done consistently, it turns a daily fight into a routine your child can eventually run themselves — which is the whole point.',
  },
  {
    type: 'event',
    slug: 'parenting-masterclass-october',
    title: 'Live Parenting Masterclass — Raising Focused Kids',
    date: '2026-10-02',
    author: 'Tricia Chris-Omon',
    tags: ['Event', 'Masterclass'],
    image: '',
    excerpt: 'A practical, interactive session for parents who want focused, disciplined, purpose-driven children. Limited seats.',
    eventDate: 'Saturday, 25 October 2026 · 10:00 AM',
    eventLocation: "D'Cherub Schools, Ajah/Badore, Lagos",
    body:
      'Join Tricia Chris-Omon for a live, interactive masterclass built around the real challenges parents face today — distraction, discipline, and helping children find their focus and purpose.\n\n' +
      'What you’ll leave with:\n' +
      '• A simple framework for setting boundaries that actually hold\n' +
      '• Practical scripts for the hard conversations\n' +
      '• A free Screen Time Contract to take home\n\n' +
      'Seats are limited. Tap "Reserve a Seat" below to register on WhatsApp.',
  },
  {
    type: 'article',
    slug: 'three-words-that-build-focus',
    title: 'Three Words That Build Focus in Children',
    date: '2026-09-20',
    author: 'Tricia Chris-Omon',
    tags: ['Parenting', 'Focus', 'Character'],
    image: '',
    excerpt: 'Focus isn’t a personality trait some kids are born with. It’s built — and it often starts with how we talk to them.',
    body:
      'We tend to praise outcomes: "well done", "good girl", "you’re so smart." But focus grows from effort, not results.\n\n' +
      'Try replacing praise with three words: "You kept going." It names the thing you actually want to grow — persistence — and it works whether they succeeded or not.\n\n' +
      'A child who hears "you kept going" learns that staying with something hard is the win. That’s the seed of focus, and it compounds for years.',
  },
];

export const SERIES_INFO = {
  name:     'Growing Great Kids',
  tagline:  'Raising children to stay focused and disciplined in a distracted world.',
  intro:    'A teaching series of 100 short dramas from Tricia Chris-Omon — helping parents raise focused, disciplined, purpose-driven children in a world full of distractions.',
  episodeCount: '100',
  // The freebie viewers get when they message on WhatsApp
  freebie:  'Free Screen Time Contract + Apology Guide',
  // Poster/still image shown in the section (drop in /public). Optional.
  poster:   '/series-poster.jpg',
};

// "Watch the series" buttons — point these at her real profiles.
export const SERIES_LINKS = [
  { platform: 'Facebook',  icon: 'fab fa-facebook',  url: 'https://facebook.com/TriciaChris-Omon',  color: '#1877F2' },
  { platform: 'TikTok',    icon: 'fab fa-tiktok',    url: 'https://www.tiktok.com/@dcherub_schools', color: '#000000' },
  { platform: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/triciachrisomon',  color: '#E4405F' },
];

export const HUB_PRODUCTS = [
  { id: 'magical-tales',    category: 'books',      title: 'Magical Tales of Happy Tots',  description: "Enchanting children's stories that plant seeds of wisdom and ignite the imagination.",                                                                          price: 2500,  oldPrice: 3500, image: '/magical tots.jpg',     badge: 'Bestseller',     duration: null,         format: null },
  { id: 'uplift-kit',       category: 'books',      title: 'The Uplift Kit',                description: 'Practical strategies for personal upliftment, resilience, and reaching your highest potential.',                                                               price: 3000,  oldPrice: 4500, image: '/the uplift kitt.jpg',  badge: 'New Release',    duration: null,         format: null },
  { id: 'golden-seeds',     category: 'books',      title: 'The Golden Seeds',              description: 'A wisdom guide for children and young adults building intentional, purposeful lives.',                                                                          price: 2500,  oldPrice: 3200, image: '/The Golden seeds.jpg', badge: null,             duration: null,         format: null },
  { id: 'patma-butter',     category: 'patma',      title: 'Patma Body Butter Collection',  description: 'Handcrafted natural body butters and skincare products made with premium African ingredients.',                                                                  price: 2500,  oldPrice: null, image: '/patma product.jpg',    badge: 'Natural',        duration: null,         format: null },
  { id: 'patma-soap',       category: 'patma',      title: 'Artisan Soap Set',              description: 'Hand-poured artisan soaps enriched with shea, coconut oil, and African botanicals.',                                                                            price: 1800,  oldPrice: null, image: '/patma product.jpg',    badge: null,             duration: null,         format: null },
  { id: 'group-mentorship', category: 'mentorship', title: 'Group Mentorship Programme',    description: 'Join a curated cohort of driven individuals for weekly guided mentorship sessions, peer learning, and accountability over 8 weeks with Tricia.',               price: 25000, oldPrice: null, image: '/comm celebration.jpg', badge: 'Popular',        duration: '8 Weeks',    format: 'Online / In-Person' },
  { id: 'mastermind',       category: 'mentorship', title: 'Mastermind Circle',             description: "A high-level peer mastermind for entrepreneurs and leaders committed to serious growth. Monthly sessions with Tricia's direct input and challenge.",          price: 50000, oldPrice: null, image: '/pmc 3.jpg',            badge: 'Premium',        duration: '3 Months',   format: 'Online' },
  { id: 'one-on-one',       category: 'sessions',   title: '1-on-1 Mentorship Session',     description: "A focused, personalised 60-minute session with Tricia to work through your specific challenges, goals, and next steps.",                                    price: 10000, oldPrice: null, image: '/pmc new.jpg',          badge: 'Personal',       duration: '60 Minutes', format: 'Zoom / In-Person' },
  { id: 'one-on-one-pack',  category: 'sessions',   title: 'Intensive Mentorship Package',  description: 'Four 1-on-1 sessions across one month. Ideal for individuals navigating a major transition or business launch.',                                                price: 50000, oldPrice: null, image: '/pmc new.jpg',          badge: 'Best Value',     duration: '4 x 60 Min', format: 'Zoom / In-Person' },
  { id: 'community-proj',   category: 'community',  title: 'Community Engagement Projects', description: "Bespoke community engagement, event planning, and social impact initiatives tailored to your organisation's vision, values, and budget.",                      price: null,  oldPrice: null, image: '/comm celebration.jpg', badge: 'Custom',         duration: 'Flexible',   format: 'In-Person' },
];

// ── WOMEN IN BUSINESS PROFILE (Partners page) ──

export const PROFILE_TITLES = [
  'Retired Banker', 'Educator', 'School Founder', 'Parenting Coach',
  'Published Author', 'Youth Developer', 'Associate Pastor',
];

export const PROFILE_STATS = [
  { number: '~30',  label: 'Years in Banking' },
  { number: '300+', label: 'Parents Coached' },
  { number: '14+',  label: "Years, D'Cherub Schools" },
  { number: '3',    label: 'Published Books' },
];

export const PROFILE_TIMELINE = [
  { year: '~30 Yrs', title: 'Banking Career', text: 'Served in a first-generation Nigerian bank across Customer Service, Information Technology, Remittances, and Operations.' },
  { year: '2012',    title: 'School Founded', text: "Established D'Cherub Schools in Ajah/Badore, Lagos — Preschool, Primary, and College — while still serving in the bank." },
  { year: "'12-'21", title: 'Books Born',     text: 'Years of interaction with students, teachers, parents, and the community gave birth to the three-book Uplift Trilogy.' },
  { year: '2021',    title: 'Full Pivot',     text: "Signed out of the bank after nearly 30 years and fully committed to D'Cherub Schools, PMC Collective, and The Uplift Movement." },
  { year: '2026',    title: 'New Chapter',    text: 'Launched her flagship parenting eBook "Raising Purposeful Children," completed a successful live masterclass.' },
];

export const PROFILE_WORKS = [
  { title: 'The Magic Tales of Happy Tots', meta: "Book 1 - Children's Fiction", desc: 'Planting the earliest seeds of values, joy, and character in young children.', image: '/magical tots.jpg', badge: 'Book 1' },
  { title: 'The Golden Seeds',              meta: 'Book 2 - Character Development', desc: 'Deepening the journey of character and purpose as children grow.', image: '/The Golden seeds.jpg', badge: 'Book 2' },
  { title: 'The Uplift Kit',                meta: 'Book 3 - Youth Empowerment', desc: 'Equipping young people with practical tools to rise into their full potential.', image: '/the uplift kitt.jpg', badge: 'Book 3' },
  { title: 'Raising Purposeful Children: Focus. Values. Destiny.', meta: 'eBook - 2026 - Available Now', desc: '9 chapters, 130+ pages — PMC Collective, 2026. Available now at www.pmccollective.com', image: null, icon: 'fas fa-book-reader', badge: 'New' },
  { title: 'What Next? A Life Guide for Every Graduate', meta: 'Coming Soon - PMC Collective', desc: 'Forthcoming — guiding young people through the transition from education into life and purpose.', image: null, icon: 'fas fa-graduation-cap', badge: 'Coming Soon' },
];

export const PROFILE_VENTURES = [
  { icon: 'fas fa-school',           title: "D'Cherub Schools",       text: 'Preschool, Primary & College, Ajah/Badore, Lagos. Founded 2012, fully led from 2021.' },
  { icon: 'fas fa-heart',            title: 'PMC Collective',         text: 'Parenting coaching, live masterclasses and digital products for Nigerian parents and the diaspora.' },
  { icon: 'fas fa-seedling',         title: 'The Uplift Movement',    text: 'Youth development platform imparting teenagers and children with values, focus, and purpose.' },
  { icon: 'fas fa-place-of-worship', title: 'Glorious Nation Church', text: 'Associate Pastor — youth ministry, faith community, and character development.' },
];

export const PROFILE_PILLARS = [
  { icon: 'fas fa-bullseye', title: 'Focus & Discipline', text: 'Raising children who can concentrate, self-regulate, and show up consistently.' },
  { icon: 'fas fa-gem',      title: 'Values & Character', text: 'Building the inner moral framework children carry for a lifetime.' },
  { icon: 'fas fa-compass',  title: 'Purpose & Destiny',  text: 'Helping every child discover and walk boldly in their unique gift.' },
];

export const PROFILE_AWARDS = [
  { icon: 'fas fa-trophy',     title: 'Youth Forum Awards — Glorious Nation Church', text: 'Recognized for outstanding contribution to youth development, character formation, and mentorship of teenagers and young people.' },
  { icon: 'fas fa-microphone', title: 'Invited Speaker — Educator Conferences & Youth Forums', text: 'Featured speaker sharing insights from her published Uplift Trilogy and parenting coaching work across Nigeria.' },
];

export const PROFILE_CONNECT = [
  { icon: 'fas fa-globe',          label: 'Website',  value: 'www.pmccollective.com',       href: 'https://www.pmccollective.com' },
  { icon: 'fab fa-whatsapp',       label: 'WhatsApp', value: '+234 802 313 594',             href: 'https://wa.me/2348023135940' },
  { icon: 'fab fa-instagram',      label: 'Instagram',value: '@triciachrisomon',             href: 'https://instagram.com/triciachrisomon' },
  { icon: 'fab fa-tiktok',         label: 'TikTok',   value: '@PMCeee',                      href: 'https://tiktok.com/@pmceee' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Ajah/Badore, Lagos, Nigeria',  href: null },
];

// ── GALLERY ITEMS ──────────────────────────────────────────
// NEW media first (your latest photos/videos), then originals,
// then empty slots for what's still coming.
//
// Filenames below match EXACTLY what is in /public right now
// (including the messy .jpg.jpeg double extensions). When you
// clean those up later, just fix the src here to match.
export const GALLERY_ITEMS = [
  // ===== YOUR NEW MEDIA (shown first) =====
  { id: 301, type: 'image', category: 'community', src: '/gallery-01.jpg', title: 'Moments of Joy', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 302, type: 'image', category: 'community', src: '/gallery-02.jpg.jpeg', title: 'Celebrating Together', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 303, type: 'image', category: 'workshops', src: '/gallery-03.jpg', title: 'Voices of Tomorrow', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 304, type: 'image', category: 'community', src: '/gallery-04.jpg.jpeg', title: 'In Good Company', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 305, type: 'image', category: 'workshops', src: '/gallery-05.jpg.jpeg', title: 'Lessons That Last', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 306, type: 'image', category: 'community', src: '/gallery-06.jpg.jpeg', title: 'Hearts United', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 307, type: 'image', category: 'workshops', src: '/gallery-07.jpg.jpeg', title: 'Building Futures', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 308, type: 'image', category: 'book-launch', src: '/gallery-08.jpg.jpeg', title: 'A Day to Remember', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 309, type: 'image', category: 'book-launch', src: '/gallery-09.jpg', title: 'Stories Unfolding', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 310, type: 'image', category: 'workshops', src: '/gallery-10.jpg.jpeg', title: 'Seeds of Greatness', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 311, type: 'image', category: 'community', src: '/gallery-11.jpg', title: 'Family & Fellowship', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 313, type: 'image', category: 'workshops', src: '/gallery-13.jpg', title: 'Bright Beginnings', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 314, type: 'image', category: 'community', src: '/gallery-14.jpg..jpeg', title: 'Shared Purpose', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 315, type: 'image', category: 'book-launch', src: '/gallery-15.jpg', title: 'Inspired Together', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 316, type: 'image', category: 'workshops', src: '/gallery-16.jpg', title: 'The Joy of Learning', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 317, type: 'image', category: 'community', src: '/gallery-17.jpg', title: 'Community in Bloom', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 318, type: 'image', category: 'community', src: '/gallery-18.jpg', title: 'Making Memories', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 319, type: 'image', category: 'workshops', src: '/gallery-19.jpg', title: 'Empowered Lives', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 320, type: 'image', category: 'community', src: '/gallery-20.jpg', title: 'Together We Rise', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 321, type: 'image', category: 'book-launch', src: '/gallery-21.jpg', title: 'Captured in Time', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 322, type: 'image', category: 'community', src: '/gallery-22.jpg', title: 'Faces of Hope', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 323, type: 'image', category: 'workshops', src: '/gallery-23.jpg', title: 'Growing in Grace', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 328, type: 'image', category: 'community', src: '/gallery-28.jpg', title: 'A Beautiful Gathering', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 512, type: 'video', category: 'community', src: '/gallery-12.jpg.mp4', title: 'Moments in Motion', desc: 'PMC Collective in motion', date: 'June 2026' },
  { id: 601, type: 'video', category: 'workshops', src: '/gallery-video-1.mp4', poster: '/gallery-video-1-poster.jpg', title: 'Our Story, Live', desc: 'PMC Collective in motion', date: 'June 2026' },
  { id: 602, type: 'video', category: 'book-launch', src: '/gallery-video-2.mp4', poster: '/gallery-video-2-poster.jpg', title: 'Voices & Vision', desc: 'PMC Collective in motion', date: 'June 2026' },
  { id: 603, type: 'video', category: 'community', src: '/gallery-video-3.mp4', poster: '/gallery-video-3-poster.jpg', title: 'Caught on Camera', desc: 'PMC Collective in motion', date: 'June 2026' },

  // ===== ORIGINAL ITEMS =====
  { id: 1, type: 'image', category: 'book-launch', src: '/pmc 3.jpg', title: 'Book Launch Celebration', desc: 'Magical Tales launch at The Glorious Nation Church', date: 'March 2024' },
  { id: 2, type: 'image', category: 'community', src: '/comm celebration.jpg', title: 'Community Impact Day', desc: 'Coming together for community upliftment', date: 'February 2024' },
  { id: 3, type: 'image', category: 'book-launch', src: '/pmc 3.jpg', title: 'The Glorious Nation Church', desc: 'Beautiful venue for our book launch event', date: 'March 2024' },
  { id: 4, type: 'image', category: 'workshops', src: '/comm celebration.jpg', title: 'Leadership Workshop', desc: 'Inspiring talk on teamwork and collaboration', date: 'January 2024' },
  { id: 5, type: 'image', category: 'workshops', src: '/pmc 3.jpg', title: 'Entrepreneurship Training', desc: 'Soap business workshop, practical learning in action', date: 'November 2023' },
  { id: 6, type: 'image', category: 'community', src: '/comm celebration.jpg', title: 'Community Fellowship', desc: 'Celebrating milestones with our growing community', date: 'December 2023' },
  { id: 7, type: 'image', category: 'workshops', src: '/pmc 3.jpg', title: 'Adire Fabric Workshop', desc: 'Traditional fabric dyeing workshop with community members', date: 'October 2023' },
  { id: 8, type: 'image', category: 'community', src: '/pmc 3.jpg', title: 'Birthday Celebration', desc: "Celebrating our founder's milestone with love", date: 'August 2023' },
  { id: 9, type: 'image', category: 'book-launch', src: '/magical tots.jpg', title: 'Magical Tales of Happy Tots', desc: "Our best-selling children's book", date: 'March 2024' },
  { id: 10, type: 'image', category: 'book-launch', src: '/the uplift kitt.jpg', title: 'The Uplift Kit', desc: 'A guide to personal upliftment and growth', date: 'March 2024' },
  { id: 11, type: 'image', category: 'book-launch', src: '/The Golden seeds.jpg', title: 'The Golden Seeds', desc: 'Wisdom for the next generation', date: 'March 2024' },

  // ===== EMPTY SLOTS for photos still coming (gallery-24.jpg … gallery-42.jpg) =====
  { id: 324, type: 'image', category: 'book-launch', src: '/gallery-24.jpg', title: 'Milestones & Memories', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 325, type: 'image', category: 'community', src: '/gallery-25.jpg', title: 'Moments of Joy', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 326, type: 'image', category: 'workshops', src: '/gallery-26.jpg', title: 'Celebrating Together', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 327, type: 'image', category: 'book-launch', src: '/gallery-27.jpg', title: 'Voices of Tomorrow', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 329, type: 'image', category: 'workshops', src: '/gallery-29.jpg', title: 'Lessons That Last', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 330, type: 'image', category: 'book-launch', src: '/gallery-30.jpg', title: 'Hearts United', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 331, type: 'image', category: 'community', src: '/gallery-31.jpg', title: 'Building Futures', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 332, type: 'image', category: 'workshops', src: '/gallery-32.jpg', title: 'A Day to Remember', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 333, type: 'image', category: 'book-launch', src: '/gallery-33.jpg', title: 'Stories Unfolding', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 334, type: 'image', category: 'community', src: '/gallery-34.jpg', title: 'Seeds of Greatness', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 335, type: 'image', category: 'workshops', src: '/gallery-35.jpg', title: 'Family & Fellowship', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 336, type: 'image', category: 'book-launch', src: '/gallery-36.jpg', title: 'Bright Beginnings', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 337, type: 'image', category: 'community', src: '/gallery-37.jpg', title: 'Shared Purpose', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 338, type: 'image', category: 'workshops', src: '/gallery-38.jpg', title: 'Inspired Together', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 339, type: 'image', category: 'book-launch', src: '/gallery-39.jpg', title: 'The Joy of Learning', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 340, type: 'image', category: 'community', src: '/gallery-40.jpg', title: 'Community in Bloom', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 341, type: 'image', category: 'workshops', src: '/gallery-41.jpg', title: 'Making Memories', desc: 'PMC Collective community moments', date: 'June 2026' },
  { id: 342, type: 'image', category: 'book-launch', src: '/gallery-42.jpg', title: 'Empowered Lives', desc: 'PMC Collective community moments', date: 'June 2026' },

  // ===== EMPTY SLOTS for videos still coming (gallery-video-4 … 6) =====
  { id: 704, type: 'video', category: 'community', src: '/gallery-video-4.mp4', poster: '/gallery-video-4-poster.jpg', title: 'Moments in Motion', desc: 'PMC Collective in motion', date: 'June 2026' },
  { id: 705, type: 'video', category: 'workshops', src: '/gallery-video-5.mp4', poster: '/gallery-video-5-poster.jpg', title: 'Moments in Motion', desc: 'PMC Collective in motion', date: 'June 2026' },
  { id: 706, type: 'video', category: 'book-launch', src: '/gallery-video-6.mp4', poster: '/gallery-video-6-poster.jpg', title: 'Moments in Motion', desc: 'PMC Collective in motion', date: 'June 2026' },
];
