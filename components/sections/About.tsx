"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Package, Code, Server, PenTool, FileCode, Database, CloudCog, LayoutGrid } from 'lucide-react';

// Add framer-motion to package.json
const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                About Me
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg">
                I'm a passionate Full Stack Developer with experience in building scalable web and mobile applications, 
                specializing in seamless API integrations in the fintech sector, USSD development, SEO optimization, 
                and cloud deployment on DigitalOcean/Linux Ubuntu environments.
              </p>
              
              <p className="text-lg">
                My goal is to create clean, efficient code that delivers exceptional user experiences. I'm constantly learning
                and adopting new technologies to stay at the forefront of web development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Package size={20} className="text-indigo-400" />
                  <span>Experience: 5+ years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={20} className="text-indigo-400" />
                  <span>Frontend Dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server size={20} className="text-indigo-400" />
                  <span>Backend Dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <PenTool size={20} className="text-indigo-400" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCode size={20} className="text-indigo-400" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={20} className="text-indigo-400" />
                  <span>Database Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudCog size={20} className="text-indigo-400" />
                  <span>Cloud Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid size={20} className="text-indigo-400" />
                  <span>Responsive Design</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
              <div className="absolute inset-0 rounded-lg border border-indigo-500/30"></div>
              <Image
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
                alt="Clifford Kwaku Kyereme Manu"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;