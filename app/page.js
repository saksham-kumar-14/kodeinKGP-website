'use client'

import React from 'react';
import Nav from '@/Components/navbar';
import Body from '@/Components/Home/body';
import Desc from '@/Components/Home/desc';
import Footer from '@/Components/footer';
import Greeting from '@/Components/greeting';

export default function Home(){

  return(
    <>
      <Nav />
      <Greeting/>
      <Body />
      <Desc />
      <Footer />
    </>
  )
}