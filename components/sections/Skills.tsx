"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FolderKanban, Database, Globe, Server, Monitor, 
  Cloud, LineChart, Phone 
} from 'lucide-react';

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const skills = [
    {
      category: "Frontend Development",
      icon: <Monitor className="w-8 h-8 text-indigo-400" />,
      skills: ["React", "React Native", "Next.js", "JavaScript/TypeScript", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8 text-purple-400" />,
      skills: ["Node.js", "PHP", "Express.js", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      category: "Database Management",
      icon: <Database className="w-8 h-8 text-pink-400" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis", "ORM Tools"]
    },
    {
      category: "Mobile Development",
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      skills: ["React Native", "Native APIs", "Mobile UI/UX", "Responsive Design", "App Store Deployment"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      skills: ["DigitalOcean", "Linux/Ubuntu", "CI/CD", "Docker", "AWS", "Serverless"]
    },
    {
      category: "Web Services",
      icon: <Globe className="w-8 h-8 text-green-400" />,
      skills: ["SEO Optimization", "Web Performance", "Cross-browser Testing", "USSD Development"]
    },
    {
      category: "UI/UX Design",
      icon: <FolderKanban className="w-8 h-8 text-yellow-400" />,
      skills: ["Figma", "User-Centered Design", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      category: "Business & Analytics",
      icon: <LineChart className="w-8 h-8 text-red-400" />,
      skills: ["Fintech Integrations", "Payment Gateways", "Data Visualization", "User Analytics"]
    }
  ];

  const SkillCard = ({ category, icon, skills }: any) => (
    <motion.div 
      variants={fadeInUp}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-md bg-gray-800 group-hover:bg-indigo-900/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Skills & Expertise
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills honed through years of professional experience
              and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;