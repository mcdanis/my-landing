import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Risskov Rejser (Denmark)",
      link: "https://risskovrejser.dk/",
      desc: "Travel agency global terbaik di Denmark",
      tech: ["PHP", "JavaScript", "MySQL"],
      gradient: "purple-blue",
      img: "/img/risskov.png",
    },
    {
      title: "Podiem (Australia)",
      link: "https://podiem.io/",
      desc: "Platform CRM untuk meningkatkan penjualan terbaik di Australia",
      tech: ["Laravel", "Vue.js", "Redis"],
      gradient: "emerald-teal",
      img: "/img/podiem.png",
    },
    {
      title: "Food Tours (Europe)",
      link: "https://foodtours.eu/",
      desc: "Situs tour kuliner terbaik di Eropa",
      tech: ["WordPress", "PHP", "JavaScript"],
      gradient: "orange-red",
      img: "/img/foodtours.png",
    },
  ];

  const experiences = [
    {
      company: "Salespond",
      location: "Australia",
      position: "Full Stack Developer",
      period: "",
      icon: "bi-globe",
    },
    {
      company: "Indosoft",
      location: "Denmark",
      position: "Senior Web Programmer",
      period: "",
      icon: "bi-server",
    },
    {
      company: "Wilmar International",
      location: "Singapore",
      position: "Fullstack Developer",
      period: "",
      icon: "bi-database",
    },
    {
      company: "RemoteBisnis",
      location: "Indonesia",
      position: "Owner & Developer",
      period: "",
      icon: "bi-code-slash",
    },
  ];

  const skills = [
    { name: "Bisnis Berjalan Otomatis", level: 95, color: "success" },
    {
      name: "Akses Data Real-Time, Di Mana Saja & Kapan Saja",
      level: 90,
      color: "primary",
    },
    {
      name: "Tingkatkan Efektivitas dan Profesional Bisnis Anda",
      level: 95,
      color: "danger",
    },
    { name: "Hemat Biaya Jangka Panjang", level: 85, color: "info" },
    { name: "Custom Sesuai Alur Bisnis Anda", level: 88, color: "success" },
    {
      name: "Data Bisnis Aman & Di Bawah Kendali Anda",
      level: 92,
      color: "warning",
    },
    { name: "Siap Ekspansi Lebih Cepat", level: 90, color: "warning" },
  ];

  return (
    <div className="modern-portfolio">
      {/* HERO SECTION */}
      <section className="hero-section min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        {/* Animated Background */}
        <div className="animated-bg position-absolute w-100 h-100">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="floating-particle position-absolute rounded-circle bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container text-center position-relative px-3 px-md-5">
          <div
            className={`hero-content ${isVisible ? "fade-in" : ""}`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div
              className="hero-avatar mx-auto mb-4"
              style={{ maxWidth: "180px" }}
            >
              <div className="avatar-wrapper rounded-circle overflow-hidden">
                <img
                  src="/img/me.png"
                  alt="my photo"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <h3 className="hero-title fw-bold mb-3 gradient-text fs-2 fs-md-1">
              McDani Saputra
            </h3>
            <p className="lead mb-2 text-light fs-6 fs-md-5">
              Full Stack Developer
            </p>
            <p className="fs-6 fs-md-5 mb-4 text-purple">
              Sudah Dipercaya 8+ Tahun • Terbukti di Proyek Global & Nasional
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <a
                href="#projects"
                className="btn btn-gradient-primary btn-lg px-4 py-3 rounded-pill fw-medium"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-medium"
              >
                Get In Touch
              </a>
            </div>
            <div className="logo d-flex flex-wrap justify-content-center align-items-center gap-3 p-3 bg-white rounded">
              {[
                "logo.jpg",
                "logo2.png",
                "logo4.png",
                "logo5.png",
                "logo6.png",
                "logo7.png",
                "logo8.png",
                "logo9.png",
                "logo11.webp",
                "logo10.png",
                "logo3.png",
              ].map((file, i) => (
                <img
                  key={i}
                  src={`/img/logo/${file}`}
                  alt="Logo"
                  className="img-fluid"
                  style={{
                    maxHeight: "40px",
                    maxWidth: "80px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x pb-4 d-none d-md-block">
          <i className="bi bi-chevron-down fs-1 text-purple bounce-animation"></i>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-6 bg-dark-secondary" id="about">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 gradient-text">About Me</h2>
            <div className="gradient-line mx-auto mb-5"></div>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-content">
                <p className="fs-5 text-light mb-4 lh-lg">
                  Saya adalah profesional di bidang pengembangan sistem digital
                  dengan pengalaman lebih dari{" "}
                  <span className="text-purple fw-semibold">8 tahun</span>. Saya
                  membantu berbagai bisnis — mulai dari usaha kecil hingga
                  perusahaan besar — membangun solusi digital yang memudahkan
                  pekerjaan mereka.
                </p>
                <p className="fs-5 text-light mb-4 lh-lg">
                  Berpengalaman menangani proyek dari dalam maupun luar negeri,
                  saya terbiasa bekerja secara fleksibel dan efisien.
                </p>

                <p className="fs-5 text-light mb-4 lh-lg">
                  Saya percaya bahwa teknologi seharusnya menyederhanakan, bukan
                  mempersulit. Karena itu, setiap proyek saya rancang agar mudah
                  digunakan dan benar-benar membantu bisnis berkembang.
                </p>

                <div className="d-flex flex-wrap gap-2 pt-3">
                  {[
                    "🌍 Accessible ",
                    "🚀 Intuitive Application",
                    "🔑 Secure",
                    "⚡ Quality",
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="badge bg-secondary rounded-pill px-3 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-card position-relative">
                <div className="card bg-gradient-primary p-4 rounded-4 rotate-card">
                  <div className="card bg-dark-secondary p-4 rounded-3 counter-rotate">
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex align-items-center gap-3">
                          <i className="bi bi-globe fs-4 text-purple"></i>
                          <span className="fs-5 text-white">
                            User Friendly Application
                          </span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center gap-3">
                          <i className="bi bi-code-slash fs-4 text-primary"></i>
                          <span className="fs-5 text-white">
                            Aplikasi Modern
                          </span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center gap-3">
                          <i className="bi bi-server fs-4 text-success"></i>
                          <span className="fs-5 text-white">
                            Scalable Solutions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-6 bg-dark" id="projects">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <div className="gradient-line mx-auto mb-5"></div>
          </div>

          <div className="row g-4">
            {projects.map((project, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="card h-100 bg-dark-secondary border-0 rounded-4 project-card">
                  <img src={project.img} alt="Logo" />
                  <div
                    className={`project-gradient-${project.gradient} position-absolute w-100 h-100 rounded-4 opacity-0`}
                  ></div>

                  <div className="card-body p-4 position-relative">
                    <h3 className="card-title h4 fw-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="card-text text-light mb-4 lh-lg">
                      {project.desc}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="badge bg-secondary rounded-pill px-2 py-1 small"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn btn-gradient-${project.gradient} rounded-pill px-4 py-2 fw-medium d-inline-flex align-items-center gap-2`}
                    >
                      View Demo
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-6 bg-dark-secondary" id="experience">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 gradient-text">
              Work Experience
            </h2>
            <div className="gradient-line mx-auto mb-5"></div>
          </div>

          <div className="position-relative">
            {/* Timeline line */}
            <div className="timeline-line position-absolute"></div>

            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="timeline-item d-flex align-items-start gap-4 mb-4 position-relative"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className={`${exp.icon} text-white fs-5`}></i>
                  </div>

                  <div className="timeline-content bg-dark rounded-4 p-4 flex-grow-1">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-2">
                      <h3 className="h5 fw-bold text-white mb-0">
                        {exp.company}
                      </h3>
                      <span className="text-purple fw-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple fw-medium mb-1">{exp.position}</p>
                    <p className="text-light small mb-0">📍 {exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-6 bg-dark" id="skills">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 gradient-text">
              Ini Yang Akan Anda Rasakan!
            </h2>
            <div className="gradient-line mx-auto mb-5"></div>
          </div>

          <div className="row g-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="col-md-6">
                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fs-5 fw-medium text-white skill-name">
                      ✅ {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-6 contact-section" id="contact">
        <div className="container text-center">
          <div className="mb-5">
            <h2 className="display-4 fw-bold mb-4 text-white">
              Bangun Sistem Sesuai Cara Kerja Bisnis Anda
            </h2>
            <div className="gradient-line-white mx-auto mb-5"></div>
            <p className="fs-4 text-light mx-auto px-5">
              Punya ide atau kebutuhan khusus untuk bisnis Anda? <br />
              <br />
              Saya akan membantu merancang web sistem yang benar-benar
              menyesuaikan proses bisnis Anda — bukan sekadar template, tapi
              solusi yang dirancang khusus agar alur kerja jadi lebih efisien,
              rapi, dan bisa diakses tim Anda kapan saja.
              <br />
              <br />
              Saya siap membantu Anda merancang solusi digital yang sesuai,
              fleksibel, dan bisa disesuaikan. Mari mulai dari obrolan santai
              dan lihat bagaimana saya bisa mendukung bisnis Anda berkembang.
            </p>
          </div>

          <div className="row g-4 mb-5 justify-content-center">
            <div className="col-md-5">
              <a
                href="mailto:mcdanisaputra@gmail.com"
                className="contact-card d-flex align-items-center justify-content-center gap-3 p-4 rounded-4 text-decoration-none"
              >
                <i className="bi bi-envelope fs-2 text-purple contact-icon"></i>
                <div className="text-start">
                  <p className="small text-light mb-1">Email</p>
                  <p className="text-white fw-medium mb-0">
                    danisaputra.dev@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="col-md-5">
              <a
                href="https://wa.me/6285320115961"
                target="_blank"
                rel="noreferrer"
                className="contact-card d-flex align-items-center justify-content-center gap-3 p-4 rounded-4 text-decoration-none"
              >
                <i className="bi bi-phone fs-2 text-primary contact-icon"></i>
                <div className="text-start">
                  <p className="small text-light mb-1">WhatsApp</p>
                  <p className="text-white fw-medium mb-0">0853-2011-5961</p>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://github.com/mcdanis"
              className="social-link d-flex align-items-center justify-content-center rounded-circle"
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mcdani-saputra-8a70081a1/"
              className="social-link d-flex align-items-center justify-content-center rounded-circle"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
