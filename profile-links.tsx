"use client"

import { motion } from "framer-motion"
import { BellIcon, MoreHorizontal, MonitorIcon, BookOpenIcon } from "lucide-react"
import Image from "next/image"

export default function ProfileLinks() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/karan-mohite/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48A1.56,1.56,0,1,1,8.15,6.92,1.57,1.57,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/karan-mohite",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
        </svg>
      ),
    },
    { 
      name: "Portfolio", 
      href: "https://karanmohite.tech",
      icon: <MonitorIcon className="w-6 h-6" /> 
    },
    { 
      name: "HackerRank", 
      href: "https://www.hackerrank.com/profile/mohitekaran18",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.646-1.115-.646-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.085 0-.177.046-.226.109L7.199 6.429c-.074.045-.123.127-.123.221 0 .143.113.258.254.258h.701v7.334c0 .143.114.258.258.258h3.875v3.791c0 .143.115.258.258.258h.701c.141 0 .254-.115.254-.258v-3.791h3.875c.143 0 .258-.115.258-.258V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221l-1.572-1.509c-.049-.063-.141-.109-.226-.109-.085 0-.177.046-.226.109l-1.572 1.509c-.074.045-.123.127-.123.221 0 .143.113.258.254.258h.701v3.875h-3.875V7.057c0-.143-.115-.258-.258-.258z"/>
      </svg>
    },
    { 
      name: "Twitter/X",
      href: "https://x.com/KaranMohit56274",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    },
    {
      name: "Email",
      href: "mailto:mohitekaran18@gmail.com",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-6">
      <div className="max-w-md mx-auto">
        {/* Header Icons */}
        <div className="flex justify-between mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <BellIcon className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        {/* Profile Section */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-8">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={`http://karanmohite.tech/placeholder-user.jpeg?height=400&width=400`}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <h1 className="text-xl font-semibold text-gray-800 mb-1">@karan_mohite</h1>
          <p className="text-gray-600">Software Developer</p>
        </motion.div>

        {/* Links Section */}
        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-gray-700">{link.icon}</span>
              <span className="flex-1 text-center text-gray-800 font-medium">{link.name}</span>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-6"
        >
        
          <motion.a
            href="mailto:mohitekaran18@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Join Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white rounded-full py-3 px-6 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="font-medium">Join karan_mohite</span>
        </motion.button>
      </div>
    </div>
  )
}

