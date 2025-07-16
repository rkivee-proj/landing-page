import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Logo className="mb-4 md:mb-0" />
        <nav className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; 2024 rkivee. All rights reserved. Built with ❤️ for creative professionals.</p>
      </div>
    </footer>
  )
} 