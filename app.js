class App extends React.Component {
  state = {
    products: products,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false,
    isHiring: true,
    cartItems: []
  }

  addToCart = (item) => {
    this.setState({cartItems: [item, ...this.state.cartItems]})
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
    }
    this.setState({
      products: [newItem, ...products],
      item: '',
      brand: '',
      units: '',
      quantity: 0,
    })
  }

  toggleHiring = () =>{
    this.setState({ isHiring: !this.state.isHiring })
    console.log(this.state.isHiring)
  }

  render () {
    return (
      <div>
        <h1 onClick={this.toggleHiring}> King Soopers </h1>
        {!this.state.isHiring ? <h2>Yes, we are hiring </h2> : <h2>Sorry, try again tomorrow</h2>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Item</label>
          <input type='text' value={this.state.name} onChange={this.handleChange} id='item' />
          <br />
          <label htmlFor='price'>Brand</label>
          <input type='number' value={this.state.price} onChange={this.handleChange} id='brand' />
          <br />
          <label htmlFor='units'>Units</label>
          <textarea value={this.state.units} onChange={this.handleChange} id='units' />
          <br />
          <label htmlFor='quantity'>Quantity</label>
          <textarea value={this.state.quantity} onChange={this.handleChange} id='quantity' />
          <input type='submit' />
        </form>
        <div className='preview'>
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>
        </div>
        <div className="products">
          <h3>Don't Miss Out On These Excellent Products</h3>
          <ul>
            {this.state.products.map(product => {
              return (
                <ProductList product={product} handleAdd={this.addToCart} />
              )
            }
            )}
          </ul>
        </div>
        <div className='cart'>
          <h3> Shopping Cart </h3>
          <ul>
              {this.state.cartItems.map(item => {
                  return (
                      <ShoppingCart product={item} />
                  )
              }
              )}
          </ul>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )