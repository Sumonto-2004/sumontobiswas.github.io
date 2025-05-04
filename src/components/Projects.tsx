import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Robotic Arm",
      shortDescription: "A 3D model of a robotic arm designed using SolidWorks with multiple degrees of freedom",
      fullDescription: "This project features a 3D model of a robotic arm designed using SolidWorks. The design simulates a multi-joint robotic manipulator, similar to those used in manufacturing and automation industries. It is ideal for educational demonstrations, simulation tasks, and can serve as a foundation for further development in robotics.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      tags: ["SolidWorks", "3D Modeling", "Robotics", "Engineering Design"],
      features: [
        "Fully articulated robotic arm with multiple degrees of freedom",
        "Modeled and assembled using SolidWorks 2021",
        "Designed with motion simulation capabilities",
        "Modular components for easy modification and scalability",
        "Custom end-effector attachment (can be replaced with tools such as grippers, pens, etc.)"
      ],
      requirements: [
        "SolidWorks 2021 or newer",
        "Basic knowledge of 3D modeling and assembly"
      ],
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Self-Healing Polymer Coatings Research",
      shortDescription: "Research on self-healing polymer coatings for infrastructure protection in Bangladesh",
      fullDescription: "This research project examines self-healing polymer coatings as a solution to improve both corrosion resistance and sustainability performance of Bangladesh's infrastructure. Traditional protective coatings show insufficient durability in Bangladesh's climate due to excessive humidity and high salinity exposure. The research presents self-healing polymer coatings as a strategic infrastructure investment for resilience against climate change effects.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      tags: ["Materials Science", "Polymers", "Infrastructure", "Sustainability"],
      features: [
        "Comprehensive literature review of self-healing polymer technologies",
        "Analysis of microcapsule-based self-healing efficiency (50%+)",
        "Economic and environmental impact assessment",
        "Evaluation of implementation feasibility in Bangladesh context"
      ],
      requirements: [
        "Materials science background",
        "Understanding of polymer chemistry"
      ],
      paperLink: "#publications"
    },
    {
      id: 3,
      title: "Sodium-ion Battery Development",
      shortDescription: "Research on developing sustainable sodium-ion batteries as alternatives to lithium-ion batteries",
      fullDescription: "This ongoing research project focuses on the development of sodium-ion batteries as a more sustainable and cost-effective alternative to traditional lithium-ion batteries. The project examines various electrode materials, electrolyte formulations, and cell designs to optimize battery performance metrics including energy density, cycle life, and charge/discharge rates.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
      tags: ["Energy Storage", "Batteries", "Sustainability", "Materials Science"],
      features: [
        "Investigation of various cathode and anode materials for sodium-ion batteries",
        "Performance testing including capacity retention, rate capability, and cycling stability",
        "Cost analysis comparison with lithium-ion technology",
        "Environmental impact assessment of materials and production processes"
      ],
      requirements: [
        "Electrochemistry knowledge",
        "Battery testing equipment",
        "Materials synthesis capabilities"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-blue-600/70 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/70 text-xs rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.shortDescription}</p>
                
                <div>
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-blue-400 hover:text-blue-300 mb-4"
                  >
                    {expandedProject === project.id ? (
                      <>
                        <span>Show Less</span>
                        <ChevronDown size={18} className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <ChevronRight size={18} className="ml-1" />
                      </>
                    )}
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 mb-4">{project.fullDescription}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          {project.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end mt-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 flex items-center"
                      >
                        GitHub <ExternalLink size={16} className="ml-1" />
                      </a>
                    )}
                    
                    {project.paperLink && (
                      <a 
                        href={project.paperLink} 
                        className="text-blue-500 hover:text-blue-400 flex items-center"
                      >
                        Read Paper <ExternalLink size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;