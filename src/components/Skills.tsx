import React from 'react';
import { Wrench, Dumbbell } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "SolidWorks", proficiency: 90 },
    { name: "MATLAB", proficiency: 85 },
    { name: "AutoCAD", proficiency: 80 },
    { name: "Materials Characterization", proficiency: 90 },
    { name: "3D Modeling", proficiency: 85 },
    { name: "Research Methodology", proficiency: 95 },
    { name: "Data Analysis", proficiency: 80 },
    { name: "Technical Writing", proficiency: 85 }
  ];

  const softSkills = [
    { name: "Problem Solving", proficiency: 95 },
    { name: "Critical Thinking", proficiency: 90 },
    { name: "Team Collaboration", proficiency: 85 },
    { name: "Communication", proficiency: 80 },
    { name: "Leadership", proficiency: 75 },
    { name: "Time Management", proficiency: 85 },
    { name: "Adaptability", proficiency: 90 },
    { name: "Attention to Detail", proficiency: 95 }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Wrench className="text-blue-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-green-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Dumbbell className="text-green-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-green-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Materials Science", 
              "Nanotechnology", 
              "Energy Storage", 
              "Composite Materials", 
              "Polymer Science", 
              "Metallurgy", 
              "Self-healing Materials", 
              "Sustainable Materials"
            ].map((area) => (
              <div 
                key={area} 
                className="bg-slate-800 py-3 px-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;