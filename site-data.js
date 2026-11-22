/*
 * Junaid Zia — research portfolio content.
 * Edit comfortably at /editor.html, download the updated site-data.js,
 * and upload that file to your GitHub repository.
 * This file intentionally contains NO student IDs, transcripts or LORs.
 */
window.PORTFOLIO_DATA = {
  "settings": {
    "accent": "#C8102E",
    "background": "#F8F8F6",
    "headingFont": "Manrope",
    "bodyFont": "Inter",
    "siteTitle": "Junaid Zia — Research & Engineering",
    "accentStyle": "swiss"
  },
  "profile": {
    "name": "Junaid Zia",
    "eyebrow": "Electrical engineer · Research-led builder",
    "headline": "Engineering across scales.",
    "intro": "I work at the intersection of semiconductor device physics, applied machine learning and practical electronic systems — connecting numerical models with useful engineering outcomes.",
    "about": "I graduated with a Bachelor of Electrical Engineering (Honours) from Universiti Malaya in 2026. My work ranges from strain-dependent modelling of atomically thin transistors to AI-powered wafer inspection and sensor-based embedded prototypes. I enjoy questions that begin with physics and end with something we can test.",
    "affiliation": "Universiti Malaya · Kuala Lumpur",
    "status": "Exploring graduate research opportunities · 2027",
    "photo": "",
    "email": "",
    "linkedin": "",
    "github": "",
    "scholar": "",
    "cv": "",
    "location": "Kuala Lumpur, Malaysia"
  },
  "highlights": [
    {"number":"01", "label":"First Prize", "description":"TI Engineering Innovation Challenge"},
    {"number":"02", "label":"Silver Award", "description":"Universiti Malaya idea festival"},
    {"number":"03", "label":"A+", "description":"International research internship"}
  ],
  "projects": [
    {
      "id": "mos2-transistors",
      "title": "Strain-dependent performance of mono- and bilayer MoS₂ FETs",
      "shortTitle": "MoS₂ under strain",
      "category": "Semiconductor research",
      "year": "2026",
      "featured": true,
      "image": "assets/mos2.svg",
      "imageAlt": "Conceptual schematic of a MoS₂ field-effect transistor and its source-drain structure",
      "caption": "Conceptual illustration. Numerical results below are from the student research model.",
      "summary": "Numerical study of how modest tensile strain changes the electrical performance of mono- and bilayer molybdenum disulfide field-effect transistors.",
      "question": "How does mechanical strain change the behaviour of an atomically thin transistor, and does the response differ between one and two layers?",
      "approach": "Modelled bottom-gate MoS₂ FET structures in COMSOL Multiphysics using semiconductor drift–diffusion physics. Compared device response from 0 to 0.7% tensile strain while examining current trends and subthreshold behaviour.",
      "contribution": "Developed the simulation geometry, investigated material-property relationships for strain, evaluated parameter choices and compared the monolayer and bilayer outputs with relevant literature.",
      "outcome": "At 0.7% tensile strain, the simulated on-state current increased from 66.24 to 122.85 nA for the monolayer device (1.85×) and 188.76 to 252.34 nA for the bilayer device (1.34×). Awarded Silver at Universiti Malaya's idea festival. Manuscript development has been discussed; no peer-reviewed publication is claimed.",
      "tags": ["COMSOL", "MoS₂", "Device physics", "Numerical simulation"],
      "metrics": [{"value":"1.85×","label":"1L on-current"},{"value":"1.34×","label":"2L on-current"},{"value":"0–0.7%","label":"Applied tensile strain"}],
      "gallery": [],
      "externalUrl": ""
    },
    {
      "id": "wafer-vision",
      "title": "AI-assisted wafer defect classification",
      "shortTitle": "Wafer defect intelligence",
      "category": "AI & data",
      "year": "2025–26",
      "featured": false,
      "image": "assets/wafer.svg",
      "imageAlt": "Illustrative wafer map classified by defect pattern",
      "caption": "Illustrative wafer map; replace with actual prototype screenshots in the editor.",
      "summary": "An engineering prototype that connects wafer-map defect recognition to practical yield and rework considerations.",
      "question": "Can a lightweight machine-learning system make wafer-defect patterns easier to interpret for manufacturing decisions?",
      "approach": "Built a TinyCNN-based wafer-map classification pipeline and a Gradio prototype interface, with a severity indicator and simplified yield/rework cost estimation.",
      "contribution": "Proposed the application concept, helped develop the model and interface, and connected classification results with manufacturing decisions as part of a competition team.",
      "outcome": "The team received First Prize in the Texas Instruments Malaysia Engineering Innovation Challenge.",
      "tags": ["TinyCNN", "Python", "Gradio", "Semiconductor manufacturing"],
      "metrics": [{"value":"1st","label":"Competition prize"},{"value":"CNN","label":"Classifier approach"}],
      "gallery": [],
      "externalUrl": ""
    },
    {
      "id": "wearable-stress",
      "title": "Wearable multimodal stress-detection prototype",
      "shortTitle": "Wearable stress sensing",
      "category": "Embedded systems",
      "year": "2025–26",
      "featured": false,
      "image": "assets/wearable.svg",
      "imageAlt": "Illustrative wearable wrist sensor and PPG/EDA signal traces",
      "caption": "Concept illustration; add photos of the actual prototype when available.",
      "summary": "A wrist-worn prototype combining physiological sensing, wireless transmission and a companion data-logging workflow.",
      "question": "How can affordable embedded hardware support continuous collection of stress-related physiological signals?",
      "approach": "Integrated EDA and PPG sensing with an Arduino Nano ESP32, Bluetooth Low Energy communication and an accompanying monitoring and logging interface. Used the WESAD dataset as a research reference.",
      "contribution": "Worked within a team on sensing, integration, data handling and prototype validation. Exact individual deliverables can be refined with project evidence.",
      "outcome": "Completed as an Integrated Design Project prototype; no medical or clinical validation claim is made.",
      "tags": ["Arduino Nano ESP32", "BLE", "EDA", "PPG"],
      "metrics": [{"value":"2","label":"Physiological modalities"},{"value":"BLE","label":"Wireless connection"}],
      "gallery": [],
      "externalUrl": ""
    }
  ],
  "awards": [
    {"id":"ti-award", "year":"2025–26", "title":"First Prize — Engineering Innovation Challenge", "organization":"Texas Instruments Malaysia", "type":"Competition", "description":"Team-based engineering challenge. Developed an AI-assisted wafer-map defect classification concept with a functional prototype and industry-oriented decision support.", "image":"", "url":""},
    {"id":"ifest-silver", "year":"2026", "title":"Silver Award — University idea festival", "organization":"Universiti Malaya", "type":"Research award", "description":"Recognition for undergraduate semiconductor-device research on strain-dependent mono- and bilayer MoS₂ field-effect transistors.", "image":"", "url":""},
    {"id":"asem", "year":"2025", "title":"Advanced Semiconductor Academy of Malaysia", "organization":"National semiconductor training programme", "type":"Selection", "description":"Selected among 60 trainees for focused exposure to semiconductor design, verification, testing and industry practice.", "image":"", "url":""},
    {"id":"mranti", "year":"", "title":"Second Prize — Robotics competition", "organization":"MRANTI", "type":"Competition", "description":"Team recognition in a robotics and drone-related engineering competition. Update with the exact competition name and supporting documentation.", "image":"", "url":""}
  ],
  "experience": [
    {"period":"2026", "title":"Bachelor of Electrical Engineering (Honours)", "organization":"Universiti Malaya", "detail":"Graduate research project in semiconductor device modelling; additional coursework across electronics, communications and embedded systems."},
    {"period":"2025", "title":"International research internship", "organization":"National Chung Cheng University, Taiwan", "detail":"Hardware- and systems-oriented research exposure. Awarded A+ for the five-credit Industrial Training course."},
    {"period":"2025–26", "title":"Semiconductor and engineering projects", "organization":"University & competition teams", "detail":"Applied AI for wafer maps, embedded wearable sensing and cross-disciplinary engineering prototypes."}
  ]
};
