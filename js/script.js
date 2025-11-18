document.getElementById('year').textContent = new Date().getFullYear();

const detailTitle = document.querySelector('.detail-title');
const detailList = document.querySelector('.detail-list');

const data = {
  "BRAND IDENTITY DESIGN AND DEVELOPMENT": [
    "Logo and brand identity design",
    "Corporate identity guidelines",
    "Marketing and advertising material design"
  ],
  "MEDIA PRODUCTION": [
    "Marketing and documentary video production",
    "Visual and audio content production"
  ],
  "WHAT SETS APART": [
    "Expertise and professionalism", "Customized approach", "True partnership", "Measurable results", "Advanced technologies"
  ],
  "INFLUENCER SERVICES": [
    "Public relations and media management", "Ambassador program development", "Strategic influencer campaign management"
  ],
  "CREATIVE WRITING": [
    "Creative copy and ideas", "Strategic content development"
  ],
  "ADVERTISING CAMPAIGN MANAGEMENT": [
    "Integrated campaign planning and launch", 
    "Platform optimization and distribution", 
    "Real-time analytics and performance", 
    "Precise targeting of the appropriate audience"
  ],
  "COMPREHENSIVE DIGITAL MARKETING": [
    "Search Engine Optimization (SEO)",
    "Content marketing",
    "Paid advertising campaign management",
    "Data analysis and performance reports"
  ],
  "CORE VALUES": [
    "Balance", 
    "Innovation", 
    "Excellence", 
    "Transparency", 
    "Technical Excellence"
  ],
};

// Map service titles to their page URLs
const servicePages = {
  'INFLUENCER SERVICES': 'influencer-services.html',
  'CREATIVE WRITING': 'creative-writing.html',
  'COMPREHENSIVE DIGITAL MARKETING': 'digital-marketing.html',
  'BRAND IDENTITY DESIGN AND DEVELOPMENT': 'brand-identity.html',
  'ADVERTISING CAMPAIGN MANAGEMENT': 'advertising.html',
  'MEDIA PRODUCTION': 'media-production.html',
  'WHAT SETS APART': 'what-sets-apart.html',
  'CORE VALUES': 'values.html'
};

document.querySelectorAll('.service-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.textContent.trim();
    
    // Remove clicked class from all pills
    document.querySelectorAll('.service-pill').forEach(pill => pill.classList.remove('clicked'));
    
    // Add clicked class to current pill
    btn.classList.add('clicked');
    
    // Check if this service has a dedicated page
    if (servicePages[title]) {
      // Show glow effect briefly before redirecting
      setTimeout(() => {
        window.location.href = servicePages[title];
      }, 200);
      return;
    }
   
	
 
    // For services without dedicated pages, show details inline
    const serviceDetails = document.getElementById('service-details');
    const detailTitle = document.querySelector('.detail-title');
    const detailList = document.querySelector('.detail-list');
    const coreValuesDisplay = document.querySelector('.core-values-display');
    
    // Show the service details
    serviceDetails.style.display = 'block';
    detailTitle.textContent = title;
    
    // Show regular service details
    detailList.style.display = 'block';
    coreValuesDisplay.style.display = 'none';
    const items = data[title] || [];
    detailList.innerHTML = items.map(i => `<li>${i}</li>`).join('');
  });
});
