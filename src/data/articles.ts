export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: number;
  /** Gradient class used for the article's cover, in place of a stock photo. */
  cover: string;
  coverIcon: string;
  content: string[];
}

/**
 * SAMPLE health-education articles. Content is general educational
 * information only, not medical advice.
 */
export const articles: Article[] = [
  {
    slug: "understanding-high-blood-pressure",
    title: "Understanding High Blood Pressure: The Silent Risk You Can Manage",
    category: "Heart Health",
    excerpt:
      "High blood pressure rarely causes symptoms — which is exactly why it's dangerous. Here's how to check, manage and lower your numbers.",
    author: "Dr. Ananya Deshmukh",
    authorRole: "Consultant Cardiologist",
    date: "2026-08-12",
    readingTime: 6,
    cover: "from-rose-400 to-red-500",
    coverIcon: "heart",
    content: [
      "High blood pressure (hypertension) is called the 'silent killer' for a reason: most people feel perfectly fine while their blood vessels are under sustained strain. Left unmanaged, it quietly raises the risk of heart attack, stroke, kidney disease and vision loss.",
      "A reading of 120/80 mmHg is considered normal. Consistent readings above 140/90 mmHg usually mean hypertension, and anything in between is 'elevated' — a warning zone worth acting on. Because blood pressure fluctuates through the day, diagnosis should be based on multiple readings on different days, ideally including a home log or 24-hour monitoring.",
      "The good news is that blood pressure responds remarkably well to lifestyle change. Reducing salt to under 5 grams a day, brisk walking for 30 minutes most days, maintaining a healthy weight, limiting alcohol and managing stress can each bring measurable drops in readings — often enough, in early hypertension, to delay or even avoid medication.",
      "That said, medication is not a failure. Modern antihypertensives are effective, well tolerated and protect your organs directly. If your doctor prescribes one, take it consistently — and never stop or adjust doses on your own, even when readings improve.",
      "At our cardiology department, we offer comprehensive blood-pressure evaluation, 24-hour ambulatory monitoring and personalised management plans. If you haven't had your blood pressure checked in the past year, make it your next appointment — it takes five minutes and could add years to your life.",
    ],
  },
  {
    slug: "living-well-with-diabetes",
    title: "Living Well With Diabetes: Small Habits, Big Differences",
    category: "Diabetes",
    excerpt:
      "Diabetes management isn't about restriction — it's about rhythm. Practical steps for food, movement, monitoring and foot care.",
    author: "Dr. Sameer Rao",
    authorRole: "Consultant Internal Medicine",
    date: "2026-08-05",
    readingTime: 7,
    cover: "from-amber-400 to-orange-500",
    coverIcon: "droplet",
    content: [
      "A diabetes diagnosis changes how you think about everyday choices — but it doesn't have to shrink your life. With a steady routine, most people with diabetes live full, energetic lives and avoid the complications that make the disease scary.",
      "Food is the foundation. You don't need an exotic diet: build meals around vegetables, whole grains, pulses and lean protein, keep sweets as occasional celebrations rather than daily habits, and watch portion sizes. Spreading carbohydrates evenly through the day helps prevent the spikes and crashes that leave you tired.",
      "Movement acts like medicine. A 30-minute walk after meals can lower post-meal glucose significantly, and regular resistance training improves how your muscles use insulin. Aim for at least 150 minutes of moderate activity a week — broken into short walks if that's easier to sustain.",
      "Monitoring is your feedback loop. Check your HbA1c every three to six months, keep an eye on fasting and post-meal sugars if advised, and track what patterns emerge. Numbers are information, not judgement — they tell you and your doctor what to adjust.",
      "Finally, protect your feet and eyes. Diabetes affects small blood vessels and nerves silently; an annual eye exam and a quick daily foot check catch problems years before they become serious. Our internal medicine and endocrinology team runs a dedicated diabetes clinic offering exactly this kind of coordinated, preventive care.",
    ],
  },
  {
    slug: "first-1000-days-child-nutrition",
    title: "The First 1,000 Days: Why Early Nutrition Shapes Lifelong Health",
    category: "Child Health",
    excerpt:
      "From pregnancy to a child's second birthday, nutrition builds the foundation for brain, body and immunity. What parents should focus on.",
    author: "Dr. Kavita Sharma",
    authorRole: "Consultant Pediatrician",
    date: "2026-07-22",
    readingTime: 5,
    cover: "from-sky-400 to-blue-500",
    coverIcon: "baby",
    content: [
      "Scientists call the period from conception to a child's second birthday 'the first 1,000 days' — a window when the brain grows faster than at any other time and nutritional foundations are set for life.",
      "For expectant mothers, the priorities are simple but important: adequate calories, iron and folic acid, calcium, and regular antenatal check-ups. Undernutrition or uncontrolled anaemia during pregnancy has effects that echo well beyond birth.",
      "After birth, exclusive breastfeeding for the first six months gives a baby antibodies and nutrients perfectly tailored to their needs. From six months, complementary foods should begin alongside breast milk — starting with soft, iron-rich foods and gradually increasing variety and texture.",
      "Watch growth, not weight alone. Your pediatrician tracks height, weight and head circumference on growth charts — steady progress matters more than any single number. Persistent refusal to eat, frequent illness or developmental delays deserve early evaluation rather than a wait-and-see approach.",
      "Our pediatrics department runs well-baby clinics, vaccination programmes and nutrition counselling, so you always have a partner through these precious first years.",
    ],
  },
  {
    slug: "recognising-stroke-fast",
    title: "Minutes Matter: Recognising the Signs of Stroke With F.A.S.T.",
    category: "Preventive Care",
    excerpt:
      "Every minute of delay in stroke treatment costs brain cells. Learn the F.A.S.T. signs and what to do — and never do — when they appear.",
    author: "Dr. Meera Krishnan",
    authorRole: "Consultant Neurologist",
    date: "2026-07-10",
    readingTime: 4,
    cover: "from-violet-400 to-purple-600",
    coverIcon: "brain",
    content: [
      "A stroke is a medical emergency in which blood flow to part of the brain is blocked or a vessel bleeds. The treatments that reverse strokes work in a narrow window — often just a few hours — so recognising the signs quickly is the single most important thing a bystander can do.",
      "Remember F.A.S.T.: Face — is one side of the face drooping? Arms — when both arms are raised, does one drift down? Speech — is it slurred, confused or strange? Time — if any of these are present, call emergency services immediately.",
      "Note the exact time symptoms began and share it with the ambulance team; treatment eligibility depends on it. Do not give food, water or medication — swallowing may be impaired. Do not wait to 'see if it passes': even if symptoms vanish, a mini-stroke needs urgent evaluation to prevent a major one.",
      "Our neurology department runs a dedicated stroke unit with 24/7 CT imaging, thrombolysis capability and a golden-hour protocol designed to begin treatment within minutes of arrival.",
    ],
  },
  {
    slug: "managing-stress-burnout",
    title: "Stress and Burnout: When to Rest, When to Seek Help",
    category: "Mental Wellness",
    excerpt:
      "Stress is a normal part of life; burnout is a signal something must change. How to tell the difference — and where to find support.",
    author: "Dr. Priya Nair",
    authorRole: "Consultant, Employee & Lifestyle Health",
    date: "2026-06-28",
    readingTime: 6,
    cover: "from-emerald-400 to-teal-600",
    coverIcon: "mind",
    content: [
      "Everyone feels stressed sometimes — before an exam, a deadline, a difficult conversation. Short bursts of stress are normal and even useful. Burnout is different: it's a state of emotional exhaustion, detachment and reduced performance that builds up when stress becomes chronic and recovery never happens.",
      "Watch for the classic signs: constant tiredness that sleep doesn't fix, growing cynicism about work you once cared about, difficulty concentrating, irritability with people you love, and physical symptoms like headaches, poor appetite or disturbed sleep.",
      "The response starts with boundaries — realistic working hours, protected sleep, and time for the activities and relationships that refill you. Exercise is one of the most reliable mood stabilisers available, and reducing late-night screens genuinely improves sleep quality.",
      "But sometimes self-help isn't enough, and reaching out is strength, not weakness. Persistent low mood, hopelessness or thoughts of self-harm deserve prompt professional attention. Counselling and, when appropriate, medication are effective, confidential and increasingly common.",
      "If you're struggling, speak to a doctor or a mental-health professional. Seeking help early prevents a difficult phase from becoming a difficult year.",
    ],
  },
  {
    slug: "eating-for-heart-health",
    title: "Eating for a Healthy Heart: What Actually Works",
    category: "Nutrition",
    excerpt:
      "Forget fads. The evidence for heart-healthy eating points to a few consistent, delicious habits anyone can adopt.",
    author: "Dr. Rohan Iyer",
    authorRole: "Consultant Non-Invasive Cardiology",
    date: "2026-06-15",
    readingTime: 5,
    cover: "from-lime-400 to-green-600",
    coverIcon: "heart",
    content: [
      "Nutrition headlines change weekly, but the evidence for heart health has been remarkably consistent for decades. The pattern that protects your heart isn't a single superfood — it's an overall way of eating.",
      "Build your plate around vegetables, fruits, whole grains, lentils and beans, nuts, and healthy oils like mustard, groundnut or olive. Fish a couple of times a week adds protective omega-3 fats. This is close to the Mediterranean and DASH patterns — the most studied heart-friendly diets in the world.",
      "Just as important is what to dial down: excess salt, deep-fried snacks, processed meats, refined sugar and trans fats hidden in packaged baked goods. Reading labels for sodium and fat takes seconds and reshapes a shopping trolley quickly.",
      "Alcohol and heart health is a common question — the safest answer is that any protection is marginal and the risks are real, so less is better. And remember, diet works alongside exercise, sleep, stress management and not smoking.",
      "Small, sustainable changes beat dramatic diets every time. Swap one snack a day, add one vegetable serving, walk after one meal — then build from there.",
    ],
  },
  {
    slug: "exercise-after-40",
    title: "Fit After 40: The Exercise Plan Your Body Will Thank You For",
    category: "Fitness",
    excerpt:
      "Your forties change what exercise needs to do for you. A balanced weekly plan for strength, cardio, balance and flexibility.",
    author: "Dr. Aditya Verma",
    authorRole: "Consultant Sports Orthopedics",
    date: "2026-05-30",
    readingTime: 6,
    cover: "from-orange-400 to-rose-500",
    coverIcon: "activity",
    content: [
      "From around age 40, we begin losing muscle mass and bone density slowly each year — unless we actively push back. The right exercise plan does exactly that, while protecting joints and the heart.",
      "Strength training is non-negotiable. Two to three sessions a week of resistance exercise — weights, resistance bands, or bodyweight moves like squats and wall push-ups — preserves muscle, supports bone density and keeps metabolism steady.",
      "Add moderate cardio — brisk walking, cycling or swimming — for at least 150 minutes a week to train your heart and lungs. Balance work (standing on one leg while brushing your teeth counts) and a few minutes of daily stretching round out the plan and reduce falls and stiffness.",
      "Start where you are. If you've been sedentary, begin with 10-minute walks and light resistance, and build gradually over eight weeks. If you have chest pain, dizziness during exertion, or a chronic condition, get a check-up first — our preventive health team can assess your readiness and design a safe starting plan.",
      "Consistency beats intensity. The best exercise plan is the one you'll still be doing next year.",
    ],
  },
  {
    slug: "antenatal-care-checklist",
    title: "Your Antenatal Care Checklist: A Calm, Month-by-Month Guide",
    category: "Women's Health",
    excerpt:
      "Pregnancy is a journey of appointments, scans and choices. A simple checklist of what to expect and when.",
    author: "Dr. Priya Nair",
    authorRole: "Consultant Obstetrics & Gynaecology",
    date: "2026-05-18",
    readingTime: 5,
    cover: "from-pink-400 to-fuchsia-500",
    coverIcon: "person",
    content: [
      "Good antenatal care is one of the strongest predictors of a healthy pregnancy and delivery. Here's a simple map of what happens when — so you can plan with confidence rather than worry.",
      "First trimester: confirm the pregnancy, start folic acid, book your booking visit with blood tests (blood group, haemoglobin, thyroid, infections) and get your first ultrasound around 8–12 weeks. Discuss any existing medications with your doctor immediately.",
      "Second trimester: the anomaly scan at 18–22 weeks is the big one — a detailed look at your baby's development. You'll feel movements by 20–24 weeks. Continue iron and calcium as advised and keep light-to-moderate activity in your routine.",
      "Third trimester: growth scans, glucose testing for gestational diabetes, and birth-planning discussions — including pain-relief options and, if relevant, your preferred delivery plan. Know the warning signs to report: bleeding, reduced movements, severe headache or swelling.",
      "Our obstetrics team supports mothers through every step with antenatal classes, dedicated scanning and a warm, experienced nursing team. Book an antenatal consultation early — early care is the easiest care.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(article: Article, count = 3) {
  const sameCategory = articles.filter((a) => a.slug !== article.slug && a.category === article.category);
  const others = articles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...sameCategory, ...others].slice(0, count);
}

export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));
