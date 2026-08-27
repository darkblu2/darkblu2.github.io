export const profile = {
  name: 'Himanshi Tandon',
  wordmark: 'himanshi',
  role: 'Computer Engineering',
  location: 'Atlanta, GA',
  school: 'Georgia Institute of Technology · Senior',
  threads: '[1] Computer Hardware & Emerging Architectures · [2] Signal Processing and AI',
  interests: 'Computer Architecture · Hardware · Embedded Systems',
  availability: 'Building, learning, and looking for interesting hardware problems.',
  email: 'tandonhimanshi22@gmail.com',
  gtemail: 'htandon3@gatech.edu',
  github: 'https://github.com/darkblu2',
  linkedin: 'https://www.linkedin.com/in/himanshi-tandon/',
  hero: 'I build and study computing systems from the hardware up.',
  intro:
    'I’m a Computer Engineering student focused on computer architecture, embedded systems, and photonics. This site highlights my engineering projects, industry experience, and research interests across hardware and emerging computing systems.',
};

export type Project = {
  slug: string;
  number: string;
  year: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  video?: string;
  status: string;
  tags: string[];

  github?: string;
  live?: string;
  featured?: boolean;

  challenge?: string;
  approach?: string;
  learned?: string[];

  tools?: string[];

  links?: {
    label: string;
    url: string;
  }[];
};

export const projects: Project[] = [
    {
    slug: 'mzi-interference-explorer',
    number: '01',
    year: '2026',

    title: 'Mach–Zehnder Interferometer Explorer',

    tagline:
      'A simple simulation for understanding how optical phase differences become measurable output intensity.',

    description:
      'A learning-focused photonics simulation that models an ideal Mach–Zehnder interferometer and explores how phase shifts between two optical paths change the output through constructive and destructive interference.',

    image: '/images/optical-logic.svg',

    status: 'In progress',

    tags: [
      'Photonics',
      'Mach–Zehnder Interferometer',
      'Python',
      'NumPy',
      'Matplotlib',
      'Simulation',
    ],

    featured: true,
    },
      {
    slug: 'cache-simulator',
    number: '02',
    year: '2026',
    title: 'Cache Simulator',
    tagline: 'A small simulator for seeing how cache choices change hits, misses, and memory traffic.',
    description:
      'A compact computer-architecture project comparing direct-mapped and set-associative caches under different block sizes and write policies.',
    image: '/images/cache-simulator.png',
    video: '/videos/cache-simulator-card-animation.mp4',
    status: 'Completed',
    tags: ['C', 'Computer Architecture', 'Caches', 'Simulation'],
    featured: true,
    challenge:
      'Make cache policy tradeoffs concrete instead of leaving them as formulas on a page.',
    approach:
      'Replay address traces through configurable cache structures and report hit rate, evictions, and memory traffic.',
    learned: [
      'How address bits map to tag, index, and offset',
      'Why higher hit rate does not automatically mean lower total cost',
      'How replacement and write policies interact',
    ],
    },
    {
    slug: 'hungry-hippos',
    number: '03',
    year: '2024',

    title: 'HungryHippos — mbed',

    tagline:
      'An embedded C++ game running on an LPC1768 microcontroller with real-time graphics, movement, and collision logic.',

    description:
      'An embedded game where the player moves a sprite across a uLCD display to collect fruit while avoiding enemies. Implemented in C++ using the mbed LPC1768 microcontroller and uLCD-144-G2 display.',

    image: '/images/hungry-hippos.png',

    status: 'Completed',

    tags: [
      'C++',
      'Embedded Systems',
      'mbed',
      'LPC1768',
      'uLCD',
    ],

    featured: true,
  },
  {
    slug: 'train-simulator',
    number: '04',
    year: '2024',

    title: 'Train Simulator — VHDL',

    tagline:
      'A VHDL-based controller for coordinating two trains, track switches, and position sensors on an FPGA.',

    description:
      'A digital-design project that models two trains operating simultaneously on a track system. State-machine logic uses position sensors to coordinate train movement and track-switch behavior.',

    image: '/images/train-simulator.png',

    status: 'Completed',

    tags: [
      'VHDL',
      'FPGA',
      'Finite State Machines',
      'Quartus Prime',
      'DE10-Standard',
      'Digital Design',
    ],

    featured: false,
  },
  {
    slug: 'virtual-fence-geofence',
    number: '05',
    year: '2023',

    title: 'Virtual Fence — Geofence',

    tagline:
      'GPS- and IMU-based virtual fencing and automatic braking system for a remote-controlled go-kart.',

    description:
      'A safety system for a remote-controlled go-kart that uses GPS and IMU data to track the vehicle relative to a user-defined virtual boundary. Users create safe operating zones through a web-based Geofence Creator, export the boundary coordinates as a CSV file, and load them into the go-kart control system. A point-in-polygon algorithm continuously evaluates the kart’s position and automatically engages the brakes when the vehicle leaves the designated safe zone.',

    image: '/images/geofence.png',

    status: 'completed',
    tags: [
      'Arduino IDE',
        'C/C++',
        'GPS',
        'IMU',
        'PCB Design',
        'GitHub',
        'HTML',
      ],    
    featured: false,
    challenge:
      'Design a reliable safety system that could determine when a moving go-kart crossed a user-defined geographic boundary and automatically engage the brakes despite uncertainty in real-world positioning data.',

    approach:
      'Integrate GPS and IMU data for vehicle tracking, allow users to define outer and inner geofence boundaries through an interactive web map, export those coordinates as CSV data, and use a point-in-polygon algorithm onboard the go-kart to continuously determine whether the vehicle remains inside the permitted operating area. When the kart crosses outside the safe zone, the control system triggers the automatic braking system.',

    learned: [
      'How GPS and IMU data can be integrated to track a physical system',
      'How geographic boundaries can be represented as polygons and evaluated using point-in-polygon algorithms',
      'How sensor uncertainty affects safety-critical control decisions',
      'How to connect a web-based configuration tool with an embedded control system using exported coordinate data',
      'How sensing, decision logic, and actuation work together in an automatic braking system',
      'How PCB design and embedded hardware integrate with higher-level control software',
    ],
    tools: [
      'Arduino IDE',
      'C/C++',
      'GPS',
      'IMU',
      'PCB Design',
      'GitHub',
      'HTML',
    ],

    links: [
      {
        label: 'Geofence Creator',
        url: 'https://epics-evei.github.io/',
      },
      {
        label: 'Original Project Page',
        url: 'https://sites.gatech.edu/tandonhimanshi/2024/03/28/a-virtual-fence-geofence/',
      },
    ],
  },
  {
    slug: 'electric-go-kart',
    number: '05',
    year: '2022',

    title: 'Electric Go-Kart',

    tagline:
      'A team project to design and build an electric go-kart from the ground up, including the chassis, drivetrain, steering, and electronics.',

    description:
      'I contributed in the design of the chassis and fabrication process, gaining early exposure to CAD, structural design, and MIG welding.',

    image: '/images/electric-go-kart.png',

    status: 'completed',

    tags: [
      'MIG Welding',
      'Fusion 360',
      'CAD',
    ],

    featured: false,

    challenge:
      'The team needed to develop a chassis that could support the vehicle and its components while integrating with the drivetrain, steering, and electrical systems.',

    approach:
      'The chassis design was developed by defining vehicle requirements, analyzing initial frame concepts, and refining the design through structural testing and iteration.',
    learned: [
      'Basic experience using Fusion 360 for mechanical design',
      'Introductory experience with MIG welding and fabrication',
      'How different mechanical and electrical subsystems must fit together in an electric go-kart system',
    ],
  },
];

