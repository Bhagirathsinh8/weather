import React from 'react'
import logo2 from '../Image/logo2.png'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <>
     <section class="bg-gray-100">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p class="mt-4 text-gray-600 text-lg">Welcome to Weather Forecasting App, your go-to source 
                    for accurate and reliable weather forecasts! Our mission is to provide you with
                     real-time weather updates, helping you plan your day with confidence.</p>
                <h3 className='mt-3 font-bold text-gray-900 sm:text-2xl'>Our Vision</h3>
                <p class="mt-2 text-gray-600 text-lg">At Weather Forecasting App, we believe that 
                    staying informed about the weather should be easy and accessible to everyone.
                     We harness the power of modern technology, using React.js to create a seamless and 
                     intuitive user experience.
                      Whether you're planning a weekend getaway, a daily commute, or just want to know 
                    if you need an umbrella, we’ve got you covered!</p>
                <h3 className='mt-3 font-bold text-gray-900 sm:text-2xl'>Join Us!</h3>
                <p class="mt-2 text-gray-600 text-lg">Thank you for choosing Weather Forecasting App. 
                    We’re excited to help you navigate the weather with ease! Feel free to reach out with any questions, 
                    suggestions, or feedback. Together,
                     let’s make every day a little brighter, no matter the weather!</p>
                <div class="mt-8">
                    <Link to="/about" class="text-blue-500 hover:text-blue-600 font-medium" >Learn more about us
                        <span class="ml-2">&#8594;</span></Link>
                </div>
            </div>
            <div class="mt-12 md:mt-0">
                <img src={logo2} alt="AboutUs" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
 
    </>
  )
}
