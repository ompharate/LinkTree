"use client"

import { motion } from "framer-motion"
import { BellIcon, MoreHorizontal, MonitorIcon, BookOpenIcon } from "lucide-react"
import Image from "next/image"

export default function ProfileLinks() {
  const links = [
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48A1.56,1.56,0,1,1,8.15,6.92,1.57,1.57,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
        </svg>
      ),
    },
    { name: "Portfolio", icon: <MonitorIcon className="w-6 h-6" /> },
    { name: "Interview Prep - Drive", icon: <BookOpenIcon className="w-6 h-6" /> },
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
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-2YJuNjoIJBZUG0TubOsDKzevmGUvXt.png`}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <h1 className="text-xl font-semibold text-gray-800 mb-1">@sreyaspatil5</h1>
          <p className="text-gray-600">Software Developer</p>
        </motion.div>

        {/* Links Section */}
        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href="#"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-gray-700">{link.icon}</span>
              <span className="ml-4 text-gray-800 font-medium">{link.name}</span>
              <MoreHorizontal className="w-5 h-5 text-gray-400 ml-auto" />
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
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
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
          <span className="font-medium">Join sreyaspatil5 on Linktree</span>
        </motion.button>
      </div>
    </div>
  )
}

