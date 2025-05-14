
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import ParallaxSection from './ParallaxSection';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.05}>
          <h2 className="text-4xl font-bold mb-2 text-center text-gradient">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </ParallaxSection>
        
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <ParallaxSection speed={0.1} className="w-full max-w-md p-8 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3 text-xl">📧</span>
                <a href="mailto:gokulan@example.com" className="text-purple-400 hover:text-purple-300">gokulan@example.com</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl">📱</span>
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl">📍</span>
                <span className="text-gray-300">Shri Shakthi College, Coimbatore</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3 text-white">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 14H9V9h2v7zm-1-8.75C9.45 7.25 9 6.75 9 6.25S9.45 5 10 5s1 .75 1 1.25-.45 1.25-1 1.25zM17 16h-2v-4c0-1.1-.9-2-2-2h-1v6h-2V9h2v1c.55-.55 1.11-1 2-1 1.66 0 3 1.34 3 3v4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={0.15} className="w-full max-w-md">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800/50">Resume</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex flex-col h-full w-full rounded-md p-6 no-underline outline-none hover:bg-gray-700/50"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Download Resume
                            </div>
                            <p className="text-sm leading-tight text-gray-400">
                              Get a copy of my detailed resume including all my technical skills and projects.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800/50">Portfolio</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700/50"
                            href="#projects"
                          >
                            <div className="text-sm font-medium leading-none text-white">Projects</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              View my latest projects and applications.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700/50"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none text-white">GitHub</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Check out my open-source contributions and code repositories.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="mt-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Let's Work Together</h3>
              <p className="text-gray-400 mb-6">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <a 
                href="mailto:gokulan@example.com" 
                className="w-full py-3 flex justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </ParallaxSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
    </section>
  );
};

export default ContactSection;
