import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, Check, ChevronRight, Database, Github, Linkedin, Mail, Menu, MousePointer2, PieChart, Sparkles, X } from 'lucide-react';
import './styles.css';
import { Code } from 'lucide-react';

const projects = [
  {
    number: '01', title: 'Used Car Sales Analysis', category: 'SALES ANALYTICS', image: '/projects/car-dashboard.png',
    description: 'A sales dashboard exploring car inventory, selling prices, mileage, fuel types and transmission mix.',
    tools: ['Power BI', 'Data Cleaning', 'DAX'],
    insights: ['Track total inventory and selling price at a glance', 'Compare fuel and transmission categories', 'Explore sales trends by year and brand'],
  },
  {
    number: '02', title: 'Streaming Content Analysis', category: 'CONTENT ANALYTICS', image: '/projects/prime-video-dashboard.png',
    description: 'A content catalogue dashboard analysing movies and TV shows by country, release year, director and rating.',
    tools: ['Power BI', 'Data Visualization', 'Excel'],
    insights: ['Compare movies with TV shows', 'Identify leading countries and directors', 'Understand release-year and rating distributions'],
  },
  {
    number: '03', title: 'Hotel Operations Dashboard', category: 'OPERATIONS ANALYTICS', image: '/projects/hotel-dashboard.png',
    description: 'A hotel operations overview covering employees, rooms, dining, service availability and outlet distribution.',
    tools: ['Power BI', 'Dashboard Design', 'DAX'],
    insights: ['Summarise hotel and employee metrics', 'Review service availability and room types', 'Compare outlet and reception capacity data'],
  },
  {
    number: '04', title: 'Business Performance Dashboard', category: 'BUSINESS INTELLIGENCE', image: '/projects/zoho-dashboard.png',
    description: 'A business dashboard showing employee growth, country expansion, product categories and product distribution.',
    tools: ['Zoho Analytics', 'Data Visualization', 'Reporting'],
    insights: ['Visualise employee growth over time', 'Track geographic expansion', 'Compare product categories and launches'],
  },
];

