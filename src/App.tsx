import { motion } from 'framer-motion'
import './index.css'
import profileImg from "./assets/image (2).png";
import fakeNewsImg from './assets/Fake_news_detection.png';
import restoImg from './assets/resto_screen.png';
import salesDashboardImg from './assets/screen_sales_proj.png';
import hrDashboardImg from './assets/hrProject_screen.jpg';
import dataCleaningImg from './assets/data_process_proj.png';
import weatherDashboardImg from './assets/weather_screen.png';

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className="container py-24 md:py-32">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

function Header() {
  const nav = [
    { href: '#about', label: 'Accueil' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Expériences' },
    { href: '#education', label: 'Formation' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-navy/70 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#about" className="text-slate-100 font-bold">Filali Saad</a>
        <nav className="hidden md:flex gap-6 text-slate-300">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="md:inline-flex hidden bg-accent text-white px-4 py-2 rounded-lg font-medium">Me contacter</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="about" className="container pt-20 md:pt-28 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Data Scientist & ML Engineer
          </motion.h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-xl">
          Je suis un ingénieur en Informatique spécialisé en Data Engineering, Machine Learning et développement web, passionné par la création de solutions fiables, performantes et orientées valeur métier.
          J’aime transformer des données en outils concrets : dashboards, automatisations, systèmes intelligents, applications web.          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="bg-accent text-white px-5 py-3 rounded-lg font-medium">Voir mes projets</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-white">Contact</a>
          </div>
        </div>
        <motion.div
  className="justify-self-center relative w-40 h-40 md:w-56 md:h-56"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/40 to-white/10 ring-2 ring-white/10 flex items-center justify-center">
    <img
      src={profileImg}
      alt="Filali Saad"
      className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
    />
  </div>
</motion.div>


      </div>
    </section>
  )
}

function Skills() {
  const groups: { title: string; items: string[] }[] = [
    { title: 'Langages', items: ['Python', 'R', 'SQL', 'JavaScript'] },
    { title: 'Data Science', items: ['NumPy', 'Pandas', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Seaborn', 'Matplotlib'] },
    { title: 'Backend / Web', items: ['Flask', 'FastAPI', 'React', 'Laravel', 'HTML/CSS', 'TypeScript', 'PHP'] },
    { title: 'Bases de données', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'DuckDB'] },
    { title: 'Big Data', items: ['Hadoop', 'Apache Spark', 'Kafka', 'Airflow', 'Databricks (exp.)'] },
    { title: 'Cloud & DevOps', items: ['Azure', 'GCP', 'Git', 'Docker', 'CI/CD', 'Tests'] },
    { title: 'Outils', items: ['LangChain', 'RAG', 'API Gemini', 'Odoo'] },
    { title: 'Langues', items: ['Arabe', 'Français (DELF)', 'Anglais'] },
  ]
  return (
    <Section id="skills" title="Compétences techniques">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-white mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="bg-white/10 text-slate-200 px-3 py-1 rounded-md text-sm">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Détection des Fake News',
      desc: 'Détection automatique de fausses informations sur articles et tweets via NLP, vision et modèles deep learning.',
      tools: 'PyTorch, Pandas, scikit-learn, CNN/BERT, Flask',
      img: fakeNewsImg,
      link: '#',
    },
    {
      title: 'Site web pour restaurant (Pays-Bas)',
      desc: 'Développement complet d’un site vitrine avec affichage du menu, système de réservation en ligne et envoi automatique par e-mail.',
      tools: 'React, JavaScript, HTML/CSS, Email API',
      img: restoImg,
      link: '#',
    },
    {
      title: 'Dashboards ventes & livraison',
      desc: 'Création de tableaux de bord interactifs pour analyser les ventes, les retards de livraison et la performance opérationnelle.',
      tools: 'Power BI, Python, Pandas, Excel, DAX',
      img: salesDashboardImg,
      link: '#',
    },
    {
      title: 'HR Analytics Dashboard',
      desc: 'Conception de tableaux de bord RH pour suivre les absences, le turnover, la performance des employés et le pipeline de recrutement.',
      tools: 'Power BI, DAX, Excel, SQL',
      img: hrDashboardImg,
      link: '#',
    },
    {
      title: 'Data Cleaning Automation Script',
      desc: 'Automatisation du nettoyage et de la standardisation de jeux de données bruts : gestion des valeurs manquantes, doublons, formats et génération de rapports de qualité des données.',
      tools: 'Python, Pandas, NumPy, Jupyter, SQL',
      img: dataCleaningImg,
      link: '#',
    },
    {
      title: 'Weather Forecast Dashboard',
      desc: 'Création d’un dashboard météo interactif alimenté par une API, avec visualisation des tendances de température, d’humidité et des prévisions par ville.',
      tools: 'Power BI, Power Query, API REST, JSON, Excel',
      img: weatherDashboardImg,
      link: '#',
    },
  ];

  
  
  
  ;

  return (
    <Section id="projects" title="Projets">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
          >
            {/* IMAGE */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded-lg border border-white/10"
            />

            {/* TEXT */}
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300">{p.desc}</p>
            <p className="text-sm text-slate-400">{p.tools}</p>

            {/* LINK */}
            <div className="mt-2">
              <a
                href={p.link}
                className="text-accent hover:underline"
                target="_blank"
              >
                Voir le code / démo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}


function Experience() {
  const items = [
    {
      role: 'Développeur IA — EXPERIO, Casablanca',
      dates: 'Juil 2025 – Sept 2025',
      desc: 'Chatbot d’assistance comptable avec intégration Gemini (RAG) et persistance des conversations.',
      stack: 'Python, JavaScript, API Gemini, LangChain, RAG, Odoo, PostgreSQL'
    },
    {
      role: 'Data Scientist — Technocolabs Softwares',
      dates: 'Oct 2024 – Jan 2025',
      desc: 'ML pour la livraison: réduction des délais, optimisation d’itinéraires; exposition via API Flask.',
      stack: 'Python, NumPy, Pandas, Seaborn, scikit-learn, Flask'
    },
    {
      role: 'Développeur Freelance — Site de réservation pour restaurant (Pays-Bas)',
      dates: 'Août 2024',
      desc: 'Conception et développement d’un site web complet pour un restaurant, incluant un menu interactif, un système de réservation en ligne avec envoi automatique par e-mail, et une interface moderne optimisée pour l’expérience utilisateur.',
      stack: 'HTML, JavaScript, EmailJS (ou API SMTP), CSS/Tailwind'
    },

    
    {
      role: 'Développeur web — Centre Hospital Al Ghassani, Fès',
      dates: 'Juil 2024 – Août 2024',
      desc: 'Application de gestion hospitalière (rendez‑vous, patients, dossiers).',
      stack: 'Laravel, Bootstrap, HTML, JavaScript, PHP'
    }
  ]
  return (
    <Section id="experience" title="Expériences">
      <ol className="relative border-s border-white/10 pl-6">{
        items.map((e) => (
          <li key={e.role} className="mb-8">
            <div className="absolute -left-2 mt-1 w-3 h-3 rounded-full bg-accent" />
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="text-sm text-slate-400">{e.dates}</p>
            <p className="mt-2 text-slate-300">{e.desc}</p>
            <p className="text-sm text-slate-400 mt-1">{e.stack}</p>
          </li>
        ))
      }</ol>
    </Section>
  )
}

function Education() {
  const items = [
    { title: 'Génie informatique — ÉNSA Fès', dates: '2023 – présent', desc: 'Parcours d’ingénieur en informatique.' },
    { title: 'Classes préparatoires (MP)', dates: '2021 – 2023', desc: 'Filière Mathématiques–Physique.' }
  ]
  return (
    <Section id="education" title="Formation">
      <div className="space-y-4">
        {items.map((e) => (
          <div key={e.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">{e.title}</h3>
              <span className="text-sm text-slate-400">{e.dates}</span>
            </div>
            <p className="text-slate-300 mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-slate-300 mb-6">Vous avez un projet data/IA ou besoin d’un PFE motivé ? Discutons.</p>
      <form className="grid md:grid-cols-2 gap-4 max-w-2xl" action="mailto:saadfilali410@gmail.com" method="post" encType="text/plain">
        <input required name="nom" placeholder="Nom" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent" />
        <input required type="email" name="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent" />
        <input name="sujet" placeholder="Sujet" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:col-span-2 outline-none focus:border-accent" />
        <textarea required name="message" placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:col-span-2 outline-none focus:border-accent"></textarea>
        <label className="md:col-span-2 flex items-center gap-2 text-sm text-slate-400">
          <input type="checkbox" required /> Je consens à être contacté par email.
        </label>
        <button className="bg-accent text-white px-5 py-3 rounded-lg font-medium md:col-span-2">Envoyer</button>
      </form>
      <div className="mt-6 text-sm text-slate-400">
        <a className="hover:underline" href="mailto:saadfilali410@gmail.com">saadfilali410@gmail.com</a> ·
        <span className="mx-2">+212 6 73 96 98 32</span> ·
        <a className="hover:underline" href="#">LinkedIn</a> · <a className="hover:underline" href="#">GitHub</a>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-8 text-sm text-slate-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Filali Saad</span>
        <a href="#about" className="hover:underline">Haut de page</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
