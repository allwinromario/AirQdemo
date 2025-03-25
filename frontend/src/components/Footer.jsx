
import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-medium tracking-tight">
                Air<span className="text-space-blue">Q</span>
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-xs">
              Advanced AI/ML solutions for high-resolution air quality mapping and environmental monitoring.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink icon={<Github size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Mail size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Research Papers</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Research Team</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AirQ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="#" small>Privacy Policy</FooterLink>
            <FooterLink href="#" small>Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, small, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`text-white/60 hover:text-white transition-colors ${small ? 'text-xs' : 'text-sm'}`}
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
