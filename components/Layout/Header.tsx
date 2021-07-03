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
     <img            
            alt=""
            width={200}
            height={40}
            className="logo" 
            src="https://w7.pngwing.com/pngs/42/185/png-transparent-fake-news-bank-account-money-balance-others-text-trademark-logo.png"
          /> 
    </HeaderWrapper>
  )
}

export default Header