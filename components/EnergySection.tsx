'use client'

const energyProducts = [
  {
    name: 'Experience Tesla',
    subtitle: 'Schedule a test drive today.',
    btnText: "Schedule a Test Drive",
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-Test-Drive-Global.png',
    bg: 'linear-gradient(180deg, #E8EAE0 0%, #D4D8CC 100%)',
    light: true,
  },
  {
    name: 'Charging',
    subtitle: 'Find the perfect charging solution.',
    btnText: "Explore Charging",
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-Charging.png',
    bg: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
    light: false,
  }
]

export default function EnergySection() {
  return (
    <section className="w-[95%] mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          energyProducts?.map((val, i) => {
            return (
              <div key={i} className="bg-[#f2f2f2] flex justify-between items-center">
                <div className="pl-8 flex flex-col gap-1">
                  <h4 className="text-neutral-800 font-bold text-4xl">{val?.name ?? ''}</h4>
                  <p className="text-neutral-700 text-lg ">{val?.subtitle ?? ''}</p>
                  <button className="px-8 py-2 bg-white rounded-md text-sm text-neutral-800 mt-2">{val?.btnText ?? ''}</button>
                </div>
                <div className=" w-2/5 h-[16rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={val?.image} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
