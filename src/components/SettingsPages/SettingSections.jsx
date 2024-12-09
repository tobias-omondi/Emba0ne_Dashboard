import React from 'react'
import { motion } from 'framer-motion'

const SettingSections = ({icon: Icon, title, children}) => {
  return (
    <motion.div
    className='bg-purple-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial = {{opacity : 0 , y : 20}}
        animate = {{opacity : 1 , y : 0}}
        transition={{duration: 0.5}}>

            <div className='flex items-center mb-4'>
                <Icon className = "text-purple-950 mr-4" size = '24'/>
                <h2 className='text-xl font-semibold text-gray-300'>
                    {title}
                </h2>
            </div>
            {children}
    </motion.div>
  )
}

export default SettingSections
