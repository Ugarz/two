import Image from 'next/image'

const BuyMeCoffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/ugarz" target="_blank" rel="noreferrer">
      <div className='h-5 w-5 md:h-6 md:w-6 relative'>
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          objectFit='cover'
          layout='fill'
          className='h-12 w-max-5'
        />
      </div>
    </a>
  );
}

export default BuyMeCoffee;