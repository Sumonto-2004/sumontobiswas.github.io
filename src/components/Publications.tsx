import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Extending Infrastructure Lifespan: Self-Healing Polymer Coatings and Their Economic-Environmental Impact on Bangladesh's Context",
      abstract: "The literature review examines self-healing polymer coatings as a solution to improve both corrosion resistance and sustainability performance of Bangladesh's infrastructure. Traditional protective coatings show insufficient durability in Bangladesh's climate due to excessive humidity and high salinity exposure which prevents extended performance results. Experimental evidence shows that self-healing polymer coatings outperform alternative coatings by reaching a microcapsule-based self-healing efficiency of 65% while intrinsic healing methods reach nearly 50%. Initial coating expenses will be offset by non-realized maintenance requirements throughout its operational lifespan according to lifecycle cost analysis. The absence of knowledge about self-healing polymers in Bangladesh through both research invades their overall acceptance and utilization. Research underlies the requirement for Bangladesh-specific trials that evaluate anti-corrosion coating efficacy under potential usages in different infrastructure constructions. Implementation of self-healing technologies requires collaboration between academic institutions alongside government agencies and industry stakeholders to create specific formulations and run pilot projects that show actual self-healing benefits. The research presents self-healing polymer coatings as a strategic infrastructure investment for resilience which supports sustainable development and combats climate change effects and urbanization risks in Bangladesh.",
      journal: "Journal of Materials Science and Engineering",
      authors: ["Sumonto Biswas", "Dr. Rahman Khan"],
      date: "June 2023",
      keywords: ["Self-healing polymers", "Infrastructure", "Bangladesh", "Corrosion resistance", "Sustainability"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {publications.map((publication) => (
            <div 
              key={publication.id} 
              className="bg-slate-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={publication.image} 
                    alt={publication.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gray-400">
                      <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                    </span>
                    <span className="text-gray-400">
                      <span className="font-medium">Journal:</span> {publication.journal}
                    </span>
                    <span className="text-gray-400">
                      <span className="font-medium">Published:</span> {publication.date}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Abstract</h4>
                    <div className="bg-slate-800 p-4 rounded-lg text-gray-300 max-h-40 overflow-y-auto text-sm">
                      {publication.abstract}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword) => (
                        <span 
                          key={keyword} 
                          className="px-3 py-1 bg-blue-900/40 text-blue-400 text-xs rounded-full border border-blue-800"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      <Download size={16} />
                      <span>Download PDF</span>
                    </button>
                    <a 
                      href="#" 
                      className="flex items-center gap-1 px-4 py-2 bg-transparent border border-green-500 text-green-500 rounded-md hover:bg-green-500/10 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Online</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Want to explore more of my academic contributions?</p>
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <span>Google Scholar Profile</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;