import React from 'react'
import { motion } from 'framer-motion';
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'

import { ImageDownIcon, MessageCircleHeartIcon, VideoOffIcon, Zap } from 'lucide-react'

const Setting = () => {
  return (
    <div className=' flex-1 overflow-auto relative z-10'>
    <Header tittle="Images" />
    <main className='max-w-7xl mx-auto py-6 lg:px-8'>
        {/* Stats */}
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0 , y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          <StatCard name = "Total Sales" icon = {Zap} value = "500+" color = '#6366f1' />
          <StatCard name = "Total Images" icon = {ImageDownIcon} value = "1000+" color = '#8B5cF6' />
          <StatCard name = "Total videos" icon = {VideoOffIcon} value = "500+" color = '#Ec4899' />
          <StatCard name = "comments" icon = {MessageCircleHeartIcon} value = "500+" color = '#10B981' />
        </motion.div>
    </main>
    </div>

  )
}

export default Setting
