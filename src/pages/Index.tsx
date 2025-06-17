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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Express', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redis', category: 'Cache' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management with WebSocket integration',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'TailwindCSS'],
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time updates',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
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
              Hi, I'm <span className="gradient-text">Alex</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-medium typing-animation">
                {typedText}
              </h2>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions with modern technologies. 
            Passionate about building scalable applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
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
                With over 5 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications using modern technologies. My passion lies in solving 
                complex problems and delivering exceptional user experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I believe in clean code, thoughtful architecture, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or mentoring aspiring developers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2">Frontend</h4>
                  <p className="text-slate-400 text-sm">React, Vue.js, Angular</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2">Backend</h4>
                  <p className="text-slate-400 text-sm">Node.js, Python, Java</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2">Cloud</h4>
                  <p className="text-slate-400 text-sm">AWS, GCP, Azure</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <h4 className="text-lg font-semibold mb-2">Mobile</h4>
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
                    <Code className="w-12 h-12 text-slate-500" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
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
                    <Button variant="outline" size="sm" className="flex-1 border-teal-500/30 text-teal-300 hover:bg-teal-500/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-teal-500/30 text-teal-300 hover:bg-teal-500/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-3">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Alex Johnson. Built with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
