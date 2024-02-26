import React from 'react'
import LottieAnimation from '../Contact_component/Lottie_animation'
import ContactForm from '../Contact_component/contact_form'

const ContactPage = () => {
  return (
    <section className='w-full mt-10 h-auto md:h-[75vh] border-b-2 border-solid flex flex-col md:flex-row items-center justify-center'>
      <div className='inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid'><LottieAnimation/></div>
      <div className=' w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8'>
        <h2 className='font-bold capitalize text-2xl xs:text-3xl sm:text-4xl'>Let's Connect</h2>
        <ContactForm/>
        </div>
    </section>
  )
}

export default ContactPage