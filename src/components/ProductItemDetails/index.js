// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SimilarProduct from '../SimilarProductItem'
import {CartContext} from '../../CartContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    quantity: 1,
    apiStatus: apiStatusConstants.initial,
    productDeatils: '',
    similarprts: [],
    errorMsg: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const rps = await fetch(url, options)
    if (rps.ok) {
      const data = await rps.json()
      console.log(data)
      this.setState({
        apiStatus: apiStatusConstants.success,
        productDeatils: {
          availability: data.availability,
          brand: data.brand,
          imageUrl: data.image_url,
          rating: data.rating,
          price: data.price,
          description: data.description,
          title: data.title,
          reviews: data.total_reviews,
          id: data.id,
        },
        similarprts: data.similar_products,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        errorMsg: 'Something went wrong',
      })
    }
  }

  renderSuccessView = () => {
    const {productDeatils, quantity, similarprts} = this.state
    const {
      imageUrl,
      title,
      price,
      description,
      availability,
      brand,
      rating,
      reviews,
      id,
    } = productDeatils
    const onIncrement = () => {
      this.setState(prev => ({quantity: prev.quantity + 1}))
    }
    const onDecrement = () => {
      this.setState(prev => ({
        quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
      }))
    }

    const {addToCart} = this.context
    const handleAddToCart = () => {
      addToCart({
        id,
        title,
        price,
        imageUrl,
        quantity,
      })
      this.setState({quantity: 1})
    }

    return (
      <div className="product-item-details-container">
        <div className="product-item-details">
          <div className="product-image-container">
            <img src={imageUrl} alt="product" className="product-image" />
          </div>
          <div className="product-info-container">
            <h1 className="product-title">{title}</h1>
            <p className="product-brand">by {brand}</p>
            <div className="product-meta">
              <div className="rating-container">
                <p className="rating">★ {rating}</p>
              </div>
              <p className="reviews">{reviews} Reviews</p>
            </div>
            <p className="price">Rs {price}/-</p>
            <p className="description">{description}</p>
            <div className="availability-brand">
              <p>
                <span className="label">Available:</span> {availability}
              </p>
              <p>
                <span className="label">Brand:</span> {brand}
              </p>
            </div>
            <div className="quantity-cart-container">
              <div className="quantity-selector">
                <button
                  data-testid="minus"
                  type="button"
                  onClick={onDecrement}
                  className="quantity-btn"
                >
                  −
                </button>
                <p className="quantity">{quantity}</p>
                <button
                  data-testid="plus"
                  type="button"
                  onClick={onIncrement}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="similar-products-section">
          <h1 className="similar-products-heading">Similar Products</h1>
          <ul className="similar-products-list">
            {similarprts.map(i => (
              <SimilarProduct key={i.id} productData={i} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailuer = () => {
    const {errorMsg} = this.state
    const {history} = this.props
    const onClickMe = () => {
      history.push('/products')
    }

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="failure view"
        />
        <h1>{errorMsg}</h1>
        <button type="button" onClick={onClickMe}>
          Continue Shopping
        </button>
      </div>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailuer()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderView()}
      </div>
    )
  }
}

ProductItemDetails.contextType = CartContext

export default ProductItemDetails
