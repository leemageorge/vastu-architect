import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full bg-white/10 border border-white/2 p-5 backdrop-blur-xl rounded-bl-[10%] rounded-tr-[10%] shadow-[10px_10px_10px_rgba(0,0,0,0.8)]">
        <form className='' >
            <div className='border-3 border-amber-300 space-y-6 p-6 rounded-tr-[10%] rounded-bl-[10%]'>
            <div className='flex flex-col gap-3'>
                <label className='text-md lg:text-xl'>Full Name</label>
                <input type="text" placeholder='Enter Full Name' className='outline-none border-b border-white/20 px-4 py-2 rounded-lg' />
            </div>
                 <div className='flex flex-col gap-3'>
                <label className='text-md lg:text-xl'>Phone Number</label>
                <input type="text" placeholder='Enter Phone Number' className='outline-none border-b border-white/20 px-4 py-2 rounded-lg' />
            </div>
                 <div className='flex flex-col gap-3'>
                <label className='text-md lg:text-xl '>Message</label>
                <textarea type="text" placeholder='Enter Message' rows={5} className='outline-none resize-none border-b border-white/20 px-4 py-2 rounded-lg' />
            </div>
           <div className='flex items-center justify-center'>
             <button className='bg-amber-300 rounded-br-2xl rounded-tl-2xl px-6 py-2 text-xl'>Submit</button>
           </div>
            
            </div>
        </form>
    </div>
  )
}

export default ContactForm      