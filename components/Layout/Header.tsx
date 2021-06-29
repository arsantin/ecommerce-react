import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";


const HeaderWrapper = styled.div`
  text-align: right;
`


const Header = () => {
  return(
    <HeaderWrapper>
      <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/produtos"><a>Produtos</a></Link>
        </nav>
     <Image            
            alt=""
            width={200}
            height={40}
            className="logo" 
            src="/img/logo.png"
          /> 
    </HeaderWrapper>
  )
}

export default Header