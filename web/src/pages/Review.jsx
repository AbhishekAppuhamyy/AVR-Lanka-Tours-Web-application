import React, { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6F52]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F6F52]/10 border border-[#4F6F52]/20 text-[#4F6F52] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#4F6F52] rounded-full"></span>
              Trusted by Thousands of Travelers
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Our <span className="text-[#4F6F52]">Travelers</span> Say
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover why travelers choose AVR Lanka Tours for unforgettable Sri Lankan adventures. 
              Real stories from real explorers.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Widget Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-white/50 rounded-3xl blur-xl"></div>
            
            {/* Widget Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-[#4F6F52]/10 border border-gray-100 p-8">
              <div className="flex justify-center">
                <div 
                  className="elfsight-app-2e49e47f-c2dc-4c48-83d7-3d01918e04e8 w-full"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#4F6F52] to-[#5A7D5A] rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative py-16 px-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Share Your Journey
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Had an amazing experience with AVR Lanka Tours? Help fellow travelers discover 
                the magic of Sri Lanka by sharing your story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://g.page/YOUR_GOOGLE_BUSINESS_REVIEW_LINK/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-[#4F6F52] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center gap-3"
                >
                  <span>Leave a Review</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="#reviews"
                  className="group text-white/90 px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:text-white hover:bg-white/10 inline-flex items-center gap-2"
                >
                  <span>Read More Stories</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#4F6F52] mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#4F6F52] mb-2">2K+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#4F6F52] mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#4F6F52] mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}