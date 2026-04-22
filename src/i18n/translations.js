export const translations = {
  es: {
    navbar: {
      links: [
        { label: 'Sobre mi', href: '#about' },
        { label: 'Tech', href: '#tech' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Contacto', href: '#contact' },
      ],
      menuToggle: 'Alternar menu',
      github: 'GitHub',
      language: 'Idioma',
      theme: 'Tema',
      themeLight: 'Claro',
      themeDark: 'Oscuro',
      langEs: 'ES',
      langEn: 'EN',
    },
    hero: {
      status: 'Disponible para nuevas oportunidades',
      description: 'Desarrollador Full-Stack apasionado por arquitecturas limpias, sistemas escalables y experiencias excepcionales.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contactame',
    },
    about: {
      label: 'Sobre mi',
      titleTop: 'Construyendo software',
      titleAccent: 'con proposito',
      paragraph1:
        `Soy Juan Manuel Cruz Beltran, desarrollador Full-Stack con experiencia en arquitecturas limpias 
        como Domain-Driven Design y sistemas de facturacion electronica. Me apasiona crear soluciones que 
        combinan backends robustos con interfaces modernas y elegantes.`,
      paragraph2:
        `Trabajo con Python, Java, C#, TypeScript y JavaScript. En el frontend manejo React, Angular y Vue.js. 
          Siempre busco aplicar las mejores practicas: Docker, CI/CD y analisis de calidad con SonarCloud.`,
      stats: [
        { value: '6+', label: 'Proyectos' },
        { value: '6', label: 'Lenguajes' },
        { value: '6', label: 'Frameworks' },
      ],
    },
    techStack: {
      label: 'Stack tecnologico',
      title: 'Herramientas que',
      titleAccent: 'uso',
      categories: [
        {
          title: 'Backend',
          techs: ['FastAPI', 'Spring Boot', '.NET', 'Node.js'],
        },
        {
          title: 'Frontend',
          techs: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'],
        },
        {
          title: 'Mobile',
          techs: ['React Native', 'Expo'],
        },
        {
          title: 'DevOps & DB',
          techs: ['Docker', 'GitHub Actions', 'SonarCloud', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Firebase', 'Git'],
        },
      ],
    },
    skills: {
      label: 'Habilidades Clave',
      title: 'Mas alla del',
      titleAccent: 'codigo',
      groups: [
        {
          id: 'architecture',
          title: 'Arquitectura & Diseno',
          skills: [
            'Clean Architecture',
            'Domain-Driven Design (DDD)',
            'Arquitectura Hexagonal',
            'Patrones de Diseno',
            'Sistemas Escalables',
          ],
          className: 'skills__card--large',
        },
        {
          id: 'engineering',
          title: 'Ingenieria & Practicas',
          skills: [
            'Metodologias Agiles (Scrum, Kanban)',
            'Revision de Codigo',
            'Codigo Limpio',
            'Principios SOLID',
            'Optimizacion de Rendimiento',
          ],
          className: 'skills__card--regular',
        },
        {
          id: 'soft-skills',
          title: 'Habilidades Blandas',
          skills: [
            'Aprendizaje Rapido',
            'Trabajo en Equipo',
            'Resolucion de Problemas',
            'Comunicacion Efectiva',
            'Adaptabilidad',
          ],
          className: 'skills__card--wide',
        },
      ],
    },
    projects: {
      label: 'Proyectos destacados',
      title: 'Lo que he',
      titleAccent: 'construido',
      subtitle: 'Una seleccion de mis proyectos mas representativos, desde arquitecturas backend avanzadas hasta experiencias interactivas.',
      openInGithub: 'Ver {title} en GitHub',
      items: [
        {
          title: 'OrdenaYa - Ecosistema Completo',
          type: 'Full-Stack + Mobile',
          description:
            `Sistema de pedidos para restaurantes con panel de administracion web (React), 
              app movil para clientes (React Native) y chatbot inteligente con OpenAI (Node.js). Tres repositorios, un producto.`,
          techs: ['React', 'React Native', 'Node.js', 'Firebase', 'OpenAI', 'Expo', 'GitHub Actions', 'SonarCloud'],
          highlights: [
            'Panel admin con gestion de menu en tiempo real',
            'App movil con chatbot OrderBot integrado',
            'Backend del chatbot con API de OpenAI',
            'Incluye CI/CD con GitHub Actions y analisis de calidad con SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/ordenaya-web',
        },
        {
          title: 'ZyBus Backend',
          type: 'Backend',
          description:
            `API REST con arquitectura Domain-Driven Design (DDD) en Python. Incluye modulos desacoplados, 
            Value Objects, use cases, excepciones de dominio y migraciones con Alembic.`,
          techs: ['Python', 'FastAPI', 'SQL', 'Docker', 'Alembic', 'DDD'],
          highlights: [
            'Arquitectura DDD profesional',
            'Docker + Docker Compose para despliegue',
            'Soft delete, roles y permisos',
          ],
          github: 'https://github.com/Mnaue8r32/backend_zybus',
        },
        {
          title: 'Facturacion Electronica',
          type: 'Backend',
          description:
            `Conocimientos en facturacion electronica integrada con la API de Hacienda de Costa Rica. 
              Manejo de generacion de XML firmados digitalmente, envio de facturas al sandbox con aceptacion exitosa 
              por parte de Hacienda y generacion de PDFs profesionales.`,
          techs: ['Java', 'Spring Boot', 'XML', 'Firma Digital', 'PDF', 'GitHub Actions', 'SonarCloud'],
          highlights: [
            'Conocimientos en integracion con la API de Hacienda Costa Rica',
            'Generacion de XML con firma digital',
            'Envio de facturas al sandbox aceptadas por Hacienda',
            'Incluye CI/CD con GitHub Actions y analisis de calidad con SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/electronic-invoicing-api',
        },
        {
          title: 'POS JMS - Sistema Completo',
          type: 'Full-Stack',
          description:
             `Aplicacion POS personal con frontend Angular y backend en Spring Boot. 
             Incluye autenticacion JWT, cache con Redis y autorizacion basada en roles (RBAC).`,
          techs: ['Spring Boot', 'Angular', 'Redis', 'Docker', 'GitHub Actions', 'SonarCloud'],
          highlights: [
            'API REST versionada con control de compatibilidad por version',
            'Autenticacion JWT y autorizacion por roles (RBAC)',
            'Cache con Redis',
            'Docker para entorno local y despliegue consistente',
            'Incluye CI/CD con GitHub Actions y analisis de calidad con SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/pos-jms-frontend',
        },
        {
          title: 'Virtual Tour 360',
          type: 'Frontend Creativo',
          description:
            `Tour virtual interactivo 360 con soporte para giroscopio del dispositivo y navegacion por escenas. 
            Experiencia inmersiva creada con HTML, CSS y JavaScript puro.`,
          techs: ['HTML5', 'CSS3', 'JavaScript', 'DeviceMotion API'],
          highlights: [
            'Soporte para giroscopio',
            'Navegacion inmersiva por escenas',
          ],
          github: 'https://github.com/Mnaue8r32/virtual-tour-360',
        },
      ],
    },
    experience: {
      label: 'Trayectoria',
      title: 'Mi',
      titleAccent: 'experiencia',
      timeline: [
        {
          period: '2026 - Presente',
          title: 'Desarrollador Full Stack',
          description:
            `Desarrollo de sistemas empresariales y plataformas escalables aplicando principios de arquitectura limpia,
             DDD y diseno de APIs. Participacion en sistemas ERP, SaaS de facturacion electronica y 
             plataformas de transporte con integracion de servicios cloud y procesamiento en tiempo real.`,
          techs: ['Spring Boot', 'FastAPI', '.NET', 'Angular', 'React', 'React Native', 'Docker', 'Firebase', 'OpenAPI', 'GitHub Actions', 'SonarCloud', 'Expo'],
        },
        {
          period: '2025 - 2026',
          title: 'Desarrollador Full Stack',
          description:
            `Diseno e implementacion de aplicaciones web completas (frontend y backend) utilizando arquitecturas basadas en capas, 
            Arquitectura Hexagonal y principios SOLID. Desarrollo de APIs REST seguras con autenticacion JWT y RBAC, y 
            despliegue continuo mediante pipelines CI/CD.`,
          techs: ['Spring Boot', 'FastAPI', '.NET', 'Angular', 'Vue.js', 'React', 'Docker', 'CI/CD', 'GitHub Actions', 'SonarCloud', 'JWT', 'RBAC', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
        },
        {
          period: '2024 - 2025',
          title: 'Desarrollo de Aplicaciones Web y de Escritorio',
          description:
            `Construccion de aplicaciones web y de escritorio integrando consumo de APIs externas. 
            Desarrollo de soluciones como aplicaciones climaticas y sistemas interactivos, aplicando 
            estructuras de datos, concurrencia y patrones de diseno como MVC.`,
          techs: ['Java', 'PHP', 'JavaScript', 'SQL', 'Bootstrap', 'HTML', 'CSS', 'Swing', 'OpenWeather API', 'Google Maps API', 'Multithreading', 'MVC', 'Estructuras de datos'],
        },
        {
          period: '2023 - 2024',
          title: 'Formacion en Ingenieria de Software',
          description:
            `Adquisicion de fundamentos de programacion y desarrollo de logica computacional. 
            Implementacion de aplicaciones basicas como sistemas bancarios y juegos (ej. cuatro en linea), 
            utilizando archivos, POO y estructuras basicas.`,
          techs: ['Java', 'POO', 'Archivos', 'Logica de programacion', 'Estructuras basicas'],
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Trabajamos',
      titleAccent: 'juntos',
      subtitle: 'Estoy disponible para proyectos freelance, posiciones full-time o colaboraciones interesantes. Hablemos.',
      links: {
        github: 'GitHub',
        email: 'Email',
      },
    },
    footer: {
      notePrefix: 'Disenado y desarrollado con',
      noteAccent: 'pasion',
    },
  },
  en: {
    navbar: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Tech', href: '#tech' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ],
      menuToggle: 'Toggle menu',
      github: 'GitHub',
      language: 'Language',
      theme: 'Theme',
      themeLight: 'Light',
      themeDark: 'Dark',
      langEs: 'ES',
      langEn: 'EN',
    },
    hero: {
      status: 'Open to new opportunities',
      description: 'Full-Stack developer passionate about clean architectures, scalable systems, and exceptional digital experiences.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
    },
    about: {
      label: 'About me',
      titleTop: 'Building software',
      titleAccent: 'with purpose',
      paragraph1:
        `I am Juan Manuel Cruz Beltran, a Full-Stack developer with experience in clean architectures such as 
        Domain-Driven Design and electronic invoicing systems. I enjoy building solutions that combine robust backends with modern and elegant interfaces.`,
      paragraph2:
        `I work with Python, Java, C#, TypeScript, and JavaScript. On the frontend I use React, Angular, and Vue.js. 
        I always aim to apply best practices: Docker, CI/CD, and quality analysis with SonarCloud.`,
      stats: [
        { value: '6+', label: 'Projects' },
        { value: '6', label: 'Languages' },
        { value: '6', label: 'Frameworks' },
      ],
    },
    techStack: {
      label: 'Tech stack',
      title: 'Tools I',
      titleAccent: 'use',
      categories: [
        {
          title: 'Backend',
          techs: ['FastAPI', 'Spring Boot', '.NET', 'Node.js'],
        },
        {
          title: 'Frontend',
          techs: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'],
        },
        {
          title: 'Mobile',
          techs: ['React Native', 'Expo'],
        },
        {
          title: 'DevOps & DB',
          techs: ['Docker', 'GitHub Actions', 'SonarCloud', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Firebase', 'Git'],
        },
      ],
    },
    skills: {
      label: 'Core Skills',
      title: 'Beyond',
      titleAccent: 'code',
      groups: [
        {
          id: 'architecture',
          title: 'Architecture & Design',
          skills: [
            'Clean Architecture',
            'Domain-Driven Design (DDD)',
            'Hexagonal Architecture',
            'Design Patterns',
            'Scalable Systems',
          ],
          className: 'skills__card--large',
        },
        {
          id: 'engineering',
          title: 'Engineering & Practices',
          skills: [
            'Agile Methodologies (Scrum, Kanban)',
            'Code Review',
            'Clean Code',
            'SOLID Principles',
            'Performance Optimization',
          ],
          className: 'skills__card--regular',
        },
        {
          id: 'soft-skills',
          title: 'Soft Skills',
          skills: [
            'Fast Learning',
            'Teamwork',
            'Problem Solving',
            'Effective Communication',
            'Adaptability',
          ],
          className: 'skills__card--wide',
        },
      ],
    },
    projects: {
      label: 'Featured projects',
      title: 'What I have',
      titleAccent: 'built',
      subtitle: 'A selection of my most representative projects, from advanced backend architectures to interactive experiences.',
      openInGithub: 'View {title} on GitHub',
      items: [
        {
          title: 'OrdenaYa - Complete Ecosystem',
          type: 'Full-Stack + Mobile',
          description:
            `Restaurant ordering system with a web admin panel (React), mobile app for customers (React Native), 
            and an intelligent chatbot powered by OpenAI (Node.js). Three repositories, one product.`,
          techs: ['React', 'React Native', 'Node.js', 'Firebase', 'OpenAI', 'Expo', 'GitHub Actions', 'SonarCloud'],
          highlights: [
            'Admin panel with real-time menu management',
            'Mobile app with integrated OrderBot chatbot',
            'Chatbot backend with OpenAI API',
            'Includes CI/CD with GitHub Actions and quality analysis with SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/ordenaya-web',
        },
        {
          title: 'ZyBus Backend',
          type: 'Backend',
          description:
            `REST API with Domain-Driven Design (DDD) architecture in Python. Includes decoupled modules, 
            Value Objects, use cases, domain exceptions, and Alembic migrations.`,
          techs: ['Python', 'FastAPI', 'SQL', 'Docker', 'Alembic', 'DDD'],
          highlights: [
            'Professional DDD architecture',
            'Docker + Docker Compose deployment',
            'Soft delete, roles, and permissions',
          ],
          github: 'https://github.com/Mnaue8r32/backend_zybus',
        },
        {
          title: 'Electronic Invoicing',
          type: 'Backend',
          description:
            `Knowledge in electronic invoicing integrated with Costa Rica's Treasury (Hacienda) API. 
            Covers digitally signed XML generation, invoice submission to sandbox with successful acceptance by Hacienda, 
            and professional PDF generation.`,
          techs: ['Java', 'Spring Boot', 'XML', 'Digital Signature', 'PDF', 'GitHub Actions', 'SonarCloud'],
          highlights: [
          'Knowledge in Costa Rica Hacienda API integration',
          'XML generation with digital signature',
          'Invoice submission to sandbox accepted by Hacienda',
          'Includes CI/CD with GitHub Actions and quality analysis with SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/electronic-invoicing-api',
        },
        {
          title: 'POS JMS - Full System',
          type: 'Full-Stack',
          description:
            `Personal POS application with Angular frontend and Spring Boot backend. 
              Features JWT authentication, Redis caching, and role-based authorization (RBAC).`,
          techs: ['Spring Boot', 'Angular', 'Redis', 'Docker', 'GitHub Actions', 'SonarCloud'],
          highlights: [
            'Versioned REST API with backward compatibility strategy',
            'JWT authentication and role-based authorization (RBAC)',
            'Redis for caching',
            'Docker for consistent local and deployment environment',
            'Includes CI/CD with GitHub Actions and quality analysis with SonarCloud',
          ],
          github: 'https://github.com/Mnaue8r32/pos-jms-frontend',
        },
        {
          title: 'Virtual Tour 360',
          type: 'Creative Frontend',
          description:
            `Interactive 360 virtual tour with device gyroscope support and scene navigation. 
            Immersive experience built with pure HTML, CSS, and JavaScript.`,
          techs: ['HTML5', 'CSS3', 'JavaScript', 'DeviceMotion API'],
          highlights: [
            'Gyroscope support',
            'Immersive scene navigation',
          ],
          github: 'https://github.com/Mnaue8r32/virtual-tour-360',
        },
      ],
    },
    experience: {
      label: 'Journey',
      title: 'My',
      titleAccent: 'experience',
      timeline: [
        {
          period: '2026 - Present',
          title: 'Full Stack Developer',
          description:
              `Development of enterprise systems and scalable platforms applying clean architecture principles, 
              DDD, and API design. Participation in ERP systems, electronic invoicing SaaS, and transport platforms 
              integrating cloud services and real-time processing.`,
          techs: ['Spring Boot', 'FastAPI', '.NET', 'Angular', 'React', 'React Native', 'Docker', 'Firebase', 'OpenAPI', 'GitHub Actions', 'SonarCloud', 'Expo'],
        },
        {
          period: '2025 - 2026',
          title: 'Full Stack Developer',
          description:
            `Design and implementation of full web applications (frontend and backend) using layered 
            architectures, Hexagonal Architecture, and SOLID principles. Development of secure REST APIs 
            with JWT and RBAC authentication, and continuous deployment through CI/CD pipelines.`,
          techs: ['Spring Boot', 'FastAPI', '.NET', 'Angular', 'Vue.js', 'React', 'Docker', 'CI/CD', 'GitHub Actions', 'SonarCloud', 'JWT', 'RBAC', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
        },
        {
          period: '2024 - 2025',
          title: 'Web and Desktop Application Development',
          description:
            `Built web and desktop applications integrating external APIs. Developed solutions like weather 
            apps and interactive systems, applying data structures, concurrency, and design patterns such as MVC.`,
          techs: ['Java', 'PHP', 'JavaScript', 'SQL', 'Bootstrap', 'HTML', 'CSS', 'Swing', 'OpenWeather API', 'Google Maps API', 'Multithreading', 'MVC', 'Data Structures'],
        },
        {
          period: '2023 - 2024',
          title: 'Software Engineering Training',
          description:
            `Acquired programming fundamentals and computational logic skills. Implemented basic applications such as banking systems and games (e.g., connect four), using files, OOP, and core structures.`,
          techs: ['Java', 'OOP', 'Files', 'Programming Logic', 'Core Structures'],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Shall we work',
      titleAccent: 'together',
      subtitle: 'I am available for freelance projects, full-time positions, or interesting collaborations. Let us talk.',
      links: {
        github: 'GitHub',
        email: 'Email',
      },
    },
    footer: {
      notePrefix: 'Designed and developed with',
      noteAccent: 'passion',
    },
  },
};
