export type Difficulty = "beginner" | "medium" | "expert";
export type Subject = "mixed" | "structures" | "geotech" | "transport" | "env" | "materials" | "survey" | "field";

export interface Question {
  id: string | number;
  question: string;
  type: "mcq"; // FORCING MCQ ONLY
  difficulty: Difficulty;
  subject: Subject;
  options: string[]; // FORCING OPTIONS TO EXIST
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  // FIELD PRACTICE (MCQ ONLY)
  {
    id: "f-1",
    subject: "field",
    difficulty: "beginner",
    question: "At the site, what is the standard height for pouring concrete to avoid segregation?",
    options: ["1.0 meter", "1.5 meters", "2.0 meters", "2.5 meters"],
    answer: "1.5 meters",
    explanation: "As per IS 456, concrete should not be dropped from a height exceeding 1.5 meters."
  },
  {
    id: "f-2",
    subject: "field",
    difficulty: "medium",
    question: "If a reinforcement bar is found with surface rust at the site, what should be done?",
    options: ["Reject it immediately", "Use it as is", "Clean with wire brush and use if no pitting", "Paint it before use"],
    answer: "Clean with wire brush and use if no pitting",
    explanation: "Surface rust is okay if cleaned and no loss of diameter is present."
  },
  {
    id: "f-3",
    subject: "field",
    difficulty: "medium",
    question: "What is the weight of a 12mm diameter steel bar per meter length?",
    options: ["0.617 kg/m", "0.888 kg/m", "1.21 kg/m", "1.58 kg/m"],
    answer: "0.888 kg/m",
    explanation: "Calculation: D²/162 = 12²/162 = 0.888 kg/m."
  },
  {
    id: "f-4",
    subject: "field",
    difficulty: "expert",
    question: "During shuttering removal, you notice a deflection in the beam. What is the first priority?",
    options: ["Report to consultant", "Immediately re-install props", "Patch with grout", "Measure precisely"],
    answer: "Immediately re-install props",
    explanation: "Safety first. Re-installing props prevents further movement or collapse."
  },
  {
    id: "f-5",
    subject: "field",
    difficulty: "beginner",
    question: "What is the standard size of a concrete cube for site testing in India?",
    options: ["100mm", "150mm", "200mm", "125mm"],
    answer: "150mm",
    explanation: "150mm x 150mm x 150mm is the standard cube size."
  },
  {
    id: "f-6",
    subject: "field",
    difficulty: "medium",
    question: "How many cubes should be cast for a concrete pour of 6-15 cubic meters?",
    options: ["1 sample (3 cubes)", "2 samples (6 cubes)", "3 samples (9 cubes)", "4 samples (12 cubes)"],
    answer: "2 samples (6 cubes)",
    explanation: "As per IS 456, for 6-15 m3, 2 samples (6 cubes) are required."
  },

  // MATERIALS (MCQ ONLY)
  {
    id: "m-1",
    subject: "materials",
    difficulty: "beginner",
    question: "Initial setting time of ordinary portland cement should not be less than:",
    options: ["15 minutes", "30 minutes", "60 minutes", "10 hours"],
    answer: "30 minutes",
    explanation: "Initial setting time for OPC is 30 minutes, and final setting time is 10 hours (600 mins)."
  },
  {
    id: "m-2",
    subject: "materials",
    difficulty: "medium",
    question: "Bulking of sand is caused due to:",
    options: ["Surface tension", "Viscosity", "Capillarity", "Friction"],
    answer: "Surface tension",
    explanation: "Surface tension of water film around sand particles causes bulking."
  },

  // STRUCTURES (MCQ ONLY)
  {
    id: "s-1",
    subject: "structures",
    difficulty: "beginner",
    question: "A cantilever beam is supported at how many ends?",
    options: ["One end", "Two ends", "Three ends", "Floating"],
    answer: "One end",
    explanation: "A cantilever is supported at only one end (fixed)."
  },
  {
    id: "s-2",
    subject: "structures",
    difficulty: "expert",
    question: "Which theorem is used to find the displacement in a linearly elastic structure?",
    options: ["Euler's Theorem", "Castigliano's First Theorem", "Castigliano's Second Theorem", "Newton's Third Law"],
    answer: "Castigliano's Second Theorem",
    explanation: "The partial derivative of total strain energy with respect to a force gives the displacement."
  }
];