export const experience = [
  {
    period: 'Jan – May 2026',
    place: 'Atlanta, GA',
    title: 'R&D Equipment Engineering Intern',
    company: 'The Coca-Cola Company',
    rotation: 'CO-OP Rotation III',
    website: 'https://www.coca-colacompany.com/',

    summary:
      'Developed hardware communication, automated test systems, and electrical troubleshooting improvements for R&D equipment.',

    bullets: [
      'Created a live serial console using SPI between a TI development board and a BeaglePlay Linux board to evaluate transmission speed and communication behavior.',

      'Designed and implemented a PC-based Python automation system for liquid-property testing using RS-232 communication, a Numato relay, and a solenoid valve, improving test efficiency by more than 50%.',

      'Troubleshot timer-circuit boxes and implemented electrical improvements and fixes improving equipment reliability.',
    ],
  },

  {
    period: 'May – Aug 2025',
    place: 'Atlanta, GA',
    title: 'R&D Equipment Engineering Intern',
    company: 'The Coca-Cola Company',
    rotation: 'CO-OP Rotation II',
    website: 'https://www.coca-colacompany.com/',

    summary:
      'Focused on electrical reliability, power delivery, and root-cause troubleshooting of R&D test equipment.',

    bullets: [
      'Diagnosed electrical system failures using root-cause analysis and implemented permanent fixes to improve system reliability and uptime.',

      'Improved test-equipment power delivery and protection mechanisms, reducing recurring electrical faults during operation.',
    ],
  },

  {
    period: 'Sep – Dec 2024',
    place: 'Atlanta, GA',
    title: 'R&D Equipment Engineering Intern',
    company: 'The Coca-Cola Company',
    rotation: 'CO-OP Rotation I',
    website: 'https://www.coca-colacompany.com/',

    summary:
      'Worked on production-equipment testing and statistical analysis to characterize performance and identify reliability trends.',

    bullets: [
      'Conducted electrical and mechanical performance testing on production equipment and collected system-level data for reliability evaluation.',

      'Applied regression modeling, hypothesis testing, and variance analysis to identify failure patterns and support data-driven engineering decisions.',
    ],
  },

  {
    period: 'Jun – Aug 2024',
    place: 'Limassol, Cyprus',
    title: 'Engineering Consulting Intern',
    company: 'EnergyBox Ltd',
    website: 'https://www.energybox.co/',

    summary:
      'Supported electrical-system design for residential and hospitality projects using CAD and electrical-design software.',

    bullets: [
      'Designed lighting layouts for houses, villas, and hotels using AutoCAD.',

      'Designed electrical distribution boxes using ElectricalOM electrical-design software.',
    ],
  },
];

