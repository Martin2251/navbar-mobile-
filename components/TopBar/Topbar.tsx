"use client"

import Image from "next/image"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { useMediaQuery } from "react-responsive"

import MobileNavBar from "../MobileTopBar/MobileTopBar"
import "./topbar.css"

interface Props {
}
 
const NavBar: FC<Props> = ({

}) => {
  const [isOpen, setModalOpen] = useState(false)
 



  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  })

  const toggleModal = () => {
    setModalOpen(!isOpen)
  }

  useEffect(() => {
    if (isDesktop) {
      setModalOpen(false)
    }
  }, [isDesktop])

  return (
<>
      <div className="pb_container mx-auto">
        <div className="header">
        <div className="image-cont">
            <Link href="/">
              <Image
                src="/images/logos/pc-logo.png"
                alt="pc logo"
                quality={100}
                width={204}
                height={137}
              />
            </Link>
            
          </div>
          <nav>
       
        <ul>
          <div className="box">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
          </div>
          <div className="box">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
            </div>
            <div className="box">
            <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
            </div>
            <div className="box">
            <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
            </div>
            <div className="box">
            <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
            </div>
            <div className="box">
            <li><Link href="/">Home</Link></li>
          <li><Link href="/">Home</Link></li>
            </div>
        </ul>
    </nav>  
       
           
            <div className="button-holder">
            {!isOpen && (
            <div className="hamburger-Container">
              <div className="hamburger" onClick={toggleModal}>
                <GiHamburgerMenu />
              </div>
            </div>
          )}
            
            </div>
          </div>
        </div>
      
      <div>{isOpen && <MobileNavBar isOpen={isOpen} toggleModal={toggleModal} />}</div>
      </>
  )
}

export default NavBar