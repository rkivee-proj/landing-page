import Logo from '@/components/ui/Logo'
import { Github, Link, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Built with ❤️ for creative professionals. Empowering creators with cutting-edge tools.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/harshit960" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/rkivee/" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/rkiveehq" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              {/* <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a> */}
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <nav className="space-y-3">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="/careers" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Careers
              </a>
              <a href="/investors" className="block text-gray-400 hover:text-white transition-colors text-sm">
                For Investors
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <nav className="space-y-3">
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block hidden text-gray-400 hover:text-white transition-colors text-sm">
                Documentation
              </a>
              <a href="#" className="block hidden text-gray-400 hover:text-white transition-colors text-sm">
                Community
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#" className="block hidden text-gray-400 hover:text-white transition-colors text-sm">
                GDPR
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 rkivee. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ by rkivee</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 