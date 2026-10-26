export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  /** Meta description override; keep under ~160 characters. Falls back to `excerpt`. */
  seoDescription?: string;
  image: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "how-to-reach-cannabis-consumers-targeted-email-list",
    category: "Cannabis Email Marketing",
    title: "How to Reach Cannabis Consumers With a Targeted Cannabis Email List",
    image: "/images/blog/article-hero.jpg",
    excerpt:
      "Marketing a cannabis or CBD brand isn’t like marketing most products. Many major ad platforms restrict cannabis advertising, and broad campaigns waste budget on people who will never buy. That’s why more brands are turning to a targeted cannabis email list to reach consumers directly.",
    seoDescription:
      "Reach cannabis and CBD consumers directly with a targeted, opt-in cannabis email list: who you can target, why opt-in works, and tips for better campaigns.",
    content: [
      {
        type: "heading",
        text: "Why Cannabis Brands Struggle With Traditional Advertising",
      },
      {
        type: "paragraph",
        text: "Dispensaries, CBD companies and cannabis accessory brands often find their ads rejected or limited on social media and search platforms. Even when ads run, targeting options are restricted, so you can’t always reach the people most likely to respond.",
      },
      {
        type: "paragraph",
        text: "Email gives you a direct line to the consumer. With the right cannabis mailing list, your message lands in front of people who have already shown interest in cannabis, CBD or wellness products.",
      },
      {
        type: "heading",
        text: "Who You Can Reach With Cannabis Email Lists",
      },
      {
        type: "lead",
        text: "A quality cannabis email list lets you choose the audience that fits your offer:",
      },
      {
        type: "list",
        items: [
          "Cannabis users: consumers interested in cannabis products and lifestyle brands.",
          "CBD buyers: a CBD email list helps wellness and CBD brands reach people who already purchase CBD products.",
          "Dispensary shoppers: consumers who visit dispensaries, ideal for promoting new locations, deals and loyalty programs.",
          "Medical marijuana patients: an audience for brands and services focused on the medical cannabis market.",
          "Cannabis investors and enthusiasts: people following the industry, useful for cannabis businesses, events and financial offers.",
        ],
      },
      {
        type: "heading",
        text: "Opt-In Email Leads Get Better Results",
      },
      {
        type: "paragraph",
        text: "Not all email lists are equal. Opt-in email leads come from consumers who have agreed to receive offers, which means better deliverability and stronger engagement.",
      },
      {
        type: "callout",
        text: "Sending to verified contacts also protects your sender reputation, so more of your emails reach the inbox instead of spam.",
      },
      {
        type: "heading",
        text: "Tips for a Successful Cannabis Email Campaign",
      },
      {
        type: "lead",
        text: "Choose a focused audience.",
      },
      {
        type: "paragraph",
        text: "A campaign to dispensary shoppers in a specific state will outperform a broad national send.",
      },
      {
        type: "lead",
        text: "Lead with value.",
      },
      {
        type: "paragraph",
        text: "Discounts, new product launches and educational content work well with cannabis consumers.",
      },
      {
        type: "lead",
        text: "Keep it compliant.",
      },
      {
        type: "paragraph",
        text: "Follow your state’s cannabis advertising rules and include a clear unsubscribe option in every email.",
      },
      {
        type: "lead",
        text: "Test and track.",
      },
      {
        type: "paragraph",
        text: "Watch opens, clicks and conversions, and adjust your subject lines and offers based on the results.",
      },
      {
        type: "image",
        src: "/images/blog/article-hero3.jpg",
        alt: "Laptop showing a campaign analytics dashboard",
      },
      {
        type: "heading",
        text: "Combine Email With Direct Mail",
      },
      {
        type: "paragraph",
        text: "For even better response rates, pair your email campaign with cannabis direct mail. A postcard followed by an email reinforces your message and gives consumers two chances to respond.",
      },
      {
        type: "heading",
        text: "Get Started Today",
      },
      {
        type: "paragraph",
        text: "Cannabis Email Lists helps cannabis and CBD brands reach the right consumers with targeted, opt-in data. Request your free counts today to see how many cannabis consumers you can reach in your market.",
      },
    ],
  },
  {
    slug: "how-cannabis-industry-data-gets-compiled",
    category: "Cannabis Industry Data",
    title: "How Cannabis Industry Data Gets Compiled",
    image: "/images/custom/blog-hero.jpg",
    excerpt:
      "If you're buying a cannabis email list, the first question worth asking is where the records came from. Most providers answer it vaguely, and the answer matters more in this industry than in almost any other.",
    content: [
      {
        type: "heading",
        text: "How Cannabis Industry Data Is Compiled",
      },
      {
        type: "paragraph",
        text: "If you're buying a cannabis email list, the first question worth asking is where the records came from. Most providers answer it vaguely, and the answer matters more in this industry than in almost any other.",
      },
      {
        type: "paragraph",
        text: "Cannabis is federally illegal and state-regulated, which means the usual data sources either don't apply or apply unevenly. A national consumer database that works fine for retail or insurance doesn't map cleanly onto an industry where legal status, licensing structure, and public record availability change at every state line.",
      },
      {
        type: "paragraph",
        text: "So here is how cannabis industry data actually gets compiled, source by source, and what each one is worth.",
      },
      {
        type: "heading",
        text: "State License Registries",
      },
      {
        type: "paragraph",
        text: "This is the foundation of most legitimate cannabis B2B data.",
      },
      {
        type: "paragraph",
        text: "Every state with a legal market licenses its operators, and most publish those licenses as public record. That gives you a verified list of who is legally operating, what they're licensed to do, and where.",
      },
      {
        type: "lead",
        text: "Cannabis license data typically breaks down by type:",
      },
      {
        type: "list",
        items: [
          "Cultivation",
          "Manufacturing and processing",
          "Distribution",
          "Retail and dispensary",
          "Testing laboratories",
          "Delivery services",
          "Microbusiness",
        ],
      },
      {
        type: "paragraph",
        text: "The value is that it's authoritative. A licensed dispensary in Colorado is a licensed dispensary — not an inference from a website scrape or a directory listing that went stale three years ago.",
      },
      {
        type: "callout",
        text: "The limitation is that license registries give you the business, not the person. Most publish a business name, address, license number, and status. Some include a contact name. Very few include an email address.",
      },
      {
        type: "paragraph",
        text: "Turning a registry into a usable dispensary email list requires a second step, and that's where compilation quality diverges sharply between providers.",
      },
      {
        type: "heading",
        text: "Business Registration and Corporate Filings",
      },
      {
        type: "paragraph",
        text: "Secretary of State filings add the corporate layer that license data omits: registered agents, officers, formation dates, and parent company relationships.",
      },
      {
        type: "paragraph",
        text: "That matters in cannabis specifically because of how ownership is structured. Multi-state operators frequently hold licenses under separate LLCs in each state, and a license registry alone won't reveal that fourteen entities report to the same corporate parent. Corporate filings connect them.",
      },
      {
        type: "paragraph",
        text: "For anyone selling into MSOs rather than independents, this is where the targeting actually happens.",
      },
      {
        type: "image",
        src: "/images/blog/article-mid.jpg",
        alt: "Hands typing on a laptop with data overlays",
      },
      {
        type: "heading",
        text: "Trade Shows and Industry Events",
      },
      {
        type: "paragraph",
        text: "Cannabis has an unusually dense event calendar — MJBizCon, Hall of Flowers, regional expos, cultivation conferences. Attendee and exhibitor data from these events is a common source for cannabis business leads.",
      },
      {
        type: "paragraph",
        text: "Quality varies enormously. Exhibitor lists are usually reliable and often published openly. Attendee data is a different matter: it depends on what the registrant consented to, whether the organizer licenses it, and how it was collected. Some is properly permissioned. Some isn't, and gets resold several times before reaching an end buyer.",
      },
      {
        type: "callout",
        text: "Ask directly whether event-sourced records came with distribution rights attached.",
      },
      {
        type: "heading",
        text: "Industry Publications and Subscriptions",
      },
      {
        type: "paragraph",
        text: "Trade publications, newsletters, and research subscriptions generate opt-in data from people who work in the sector and identified themselves as such.",
      },
      {
        type: "paragraph",
        text: "This is generally the highest-intent source in a cannabis industry database. Someone who subscribed to a cultivation trade journal has told you their role, their interests, and their willingness to receive email — three things a scraped record can never confirm.",
      },
      {
        type: "paragraph",
        text: "The tradeoff is volume. Subscription-sourced data is smaller than compiled data and skews toward the segment of the industry that reads trade press.",
      },
      {
        type: "heading",
        text: "Company Websites and Directories",
      },
      {
        type: "paragraph",
        text: "Web-sourced data fills gaps that public records leave open — contact names, direct emails, role titles, company size indicators.",
      },
      {
        type: "paragraph",
        text: "It's also where quality problems concentrate. Scraped data has no verification behind it and decays quickly. In an industry with cannabis's turnover, it decays faster than most: businesses close, licenses lapse, and staff move between operators constantly.",
      },
      {
        type: "callout",
        text: "A provider using web sources should be running verification on top of them. One using web sources as the verification is selling you guesses.",
      },
      {
        type: "image",
        src: "/images/blog/article-idea.jpg",
        alt: "Data, analysis, and idea neon graphic",
      },
      {
        type: "heading",
        text: "Consumer Data: A Separate Question Entirely",
      },
      {
        type: "paragraph",
        text: "Everything above concerns B2B — reaching businesses in the cannabis supply chain.",
      },
      {
        type: "paragraph",
        text: "Consumer cannabis data is a different category with different problems. Sources include survey and questionnaire responses, purchase-behavior modelling, lifestyle and interest indicators, and loyalty programme data where dispensaries have licensed it.",
      },
      {
        type: "lead",
        text: "Two things to understand:",
      },
      {
        type: "list",
        items: [
          "Much of it is inferred rather than confirmed — a \"cannabis consumer\" flag frequently comes from modelling rather than a direct statement of use.",
          "The regulatory picture around marketing to cannabis consumers is considerably tighter than around B2B, with age-verification requirements and state-specific advertising restrictions that vary widely.",
        ],
      },
      {
        type: "paragraph",
        text: "If someone offers you a consumer cannabis file, ask specifically how the cannabis affinity was determined.",
      },
      {
        type: "heading",
        text: "What Happens After Compilation",
      },
      {
        type: "paragraph",
        text: "Raw compiled data isn't a usable cannabis mailing list. The processing between compilation and delivery is what separates providers.",
      },
      {
        type: "lead",
        text: "Deduplication across sources.",
      },
      {
        type: "paragraph",
        text: "The same dispensary appears in a license registry, a trade show exhibitor list, and three directories. Merging those into one record without losing detail is non-trivial.",
      },
      {
        type: "lead",
        text: "License status verification.",
      },
      {
        type: "paragraph",
        text: "Cannabis businesses lose licenses, get suspended, and close at higher rates than most industries. A record valid at compilation may not be valid at delivery.",
      },
      {
        type: "lead",
        text: "Email verification.",
      },
      {
        type: "paragraph",
        text: "Confirming addresses are deliverable before the file ships, rather than letting your bounce rate discover it afterward. This is what separates verified cannabis contacts from a name dump.",
      },
      {
        type: "lead",
        text: "Suppression.",
      },
      {
        type: "paragraph",
        text: "Removing addresses that have opted out, complained, or been flagged.",
      },
      {
        type: "lead",
        text: "Enhancement.",
      },
      {
        type: "paragraph",
        text: "Appending firmographics — employee count, revenue estimate, license type, years operating — that make real targeting possible.",
      },
      {
        type: "heading",
        text: "What to Ask Your Provider",
      },
      {
        type: "lead",
        text: "Before you buy a cannabis email list, ask:",
      },
      {
        type: "list",
        items: [
          "Which sources make up this file, and in what proportion?",
          "How recently was license status verified?",
          "Are email addresses verified, and by what method?",
          "How often is the file refreshed?",
          "What suppression is applied?",
          "Can I select by license type, state, and business size?",
          "What are the usage terms?",
        ],
      },
      {
        type: "paragraph",
        text: "A provider who compiled the data themselves answers these easily. One reselling a file they bought often can't.",
      },
      {
        type: "heading",
        text: "Why It Matters More in Cannabis",
      },
      {
        type: "paragraph",
        text: "In most industries, poor data costs you response rate. In cannabis it costs more than that.",
      },
      {
        type: "paragraph",
        text: "The regulatory environment is unforgiving, the platforms are restrictive, and sending to bad addresses in an industry already treated with suspicion by filtering systems compounds quickly. Cannabis senders start from a harder position on deliverability than most, and a poorly compiled list makes that worse rather than better.",
      },
      {
        type: "callout",
        text: "Knowing where your data came from isn't due diligence for its own sake. It's the difference between a campaign that reaches licensed operators who can actually buy from you, and one that quietly burns your sending reputation on addresses that stopped being real two years ago.",
      },
      {
        type: "paragraph",
        text: "Whether you're looking for cannabis consumer email lists, marijuana mailing lists, CBD buyer audiences, or custom audience targeting solutions, our team is here to help. Contact AmeriList today!",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
