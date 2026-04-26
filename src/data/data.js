export const navbarLinks = [{
    name: "Home",
    link:"/"
},
{
    name: "Services",
    link:"/services"
},
// {
//     name: "About",
//     link:"/about"
// },
{
    name: "Blog",
    link:"/blog"
},
{
    name:"Vastu Tips",
    link:"/vastu-tips"
},
{
    name:"Vastu Remedies",
    link:"/vastu-remedies"
},
{
    name:"Support",
    link:"/support"
},

]  

import { Award, Medal, ShieldCheck } from "lucide-react"

import photo1 from "../assets/1.webp"
import photo2 from "../assets/2.webp"
import photo3 from "../assets/3.webp"
import photo4 from "../assets/4.webp"
import photo5 from "../assets/5.webp"
import photo6 from "../assets/6.webp"
// import photo7 from "../assets/7.webp"
// import photo8 from "../assets/8.webp"
// import photo9 from "../assets/9.webp"


export const vastuImages = [
    {
        src: photo1
    },
    {
        src: photo2
    },
    {
        src: photo3
    },
    {
        src: photo4
    },
    {
        src: photo5
    },
    {
        src: photo6
    },
    // {
    //     src: photo7
    // },
    // {
    //     src: photo8
    // },
    // {
    //     src: photo9
    // }

]

export const tagline= [
    {
        name: "15+ Years of Experience",
        icon: Award
    },
    {
        name: "500+ Satisfied Clients",
        icon: Medal
    },
    {
        name:"Trusted Vastu Expertise",
        icon:ShieldCheck
    }
]

import { Home, Building2, Compass, Wrench, Lightbulb, Layout } from "lucide-react";

export const services = [
  {
    title: "Residential Vastu",
    description:
      "Design harmonious homes aligned with natural energy for health, peace, and prosperity.",
    icon: Home,
  },
  {
    title: "Commercial Vastu",
    description:
      "Optimize offices, shops, and business spaces to enhance growth, productivity, and success.",
    icon: Building2,
  },
  {
    title: "Site Analysis",
    description:
      "Evaluate plot direction, surroundings, and energy flow to ensure the right foundation.",
    icon: Compass,
  },
  {
    title: "Vastu Corrections",
    description:
      "Fix imbalances in existing spaces using practical solutions without major demolition.",
    icon: Wrench,
  },
  {
    title: "Interior Alignment",
    description:
      "Plan furniture, lighting, and elements to create balanced and positive living environments.",
    icon: Layout,
  },
  {
    title: "Consultation & Guidance",
    description:
      "Get expert advice tailored to your space for better well-being and long-term growth.",
    icon: Lightbulb,
  },
];

import horse from "../assets/10.webp"
import buddha from "../assets/11.jpg"
import nature from "../assets/12.webp"
import water from "../assets/13.jpg"
import mountain from "../assets/14.jpg"
 
export const blogContents = [
  {
    title: "Horse Paintings: Capturing Power, Freedom, and Grace",
    desc: "Horse paintings symbolize strength, speed, and untamed freedom. Their dynamic energy and elegant forms bring life and movement into any space, making them a bold and inspiring décor choice.",
    image: horse
  },
  {
    title:"Buddha Paintings: Bringing Peace and Mindfulness into Your Space",
    desc:"Buddha paintings create a calming and spiritual atmosphere filled with serenity and balance. They are perfect for promoting relaxation, positivity, and inner peace in homes and workspaces.",
    image: buddha
  },
  {
    title : "Nature Paintings: Connecting Your Space with the Beauty of the Outdoors",
    desc: "Nature paintings reflect the harmony and freshness of the natural world. From lush greenery to scenic landscapes, they bring a refreshing and peaceful vibe to any interior.",
    image:nature
  },
  {
    title: "Flowing Water Paintings: Symbol of Calmness and Positive Energy",
    desc: "Flowing water artwork represents movement, purity, and continuous flow of life. These paintings create a soothing ambiance and are often associated with positivity and abundance.",
    image: water
  },
  {
    title: "Mountain Paintings: Strength, Stability, and Timeless Beauty",
    desc:"Mountain paintings represent resilience, determination, and natural grandeur. Their majestic presence adds depth, strength, and inspiration to any room.",
    image:mountain
  }
]  