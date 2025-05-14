
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import ParallaxSection from './ParallaxSection';
import { useTheme } from './ThemeProvider';
import { Github, Linkedin, Mail, Phone, FileText, Send } from 'lucide-react';

const ContactSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 ${theme === 'dark' ? 
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black' : 
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white'}`}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.05}>
          <h2 className={`text-4xl font-bold mb-2 text-center ${theme === 'dark' ? 'text-gradient' : 'text-gradient-light'}`}>
            Get In Touch
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </ParallaxSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ParallaxSection speed={0.1} className="w-full">
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 
              'glass-effect-dark' : 
              'glass-effect-light'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Form
              </h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-md ${theme === 'dark' ? 
                      'bg-gray-800 border-gray-700 text-white focus:border-purple-500' : 
                      'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} 
                      focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-md ${theme === 'dark' ? 
                      'bg-gray-800 border-gray-700 text-white focus:border-purple-500' : 
                      'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} 
                      focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className={`w-full px-4 py-2 rounded-md ${theme === 'dark' ? 
                      'bg-gray-800 border-gray-700 text-white focus:border-purple-500' : 
                      'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} 
                      focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your message"
                  />
                </div>
                
                <button 
                  type="submit"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg ${theme === 'dark' ? 
                    'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 
                    'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'} 
                    text-white transition-colors`}
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={0.15} className="w-full space-y-8">
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 
              'glass-effect-dark' : 
              'glass-effect-light'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 
                    'bg-gray-800' : 
                    'bg-gray-100'}`}>
                    <Mail className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Email
                    </p>
                    <a 
                      href="mailto:gokulan@example.com" 
                      className={`font-medium ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'}`}
                    >
                      gokulan@example.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 
                    'bg-gray-800' : 
                    'bg-gray-100'}`}>
                    <Phone className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Phone
                    </p>
                    <a 
                      href="tel:+919876543210" 
                      className={`font-medium ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'}`}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 
                    'bg-gray-800' : 
                    'bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Location
                    </p>
                    <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Shri Shakthi College, Coimbatore
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <p className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className={`p-3 rounded-lg ${theme === 'dark' ? 
                      'bg-gray-800 hover:bg-gray-700' : 
                      'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                  >
                    <Github className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                  </a>
                  <a 
                    href="#" 
                    className={`p-3 rounded-lg ${theme === 'dark' ? 
                      'bg-gray-800 hover:bg-gray-700' : 
                      'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                  >
                    <Linkedin className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                  </a>
                  <a 
                    href="mailto:gokulan@example.com" 
                    className={`p-3 rounded-lg ${theme === 'dark' ? 
                      'bg-gray-800 hover:bg-gray-700' : 
                      'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                  >
                    <Mail className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                  </a>
                </div>
              </div>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={theme === 'dark' ? 
                    'bg-transparent hover:bg-gray-800/50' : 
                    'bg-transparent hover:bg-gray-100'}>
                    Resume
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={theme === 'dark' ? 
                    'bg-gray-800 border border-gray-700' : 
                    'bg-white border border-gray-200'}>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className={`flex flex-col h-full w-full rounded-md p-6 no-underline outline-none ${theme === 'dark' ?
                              'hover:bg-gray-700/50' :
                              'hover:bg-gray-50'}`}
                            href="#"
                          >
                            <div className={`mb-2 mt-4 text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              Download Resume
                            </div>
                            <p className={`text-sm leading-tight ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              Get a copy of my detailed resume including all my technical skills and projects.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ParallaxSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
    </section>
  );
};

export default ContactSection;
