import React from 'react';
import {Col,Button,Card   } from 'react-bootstrap';

class Product extends React.Component {
    render() {

      // console.log({});
      return (
            <Col md={4}>
              <Card style={{  margin:'1rem' }} >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{this.props.product.title}</Card.Title>
                  <Card.Text>{this.props.product.description}</Card.Text>
                  <Card.Text>{this.props.product.price}</Card.Text>
                  {/* <Button variant="primary" >Add</Button> */}
                  <Button onClick={() => this.props.handleOnAdd(this.props.product)} variant="primary">ADD</Button>
                </Card.Body>
              </Card>
            </Col>
      );
    }
}

export default Product;