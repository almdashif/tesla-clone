'use client'

import Slider from "./common/Slider"

const vehicles = [
  {
    name: 'Model Y L',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Model-Y-L-Desktop-AU-NZ.jpg',
    bgFrom: '#E8ECF0',
    bgTo: '#D8DCE0',
    orderHref: '#',
    learnHref: '#',
    desc:"Visit Our Experience Centers to Learn More"
  },
  {
    name: 'Model Y',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Model-Y-Premium-Desktop-RHD-APAC.jpg',
    bgFrom: '#F0F0F0',
    bgTo: '#E4E4E4',
    orderHref: '#',
    learnHref: '#',
    desc:"Drive Into a Sustainable Future With the EV Switch & Save Program"
  }
]

export default function VehicleGrid() {
  return (
    <section>
     <Slider data={vehicles}/>
    </section>
  )
}
