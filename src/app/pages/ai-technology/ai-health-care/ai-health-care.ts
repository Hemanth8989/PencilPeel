import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-ai-health-care',
  imports: [CommonModule, CarouselModule, ButtonModule, RouterModule, CardModule],
  templateUrl: './ai-health-care.html',
  styleUrl: './ai-health-care.scss',
})
export class AiHealthCare {

  herocontent = {
    title: `
    Welcome to 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Pencil Peel IMT
    </span>
    : 
    <span class="bg-gradient-to-r from-green-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold tracking-tight">
    Revolutionizing Healthcare 
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
    AI
    </span>
  `,
    description: `At <span class="font-bold text-orange-500">Pencil Peel IMT</span>, we're committed to providing exceptional care and innovative solutions for a wide range of health concerns. Our team of experts is dedicated to harnessing the power of Artificial Intelligence (AI) to improve patient outcomes, streamline processes, and enhance overall efficiency.`,
    image: '/ai/healthcareai.webp'
  };

  quotes = [
    { text: "Streamlining workflows with AI: where efficiency meets innovation." },
    { text: "Transforming healthcare, one workflow at a time." },
    { text: "AI-powered workflows: the future of healthcare is here." },
    { text: "Optimizing workflows, enhancing patient care: the power of AI in healthcare." },
  ];

