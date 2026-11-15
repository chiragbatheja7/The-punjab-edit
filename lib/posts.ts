export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  readTime: string;
  author: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "weekend-cycling-routes-chandigarh",
    title: "A Beginner’s Guide to Weekend Cycling in Chandigarh",
    description: "How to plan a relaxed, safer first cycling morning around Chandigarh, from route choice to water, visibility and pacing.",
    category: "Sport & Outdoors",
    location: "Chandigarh",
    date: "2026-11-15",
    readTime: "5 min read",
    author: "The Punjab Edit team",
    intro: "Chandigarh’s planned sectors, green spaces and broad avenues make it tempting to explore the city on two wheels. A good first ride is less about distance and more about choosing a calm route, starting early and returning with enough energy to want to ride again.",
    sections: [
      { heading: "Keep the first ride short", paragraphs: ["Aim for a comfortable 30–45 minute outing rather than chasing a distance target. Choose familiar roads and avoid turning a first ride into a test of endurance.", "Plan a simple loop with an easy point to turn back. Traffic, weather and road conditions can change, so treat any route suggestion as a starting point and follow local signs and restrictions."] },
      { heading: "Prepare before leaving", paragraphs: ["Check tyre pressure, brakes, chain condition and lights. Wear a properly fitted helmet, use front and rear lights even in daylight, and choose bright or reflective clothing.", "Carry water, a charged phone and a small repair kit if you know how to use it. Tell someone your rough route and expected return time."] ,
        bullets: ["Start in daylight and favour quieter roads or designated cycling paths where available.", "Ride predictably, signal turns and do not assume drivers have seen you.", "Keep headphones off so you can hear traffic and other road users."] },
      { heading: "Build consistency, not speed", paragraphs: ["Ride at a pace where you can still speak in short sentences. Take a break when needed, and increase either time or distance gradually—not both at once.", "The best weekend route is one you can repeat comfortably. Keep a note of what felt safe, where you needed water and which sections were busy."] }
    ]
  },
  {
    slug: "simple-strength-training-beginners",
    title: "A Simple Strength Routine for Busy Beginners",
    description: "A realistic two-day strength plan using basic movements, gradual progression and recovery—without needing a complicated gym programme.",
    category: "Fitness",
    location: "Everywhere",
    date: "2026-11-14",
    readTime: "6 min read",
    author: "The Punjab Edit team",
    intro: "Starting strength training can feel overwhelming when every feed recommends a different split. For a beginner with a busy workday, two short full-body sessions each week are a sensible place to begin.",
    sections: [
      { heading: "Start with movement patterns", paragraphs: ["A balanced beginner session can include a squat or sit-to-stand, a hip hinge, a push, a pull and a simple core exercise. Choose versions that you can perform with control and without pain.", "For example: chair squats, glute bridges, wall or incline push-ups, a resistance-band row and a dead bug. These are examples, not a personalised medical or rehabilitation programme."] },
      { heading: "A practical two-day template", paragraphs: ["On two non-consecutive days, warm up for five minutes, then perform one to three comfortable sets of each movement. Start with a number of repetitions that leaves a few good-quality reps in reserve.", "Rest between sets and stop if you feel sharp pain, dizziness or unusual shortness of breath. If you have an injury or medical concern, get advice from a qualified professional before starting."] ,
        bullets: ["Day A: squat pattern, push, row and core.", "Day B: hip hinge, split squat or step-up, push variation and core.", "Keep a simple log of exercises, sets and repetitions."] },
      { heading: "Progress slowly", paragraphs: ["When the routine feels manageable for two sessions in a row, add a repetition or a small amount of resistance. Do not increase everything at once.", "Sleep, regular meals and recovery matter. Consistency over several months is more useful than an exhausting first week."] }
    ]
  },
  {
    slug: "slow-weekend-patiala",
    title: "How to Plan a Slow, Culture-Filled Weekend in Patiala",
    description: "A low-pressure way to explore Patiala’s heritage, food and local character while leaving room for rest and spontaneous discoveries.",
    category: "Lifestyle & Local",
    location: "Patiala",
    date: "2026-11-13",
    readTime: "5 min read",
    author: "The Punjab Edit team",
    intro: "A weekend in Patiala does not need a packed itinerary. The city’s history and everyday street life are best enjoyed when you leave time to pause, look around and ask locals what is worth seeing that day.",
    sections: [
      { heading: "Choose one heritage anchor", paragraphs: ["Make a heritage site or historic neighbourhood the main focus of your morning. Check current opening hours, entry rules and any restrictions before travelling; these details can change.", "Give yourself time to notice the architecture and setting instead of rushing between several stops. Respect signs, private property and photography rules."] },
      { heading: "Make food part of the experience", paragraphs: ["Pick one local meal or snack stop rather than trying to cover every famous place in a single day. Ask about ingredients if you have dietary restrictions, and choose busy, clean establishments with food prepared and served safely.", "A short walk through a market can be as memorable as a formal attraction. Keep cash or a digital payment option handy, and be considerate when photographing people or shops."] },
      { heading: "Leave space in the plan", paragraphs: ["A relaxed afternoon might mean a second walk, a bookshop, a cup of tea or simply returning to your accommodation for a break.", "Before publishing or following a detailed itinerary, verify transport, access and opening information locally. Treat this guide as inspiration, not a live directory."] }
    ]
  },
  {
    slug: "everyday-life-nabha",
    title: "Everyday Nabha: Finding the Good in a Smaller-City Routine",
    description: "A thoughtful look at local routines, neighbourhood businesses and small habits that make everyday life in Nabha feel connected.",
    category: "Lifestyle & Local",
    location: "Nabha",
    date: "2026-11-12",
    readTime: "4 min read",
    author: "The Punjab Edit team",
    intro: "Not every useful local story has to be a top-ten list. In a smaller city such as Nabha, daily life is shaped by familiar markets, regular faces, family routines and the practical places people return to every week.",
    sections: [
      { heading: "Notice the neighbourhood", paragraphs: ["Try exploring one nearby market or street on foot. Look for the services people rely on—repair shops, grocers, tailors, cafés and other independent businesses.", "If you write about a business, speak to the owner, confirm the details and get permission before using photographs or personal stories. A local guide is only useful when its information is accurate."] },
      { heading: "Support local without romanticising it", paragraphs: ["Small businesses can bring convenience and character to a neighbourhood, but readers still need practical details: what is offered, approximate price range, accessibility and when the information was checked.", "Be transparent about sponsored visits, free products or other commercial relationships. A clear disclosure helps readers understand the context of a recommendation."] },
      { heading: "Make the story useful", paragraphs: ["A strong local article answers a real question: where can someone get a bicycle repaired, what should a first-time visitor know, or how does a market change during a festival?", "Keep notes, verify names and timings, and update the article when something changes. Local usefulness is built through care and maintenance."] }
    ]
  },
  {
    slug: "healthy-workday-habits",
    title: "Five Small Habits for a Healthier Desk-Based Workday",
    description: "Simple ways to add movement, hydration, food breaks and a calmer finish to a long day at a desk.",
    category: "Health & Lifestyle",
    location: "Everywhere",
    date: "2026-11-11",
    readTime: "5 min read",
    author: "The Punjab Edit team",
    intro: "A desk-based job can make the day feel like one long stretch of sitting. You do not need a perfect routine to make it better; a few repeatable habits can make workdays feel more balanced.",
    sections: [
      { heading: "Break up long sitting periods", paragraphs: ["Stand, stretch or walk briefly between tasks when practical. A short movement break is easier to repeat than waiting for one large workout to solve an otherwise inactive day.", "Use natural transitions—after a meeting, before lunch or when you refill water—as reminders to move."] },
      { heading: "Make food and water easier", paragraphs: ["Keep water within reach and take a real lunch break away from your screen when possible. Regular meals that include a mix of vegetables or fruit, protein and fibre can help make the day feel more structured.", "There is no single ideal meal plan for everyone. Adapt food choices to your needs, budget, culture and any professional dietary advice you have received."] ,
        bullets: ["Take a brief walk during one break.", "Prepare a simple lunch or snack in advance.", "Keep a consistent time to finish work where your role allows."] },
      { heading: "Create a clear end to the day", paragraphs: ["Write down the next task before closing your laptop. This small ritual can reduce the temptation to keep mentally working after hours.", "Protect sleep and make room for activities you enjoy. Sustainable habits should support your life, not become another source of pressure."] }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
