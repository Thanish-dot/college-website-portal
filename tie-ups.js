
/* ---------- Companies data ---------- 
   - If a remote logo doesn't load (hotlink blocked/offline), an SVG placeholder will be generated.
   - If you prefer local logos, download images into `images/` and set `logo: 'images/tcs.svg'`.
*/
const companies = [
  { name: 'Tata Consultancy Services', logo: './images/tcs.webp', desc: 'Leading IT services, consulting & business solutions.', website: 'https://www.tcs.com', tag: 'it' },
  { name: 'Infosys', logo: './images/infosys.png', desc: 'Global leader in next-gen digital services.', website: 'https://www.infosys.com', tag: 'it' },
  { name: 'Wipro', logo: './images/wipro.jpg', desc: 'IT, consulting and business process services.', website: 'https://www.wipro.com', tag: 'it' },
  { name: 'HCL Technologies', logo: './images/hcl.svg', desc: 'Enterprise technology solutions & services.', website: 'https://www.hcltech.com', tag: 'it' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', desc: 'Pioneering AI, cloud & enterprise solutions.', website: 'https://www.ibm.com', tag: 'it' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', desc: 'E-commerce, cloud and logistics leader.', website: 'https://www.amazon.in', tag: 'it' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', desc: 'Cloud, productivity & developer tools.', website: 'https://www.microsoft.com', tag: 'it' },
  { name: 'Google (Cloud)', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', desc: 'Cloud platform, AI and developer tools.', website: 'https://cloud.google.com', tag: 'it' },
  { name: 'Accenture', logo: './images/accenture.png', desc: 'Consulting & professional services.', website: 'https://www.accenture.com', tag: 'consulting' },
  { name: 'Cognizant', logo: './images/cognizant.webp', desc: 'Digital, technology & consulting services.', website: 'https://www.cognizant.com', tag: 'it' },
  { name: 'Dell Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg', desc: 'Enterprise hardware & cloud solutions.', website: 'https://www.dell.com', tag: 'manufacturing' },
  { name: 'Intel', logo: './images/intel.png', desc: 'Semiconductors & compute innovations.', website: 'https://www.intel.com', tag: 'manufacturing' },
  { name: 'Qualcomm', logo: './images/qualcomm.png', desc: 'Mobile chipsets & wireless tech.', website: 'https://www.qualcomm.com', tag: 'manufacturing' },
  { name: 'Bosch', logo: './images/Bosch.png', desc: 'Engineering & industrial technology.', website: 'https://www.bosch.in', tag: 'manufacturing' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', desc: 'Electronics, memory & displays.', website: 'https://www.samsung.com', tag: 'manufacturing' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', desc: 'Database, cloud & enterprise software.', website: 'https://www.oracle.com', tag: 'it' },
  { name: 'Cisco', logo: './images/Cisco.png', desc: 'Networking & communication systems.', website: 'https://www.cisco.com', tag: 'it' },
  { name: 'Capgemini', logo: './images/capgemini.png', desc: 'Consulting, tech and engineering services.', website: 'https://www.capgemini.com', tag: 'consulting' },
  { name: 'Siemens', logo: './images/siemens.png', desc: 'Industry, infrastructure & automation.', website: 'https://www.siemens.com', tag: 'manufacturing' }
];

/* create data-URI SVG placeholder (shows initials) */
function svgPlaceholder(name, w = 300, h = 80) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 3).join('').toUpperCase();
  const bg = '#0f1724', fg = '#e6eefc';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='${bg}' rx='6' ry='6'/><text x='50%' y='50%' fill='${fg}' font-family='Inter, Arial' font-weight='700' font-size='28' text-anchor='middle' dominant-baseline='central'>${initials}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const grid = document.getElementById('grid');

function createCard(c) {
  const card = document.createElement('article');
  card.className = 'company';
  card.setAttribute('data-name', c.name.toLowerCase());
  card.setAttribute('data-tag', c.tag || 'all');

  const logoWrap = document.createElement('div');
  logoWrap.className = 'logo';

  const img = document.createElement('img');
  img.alt = c.name + ' logo';
  img.src = c.logo;
  img.loading = 'lazy';
  img.style.filter = 'drop-shadow(0 6px 14px rgba(2,8,23,0.6))';

  // on error fallback to generated SVG placeholder
  img.onerror = () => {
    img.onerror = null;
    img.src = svgPlaceholder(c.name, 140, 80);
    img.style.filter = 'none';
  };

  logoWrap.appendChild(img);

  const h = document.createElement('div');
  h.className = 'name';
  h.textContent = c.name;

  const p = document.createElement('div');
  p.className = 'desc';
  p.textContent = c.desc;

  const meta = document.createElement('div');
  meta.className = 'meta';
  const a = document.createElement('a');
  a.href = c.website;
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'visit';
  a.textContent = 'Visit';
  const details = document.createElement('a');
  details.href = '#';
  details.textContent = 'Details';
  details.onclick = (e) => { e.preventDefault(); alert(c.name + '\\n\\n' + c.desc + '\\n\\nWebsite: ' + c.website); };

  meta.appendChild(a);
  meta.appendChild(details);

  card.appendChild(logoWrap);
  card.appendChild(h);
  card.appendChild(p);
  card.appendChild(meta);

  return card;
}

/* initial render */
function render(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    const msg = document.createElement('div');
    msg.style.color = 'rgba(255,255,255,0.6)';
    msg.style.textAlign = 'center';
    msg.style.gridColumn = '1/-1';
    msg.textContent = 'No companies match your search/filters.';
    grid.appendChild(msg);
    return;
  }
  list.forEach(c => grid.appendChild(createCard(c)));
  observeCards(); // add reveal animation
}

/* simple search + filter */
const search = document.getElementById('search');
const chips = document.querySelectorAll('.chip');

function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const active = [...chips].find(s => s.classList.contains('active'))?.dataset.filter || 'all';
  const filtered = companies.filter(c => {
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    const matchTag = active === 'all' ? true : (c.tag === active);
    return matchQ && matchTag;
  });
  render(filtered);
}

search.addEventListener('input', () => { applyFilters(); });

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    applyFilters();
  });
});

/* IntersectionObserver to reveal cards elegantly */
let observer;
function observeCards() {
  if (observer) observer.disconnect();
  const nodes = document.querySelectorAll('.company');
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });
  nodes.forEach(n => observer.observe(n));
}

/* initial call */
render(companies);

/* optional: keyboard '/' to focus search like many sites */
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== search) {
    e.preventDefault(); search.focus();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
