import { useState } from 'react';
import softwareDevelopment from "../assets/software-development.svg";
import web from "../assets/web-development.svg";
import mobile from "../assets/mobile-app.svg";
import cloud from "../assets/cloud-backup.svg";
import api from "../assets/api.svg";
import database from "../assets/database.svg";
import devops from "../assets/devops.svg";
import ui from "../assets/ui-ux.svg";
import it from "../assets/it.svg";
import security from "../assets/security.svg";
import digital from "../assets/digital.svg";

const servicesData = [
  { 
    icon: softwareDevelopment, 
    title: "Custom Software Development", 
    description: `Tailored software solutions to meet your business needs using modern technologies. 
    Specialization in web, mobile, and cloud-based applications. 
    - Technologies: Python, Java, C#
    - Project timelines: Flexible, based on requirements
    - Dedicated teams for project management and support`
  },
  { 
    icon: web, 
    title: "Web Development", 
    description: `Full-stack development services for building responsive, user-friendly websites and web applications.
    - Expertise in: React, NextJS, NodeJS, Golang
    - Custom CMS and eCommerce solutions
    - Scalable architecture for high-traffic websites`
  },
  { 
    icon: mobile, 
    title: "Mobile App Development", 
    description: `Development of iOS and Android apps using React Native and Swift for native development.
    - Seamless integration with APIs
    - In-app purchases and monetization strategies
    - Focus on high performance and UX/UI`
  },
  { 
    icon: cloud, 
    title: "Cloud Consulting & Migration", 
    description: `Assistance in migrating applications to the cloud, with expertise in AWS, Azure, and Google Cloud.
    - Cloud-native architecture
    - Microservices and serverless computing
    - Disaster recovery and backup planning`
  },
  { 
    icon: api, 
    title: "API Development & Integration", 
    description: `RESTful API development using Golang, NodeJS, and other frameworks.
    - API security: OAuth, JWT authentication
    - Integration of third-party services: Stripe, PayPal, Google Maps
    - Versioning and maintenance for long-term usage`
  },
  { 
    icon: database, 
    title: "Database Management & Optimization", 
    description: `Design, implementation, and optimization of relational databases like MySQL and PostgreSQL.
    - Database security and backup solutions
    - Query optimization and indexing strategies
    - Expertise in NoSQL databases (MongoDB) for unstructured data`
  },
  { 
    icon: devops, 
    title: "DevOps & Automation", 
    description: `DevOps services to automate workflows and infrastructure deployment using Docker, Kubernetes, and CI/CD pipelines.
    - Infrastructure as Code (IaC) solutions with Terraform
    - Continuous monitoring using Prometheus, Grafana
    - Automated testing pipelines for rapid deployment`
  },
  { 
    icon: ui, 
    title: "UI/UX Design", 
    description: `Designing intuitive, user-friendly interfaces for web and mobile applications.
    - Prototyping using Figma, Adobe XD
    - Wireframing and usability testing
    - Focus on accessibility and design systems`
  },
  { 
    icon: it, 
    title: "IT Strategy & Consulting", 
    description: `Helping businesses develop IT strategies to align with their goals.
    - Roadmaps for digital transformation
    - Technology selection and vendor management
    - IT audit and compliance consulting`
  },
  { 
    icon: security, 
    title: "Security & Compliance", 
    description: `Implementation of best practices in data security, encryption, and compliance with industry standards.
    - Penetration testing and vulnerability assessments
    - GDPR and HIPAA compliance
    - Real-time security monitoring and threat detection`
  },
  { 
    icon: digital, 
    title: "Digital Transformation", 
    description: `Assisting businesses in transitioning from legacy systems to modern, digital-first solutions.
    - Automation of workflows and business operations
    - Integration of AI and machine learning solutions
    - Process optimization for increased efficiency`
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-zinc-100/50" id="services">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-greenLogo text-center text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8">Our Services</h4>
        <div className="space-y-3 sm:space-y-4">
          {servicesData.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-3 sm:p-4 text-left ${
                  index % 2 === 0
                    ? 'bg-yellow-400 text-black'
                    : 'bg-green-600 text-white'
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <img src={item.icon} alt="Service Icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  <h2 className="font-medium text-sm sm:text-base md:text-lg">{item.title}</h2>
                </div>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-3 sm:p-4 bg-white">
                  <p className="text-zinc-800 text-sm sm:text-base">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Services };
