import './Shop.css'
import CatList from './components/CatList'
import Music from './components/Music'
import styled, { css } from 'styled-components';

const Marquee = styled.Marquee`
  width: 700px;
  border: 10px solid;
  border-radius: 5%;
  padding: 20px;
  margin: 20px;
`;


function Shop() {
  return (
    <>
    <Music></Music>
    <Marquee><img className='catMarquee' src="src/assets/1696257_2c209.gif" alt="" /></Marquee>
    <CatList></CatList>
  </>
  )
}

export default Shop