export type ResearchNote = {
  date: string;
  type: string;
  title: string;
  thought: string;

  paper?: {
    title: string;
    url: string;
  };

  caseStudy?: {
    title: string;
    url: string;
  };
};

export const researchNotes: ResearchNote[] = [
  {
    date: '2026',
    type: 'Paper',
    title:
      'What makes an optoelectronic logic gate useful beyond producing the correct truth table?',

    thought:
      'Reading this review helped me understand the progression from individual optoelectronic logic devices toward systems capable of multiple logic operations. I became particularly interested in the engineering constraints that determine whether these devices can be combined into larger computing systems, including optical loss, signal regeneration, cascadability, and device-dependent behavior.',

    paper: {
      title:
        'From Light to Logic: Recent Advances in Optoelectronic Logic Gate',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11935027/',
    },
  },

  {
    date: '2026',
    type: 'Project',
    title:
      'How does phase control in a Mach–Zehnder interferometer translate into output intensity?',

    thought:
      'I built a small Python model of an ideal Mach–Zehnder interferometer and swept the relative phase between its two paths from 0 to 2π. The simulation helped connect the field-level description of interference to the output intensity of a physical photonic device and gave me a starting point for understanding modulation and interference-based optical logic.',

    caseStudy: {
      title: 'MZI Interference Explorer',
      url: '/projects/mzi-interference-explorer',
    },
  },
];

export const skills = {
  'Programming': [
    'C',
    'C++',
    'Java',
    'Python',
    'MATLAB',
    'Assembly',
    'VHDL',
    'LaTeX',
  ],

  'Hardware & architecture': [
    'RISC-V',
    'Computer Architecture',
    'Digital Design',
    'PCB Design',
    'Digital Signal Processing',
    'Circuit Analysis',
    'Filter Design',
  ],

  'Platforms & tools': [
    'Github',
    'Linux',
    'VS Code',
    'Obsidian',    
    'AutoCAD',
    'NI LabVIEW',
    'KiCad',
    'SPICE',
    'Arduino IDE',
    'ARM Mbed',
    'Quartus Prime',
  ],

  'Hardware': [
    'DE10-Standard FPGA',
    'ESP32-C6',
    'Mbed LPC1768',
    'TI MSPM0',
    'BeaglePlay',
  ],
};

export const current = [
  'Adding new projects and refining the case studies on this portfolio.',
  'Extending my MZI Interference Explorer while reading about optical logic and photonic computing.',
];

export const coursework = [
  {
    id: 'architecture-hardware',
    area: 'Computer Architecture & Hardware',
    courses: [
      {
        code: 'ECE 3058',
        name: 'Architecture, Systems, Concurrency and Energy',
        description:
          'Processor pipelines, caches, virtual memory, coherence, multithreading, scheduling, power, and performance.',
      },
      {
        code: 'ECE 2035',
        name: 'Programming for Hardware/Software Systems',
        description:
          'C programming, low-level systems concepts, memory, and RISC-V assembly.',
      },
      {
        code: 'ECE 4180',
        name: 'Embedded Systems Design',
        description:
          'Embedded processors, interfaces, hardware/software integration, and real-time systems.',
      },
    ],
  },

  {
    id: 'circuits-digital',
    area: 'Circuits & Digital Design',
    courses: [
      {
        code: 'ECE 3040',
        name: 'Microelectronic Circuits',
        description:
          'Semiconductor devices, transistor circuits, amplification, and circuit analysis.',
      },
      {
        code: 'ECE 3150',
        name: 'VLSI and Advanced Digital Design',
        description:
          'Digital logic implementation, timing, CMOS design, and hardware architecture.',
      },
    ],
  },

  {
    id: 'signals-computation',
    area: 'Signals & Computation',
    courses: [
      {
        code: 'ECE 3251',
        name: 'Digital Signal Processing',
        description:
          'Discrete-time signals, transforms, filtering, frequency-domain analysis, and DSP systems.',
      },
      {
        code: 'CS 1332',
        name: 'Data Structures and Algorithms',
        description:
          'Trees, graphs, hashing, sorting, searching, algorithm analysis, and data structures.',
      },
    ],
  },
];
