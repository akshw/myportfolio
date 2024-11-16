"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { GithubGraph } from "@/components/ui/github";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "React",
    "Nextjs",
    "Nodejs",
    "Express",
    "Flask",
    "Kafka",
    "Mongodb",
    "Postgres",
    "Prisma",
    "Docker",
    "AWS",
    "Azure",
    "Javascript",
    "Typescript",
    "Python",
  ];

  const projects = [
    {
      title: "Stockwise",
      description:
        "Stokwise scrapes the data from the news sites and analyzes the sentiment of the news headline using Hugging face Finbert model.",
      tech: ["React", "Flask", "MongoDB", "Kafka", "Hugging Face"],
      link: "https://github.com/akshw/stockwise",
    },
    {
      title: "Catalyst",
      description:
        "It is RAG (Retrieval Augmented Generation) app in Python that can let you query/chat with your PDFs using generative AI.",
      tech: ["Python", "Ollama", "Chromadb", "RAG"],
      link: "https://github.com/akshw/catalyst",
    },
    {
      title: "Paytm",
      description:
        "A simple web application that simulates a payment and banking system, allowing users to sign up, sign in, check their account balance, and transfer money between accounts.",
      tech: ["React", "Tailwind", "Node", "Express", "Mongodb"],
      link: "https://github.com/akshw/paytm",
    },
    {
      title: "Webtime",
      description: "A chrome extension to track a screen time of your browser.",
      tech: ["React", "Tailwind", "Javascript"],
      link: "https://github.com/akshw/webtime",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/akshw", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/akshww", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lokesh-t-s-18397b228/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:akashagain260@gmail.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-50" style={{ scaleX }} /> */}

      <Alert className="fixed bottom-4 right-4 w-auto bg-black/40 border-white/20 shadow-lg z-40">
        <AlertDescription className="text-white flex items-center gap-2">
          <motion.span
            className="flex h-2 w-2 rounded-full bg-white"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          Got an idea that needs MVP?{" "}
          <motion.a
            href="#Contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-2 py-1 rounded-md text-white hover:text-gray-200 transition-colors"
          >
            Dm me
          </motion.a>
        </AlertDescription>
      </Alert>

      <motion.nav
        className="fixed top-0 left-0 right-0 flex justify-center items-center py-6 z-30 bg-black/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="bg-black/90 rounded-full px-10 py-3 border border-white/10"
          whileHover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ul className="flex justify-center items-center gap-10">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li key={item}>
                <motion.button
                  onClick={() => scrollToSection(item)}
                  className="text-white/80 hover:text-white transition-colors text-base"
                  whileHover="hover"
                >
                  {item}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.a
          href="https://drive.google.com/file/d/1vnRHw9jzWCWm7uL0cmk5ugSUyzWis_t1/view"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/10 text-white px-4 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CV
        </motion.a>
      </motion.nav>

      <main className="pt-28 px-4">
        <section id="Home" className="mb-12">
          <div className="max-w-3xl mx-auto text-white">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Fullstack developer
                </motion.h1>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    className="text-white/90"
                    animate={{ opacity: [1, 1, 0.5] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    ~ Open to work ;
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-lg font-mono mb-4">WHOAMI</h2>
              <p className="font-mono text-gray-400 leading-relaxed text-sm">
                hi. im lokesh, i am a fullstack developer from india. I build
                cool frontends and scalable backends i can also deploy them on
                internet. My interest also lies in AI. I have also built
                projects using llms and Vector databases.
                <br />
                Also i often contribute open source projects
              </p>
              <div className="mt-4">
                <GithubGraph
                  username="akshw"
                  blockMargin={1}
                  colorPallete={[
                    "#181818",
                    "#252525",
                    "#404040",
                    "#a6a6a6",
                    "#f2f2f2",
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="Skills" className="mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Skills
              </h2>
              <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
                <motion.div
                  className="flex gap-4 py-4"
                  animate={{ x: [0, -1000] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="px-6 py-2 bg-white/10 rounded-full border border-white/20 
                               text-white whitespace-nowrap"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="Projects" className="mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <motion.div
                      className="bg-white/10 rounded-lg p-6 h-full hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotateY: 15 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="text-sm px-3 py-1 bg-white/20 rounded-full text-white"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(255, 255, 255, 0.3)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-gray-300 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        View Code
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="Contact" className="mb-12">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Where to find me
              </h2>
              <div className="flex justify-center items-center gap-12 flex-wrap">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              © {new Date().getFullYear()} It only comes in black{" "}
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}
