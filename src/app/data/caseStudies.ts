export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  role: string;
  timeline: string;
  tools: string[];
  gridSize?: "large" | "medium" | "small";
  accentColor: string;
  bgSecondary: string;
  tagline?: string;
  designProcess?: {
    phase: string;
    methods: string[];
  }[];
  hmwQuestions?: string[];
  research?: {
    title: string;
    introduction: string;
    objectives: string[];
    interviews: {
      rationale: string;
      participants: string[];
    };
    findings: {
      icon: string;
      title: string;
      description: string;
    }[];
    customerNeeds?: {
      title: string;
      description: string;
      categories: {
        name: string;
        needs: string[];
      }[];
    };
  };
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "serenav-comfort-navigation",
    title: "Serenav",
    category: "Product Design",
    summary: "A comfort-driven navigation app prioritizing user wellbeing, safety, and anxiety-free travel.",
    imageUrl: "https://images.unsplash.com/photo-1759256243611-502772ac391b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    overview: "Traditional navigation apps optimize strictly for speed, often routing users through stressful, complex, or potentially unsafe areas. Serenav reimagines navigation by letting users prioritize emotional comfort, safety, and scenic value over simply the fastest ETA.",
    problem: "Users experience high cognitive load and anxiety when navigating unfamiliar environments. The rigid focus on \"fastest route\" often leads to complex intersections, poorly lit areas at night, or overwhelming traffic conditions, diminishing the joy of travel.",
    solution: "I designed a personalized, comfort-driven navigation experience. Serenav introduces customizable routing preferences (e.g., avoiding highways, prioritizing well-lit streets), real-time environmental context, and an intuitive, calming UI that reduces on-the-go cognitive overload.",
    impact: "Initial beta testing showed a 65% reduction in self-reported travel anxiety among users and an 82% preference for Serenav over traditional maps for nighttime walking and unfamiliar city driving.",
    role: "Lead Product Designer",
    timeline: "14 weeks",
    tools: ["Figma", "ProtoPie", "Mapbox API", "Dovetail"],
    gridSize: "large",
    accentColor: "#8B5CF6", // Purple
    bgSecondary: "#F5F3FF",
    tagline: "Find Your Route, Your Pace, Your Peace of Mind.",
    designProcess: [
      { phase: "Empathise", methods: ["User Research", "Interviews", "Empathy Mapping", "Contextual Inquiry"] },
      { phase: "Define", methods: ["User Personas", "Affinity Mapping", "Competitor Analysis", "Information Architecture"] },
      { phase: "Ideate", methods: ["Brainstorming", "User Journey Map", "User Flow", "Wireframing"] },
      { phase: "Prototype", methods: ["Low Fidelity Design", "Style Guide", "High Fidelity Design", "Interactive Prototyping"] },
      { phase: "Test", methods: ["Usability Testing", "A/B Testing", "Feedback Iteration", "Case Study"] }
    ],
    hmwQuestions: [
      "HMW enhance the routing algorithm to factor in user-defined comfort parameters like lighting, noise, and complexity?",
      "HMW empower users to express their real-time travel anxieties without adding friction to the app experience?",
      "HMW offer more visual reassurances on the map to help users feel confident in their upcoming turns and surroundings?",
      "HMW ensure that our app's visual and auditory cues are calming and don't induce panic during critical navigation moments?",
      "HMW build trust so that users feel secure when the app recommends a slightly longer, but significantly more comfortable route?",
      "HMW streamline the on-the-go feedback system so users can safely report stressful route conditions?"
    ]
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App Redesign",
    category: "Product Design",
    summary: "Reimagining the digital banking experience for millennials with a focus on simplicity and trust.",
    imageUrl: "https://images.unsplash.com/photo-1661246626039-5429b8f7488a?q=80&w=1080",
    overview: "A comprehensive redesign of a mobile banking application to improve user engagement and trust among millennial users.",
    problem: "Users found the existing banking app overwhelming and difficult to navigate.",
    solution: "I conducted user research and introduced a clean, card-based interface with clear visual hierarchy.",
    impact: "45% increase in monthly active users and 60% reduction in customer support calls.",
    role: "UX/UI Designer",
    timeline: "12 weeks",
    tools: ["Figma", "FigJam", "Maze", "Principle"],
    gridSize: "large",
    accentColor: "#4F46E5", // Indigo
    bgSecondary: "#F0F0FF"
  },
  {
    id: "clemson-purchasing-dashboard",
    title: "Clemson Purchasing Dashboard",
    category: "Dashboard Design",
    summary: "Streamlining equipment requests and operational workflows for university administrators and faculty.",
    imageUrl: "https://images.unsplash.com/photo-1631551045549-9a735b8e4ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    overview: "A centralized dashboard designed to replace informal email chains and disjointed tools, bringing transparency, standardization, and efficiency to Clemson University's equipment purchasing ecosystem.",
    problem: "The existing purchasing workflow was highly informal and heavily dependent on manual email processing. This caused severe communication overload, fragmented information trails, and overall disjointed tracking across departments.",
    solution: "I designed a unified platform that standardizes equipment requests. The solution provides clear visibility into the entire purchasing lifecycle for all stakeholders, eliminating guesswork and duplicated effort.",
    impact: "Eliminated fragmented email trails, standardized data collection across departments, and significantly reduced back-and-forth communication delays.",
    role: "Lead UX Designer",
    timeline: "10 weeks",
    tools: ["Figma", "UserTesting", "Notion", "Cherwell"],
    gridSize: "medium",
    accentColor: "#F56600", // Clemson Orange
    bgSecondary: "#FFF6F0",
    research: {
      title: "Understanding a Fragmented Purchasing Ecosystem",
      introduction: "Before designing a solution, we needed to understand the real operational complexity behind Clemson's purchasing workflow. At the time, all equipment requests were submitted via email and manually processed by administrators—a system that was informal, inconsistent, and heavily dependent on individual communication patterns.",
      objectives: [
        "How do different stakeholders currently navigate the purchasing lifecycle?",
        "What explicit and latent needs are not being addressed?",
        "What systemic inefficiencies contribute most to delay, confusion, and rework?"
      ],
      interviews: {
        rationale: "Because exposure to DATs varied widely across faculty, staff, students, and administrators, we chose semi-structured interviews to allow flexibility while maintaining consistency. This method allowed us to probe unexpected responses, clarify misconceptions, and capture role-specific workflows.",
        participants: ["Faculty members", "Department staff", "Student employees", "System administrators"]
      },
      findings: [
        {
          icon: "🔁",
          title: "Communication Overload",
          description: "Requests often required 5–8 rounds of back-and-forth communication before approval. These exchanges occurred via email, Cherwell, or word of mouth—creating highly fragmented information trails."
        },
        {
          icon: "📉",
          title: "System Misconceptions",
          description: "Some faculty believed DATs handled the entire lifecycle automatically, while administrators understood its narrow backend scope. This misalignment revealed a major transparency gap."
        },
        {
          icon: "🧩",
          title: "Departmental Workarounds",
          description: "Departments created their own tools to compensate for system gaps—leading to massive duplicated effort and non-standardized data across the university ecosystem."
        }
      ],
      customerNeeds: {
        title: "Customer Needs Analysis",
        description: "After synthesizing interview data, we translated findings into 31 explicit and latent stakeholder needs. Each need was rated with importance scores greater than 4 (on a 5-point scale), ensuring we prioritized what truly mattered. This structured breakdown allowed us to transition from research insights to design requirements.",
        categories: [
          {
            name: "User-Centric Recommendations & Information Provision",
            needs: [
              "Proactive alerts for delayed or backordered items",
              "Clear explanations of approval statuses in plain language",
              "Contextual help and tooltips for complex form fields"
            ]
          },
          {
            name: "Standardization & Policy Support",
            needs: [
              "Automated compliance checks prior to submission",
              "Standardized dropdowns for approved equipment types",
              "Built-in university purchasing guidelines"
            ]
          },
          {
            name: "Finance & Accounting Integration",
            needs: [
              "Real-time budget tracking per department",
              "Seamless integration with university accounting codes",
              "Automated expense categorization and receipt matching"
            ]
          },
          {
            name: "Progress Tracking & Inventory Management",
            needs: [
              "Visual timeline of request status and estimated delivery",
              "Centralized dashboard for all active requests",
              "Automated inventory tagging post-purchase"
            ]
          },
          {
            name: "Documentation & Ownership Management",
            needs: [
              "Digital attachment of quotes, invoices, and receipts",
              "Clear assignment of equipment ownership",
              "Historical archive of past departmental purchases"
            ]
          },
          {
            name: "Usability & Efficiency",
            needs: [
              "Single-sign-on (SSO) integration with university credentials",
              "Mobile-responsive approval workflow for faculty",
              "Bulk approval capabilities for administrators"
            ]
          },
          {
            name: "Collaboration & Communication",
            needs: [
              "In-app messaging and comments on specific requests",
              "@mentions for quick clarifications between stakeholders",
              "Automated email digests summarizing pending actions"
            ]
          },
          {
            name: "Advanced Operational Features",
            needs: [
              "Custom reporting and historical data export",
              "Role-based access control and granular permissions",
              "Predictive analytics for seasonal purchasing trends"
            ]
          }
        ]
      }
    }
  },


];
