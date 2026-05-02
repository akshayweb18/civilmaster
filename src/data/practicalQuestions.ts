import type { Question } from "./questions";

export const practicalQuestions: Question[] = [
  // FIELD / SITE PRACTICALS
  {
    id: "f-q1",
    subject: "field",
    difficulty: "beginner",
    question: "Maximum free fall height recommended for concrete during placement to avoid segregation is:",
    options: ["0.5 m", "1.5 m", "3.0 m", "5.0 m"],
    answer: "1.5 m",
    explanation: "Generally, concrete should not be dropped more than 1.5 m to avoid segregation (IS recommendations)."
  },
  {
    id: "f-q2",
    subject: "field",
    difficulty: "medium",
    question: "Best immediate action when fresh concrete shows bleeding on surface is:",
    options: ["Leave it", "Add extra water", "Apply compaction/vibration and wait before finishing", "Cover with plastic"],
    answer: "Apply compaction/vibration and wait before finishing",
    explanation: "Proper consolidation reduces bleeding; finishing should wait until bleed water dissipates to avoid laitance."
  },
  {
    id: "f-q3",
    subject: "field",
    difficulty: "medium",
    question: "What is a common tolerance for batter boards and grid lines during setting out?",
    options: ["±5 mm", "±25 mm", "±50 mm", "±200 mm"],
    answer: "±50 mm",
    explanation: "Small buildings often accept ±50 mm tolerance for setting out; precision depends on project spec."
  },
  {
    id: "f-q4",
    subject: "field",
    difficulty: "expert",
    question: "While removing formwork early, a beam deflects more than allowable — the correct immediate step is:",
    options: ["Ignore it", "Re-prop immediately and reassess", "Paint the beam", "Continue casting"],
    answer: "Re-prop immediately and reassess",
    explanation: "Safety-first: re-prop to prevent damage/collapse, then investigate causes."
  },

  // MATERIALS LAB PRACTICALS
  {
    id: "m-q1",
    subject: "materials",
    difficulty: "beginner",
    question: "Which test determines the workability of fresh concrete?",
    options: ["Compression test", "Slump test", "Tensile test", "Hardness test"],
    answer: "Slump test",
    explanation: "Slump test is a quick field test to assess concrete workability."
  },
  {
    id: "m-q2",
    subject: "materials",
    difficulty: "medium",
    question: "A high Los Angeles abrasion value indicates: ",
    options: ["Very hard aggregates", "Poor abrasion resistance (weak aggregates)", "Low porosity", "High specific gravity"],
    answer: "Poor abrasion resistance (weak aggregates)",
    explanation: "Higher LA value = greater percentage loss = weaker abrasion resistance."
  },
  {
    id: "m-q3",
    subject: "materials",
    difficulty: "medium",
    question: "Which test measures the fineness of cement particles?",
    options: ["Vicat test", "Fineness by sieving or Blaine permeability", "Soundness test", "Autoclave test"],
    answer: "Fineness by sieving or Blaine permeability",
    explanation: "Cement fineness is measured by Blaine air-permeability or by sieving (milling residues)."
  },

  // GEOTECH / SOIL PRACTICALS
  {
    id: "g-q1",
    subject: "geotech",
    difficulty: "beginner",
    question: "Standard Proctor test determines which pair of parameters?",
    options: ["Permeability and porosity", "Optimum moisture content and maximum dry density", "Shear strength and cohesion", "Liquid and plastic limits"],
    answer: "Optimum moisture content and maximum dry density",
    explanation: "Proctor gives OMC and MDD used for compaction control."
  },
  {
    id: "g-q2",
    subject: "geotech",
    difficulty: "medium",
    question: "Which lab test is appropriate for finding compressibility (settlement) characteristics?",
    options: ["CBR test", "Oedometer (consolidation) test", "Sieve analysis", "Atterberg limits"],
    answer: "Oedometer (consolidation) test",
    explanation: "Oedometer measures one-dimensional consolidation and settlement properties."
  },
  {
    id: "g-q3",
    subject: "geotech",
    difficulty: "expert",
    question: "For saturated cohesive soil, which shear test best provides effective stress parameters?",
    options: ["Unconfined compression", "Triaxial CU (consolidated undrained) with pore pressure measurement", "Direct shear on dry sample", "CBR"],
    answer: "Triaxial CU (consolidated undrained) with pore pressure measurement",
    explanation: "Triaxial CU with pore pressure measurement provides effective stress parameters c' and φ'."
  },

  // SURVEY / SETTING OUT PRACTICALS
  {
    id: "sv-q1",
    subject: "survey",
    difficulty: "beginner",
    question: "What is the primary purpose of a benchmark on site?",
    options: ["Show property boundary", "Reference for elevations/levels", "Mark utilities", "Indicate soil type"],
    answer: "Reference for elevations/levels",
    explanation: "Benchmarks are fixed reference points for vertical control."
  },
  {
    id: "sv-q2",
    subject: "survey",
    difficulty: "medium",
    question: "Which instrument measures both angles and distances electronically for setting out?",
    options: ["Dumpy level", "Theodolite", "Total station", "Tape and chain"],
    answer: "Total station",
    explanation: "Total station measures horizontal/vertical angles and EDM distances digitally."
  },

  // PAVEMENT / TRANSPORT PRACTICALS
  {
    id: "t-q1",
    subject: "transport",
    difficulty: "medium",
    question: "In Marshall mix design, stability value primarily indicates:",
    options: ["Permeability", "Resistance to plastic flow under load", "Binder viscosity", "Aggregate gradation"],
    answer: "Resistance to plastic flow under load",
    explanation: "Marshall stability is peak load indicating resistance to plastic deformation."
  },
  {
    id: "t-q2",
    subject: "transport",
    difficulty: "beginner",
    question: "Penetration test on bitumen is performed at what standard temperature?",
    options: ["0°C", "25°C", "50°C", "100°C"],
    answer: "25°C",
    explanation: "Penetration test is commonly done at 25°C (standard temperature)."
  },

  // STRUCTURES PRACTICALS
  {
    id: "s-q1",
    subject: "structures",
    difficulty: "medium",
    question: "Minimum cover to reinforcement for an interior slab is typically around:",
    options: ["5 mm", "20 mm", "75 mm", "150 mm"],
    answer: "20 mm",
    explanation: "A common minimum cover for slabs in mild exposure is around 20 mm; follow code for specifics."
  },
  {
    id: "s-q2",
    subject: "structures",
    difficulty: "expert",
    question: "Which non-destructive test is commonly used to detect internal defects in welds?",
    options: ["Hardness test", "Ultrasonic testing (UT)", "Slump test", "CBR"],
    answer: "Ultrasonic testing (UT)",
    explanation: "UT and radiography are common NDT methods for weld inspection."
  },

  // SITE SAFETY
  {
    id: "safe-q1",
    subject: "field",
    difficulty: "beginner",
    question: "Before excavation, the most important check is to:",
    options: ["Check weather", "Locate underground utilities", "Start digging", "Paint the site"],
    answer: "Locate underground utilities",
    explanation: "Identifying utilities prevents damage and hazards during excavation."
  },
  {
    id: "safe-q2",
    subject: "field",
    difficulty: "medium",
    question: "Minimum PPE for workers on site usually includes:",
    options: ["Helmet, safety boots, high-vis vest", "Only helmet", "Only gloves", "No PPE"],
    answer: "Helmet, safety boots, high-vis vest",
    explanation: "Basic PPE helps reduce injury risk; additional PPE per task may be required."
  }
];

export default practicalQuestions;
