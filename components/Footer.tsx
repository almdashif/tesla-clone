import Link from 'next/link'

const footerLinks = [
  { label: 'Tesla © 2024', href: '#' },
  { label: 'Privacy & Legal', href: '#' },
  { label: 'Vehicle Recalls', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Get Updates', href: '#' },
  { label: 'Locations', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#171A20] text-[#5C5E62] py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
