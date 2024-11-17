import Container from '@/components/Container'
import Text from '@/components/Text'
import Link from 'next/link';
import React from 'react'

const Contact = () => {
    const supportEmail = () => {
        return {
          __html: `<a href="mailto:contact@invensislearning.com"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="img"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg> contact@invensislearning.com</a>`,
        };
      };
  return (
    <div className="bg-[#000000]" id="contactus">
    <Container>
        <Text variant='h2' className="text-[25px]  font-semibold text-gray-200 mb-8 text-center">Ready to Ride the Wave to Financial Freedom?</Text>
        <Text className="text-[18px] font-semibold text-left leading-8 tracking-widest text-gray-300">
            Don't let another day of potential gains slip by. Join the ranks of savvy investors who've turbocharged their portfolios with our <span className='underline text-[#ff9800]'> Multibagger Index Investing</span> strategy.
        </Text>
        <Text className="text-[18px] font-semibold text-left leading-8 tracking-widest text-gray-300 my-8">
        Simply scan the QR code below to make your payment, then email the receipt to <Link
            href="mailto:invest@multibagger.com" 
            className="text-blue-400 font-bold hover:text-blue-300 transition-colors inline-flex items-center gap-1 underline"
          >
            invest@multibagger.com
          </Link>. Within 24 hours, you'll have full access to our game-changing strategy.
        </Text>
        <Text className="text-[18px] font-semibold text-left leading-8 tracking-widest text-gray-300 my-5">
        Remember, in the world of investing, time is money. So why wait? Your future self will thank you for making the smart choice today. Let's turn those market ripples into waves of profit!
        </Text>
    </Container>
    </div>
  )
}

export default Contact