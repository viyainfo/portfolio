import { FaLinkedinIn, FaInstagram, FaGoogle, FaFacebookF   } from "react-icons/fa6";
export function Footer() {
  const navLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/viyainfo-digital-labs/" },
    { icon: FaInstagram , href: "https://www.instagram.com/viya_info?igsh=MWRremdqa2JlOWFvOA==" },
    { icon: FaGoogle, href: "mailto:info@viyainfo.com" },
    { icon: FaFacebookF , href: "#" }
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">

          {/* Left Column - Company Info & Navigation */}
          <div>
            {/* Logo and Company Name */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/viyainfo_brand.svg"
                  alt="ViyaInfo"
                  className="h-20"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6 space-y-2 text-slate-400">
              <p>+91 7619238682</p>
              <p>info@viyainfo.com</p>
            </div>

            {/* Navigation Links */}
            <div className="mb-8">
              {/* <h4 className="text-sm font-semibold text-slate-300 mb-3">Connect with</h4> */}
              <div className="flex flex-wrap gap-x-4 text-sm text-slate-400">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-slate-200 transition-colors bg-slate-600/50 p-2 rounded-full"
                    target="_blank"
                  >
                    {<link.icon />}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                © Copyright {new Date().getFullYear()}. All Rights Reserved by{" "}
                <a
                  href="https://viyainfo.com"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ViyaInfo
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Address & Map */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Address</h4>
            <p className="text-sm text-slate-400 mb-4">
              Bangalore, Karnataka, India
            </p>

            {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden border border-slate-800 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56658501736!2d77.49085284436654!3d12.953945615268654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Created By */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Built with ❤️ in India
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Created by</span>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">V</span>
                </div>
                <a
                  href="https://viyainfo.com"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ViyaInfo Digital Labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