const skills = [
  { icon: BarChart3, name: 'Power BI', detail: 'Dashboards · DAX · Data storytelling' },
  { icon: Database, name: 'SQL', detail: 'Queries · Joins · Aggregations' },
  { icon: PieChart, name: 'R Programming', detail: 'Data wrangling · Statistics · ggplot2' },
  { icon: BriefcaseBusiness, name: 'Excel', detail: 'Cleaning · PivotTables · Reporting' },
  { icon: Code, name: 'Python', detail: 'Cleaning · Statistics · Numpy, Pandas, Matplotlib' },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'karuppasamyv30072002@gmail.com';
  useEffect(()=>{const f=e=>e.key==='Escape'&&setActiveProject(null);window.addEventListener('keydown',f);return()=>window.removeEventListener('keydown',f)},[]);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">K</span><span>KARUPPASAMY<span className="brand-dot"> - </span>PORTFOLIO</span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Projects <span>04</span></a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href={`mailto:${email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> OPEN TO DATA ANALYST OPPORTUNITIES</div>
          <h1>Turning data<br/>into <span className="accent">direction.</span></h1>
          <p className="hero-text">Hi, I'm <strong>Karuppasamy</strong> — a data analyst who turns raw data into clear dashboards, useful insights, and better business decisions.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="/resume.pdf" download>Resume <ArrowDownRight size={16}/></a><a className="text-link" href="#about">More about me <ArrowRight size={16}/></a></div>
          
        </div>
        <div className="hero-visual" aria-label="Featured dashboard preview">
          <div className="frame"><div className="frame-bar"><i/><i/><i/><span>used-car-sales.pbix</span></div><img src={projects[0].image} alt="Featured dashboard preview" onClick={()=>setActiveProject(projects[0])}/></div>
          <div className="float-chip chip-a"><BarChart3 size={16}/><span><b>4 dashboards</b><small>Power BI · Zoho</small></span></div>
          <div className="float-chip chip-b"><Sparkles size={16}/><span><b>Ask → Analyse → Act</b><small>My approach</small></span></div>
        </div>
        <div className="hero-index mono">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Areas of focus"><div className="ticker-inner">{[...Array(2)].flatMap(()=>['DATA CLEANING','SQL & ANALYSIS','POWER BI','VISUAL STORYTELLING','BUSINESS INSIGHTS','R PROGRAMMING', 'PYTHON PROGRAMMING']).map((x,i)=><React.Fragment key={i}><span>{x}</span><i>✳</i></React.Fragment>)}</div></section>

      <section className="container stats">{[['04','Dashboards built'],['04','Tools used'],['100%','Business-focused'],['Open','To new roles']].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>

      <section className="section container" id="work">
        <div className="section-head"><div><div className="eyebrow"><span className="section-number">01</span> SELECTED WORK</div><h2>Projects with a<br/><span className="muted">point of view.</span></h2></div><p className="section-intro">A selection of dashboard projects built to make complex information easier to understand and act on.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <button className="project-image" onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`}><img src={project.image} alt={`${project.title} screenshot`} loading="lazy"/><span className="image-overlay"><span>VIEW PROJECT <ArrowUpRight size={16}/></span></span><span className="project-number">{project.number}</span></button>
          <div className="project-meta"><span>{project.category}</span><span>2026</span></div><button className="project-title" onClick={() => setActiveProject(project)}>{project.title}<ArrowUpRight size={19}/></button><p className="project-description">{project.description}</p><div className="tag-list">{project.tools.map(t=><span key={t}>{t}</span>)}</div>
        </article>)}</div>
      </section>

      <section className="about-section" id="about"><div className="container about-grid"><div><div className="eyebrow"><span className="section-number">02</span> A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><span className="accent">Analytical by design.</span></h2></div><div className="about-copy"><p>I’m a Data Analyst skilled in SQL, Excel, Python, and Power BI, transforming raw data into actionable insights through data analysis and visualization.</p><p>I specialize in data cleaning, identifying trends, and building clear, insightful dashboards that support smarter business decisions.</p><a className="text-link" href={`mailto:${email}`}>Have a project in mind? <ArrowRight size={16}/></a><div className="about-note"><MousePointer2 size={17}/><span>Always learning. Always asking better questions.</span></div></div></div></section>

      <section className="section container skills-section" id="skills"><div className="section-head"><div><div className="eyebrow"><span className="section-number">03</span> TOOLKIT</div><h2>The tools behind<br/><span className="muted">the insight.</span></h2></div><p className="section-intro">A practical toolkit for exploring data, communicating patterns, and supporting decisions.</p></div><div className="skills-grid">{skills.map(({icon:Icon,name,detail},i)=><div className="skill-card" key={name}><div className="skill-top"><span>0{i+1}</span><Icon size={21} strokeWidth={1.6}/></div><h3>{name}</h3><p>{detail}</p><div className="skill-rule"><span/></div></div>)}</div><p className="skills-foot mono">CURRENTLY BUILDING: STRONGER SQL · BETTER BUSINESS QUESTIONS · CLEARER STORYTELLING</p></section>

      <section className="contact-section"><div className="container contact-inner"><div className="eyebrow"><span className="section-number">04</span> WHAT'S NEXT?</div><h2>Let's make data<br/><span className="accent">do something.</span></h2><p>Looking for a data analyst, or want to talk about a project? I'd love to hear from you.</p><a className="button button-primary" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={17}/></a><div className="contact-stamp"><Mail size={21}/><span>GOOD QUESTIONS<br/>START CONVERSATIONS</span></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">K</span><span>KARUPPASAMY<span className="brand-dot"> - </span>PORTFOLIO</span></a><span className="footer-copy">© 2026 KARUPPASAMY · All rights reserved.</span><div className="socials"><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18}/></a></div></div></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setActiveProject(null)}}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setActiveProject(null)} aria-label="Close project details"><X size={20}/></button><div className="modal-image"><img src={activeProject.image} alt={`${activeProject.title} dashboard`}/></div><div className="modal-content"><div className="eyebrow"><span className="section-number">{activeProject.number}</span> {activeProject.category}</div><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.description}</p><h3>What this dashboard explores</h3><ul>{activeProject.insights.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><div className="tag-list">{activeProject.tools.map(t=><span key={t}>{t}</span>)}</div><button className="button button-primary modal-done" onClick={()=>setActiveProject(null)}>Back to portfolio <ArrowRight size={16}/></button></div></section></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
