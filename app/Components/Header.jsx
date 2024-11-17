import Container from '@/components/Container'
import ScrollButton from '@/components/ScrollButton'
import Text from '@/components/Text'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  
  return (
    <div className='bg-[#000000] sticky top-0 z-50'>
    <Container className="py-2">
        <div className='flex justify-between items-center'>
            <div> <Text variant='h1' className="text-white"> <Link href="/">M B I </Link></Text></div>
            <div>
                 <ul>
                    <li><ScrollButton  className='text-white bg-transparent hover:bg-transparent hover:text-[#ff9800]' targetId="contactus">Contact us</ScrollButton></li>
                 </ul>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Header