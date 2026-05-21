import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {label:'Projects', value:120},
  {label:'Clients', value:78},
  {label:'Awards', value:12}
]

export default function Stats(){
  return (
    <section id="stats" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-6">
          {stats.map(s=> (
            <motion.div key={s.label} whileInView={{scale:1}} initial={{scale:0.95,opacity:0}} whileHover={{scale:1.02}} className="glass p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold">{s.value}+</div>
              <div className="text-silver">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
