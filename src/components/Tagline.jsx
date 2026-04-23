import { tagline } from '@/data/data'
import React from 'react'

const Tagline = () => {
  return (
 <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6 py-16">
  {tagline.map((item, index) => {
    const Icon = item.icon;

    return (
      <div key={index} className="flex items-center gap-3 min-w-55">
        <Icon className="w-9 h-9 text-amber-500" />
        <h3 className="font-medium text-2xl text-green-800">{item.name}</h3>
      </div>
    );
  })}
</div>
  )
}

export default Tagline 