   // Departments
aiDepartments = [
  {
    name: 'Orthopaedics Department',
    description: `Our Orthopaedics Department utilizes AI-assisted diagnosis and treatment planning for musculoskeletal conditions. With AI, we can analyze X-rays, MRIs, and CT scans to detect fractures, osteoporosis, and joint disorders with high accuracy. Our AI-powered solutions enable personalized treatment plans, predicting the most effective therapies and interventions.`,
    image: 'healthcare/orthopaedics.png',
    icon: 'pi pi-medkit'
  },
  {
    name: 'Dental Department',
    description: `The Dental Department at Pencil Peel IMT leverages AI-powered diagnosis and treatment planning for dental conditions. Our AI algorithms analyze dental images to detect cavities, gum disease, and other oral health issues at an early stage. This enables timely interventions and more effective treatment outcomes.`,
    image: 'healthcare/dental.png',
    icon: 'pi pi-smile'
  },
  {
    name: 'Dermatology Department',
    description: `In the Dermatology Department, AI-assisted diagnosis and treatment planning are used to address skin, hair, and nail conditions. Our AI-powered solutions can detect skin cancer, acne, and other dermatological conditions with high accuracy, enabling early intervention and improved patient outcomes.`,
    image: 'healthcare/dermatology.png',
    icon: 'pi pi-sun'
  },
  {
    name: 'Cardiology Department',
    description: `The Cardiology Department at Pencil Peel IMT utilizes AI-powered diagnosis and treatment planning for cardiovascular conditions. AI algorithms analyze ECGs, echocardiograms, and other diagnostic tests to detect abnormalities and predict the risk of cardiovascular events. This enables early intervention and more effective management of heart health.`,
    image: 'healthcare/cardiology.png',
    icon: 'pi pi-heart'
  },
  {
    name: 'Gynecology Department',
    description: `In the Gynecology Department, AI-assisted diagnosis and treatment planning are used to address women's health concerns. Our AI-powered solutions can analyze ultrasound images and other diagnostic tests to detect gynecological conditions such as fibroids, endometriosis, and cervical cancer.`,
    image: 'healthcare/gynecology.png',
    icon: 'pi pi-female'
  },
  {
    name: 'ENT Department',
    description: `The ENT Department at Pencil Peel IMT leverages AI-powered diagnosis and treatment planning for ear, nose, and throat conditions. Our AI algorithms can analyze audiograms, CT scans, and other diagnostic tests to detect hearing loss, sinusitis, and other ENT-related issues.`,
    image: 'healthcare/ent.png',
    icon: 'pi pi-volume-up'
  },
  {
    name: 'Pediatrics Department',
    description: `In the Pediatrics Department, AI-assisted diagnosis and treatment planning are used to address pediatric conditions. Our AI-powered solutions can analyze growth charts, medical history, and diagnostic tests to detect developmental delays, allergies, and other pediatric issues.`,
    image: 'healthcare/pediatrics.png',
    icon: 'pi pi-child'
  },
  {
    name: 'Urology Department',
    description: `The Urology Department at Pencil Peel IMT utilizes AI-powered diagnosis and treatment planning for urinary tract and male reproductive system conditions. Our AI algorithms can analyze ultrasound images, CT scans, and other diagnostic tests to detect kidney stones, prostate issues, and other urological conditions.`,
    image: 'healthcare/urology.png',
    icon: 'pi pi-briefcase'
  },
  {
    name: 'Mental Health Department',
    description: `In the Mental Health Department, AI-assisted diagnosis and treatment planning are used to address mental health concerns. Our AI-powered solutions can analyze patient data and provide personalized therapy recommendations, enabling more effective management of mental health conditions.`,
    image: 'healthcare/mental_health.png',
    icon: 'pi pi-user'
  },
  {
    name: 'Oncology Department',
    description: `The Oncology Department at Pencil Peel IMT leverages AI-powered diagnosis and treatment planning for cancer. Our AI algorithms can analyze medical images and patient data to detect cancer at an early stage, enabling more effective treatment and improved patient outcomes.`,
    image: 'healthcare/oncology.png',
    icon: 'pi pi-star'
  },
  {
    name: 'Gastroenterology Department',
    description: `In the Gastroenterology Department, AI-powered diagnosis and treatment planning are used to address gastrointestinal conditions. Our AI-powered solutions can analyze endoscopy images and other diagnostic tests to detect gastrointestinal diseases such as ulcers, inflammation, and cancer.`,
    image: 'healthcare/gastroenterology.png',
    icon: 'pi pi-apple'
  },
  {
    name: 'Nephrology Department',
    description: `The Nephrology Department at Pencil Peel IMT utilizes AI-assisted diagnosis and treatment planning for kidney conditions. Our AI algorithms can analyze patient data and diagnostic tests to detect kidney disease and provide personalized treatment recommendations.`,
    image: 'healthcare/nephrology.png',
    icon: 'pi pi-tint'
  },
  {
    name: 'Endocrinology Department',
    description: `In the Endocrinology Department, AI-powered diagnosis and treatment planning are used to address hormonal imbalances. Our AI-powered solutions can analyze patient data and diagnostic tests to detect endocrine disorders such as diabetes, thyroid issues, and hormonal imbalances.`,
    image: 'healthcare/endocrinology.png',
    icon: 'pi pi-cog'
  }
];

// Current Challenges
cards = [
  {
    title: 'Inefficient Patient Flow',
    content: `Long wait times and inefficient patient flow can lead to decreased patient satisfaction and increased costs. This can result in a negative experience for patients and their families, ultimately affecting the hospital's reputation and bottom line.`,
    icon: 'pi pi-clock'
  },
  {
    title: 'Diagnostic Errors',
    content: `Diagnostic errors can lead to delayed or incorrect treatment, resulting in poor patient outcomes. This can have serious consequences, including increased morbidity and mortality rates, and decreased patient trust in the healthcare system.`,
    icon: 'pi pi-exclamation-triangle'
  },
  {
    title: 'Staff Burnout',
    content: `High staff turnover rates and burnout can lead to decreased productivity and increased costs. Burned-out staff may experience decreased job satisfaction, reduced morale, and increased absenteeism, ultimately affecting the quality of care provided to patients.`,
    icon: 'pi pi-users'
  },
  {
    title: 'Data Management',
    content: `Managing large amounts of patient data can be challenging and time-consuming. Inefficient data management can lead to errors, miscommunication, and decreased patient safety.`,
    icon: 'pi pi-database'
  }
];

// How AI Can Help
aiCards = [
  {
    title: 'Streamlined Patient Flow',
    content: `AI-powered solutions can help optimize patient flow and reduce wait times. By analysing patient data and predicting demand, AI can help hospitals allocate resources more effectively and reduce bottlenecks in patient care.`,
    icon: 'pi pi-angle-double-right'
  },
  {
    title: 'Improved Diagnostic Accuracy',
    content: `AI-powered solutions can help diagnose conditions more accurately and quickly. By analysing large amounts of medical data, AI can help identify patterns and anomalies that may not be apparent to human clinicians.`,
    icon: 'pi pi-heart'
  },
  {
    title: 'Personalized Care',
    content: `AI-powered solutions can help develop personalized treatment plans tailored to each patient's needs. By analysing patient data and medical history, AI can help clinicians create targeted treatment plans that improve patient outcomes.`,
    icon: 'pi pi-user-plus'
  },
  {
    title: 'Data Management',
    content: `AI-powered solutions can help manage patient data more efficiently and effectively. By automating data entry and analysis, AI can help reduce errors and improve data quality.`,
    icon: 'pi pi-database'
  }
];

// Solution with AI (Hospital implementations)
solutionWithAI = [
  {
    title: 'AI-powered patient flow management',
    content: 'Our solution can help optimize patient flow and reduce wait times. By analysing patient data and predicting demand, our AI-powered solution can help hospitals allocate resources more effectively and reduce bottlenecks in patient care.',
    icon: 'pi pi-angle-double-right'
  },
  {
    title: 'AI-powered diagnostic tools',
    content: 'Our solution can help diagnose conditions more accurately and quickly. By analysing large amounts of medical data, our AI-powered solution can help identify patterns and anomalies that may not be apparent to human clinicians.',
    icon: 'pi pi-search'
  },
  {
    title: 'AI-powered personalized care',
    content: 'Our solution can help develop personalized treatment plans tailored to each patient\'s needs. By analysing patient data and medical history, our AI-powered solution can help clinicians create targeted treatment plans that improve patient outcomes.',
    icon: 'pi pi-user-plus'
  },
  {
    title: 'AI-powered data management',
    content: 'Our solution can help manage patient data more efficiently and effectively. By automating data entry and analysis, our AI-powered solution can help reduce errors and improve data quality.',
    icon: 'pi pi-database'
  }
];

// AI-Powered Solutions (Products/Tools)
aiSolutions = [
  {
    title: 'AI-Powered Diagnostic Tools',
    content: 'Analyze medical images to detect diseases and anomalies with high accuracy.',
    icon: 'pi pi-search'
  },
  {
    title: 'Personalized Treatment Plans',
    content: 'Tailor treatment plans to individual patients based on genetic profiles, medical history, and lifestyle.',
    icon: 'pi pi-check'
  },
  {
    title: 'Predictive Analytics',
    content: 'Predict health risks, enabling proactive interventions and preventive care.',
    icon: 'pi pi-chart-bar'
  }
];

// AI Applications
aiApplications = [
  {
    title: 'Predictive Analytics',
    content: 'Our AI algorithms analyze patient data to predict health risks, enabling proactive interventions and preventive care.',
    icon: 'pi pi-chart-line'
  },
  {
    title: 'Personalized Medicine',
    content: 'We use AI to tailor treatment plans to individual patients based on their genetic profiles, medical history, and lifestyle.',
    icon: 'pi pi-user-edit'
  },
  {
    title: 'Medical Imaging',
    content: 'Our AI-powered imaging technologies detect anomalies and diseases earlier, improving diagnosis accuracy and treatment efficacy.',
    icon: 'pi pi-image'
  },
  {
    title: 'Virtual Assistants',
    content: 'AI-powered chatbots provide patients with personalized health advice, appointment scheduling, and medication reminders.',
    icon: 'pi pi-comments'
  }
];

// AI Benefits
aiBenefits = [
  {
    title: 'Improved Patient Outcomes',
    content: 'AI enables early disease detection, personalized treatment, and proactive care, leading to better patient outcomes.',
    icon: 'pi pi-heart'
  },
  {
    title: 'Increased Efficiency',
    content: 'AI automates administrative tasks, freeing healthcare professionals to focus on direct patient care.',
    icon: 'pi pi-cog'
  },
  {
    title: 'Enhanced Accessibility',
    content: 'AI-powered telemedicine and remote monitoring enable patients in rural areas to access quality healthcare.',
    icon: 'pi pi-globe'
  },
  {
    title: 'Cost Savings',
    content: 'AI reduces healthcare costs by minimizing unnecessary tests, procedures, and hospitalizations.',
    icon: 'pi pi-wallet'
  }
];

// Why Choose Pencil Peel IMT
chooseReasons = [
  {
    title: 'Expertise',
    points: [
      { label: 'Highly trained team', description: 'Our team of experts is trained to diagnose and treat a wide range of health concerns, including complex and rare conditions.' },
      { label: 'Specialized care', description: 'Our team of specialists has extensive experience in their respective fields, ensuring that patients receive the best possible care.' },
      { label: 'Continuing education', description: 'Our team stays up-to-date with the latest medical research and advancements, ensuring that patients receive the most effective and innovative treatments.' }
    ]
  },
  {
    title: 'Innovative Solutions',
    points: [
      { label: 'AI-powered diagnosis', description: 'We use AI-powered solutions to diagnose conditions more accurately and quickly, reducing the risk of misdiagnosis and improving patient outcomes.' },
      { label: 'Personalized medicine', description: 'We use AI-powered solutions to develop personalized treatment plans tailored to each patient\'s needs, improving patient outcomes and reducing the risk of complications.' },
      { label: 'Streamlined processes', description: 'We use AI-powered solutions to streamline clinical workflows, reducing wait times and improving patient satisfaction.' }
    ]
  },
  {
    title: 'Personalized Care',
    points: [
      { label: 'Tailored treatment plans', description: 'We develop personalized treatment plans tailored to each patient\'s needs, taking into account their medical history, lifestyle, and preferences.' },
      { label: 'Compassionate care', description: 'Our team of experts provides compassionate care, ensuring that patients feel supported and cared for throughout their treatment journey.' },
      { label: 'Patient education', description: 'We educate patients about their conditions and treatment options, empowering them to take an active role in their care.' }
    ]
  },
  {
    title: 'State-of-the-Art Technology',
    points: [
      { label: 'Latest medical technology', description: 'We use the latest medical technology and equipment, ensuring that patients receive the best possible care.' },
      { label: 'Advanced diagnostic tools', description: 'We use advanced diagnostic tools, such as AI-powered imaging and diagnostic software, to diagnose conditions more accurately and quickly.' },
      { label: 'Electronic health records', description: 'We use electronic health records to manage patient data more efficiently and effectively, reducing errors and improving patient safety.' }
    ]
  }
];

aiFutureSection = {
  title: 'The Future and Power of AI-Powered Customized Solutions in Healthcare at Pencil Peel IMT',
  subtitle: 'Revolutionizing Healthcare with AI at Pencil Peel IMT',
  points: [
    {
      title: 'Predictive Analytics',
      content: 'Our AI algorithms analyze patient data to predict health risks, enabling proactive interventions and preventive care.',
      icon: 'pi pi-chart-line'
    },
    {
      title: 'Personalized Medicine',
      content: 'We use AI to tailor treatment plans to individual patients based on their genetic profiles, medical history, and lifestyle.',
      icon: 'pi pi-user-edit'
    },
    {
      title: 'Medical Imaging',
      content: 'Our AI-powered imaging technologies detect anomalies and diseases earlier, improving diagnosis accuracy and treatment efficacy.',
      icon: 'pi pi-image'
    },
    {
      title: 'Virtual Assistants',
      content: 'AI-powered chatbots provide patients with personalized health advice, appointment scheduling, and medication reminders, enhancing patient engagement and adherence to treatment plans.',
      icon: 'pi pi-comments'
    }
  ]
};


}
