import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";


const HeaderWrapper = styled.div`
  text-align: right;
`


const Header = () => {
  return(
    <HeaderWrapper>
      <Link href="/"><a>
     <Image            
            alt=""
            width={200}
            height={40}
            className="logo" 
            src="/img/logo.png"
          /></a></Link>  
    </HeaderWrapper>
  )
}

export default Header