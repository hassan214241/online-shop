import { Container, Row, Col, Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

const myNav = {
   
    justifyContent: "center",
    display: "flex",
  
   
  };

function Bar(){
    return(


<div>


<Navbar bg="dark" variant="dark" style={myNav}>


   
    <Nav className="mr-auto"  >
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#features">PAGES</Nav.Link>
      <Nav.Link href="#pricing">FEATURES</Nav.Link>
      <Nav.Link href="#pricing">BLOG</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
    
  </Navbar>



</div>




    );
}

export default Bar;