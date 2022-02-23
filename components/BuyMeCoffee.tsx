import Image from 'next/image'

const BuyMeCoffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/ugarz" target="_blank" rel="noreferrer">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        className='h-12 w-max-5'
      />
    </a>
  );
}

export default BuyMeCoffee;