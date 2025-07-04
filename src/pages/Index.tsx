import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedText(fullText);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [

    { name: 'C/C++', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Ruby', category: 'Language' },
    { name: 'Javascript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Ruby on Rails', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'Next.js', category: 'FrontEnd' },
    { name: 'Redis', category: 'Cache' }
  ];

  const links = {
    mail: 'mailto:rahman6s@uwindsor.ca',
    linkedin: 'https://www.linkedin.com/in/ashiqur-rahman-7a9820149',
    github: 'https://github.com/ashiqurrah7',
  }

  const projects = [
    {
      title: 'React Snake',
      description: 'Classic Snake game made entirely with React, linked lists and multi-dimensinal arrays.',
      tech: ['React', 'Typescript'],
      image: '/snake.png',
      alt: 'Snake game image',
      github: 'https://github.com/ashiqurrah7/react-snake-game',
      demo: 'https://react-snake-game-git-main-ashiqurrah7.vercel.app/'
    },
    {
      title: 'Multi-Server Distributed File System',
      description: 'Fault tolerant Distributed File System for multi server configuration made with sockets.',
      tech: ['C', 'Sockets'],
      image: '/DFS.png',
      alt: 'Distributed File System Image',
      github: 'https://github.com/ashiqurrah7/asp-project',
    },
    {
      title: 'Mealkit Recommendation System',
      description: 'Mealkit recommendation system for users made from scraping most popular mealkit sites in NA.',
      tech: ['Java'],
      image: '/meal.png',
      alt: 'Meal Recommendation System Image',
      github: 'https://github.com/ashiqurrah7/meal_recommendation_system',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Ashiq</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <div className="w-fit">
                <h2 className="text-2xl md:text-4xl font-medium typing-animation">
                  {typedText}
                </h2>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions with modern technologies.
            Passionate about building scalable applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-3" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-teal-500 text-teal-500 hover:bg-teal-500/10 hover:text-white px-8 py-3" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href={links.github} target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={links.linkedin} target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={links.mail} className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">Building the Future, One Line at a Time</h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                With 3 years of experience in full-stack development, I specialize in creating
                robust, scalable applications using modern technologies. My passion lies in solving
                complex problems and delivering exceptional user experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I believe in clean code, thoughtful architecture, and continuous learning.
                When I'm not coding, you'll find me exploring new technologies or mentoring aspiring developers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Frontend</h4>
                  <p className="text-slate-400 text-sm">React, Angular, Next</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Backend</h4>
                  <p className="text-slate-400 text-sm">C/C++, Node.js, Python, Java, Ruby</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Cloud</h4>
                  <p className="text-slate-400 text-sm">AWS, GCP, Azure</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Mobile</h4>
                  <p className="text-slate-400 text-sm">React Native, Flutter</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 border-teal-500/30 text-teal-300 hover:bg-teal-500/10 hover:border-teal-400 transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all hover:transform hover:scale-105">
                <CardHeader>
                  <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-teal-500/20 text-teal-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="flex flex-1">
                      <Button variant="outline" size="sm" className="flex-1 border-teal-500/30 text-teal-500 hover:bg-teal-500/10 hover:text-white">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    {project.demo &&
                      <a href={project.demo} target="_blank" className="flex flex-1">
                        <Button variant="outline" size="sm" className="flex-1 border-teal-500/30 text-teal-500 hover:bg-teal-500/10 hover:text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    }
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text pb-1">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={links.mail} className="flex flex-col">
              <Button size="lg" className="sm:flex-1 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </a>
            <a href={links.linkedin} target="_blank" className="flex flex-col">
              <Button variant="outline" size="lg" className="sm:flex-1 border-teal-500 text-teal-500 hover:bg-teal-500/10 hover:text-white px-8 py-3">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Ashiqur Rahman. Built with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
