import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Github, 
  MessageSquare 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email', 
      value: 'sumontobishwas09@gmail.com', 
      href: 'mailto:sumontobishwas09@gmail.com',
      color: 'hover:text-red-500'
    },
    { 
      icon: <Phone size={24} />, 
      label: 'Phone', 
      value: '+8801407946372', 
      href: 'tel:+8801407946372',
      color: 'hover:text-green-500'
    },
    { 
      icon: <Facebook size={24} />, 
      label: 'Facebook', 
      value: '@BiswassSumonto09', 
      href: 'https://facebook.com',
      color: 'hover:text-blue-500'
    },
    { 
      icon: <Linkedin size={24} />, 
      label: 'LinkedIn', 
      value: 'Sumonto Biswas', 
      href: 'https://linkedin.com',
      color: 'hover:text-blue-700'
    },
    { 
      icon: <Twitter size={24} />, 
      label: 'Twitter', 
      value: '@SumontoBiswas', 
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Github size={24} />, 
      label: 'GitHub', 
      value: 'sumontobiswas', 
      href: 'https://github.com',
      color: 'hover:text-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Connect With Me</h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <div className={`text-gray-400 ${link.color}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium">{link.label}</p>
                      <p className="text-gray-400 text-sm">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Location</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-400">
                    Department of Materials and Metallurgical Engineering,<br />
                    Bangladesh University of Engineering and Technology (BUET),<br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="text-green-500" />
                <span>Send Me a Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Message Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-md hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4 mt-6">
              <p className="text-blue-400 text-sm">
                I'm always open to discussing new projects, research opportunities, or potential collaborations. Feel free to reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;