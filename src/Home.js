import React  from 'react';
import Movies from './Movies';
import Search from './Search';
import Header from './Header';

const Home = () => {
    // const name = useContext(AppContext)

  return (<>
    {/* <Search/> */}
    <Header/>
    <Movies/>

  </>
  )
}

export default Home