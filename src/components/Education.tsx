import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Materials & Metallurgical Engineering",
      institution: "Bangladesh University of Engineering & Technology",
      duration: "2019 - Present",
      icon: <GraduationCap size={24} className="text-blue-500" />,
      imgUrl: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
      description: "Studying advanced materials characterization, nanotechnology, and sustainable material development with a focus on research-oriented approaches."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      field: "Science",
      institution: "Notre Dame College",
      duration: "2017 - 2019",
      icon: <BookOpen size={24} className="text-green-500" />,
      imgUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      description: "Completed Higher Secondary Certificate with a major in Science, focusing on Physics, Chemistry, and Mathematics."
    },
    {
      id: 3,
      degree: "Secondary Education",
      field: "Science",
      institution: "Rajendrapur Cantonment Public School & College",
      duration: "2015 - 2017",
      icon: <School size={24} className="text-yellow-500" />,
      imgUrl: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      description: "Completed Secondary School Certificate with a Science concentration, building a strong foundation in core science subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-900 z-10"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full border border-gray-700 hover:border-blue-500/50">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 p-2 bg-slate-700 rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <p className="text-blue-400">{item.field}</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{item.institution}</h4>
                      <p className="text-gray-400 mb-4">{item.duration}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:px-8">
                    <div className="overflow-hidden rounded-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300 group">
                      <img 
                        src={item.imgUrl} 
                        alt={item.institution} 
                        className="w-full h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;