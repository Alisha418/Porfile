import { profile } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
      <p>
        {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer
