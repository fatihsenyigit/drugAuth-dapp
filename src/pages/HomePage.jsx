import React, { useContext } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import {Web3DataContext} from "../context/Web3Context"

export default function HomePage() {
    const {drugAuthContract} = useContext(Web3DataContext);
    const onAddCompany = async() => {
        try {
          const _address = "0xa0d3487c2fD9581b4bCBf5Eb9083FDfe6c365448";
          const _companyName = "test company";
          console.log("creating tx...");
          const tx = await drugAuthContract.addCompany(_address, _companyName);
          console.log("executing tx...");
          const result = await tx.wait();
          console.log(result);
  
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>
        <Container>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Button onClick={onAddCompany}>add company</Button>
        </Form>
        </Container>
    </div>
  )
}
