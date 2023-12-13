import React from 'react'
import Image from 'next/image'
import uberX from '../assets/rides/uberX.png'
import uberBlack from '../assets/rides/uberBlack.png'
import uberBlackSuv from '../assets/rides/uberBlackSuv.png'
import uberXL from '../assets/rides/uberXL.png'
import uberSelect from '../assets/rides/uberSelect.png'
import ethLogo from '../assets/eth-logo.png'

const style = {
    wrapper: `h-full flex flex-col text-black`,
    title: `text-black text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: 'h-14',
    carDetails: `ml-2 flex-1`,
    service: 'font-medium',
    time: 'text-xs text-blue-500',
    priceContainer: `flex items-center`,
    price: 'mr-[-0.5rem]'
}

const carList = [
    {
        service: 'UberX',
        image: uberX,
        priceMultiplier: 1.5

    },
    {
        service: 'UberXL',
        image: uberXL,
        priceMultiplier: 1.5

    },
    {
        service: 'UberBlack',
        image: uberBlack,
        priceMultiplier: 1.5

    },
    {
        service: 'UberBlackSUV',
        image: uberBlackSuv,
        priceMultiplier: 1.5

    },
    {
        service: 'UberSelect',
        image: uberSelect,
        priceMultiplier: 1.5

    },
]

const basePrice = 1542;

const RideSelector = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      
      <div className={style.carList}>
        
        {carList.map((car) => {
            return (
            <div className={style.car}>
                <Image
                    src={car.image.src}
                    className={style.carImage}
                    height={50}
                    width={50}
                    alt='image not found'
                />
                <div className={style.carDetails}>
                    <div className={style.service}>{car.service}</div>
                    <div className={style.time}>5 min away</div>
                </div>
                <div className={style.priceContainer}>
                    <div className={style.price}>
                        {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                    </div>
                    <Image src={ethLogo} width={25} height={40}/>
                </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default RideSelector
