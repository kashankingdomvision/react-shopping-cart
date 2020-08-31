import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeState } from '../store/action/action';
// import { addToCart } from '../store/action/cartaction';
// import { Button } from 'react-bootstrap';
import { Container,Row} from 'react-bootstrap';
import Product from './Product'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        userAge: '',
        cart:[
          {id:4, title: 'Potatos', description: 'p for potato', price: 20}
        ]
    }

    this._changeData = this._changeData.bind(this);
  }

  _changeData() {
    // console.log(this.state.userName);
    // console.log(this.state.userAge);
    this.props.changeStateToReducer(this.state);
}

  dispachAddToCart(product) {
    // console.log(product);

    const existingProduct = this.state.cart.filter( cart => cart.id === product.id);
    // console.log(existingProduct);

    if(existingProduct.length > 0){
      this.setState({ 
        cart: [...this.state.cart,existingProduct[0]]
      })
    }
    console.log(this.state.cart);



    // console.log(p.id);
    // this.props.addToCart(product);
  }

  render() {
    // console.log(this.props.products);
    return (
      <div>
        {/* <h1>Hello, Home Component</h1>;
        <h4>Hello, {this.props.userName}</h4>
        <h4>Hello, {this.props.userAge}</h4> */}

        {/* {this.props.products.map()} */}

        {/* <div>
          <ul>{this.props.products.map(products => <li key={products.id}> {products.title} </li>)}</ul>
        </div> */}

        {/* <Container>
          <Row>
          { this.props.products.map((product) => {
            return (
              <Col md={4} key={product.id}>
                <h4>{product.id}</h4>
                <h4>{product.title}</h4>
                <p>Some Red apple</p>
                <p>Price: INR</p>
                <p><Button variant="primary">Add</Button></p>
              </Col>
            );
          })}

          </Row>
        </Container> */}

        <Container className="border" >
          <Row >
          { this.props.products.map((p) => {
            return (
              <Product  product={p} handleOnAdd={this.dispachAddToCart.bind(this)}  key={p.id} />
            );
          })}
          </Row>
        </Container>
  

        {/* <Product product={p} /> */}

        {/* <input type="text"
          placeholder="Enter your name"
          value={this.userName}
          onChange={(e) => {
            this.setState({ userName: e.target.value })
          }
          }
        />
        <br />
        <input type="text"
          placeholder="Enter your age"
          value={this.userAge}
          onChange={(e) => {
              this.setState({ userAge: e.target.value })
          }
          }
        />
       <br />
      <button onClick={this._changeData}>Change Data in Store</button><br /><br />
      <Link to='/about'>Go to About</Link> */}

      </div>
    );
    
  }
}

// mapStateToProps: this is used to retrieve the store state
function mapStateToProps(state) {
  return ({
    userName: state.rootReducer.userName,
    userAge: state.rootReducer.userAge,
    products: state.productreducer,
  })
}

// mapDispatchToProps: this is used to retrieve the actions and dispatch them to the store
function mapDispatchToProps(dispatch) {
  return ({
      changeStateToReducer: (allChangeState) => {
          dispatch(changeState(allChangeState))
      }
      // changeUserName: ()=>{dispatch(changeUserName())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);