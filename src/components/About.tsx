import React from 'react';
import { Beaker, Lightbulb, Microscope, Battery } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 rounded-lg transform -rotate-6"></div>
              <div className="bg-slate-900 p-6 rounded-lg relative z-10">
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Research Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Beaker className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                    <span>Materials Characterization & Nanotechnology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Battery className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                    <span>Sodium-based Batteries Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                    <span>Sustainable Energy Storage Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Microscope className="flex-shrink-0 w-5 h-5 text-blue-500 mt-1" />
                    <span>Advanced Composite Materials</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="font-medium text-gray-400">Email:</span>
                  <a href="mailto:sumontobishwas09@gmail.com" className="text-blue-400 hover:underline">sumontobishwas09@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium text-gray-400">Phone:</span>
                  <a href="tel:+8801407946372" className="text-blue-400 hover:underline">+8801407946372</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium text-gray-400">Location:</span>
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-slate-900 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="prose prose-invert max-w-none">
                <p className="mb-4 text-gray-300 leading-relaxed">
                  As a dedicated BSc student in Material Science and Engineering at BUET, I'm driven by a passion for uncovering material solutions to critical real-world challenges. My academic journey has provided a robust foundation in materials characterization, nanotechnology, and sustainable material development, all of which are crucial for my research endeavors.
                </p>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  My academic focus is heavily research-oriented. I've actively participated in projects exploring the development of sodium-based batteries, aiming to create more sustainable energy storage solutions. Additionally, my work on advanced composite materials has allowed me to delve into the intricacies of material performance and optimization.
                </p>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  These research experiences have significantly enhanced my analytical skills and nurtured a deep appreciation for innovative problem-solving in materials science. My technical proficiency extends to utilizing tools such as MATLAB and AutoCAD, alongside various advanced materials characterization techniques.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I am committed to contributing to cutting-edge research and development, with a particular interest in advancing sustainable and energy-efficient technologies within the field of materials science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;