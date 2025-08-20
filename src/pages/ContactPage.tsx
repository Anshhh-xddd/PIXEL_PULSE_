import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Clock, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [serverMessage, setServerMessage] = useState<string>('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const validate = (partial?: Partial<typeof formData>) => {
    const data = { ...formData, ...partial };
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!data.name || data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!data.email || !emailRegex.test(data.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.message || data.message.trim().length < 10) {
      nextErrors.message = 'Please provide at least 10 characters about your project.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    validate({ [e.target.name]: e.target.value } as Partial<typeof formData>);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validate({ [e.target.name]: (e.target as HTMLInputElement | HTMLTextAreaElement).value } as Partial<typeof formData>);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setServerMessage('');

    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 15000);

      const now = new Date();
      const submissionTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });

      const detailedMessage = `
🤖 NEW CONTACT FORM SUBMISSION - PIXELPULSE

📅 Submission Time: ${submissionTime}
🌐 Website: PixelPulse Design Studio

👤 CONTACT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}

💬 MESSAGE:
${formData.message}

---
This message was sent from the PixelPulse contact form.
Reply directly to this email to respond to ${formData.name}.
      `.trim();

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('detailed_message', detailedMessage);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `🤖 New Contact Form Submission from ${formData.name} - PixelPulse`);
      formDataToSend.append('submission_time', submissionTime);

      const response = await fetch('https://formspree.io/f/manbokbo', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });
      window.clearTimeout(timeoutId);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const data = await response.json().catch(() => null);
        const msg = data?.error || 'Submission failed. Please try again later.';
        setServerMessage(msg);
        throw new Error(msg);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      if (!serverMessage) setServerMessage('Network error or timeout. Please check your connection and try again.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGmailCompose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'pixelpulse2905@gmail.com';
    const subject = '🤖 New Project Inquiry - PixelPulse';
    const body = `Hello PixelPulse Team,

I'm interested in your design services and would like to discuss a potential project.

Project Details:
- Project Type: 
- Timeline: 
- Budget Range: 
- Additional Requirements: 

Please let me know the next steps.

Best regards,
[Your Name]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/7 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/4 via-transparent to-orange-500/4"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/14 via-transparent to-orange-500/7 animate-pulse"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/4 via-transparent to-transparent"></div>
      
      <div className="relative z-10 pt-20 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Get In <br />
              <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand with cutting-edge design? Let's create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-white mb-8">Connect With Us</h2>
              <div className="space-y-8">
                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  </div>
                  <a 
                    href="mailto:pixelpulse2905@gmail.com" 
                    onClick={openGmailCompose}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 cursor-pointer text-lg block ml-16"
                  >
                    pixelpulse2905@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm ml-16 mt-1">We'll respond within 24 hours</p>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  </div>
                  <p className="text-gray-300 text-lg ml-16">+91 95122 94700</p>
                  <p className="text-gray-400 text-sm ml-16 mt-1">Available Mon-Fri, 9AM-6PM IST</p>
                </div>

                {/* Location */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                  </div>
                  <p className="text-gray-300 text-lg ml-16">Mavdi, Rajkot, Gujarat, India</p>
                  <p className="text-gray-400 text-sm ml-16 mt-1">By appointment only</p>
                </div>

                {/* Working Hours */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Clock size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Working Hours</h3>
                  </div>
                  <div className="ml-16 space-y-1">
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose PixelPulse?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Fast response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Professional consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Transparent pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Ongoing support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 border border-gray-800 rounded-xl shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
                  <p className="text-gray-300 text-lg">
                    Tell us about your vision and we'll help bring it to life with our expertise in design and technology.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby="name-error"
                        className={`w-full bg-black/50 backdrop-blur-sm border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name ? 'border-red-500 focus:ring-red-500/30' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/20'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="you@example.com"
                        autoComplete="email"
                        inputMode="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby="email-error"
                        className={`w-full bg-black/50 backdrop-blur-sm border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email ? 'border-red-500 focus:ring-red-500/30' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="text-white block mb-2 text-sm font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="Your company name (optional)"
                      autoComplete="organization"
                      className="w-full bg-black/50 backdrop-blur-sm border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby="message-error"
                      className={`w-full bg-black/50 backdrop-blur-sm border text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500 focus:ring-red-500/30' : 'border-gray-700 focus:border-orange-500 focus:ring-orange-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Hidden fields */}
                  <input type="hidden" name="_replyto" value={formData.email} />
                  <input type="hidden" name="_subject" value={`🤖 New Contact Form Submission from ${formData.name} - PixelPulse`} />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="text-green-400 bg-green-500/20 border border-green-500/50 px-6 py-4 rounded-lg text-sm">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-400 bg-red-500/20 border border-red-500/50 px-6 py-4 rounded-lg text-sm" aria-live="polite">
                      ❌ {serverMessage || 'Something went wrong. Please try again later or contact us directly via email.'}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-black font-bold py-4 rounded-xl flex justify-center items-center gap-3 hover:from-orange-400 hover:to-red-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-b-2 border-black rounded-full" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={20} />
                        Send Message
                        <Zap size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
