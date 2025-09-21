import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'balajiborude2503@gmail.com',
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=balajiborude2503@gmail.com&su=Hello&body=Hi%20Balaji",
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7666607707',
      href: 'tel:+91 7666607707',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashatra, India',
      href: 'https://www.google.com/search?kgmid=%2Fm%2F015y2q&hl=en-IN&q=Pune&shndl=17&shem=sdl1p&source=sh%2Fx%2Fkp%2Fosrp%2Fm5%2F1&kgs=29ec9964b058bbf0',
    },
  ];

  return (
    <section id="contact" className="w-screen py-24 overflow-x-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-white dark:from-dark-surface dark:via-dark-bg dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className=" inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Send className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-2" />
            <span className="text-cyan-700 dark:text-cyan-300 font-medium">Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 dark:from-white dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. 
            Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                and potential collaborations.
              </p>
            </div>



            {/* Isuse occured in here  */}

            <div className="space-y-6  h-auto relative ">
              
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                    target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative block w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
                  <div className="flex items-center space-x-20 p-6 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">

                    <motion.div
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon size={20} />
                    </motion.div>

                    <div className=" absolute flex flex-col flex-wrap   ">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white flex flex-wrap font-semibold text-sm   sm:text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 -z-10" />
            <div className="bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-200/50 dark:border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white dark:bg-dark-surface text-gray-900 dark:text-white transition-all duration-300 text-lg"
                      whileFocus={{ scale: 1.02 }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white dark:bg-dark-surface text-gray-900 dark:text-white transition-all duration-300 text-lg"
                      whileFocus={{ scale: 1.02 }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white dark:bg-dark-surface text-gray-900 dark:text-white transition-all duration-300 resize-none text-lg"
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center justify-center space-x-3 text-lg shadow-xl ${
                    isSubmitted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/25'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-500/25'
                  } ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={24} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}