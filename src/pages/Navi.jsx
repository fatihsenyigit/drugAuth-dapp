
import React, { useContext } from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import {Web3DataContext} from "../context/Web3Context"

export default function Navi() {

    const {provider, address, onConncectClick, balance,} = useContext(Web3DataContext);
  

    
    
  return (
    <div>
      <Nav className='App-header'>
        <NavItem>
              <NavLink
              active
              href="#"
                >
                  DrugAuth
              </NavLink>
        </NavItem>
        {/* <NavItem>
              {provider? (<Button style={{fontWeight:700, }} color="success" onClick={onConncectClick}>connect metamask</Button>)
              :
              (<Button style={{fontWeight:700, }}  color="warning"><a href='https://metamask.io/'>install metamask</a></Button>)}
        </NavItem> */}
        <NavItem>
          {provider && !address ? (<Button style={{fontWeight:700, }} color="success" onClick={onConncectClick}>connect metamask</Button>)
          :
          provider && address ? (
          <>
          <Button style={{fontWeight:700, }}  color="warning">{address}</Button>
          <Button style={{fontWeight:700, }}  color="warning">{balance}</Button>
          </>
          )
          :
          (<Button style={{fontWeight:700, }}  color="warning"><a href='https://metamask.io/'>install metamask</a></Button>)}
        </NavItem>
      </Nav>
        
      </div>
  )
}
