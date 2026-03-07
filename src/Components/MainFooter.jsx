import { Link } from 'react-router-dom'
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react'

const MainFooter = () => {
  return (
    <footer className="w-full bg-gray-300 py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6">

        {/* Logo section */}
        <div className="max-w-sm">
          <h1 className="font-bold text-2xl md:text-4xl py-3">SHOP.CO</h1>

          <p className="text-gray-500 text-sm leading-relaxed break-words">
            We have clothes that suit your style and which you are proud to wear
            from Women to Men.
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">
            <span className="h-8 w-8 flex items-center justify-center bg-white rounded-full border cursor-pointer hover:bg-gray-100">
              <Twitter size={16} />
            </span>

            <a href="https://www.linkedin.com/in/uday-sharma-45aa221a2/" target="_blank">
              <span className="h-8 w-8 flex items-center justify-center bg-white rounded-full border cursor-pointer hover:bg-gray-100">
                <Linkedin size={16} />
              </span>
            </a>

            <span className="h-8 w-8 flex items-center justify-center bg-white rounded-full border cursor-pointer hover:bg-gray-100">
              <Instagram size={16} />
            </span>

            <span className="h-8 w-8 flex items-center justify-center bg-white rounded-full border cursor-pointer hover:bg-gray-100">
              <Github size={16} />
            </span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold mb-3">COMPANY</h2>
          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <Link to="/about" className="hover:text-black">About</Link>
            <span className="hover:text-black cursor-pointer">Features</span>
            <span className="hover:text-black cursor-pointer">Careers</span>
          </div>
        </div>

        {/* Help */}
        <div>
          <h2 className="font-semibold mb-3">HELP</h2>
          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <span className="hover:text-black cursor-pointer">Customer Support</span>
            <span className="hover:text-black cursor-pointer">Delivery Details</span>
            <span className="hover:text-black cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-semibold mb-3">FAQ</h2>
          <div className="flex flex-col gap-2 text-gray-500 text-sm">
            <span className="hover:text-black cursor-pointer">Account</span>
            <span className="hover:text-black cursor-pointer">Manage Deliveries</span>
            <span className="hover:text-black cursor-pointer">Orders</span>
            <span className="hover:text-black cursor-pointer">Payments</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-500 text-sm px-4">
        © 2026 SHOP.CO. All Rights Reserved.
      </div>

    </footer>
  )
}

export default MainFooter