
"use client"

import classNames from "classnames"
import Link from "next/link"
import { FC } from "react"
import { VscChromeClose } from "react-icons/vsc"

import './mobiletopbar.css'

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

const MobileNavBar: FC<Props> = ({ isOpen, toggleModal }) => {
  return (
    <>
    
        <div className={classNames({ "box-open": isOpen })}>
          <ul>
            <li>
              <Link href="/" passHref>
                Why us
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Features
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Contact us
              </Link>
            </li>
          </ul>
          <div className="close-btn" onClick={toggleModal}>
            <VscChromeClose />
          </div>
        </div>
      
    </>
  )
}

export default MobileNavBar