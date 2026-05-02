export type Practical = {
  id: string;
  title: string;
  description: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
  steps: string[];
};

export const practicals: Practical[] = [
  {
    id: 'p-001',
    title: 'Concrete Cube Compression Test',
    description:
      'Prepare concrete cubes, cure them, and test for compressive strength at 7 and 28 days.',
    difficulty: 'Medium',
    tags: ['concrete', 'materials', 'strength'],
    steps: [
      'Cast standard cubes (150x150x150 mm) from a given mix.',
      'Cure cubes in water for 7 and 28 days.',
      'Test cubes in compression testing machine and record peak load.',
      'Compute compressive strength = load / area and compare with target strength.'
    ]
  },

  {
    id: 'p-002',
    title: 'Slump Test for Workability of Concrete',
    description: 'Determine workability of fresh concrete using the slump cone method.',
    difficulty: 'Easy',
    tags: ['concrete', 'workability'],
    steps: [
      'Fill slump cone in three layers, tamp each layer 25 times.',
      'Lift cone vertically and measure slump immediately.',
      'Classify slump (true, shear, collapse) and record results.'
    ]
  },

  {
    id: 'p-003',
    title: 'Sieve Analysis (Grain Size Distribution)',
    description:
      'Perform sieve analysis on fine or coarse aggregate to determine particle size distribution and fineness modulus.',
    difficulty: 'Easy',
    tags: ['aggregates', 'soil'],
    steps: [
      'Dry sample and weigh total mass.',
      'Stack sieves in descending sizes and sieve sample mechanically for specified time.',
      'Weigh material retained on each sieve and compute percentages passing.',
      'Plot gradation curve and calculate fineness modulus.'
    ]
  },

  {
    id: 'p-004',
    title: 'Atterberg Limits: Liquid and Plastic Limits',
    description:
      'Determine liquid limit (Casagrande) and plastic limit to classify fine-grained soils.',
    difficulty: 'Medium',
    tags: ['soil', 'geotech'],
    steps: [
      'Prepare soil paste and perform flow table (Casagrande) tests to find liquid limit.',
      'Roll soil threads to determine plastic limit.',
      'Compute plasticity index = LL - PL and classify soil.'
    ]
  },

  {
    id: 'p-005',
    title: 'Proctor Compaction Test (Standard & Modified)',
    description:
      'Find optimum moisture content and maximum dry density for a soil using Proctor method.',
    difficulty: 'Medium',
    tags: ['soil', 'compaction'],
    steps: [
      'Prepare several samples at different moisture contents and compact in mould using standard or modified energy.',
      'Weigh and determine wet density, then compute dry density.',
      'Plot dry density vs moisture content and determine OMC and MDD.'
    ]
  },

  {
    id: 'p-006',
    title: 'California Bearing Ratio (CBR) Test',
    description:
      'Evaluate strength of subgrade and sub-base materials for pavement design using CBR.',
    difficulty: 'Hard',
    tags: ['pavement', 'soil'],
    steps: [
      'Prepare specimen in CBR mould at specified moisture and density.',
      'Soak specimen if required and allow specified soaking period.',
      'Penetrate with standard piston at 1.25 mm/min and record load-penetration curve.',
      'Compute CBR value as percentage of standard load.'
    ]
  },

  {
    id: 'p-007',
    title: 'Specific Gravity of Soil Solids',
    description: 'Determine specific gravity of soil particles using pycnometer method.',
    difficulty: 'Easy',
    tags: ['soil', 'properties'],
    steps: [
      'Weigh empty pycnometer and pycnometer + dry soil.',
      'Fill with water, remove air bubbles, and weigh.',
      'Compute specific gravity using standard formula.'
    ]
  },

  {
    id: 'p-008',
    title: 'Permeability Test (Constant Head & Falling Head)',
    description:
      'Measure coefficient of permeability for coarse and fine soils using appropriate laboratory methods.',
    difficulty: 'Medium',
    tags: ['soil', 'hydraulics'],
    steps: [
      'Set up permeability apparatus (constant or falling head).',
      'Introduce water and measure discharge or head change over time.',
      'Compute permeability coefficient using test-specific formulas.'
    ]
  },

  {
    id: 'p-009',
    title: 'Unconfined Compressive Strength (UCS) Test on Soil',
    description:
      'Determine unconfined compressive strength of cohesive soils using axial loading.',
    difficulty: 'Medium',
    tags: ['soil', 'strength'],
    steps: [
      'Prepare cylindrical specimen of moist cohesive soil.',
      'Place specimen in compression machine and apply axial load at constant strain rate.',
      'Record peak load and compute UCS = peak load / area.'
    ]
  },

  {
    id: 'p-010',
    title: 'Los Angeles Abrasion Test',
    description:
      'Determine aggregate resistance to abrasion and wear using LA machine.',
    difficulty: 'Easy',
    tags: ['aggregates', 'durability'],
    steps: [
      'Weigh specified sample of aggregates and place in LA machine with steel charges.',
      'Rotate machine for specified revolutions, then sieve and weigh material passing 1.7 mm sieve.',
      'Compute abrasion value as percentage loss.'
    ]
  },

  {
    id: 'p-011',
    title: 'Aggregate Impact Value Test',
    description: 'Measure resistance of aggregate to sudden shock or impact.',
    difficulty: 'Easy',
    tags: ['aggregates'],
    steps: [
      'Compact aggregate in cylinder and weigh.',
      'Subject to specified number of hammer blows on impact testing machine.',
      'Sieve and compute impact value as percentage of fines generated.'
    ]
  },

  {
    id: 'p-012',
    title: 'Bulk Density and Water Absorption of Bricks',
    description:
      'Find bulk density, water absorption and porosity of fired clay bricks.',
    difficulty: 'Easy',
    tags: ['masonry', 'materials'],
    steps: [
      'Dry brick to constant weight and record dry mass.',
      'Immmerse in water for 24 hours and reweigh to get saturated mass.',
      'Boil if required for apparent specific gravity; compute water absorption and bulk density.'
    ]
  },

  {
    id: 'p-013',
    title: 'Tensile Test on Mild Steel',
    description: 'Perform tensile test to obtain yield strength, ultimate strength and elongation.',
    difficulty: 'Medium',
    tags: ['materials', 'steel'],
    steps: [
      'Prepare tensile specimen as per standard dimensions.',
      'Mount specimen in universal testing machine and apply tensile load.',
      'Record load vs extension, determine yield point, UTS and % elongation.'
    ]
  },

  {
    id: 'p-014',
    title: 'Bending Test on Reinforced Concrete Beam (Deflection & Load)',
    description:
      'Test simply-supported RC beam to observe cracking load, ultimate load and deflection behaviour.',
    difficulty: 'Hard',
    tags: ['structural', 'rcc'],
    steps: [
      'Prepare and cure reinforced concrete beam specimen.',
      'Set beam on supports and apply incremental loads at specified points.',
      'Measure deflections and note crack formation; continue to failure to find ultimate load.'
    ]
  },

  {
    id: 'p-015',
    title: 'Flexural Strength of Concrete (Beam Test)',
    description: 'Determine modulus of rupture using standard beam specimens.',
    difficulty: 'Medium',
    tags: ['concrete', 'strength'],
    steps: [
      'Cast and cure beam specimens (typically 100x100x500 mm).',
      'Perform third-point loading or centre-point loading test.',
      'Compute modulus of rupture from peak load and section properties.'
    ]
  },

  {
    id: 'p-016',
    title: 'Water Content Determination (Oven Drying Method)',
    description: 'Find moisture content of soils or aggregates by oven drying.',
    difficulty: 'Easy',
    tags: ['soil', 'materials'],
    steps: [
      'Weigh wet sample, dry in oven at 105±5°C to constant weight.',
      'Weigh dry sample and compute moisture content as percentage of dry mass.'
    ]
  },

  {
    id: 'p-017',
    title: 'Marshall Stability Test for Bituminous Mix',
    description:
      'Evaluate stability and flow of bituminous paving mixes using Marshall apparatus.',
    difficulty: 'Medium',
    tags: ['pavement', 'bitumen'],
    steps: [
      'Prepare specimen using specified compaction blows.',
      'Condition specimens in water bath at 60°C for 30–40 minutes.',
      'Test in Marshall testing machine and record stability and flow values.'
    ]
  },

  {
    id: 'p-018',
    title: 'Penetration, Softening Point and Ductility of Bitumen',
    description: 'Perform standard tests to characterize bitumen properties for pavements.',
    difficulty: 'Easy',
    tags: ['bitumen', 'materials'],
    steps: [
      'Perform penetration test using penetrometer at specified temperature.',
      'Determine softening point using ring-and-ball apparatus.',
      'Measure ductility using ductility testing apparatus at standard temp.'
    ]
  },

  {
    id: 'p-019',
    title: 'Bar Bending Schedule and Reinforcement Detailing',
    description:
      'Prepare bar bending schedule for a simple slab/beam given drawings and compute steel quantities.',
    difficulty: 'Easy',
    tags: ['quantity-survey', 'rcc'],
    steps: [
      'Read structural drawing and identify member dimensions and reinforcement layout.',
      'List bar lengths, shapes, hooks and compute unit lengths.',
      'Prepare BBS table with total steel quantity and cutting list.'
    ]
  },

  {
    id: 'p-020',
    title: 'Setting Out a Building Using Total Station',
    description:
      'Field practical to set out building gridlines and check levels using a total station and site survey techniques.',
    difficulty: 'Medium',
    tags: ['surveying', 'field'],
    steps: [
      'Establish reference benchmarks and control points.',
      'Transfer grid coordinates from drawing to site using total station.',
      'Verify positions and record as-built coordinates.'
    ]
  },

  {
    id: 'p-021',
    title: 'Contour Survey and Map Preparation',
    description: 'Carry out contouring of a small area and prepare contour map with spot levels.',
    difficulty: 'Medium',
    tags: ['surveying', 'topography'],
    steps: [
      'Perform leveling at regular grid points across the site area.',
      'Record spot levels and interpolate contours at chosen interval.',
      'Draw contour map and label critical features like ridges and depressions.'
    ]
  },

  {
    id: 'p-022',
    title: 'Quantity Estimation for Earthwork (Cut & Fill)',
    description: 'Compute earthwork volumes using grid method and compare cut and fill balance.',
    difficulty: 'Easy',
    tags: ['estimation', 'earthworks'],
    steps: [
      'Divide area into grid and record existing and proposed levels.',
      'Compute cut or fill for each cell and sum to get total volumes.',
      'Prepare earthwork balance statement and compute shrinkage/expansion factors.'
    ]
  },

  {
    id: 'p-023',
    title: 'Triaxial Shear Test (UU/CU/CD)',
    description:
      'Determine shear strength parameters of soil (cohesion and friction angle) under controlled stress conditions.',
    difficulty: 'Hard',
    tags: ['soil', 'strength'],
    steps: [
      'Prepare soil specimen and mount in triaxial cell.',
      'Apply confining pressure and shear the specimen at constant rate.',
      'Record stress-strain data and compute strength parameters.'
    ]
  },

  {
    id: 'p-024',
    title: 'Consolidation Test (Oedometer)',
    description: 'Measure compressibility and consolidation settlement characteristics of fine-grained soils.',
    difficulty: 'Hard',
    tags: ['soil', 'consolidation'],
    steps: [
      'Prepare oedometer specimen and apply incremental loads.',
      'Measure settlement versus time for each load increment.',
      'Plot e-log p and compute compression index, recompression index and coefficient of consolidation.'
    ]
  },

  {
    id: 'p-025',
    title: 'Falling Head Permeability Test for Fine Soils',
    description: 'Measure low permeability of fine-grained soils using falling head method.',
    difficulty: 'Medium',
    tags: ['soil', 'hydraulics'],
    steps: [
      'Set up falling head permeability apparatus and saturate specimen.',
      'Record head variation vs time and compute permeability using formula.',
      'Repeat for reproducibility and report mean value.'
    ]
  }
];

export default practicals;
