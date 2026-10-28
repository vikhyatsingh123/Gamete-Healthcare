export const Restod = {
  product: {
    name: "Resto-D",
    brand: "Resto-D",
    generic_name: "Pantoprazole Sodium (EC) with Domperidone (SR) Capsules IP",
    category: "Prescription Medicine",
    dosage_form: "Hard Gelatin Capsule",
    pack_size: {
      quantity: 100,
      unit: "Capsules",
      packaging: "10 x 10 Capsules",
    },
  },
  composition: {
    serving_size: {
      quantity: 1,
      unit: "Capsule",
    },
    servings_per_container: 100,
    ingredients: [
      {
        name: "Pantoprazole Sodium",
        quantity_per_capsule: 40,
        unit: "mg",
        release_type: "Enteric Coated Pellets",
        rda_percent: null,
      },
      {
        name: "Domperidone",
        quantity_per_capsule: 30,
        unit: "mg",
        release_type: "Sustained Release Pellets",
        rda_percent: null,
      },
    ],
    other_ingredients: [
      "Excipients q.s.",
      "Approved colour used in hard gelatin capsule shell",
    ],
  },
  product_introduction:
    "Resto-D is a combination capsule containing Pantoprazole 40 mg as enteric-coated pellets and Domperidone 30 mg as sustained-release pellets. Pantoprazole reduces gastric acid secretion, while Domperidone has antiemetic and gastrointestinal motility effects. It is intended for use only when prescribed by a qualified medical practitioner.",
  key_highlights: [
    "Pantoprazole 40 mg",
    "Domperidone 30 mg sustained release",
    "Enteric-coated Pantoprazole pellets",
    "Sustained-release Domperidone pellets",
    "Hard gelatin capsule dosage form",
    "Pack size: 100 capsules",
    "Prescription medicine",
  ],
  intended_uses: [
    {
      area: "Acid-Related Gastrointestinal Conditions",
      description:
        "Pantoprazole reduces gastric acid secretion and may be prescribed for appropriate acid-related conditions.",
    },
    {
      area: "Nausea and Vomiting",
      description:
        "Domperidone may help control nausea and vomiting when clinically appropriate and prescribed.",
    },
    {
      area: "Gastrointestinal Motility-Related Symptoms",
      description:
        "Domperidone may help improve gastric motility in selected patients, subject to its approved indications and safety restrictions.",
    },
  ],
  key_benefits: [
    "Combines an acid-suppressing agent with an antiemetic and prokinetic agent",
    "Provides Pantoprazole in enteric-coated pellet form",
    "Provides Domperidone in sustained-release pellet form",
    "Combines both active ingredients in one capsule",
  ],
  claim_guidelines: {
    preferred_language:
      "Describe the confirmed composition, release characteristics and approved clinical uses.",
    avoid_claims: [
      "Guaranteed relief from acidity",
      "Permanent cure for gastric problems",
      "No side effects",
      "Safe for every patient",
      "Suitable for unrestricted long-term use",
      "Suitable for self-medication",
    ],
  },
  why_this_combination: [
    {
      ingredient: "Pantoprazole",
      quantity: "40 mg",
      description:
        "A proton pump inhibitor that reduces gastric acid secretion.",
    },
    {
      ingredient: "Domperidone",
      quantity: "30 mg",
      description:
        "A dopamine D2 receptor antagonist with antiemetic and gastrointestinal motility effects.",
    },
  ],
  how_it_works: {
    description:
      "The two active ingredients act through different pharmacological mechanisms.",
    steps: [
      {
        stage: 1,
        title: "Gastric Acid Suppression",
        ingredient: "Pantoprazole",
        mechanism:
          "Inhibits the gastric H+/K+-ATPase proton pump, reducing gastric acid secretion.",
      },
      {
        stage: 2,
        title: "Antiemetic and Motility Effects",
        ingredient: "Domperidone",
        mechanism:
          "Blocks dopamine D2 receptors and can influence gastrointestinal motility and nausea-related pathways.",
      },
    ],
    outcome:
      "The combination provides acid suppression and antiemetic effects where clinically appropriate.",
    disclaimer:
      "The combination is not suitable for every patient or every cause of gastrointestinal symptoms.",
  },
  scientific_rationale:
    "Pantoprazole reduces gastric acid secretion, whereas Domperidone has dopamine D2 receptor antagonist activity. The suitability of combining these medicines depends on the patient's diagnosis, cardiac risk factors, concurrent medicines and the approved product indication.",
  who_can_use_it: {
    target_group:
      "Patients for whom a qualified medical practitioner considers the combination appropriate",
    suitable_for: [
      "Patients assessed for an appropriate gastrointestinal indication",
      "Patients whose medical history and current medicines have been reviewed",
      "Patients for whom the benefits outweigh the potential risks",
    ],
    positioning:
      "Prescription combination medicine for physician-directed use.",
  },
  when_to_use: {
    recommended_situations: [
      "When prescribed for an appropriate clinical indication",
      "When acid suppression is required and Domperidone is considered appropriate",
      "When contraindications and potential drug interactions have been assessed",
    ],
    recommended_duration: "As determined by the prescribing physician",
    recommended_usage: "As directed by the physician",
  },
  recommended_usage: {
    dosage: "As directed by the physician",
    timing: null,
    administration: "Swallow the capsule whole. Do not chew, open or crush it.",
    recommended_duration: "As prescribed",
    maximum_usage: "Do not exceed the prescribed dose.",
  },
  cautions: {
    consult_healthcare_professional_if: [
      "The patient has a history of heart rhythm abnormalities or QT prolongation",
      "The patient has significant electrolyte abnormalities",
      "The patient has liver impairment",
      "The patient is pregnant, planning pregnancy or breastfeeding",
      "The patient takes medicines that can prolong the QT interval or interact with Domperidone",
      "The patient has gastrointestinal bleeding, obstruction or perforation",
    ],
    special_attention:
      "Domperidone is associated with an increased risk of serious cardiac arrhythmias in susceptible patients. Use should follow applicable prescribing restrictions, with the lowest effective dose for the shortest appropriate duration. Pantoprazole also has potential drug interactions and risks associated with prolonged use.",
  },
  possible_side_effects: {
    note: "The following are potential effects associated with the active ingredients; they are not a complete product-specific adverse-effect list.",
    possible_effects: [
      "Headache",
      "Abdominal discomfort",
      "Nausea",
      "Diarrhoea",
      "Constipation",
      "Dry mouth",
      "Dizziness",
    ],
    serious_warning:
      "Seek urgent medical attention for palpitations, fainting, severe dizziness or other symptoms that may indicate a heart rhythm problem.",
    action: "Consult a medical practitioner if side effects persist or worsen.",
  },
  dos_and_donts: {
    dos: [
      "Use only as prescribed.",
      "Swallow the capsule whole.",
      "Inform the physician about all medicines being taken.",
      "Follow the prescribed duration and administration instructions.",
      "Store in a cool, dry and dark place.",
      "Keep the medicine out of reach of children.",
    ],
    donts: [
      "Do not self-medicate.",
      "Do not chew, open or crush the capsule.",
      "Do not exceed the prescribed dose.",
      "Do not use Domperidone without appropriate medical assessment.",
      "Do not ignore palpitations or fainting.",
      "Do not continue treatment indefinitely without medical review.",
    ],
  },
  storage: {
    temperature: null,
    conditions: ["Cool place", "Dry place", "Dark place"],
    label_instruction: "Store in a cool, dry and dark place.",
  },
  regulatory_information: {
    product_classification:
      "Pantoprazole Sodium 40 mg and Domperidone 30 mg Capsules",
    prescription_status: "Schedule H prescription drug",
    prescription_warning:
      "Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    manufacturing_licence_number: null,
    batch_number: null,
    manufacturing_date: null,
    expiry_date: null,
    mrp: {
      amount: null,
      currency: "INR",
      basis: null,
    },
    fssai_licence_number: null,
  },
  fact_box: {
    brand: "Resto-D",
    product: "Pantoprazole Sodium 40 mg with Domperidone 30 mg Capsules IP",
    category: "Prescription Medicine",
    dosage_form: "Hard Gelatin Capsule",
    serving_size: "1 Capsule",
    pack_size: "100 Capsules (10 x 10)",
    pantoprazole_strength: "40 mg",
    domperidone_strength: "30 mg sustained release",
    recommended_use: "As directed by the physician",
  },
  manufacturing_and_marketing: {
    marketed_by: {
      company: "Gamete Healthcare Pvt. Ltd.",
      address:
        "C-502, Hometech Commercial, C-Block, Defence Enclave, Noida Sector-44, Delhi NCR 201301, India",
      customer_care: "+91 8299394553",
      email: "info@gametehealthcare.com",
      website: "https://gametehealthcare.com/",
    },
    manufactured_by: {
      company: "Hiral Labs Pvt. Ltd.",
      address:
        "265, Sisona, Near Bhagwanpur, Roorkee – 247661, Uttarakhand, India",
    },
    manufacturing_licence_number: null,
    fssai_licence_number: null,
  },
  short_website_listing:
    "Resto-D contains Pantoprazole 40 mg as enteric-coated pellets and Domperidone 30 mg as sustained-release pellets. This prescription combination provides acid suppression and antiemetic effects when clinically appropriate. Pack size: 100 capsules (10 x 10). Swallow the capsule whole; do not chew, open or crush. Store in a cool, dry and dark place. Use only as prescribed by a qualified medical practitioner.",
};
