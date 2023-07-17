import { ethers, formatEther } from 'ethers';
import React,{createContext,useState, useEffect} from 'react';
import DrugAuth from "../contract/drugAuth.json"

const Web3DataContext = createContext(null); 

 function Web3ContextProvider({children}) {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");                                                                                          
    const [drugAuthContract, setDrugAuthContract] = useState(null)

    useEffect(() => {
      const eth = window?.ethereum || null;
      const _provider = eth? new ethers.BrowserProvider(eth, "any") : null
      setProvider(_provider);
      if(_provider) {
        (async()=>{
          const _signer = await _provider.getSigner();
          setSigner(_signer);
          const _address = await _signer.getAddress();
          
          if (_address) {
            const _balance = await _provider.getBalance(_address);
            setBalance(formatEther(_balance))
            setAddress(_address)
          }

          const _drugAuthContract = new ethers.Contract(
            "0x80d88Eade455aA9e3CD2A3831118eC98103E2824",
            DrugAuth.abi,
            _signer
          )
          setDrugAuthContract(_drugAuthContract)
        })()
      }
    }, []);
    const onConncectClick = async() => {
        try {
          await provider.send("eth_requestAccounts",[])
          const _signer = await provider.getSigner();
          setSigner(_signer);
          const _address = await _signer.getAddress();
          
          setAddress(_address);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <Web3DataContext.Provider
    value={{
        provider, signer, address, balance, drugAuthContract,onConncectClick
    }}
    >
        {children}
    </Web3DataContext.Provider>
  )
}

export {Web3ContextProvider, Web3DataContext}