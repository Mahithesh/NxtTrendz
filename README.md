# 🛒 Shoppy Store

A modern, fully responsive e-commerce web application built with React.js. Shoppy Store provides a seamless online shopping experience with product browsing, filtering, search functionality, detailed product views, and shopping cart management.

## 🌟 About The App

Shoppy Store is a feature-rich e-commerce platform that allows users to browse products across different categories, view detailed product information, manage their shopping cart, and enjoy a responsive design that works perfectly on all device sizes from mobile to desktop.

### ✨ Key Features

- **🔐 User Authentication** - Secure login system with JWT token-based authentication
- **🏠 Home Page** - Attractive landing page with prime deals and featured products
- **🛍️ Products Catalog** - Browse through a comprehensive product catalog
- **🔍 Advanced Filtering** - Filter products by category, rating, and price
- **🔎 Search Functionality** - Real-time product search
- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **🛒 Shopping Cart** - Add, remove, and manage products in your cart
- **📦 Product Details** - Detailed product views with images, descriptions, ratings, and reviews
- **🎯 Similar Products** - Discover similar products based on your selection
- **⭐ Product Ratings** - View product ratings and total reviews
- **🔄 Loading States** - Smooth loading indicators for better UX
- **❌ Error Handling** - User-friendly error messages and failure views

### 🎨 Refer to the demo below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif" alt="product details output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Routing**: React Router v5
- **State Management**: React Component State
- **Styling**: CSS3 with responsive design
- **HTTP Client**: Fetch API
- **Authentication**: JWT (JSON Web Tokens)
- **Cookie Management**: js-cookie
- **Icons**: React Icons
- **Loader**: React Loader Spinner

## 📂 Project Structure

```
shoppy-store/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── img/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── LoginForm/
│   │   ├── Products/
│   │   ├── ProductCard/
│   │   ├── ProductItemDetails/
│   │   ├── SimilarProductItem/
│   │   ├── AllProductsSection/
│   │   ├── PrimeDealsSection/
│   │   ├── ProductsHeader/
│   │   ├── FiltersGroup/
│   │   ├── Cart/
│   │   ├── Header/
│   │   ├── ProtectedRoute/
│   │   └── NotFound/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🧩 Component Architecture

<details>
<summary>Click to view component structure</summary>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-specific-product-details-component-breakdown-structure.png" alt="component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Component Overview

- **App**: Main application component with routing
- **Header**: Navigation bar with logo and menu
- **Home**: Landing page component
- **LoginForm**: User authentication form
- **Products**: Main products listing page
- **AllProductsSection**: Products grid with filtering
- **ProductsHeader**: Sorting and view controls
- **FiltersGroup**: Category and rating filters
- **ProductCard**: Individual product card component
- **ProductItemDetails**: Detailed product view
- **SimilarProductItem**: Similar product card
- **PrimeDealsSection**: Prime deals carousel
- **Cart**: Shopping cart page
- **ProtectedRoute**: Route authentication wrapper
- **NotFound**: 404 error page

</details>

## 📸 Screenshots & Design Files

<details>
<summary>Click to view design references</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-success-sm-output-v0.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-success-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png)

</details>

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahithesh/Shoppy-Store.git
   cd Shoppy-Store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   # For Node.js v17 or higher
   set NODE_OPTIONS=--openssl-legacy-provider && npm start
   
   # Or on Mac/Linux
   export NODE_OPTIONS=--openssl-legacy-provider && npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

### Test Credentials

**Prime User:**
```
Username: rahul
Password: rahul@2021
```

**Non-Prime User:**
```
Username: raja
Password: raja@2021
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: >= 576px
- **Desktop**: >= 768px
- **Large Desktop**: >= 992px
- **Extra Large**: >= 1200px

## 🎯 Application Features & Functionality

### User Authentication
- Secure login system with form validation
- JWT token-based authentication
- Protected routes that redirect unauthenticated users to login
- Persistent login state using cookies

### Product Browsing
- Browse products across multiple categories
- View product cards with images, titles, ratings, and prices
- Seamless navigation between product listings and details

### Advanced Filtering & Search
- **Category Filter**: Filter by Clothing, Electronics, Toys, Grocery, etc.
- **Rating Filter**: Filter products by star ratings (4★ and above, 3★ and above, etc.)
- **Price Sorting**: Sort products by price (Low to High, High to Low)
- **Real-time Search**: Search products by title with instant results

### Product Details Page
- Detailed product information including:
  - High-quality product images
  - Complete product descriptions
  - Brand information
  - Price and availability status
  - Star ratings and total reviews
- Quantity selector (increment/decrement)
- Similar products recommendations
- Add to cart functionality

### Shopping Cart
- Add products to cart
- View all cart items
- Update quantities
- Remove items from cart
- Calculate total price

### Prime Deals Section
- Exclusive deals for prime members
- Special discounts and offers

### Responsive UI/UX
- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactive elements
- Smooth transitions and animations
- Loading states for better user feedback
- Error handling with user-friendly messages

## 🔄 Application Flow

1. **Login** → User enters credentials and gets authenticated
2. **Home** → View featured products and prime deals
3. **Products** → Browse all products with filters and search
4. **Product Details** → Click on any product to view details
5. **Cart** → Add products and manage shopping cart
6. **Logout** → Securely logout from the application

## 🌐 Routes

| Route | Path | Description |
|-------|------|-------------|
| Home | `/` | Landing page with featured products |
| Login | `/login` | User authentication |
| Products | `/products` | All products with filters |
| Product Details | `/products/:id` | Detailed product information |
| Cart | `/cart` | Shopping cart management |
| Not Found | `*` | 404 error page |

## 🔌 API Integration

<details>
<summary>Click to view API details</summary>

### Authentication API
- **Endpoint**: `https://apis.ccbp.in/login`
- **Method**: POST
- **Authentication**: Required for all product endpoints

### Products List API
- **Endpoint**: `https://apis.ccbp.in/products`
- **Method**: GET
- **Query Parameters**:
  - `sort_by`: Sort products (PRICE_HIGH, PRICE_LOW)
  - `category`: Filter by category
  - `title_search`: Search by product title
  - `rating`: Filter by minimum rating

### Product Details API
- **Endpoint**: `https://apis.ccbp.in/products/:id`
- **Method**: GET
- **Example**: `https://apis.ccbp.in/products/16`

### Sample API Response

**productDetailsApiUrl**

#### API: `https://apis.ccbp.in/products/:id`

#### Example: `https://apis.ccbp.in/products/16`

#### Method: `GET`

#### Description:

Returns a response containing the Product details

#### Sample Success Response

```json
{
  "id":16,
  "image_url":"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
  "title":"Embroidered Net Gown",
  "price":62990,
  "description":"An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony...",
  "brand":"Manyavar",
  "total_reviews":879,
  "rating":3,
  "availability":"In Stock",
  "similar_products":[...]
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Product Not Found"
}
```

</details>

## 💡 Key Learnings & Concepts

- React Component Lifecycle
- React Router for navigation
- State Management
- Props and Component Communication
- API Integration with Fetch
- JWT Authentication
- Cookie Management
- Protected Routes
- Responsive Web Design
- CSS Flexbox & Grid
- Loading States & Error Handling
- Form Validation

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark | `#12022f` | Backgrounds |
| Secondary | `#616e7c` | Text, borders |
| Accent Dark | `#171f46` | Cards, containers |
| Light Gray | `#cbced2` | Borders, dividers |
| White | `#ffffff` | Background, text |
| Primary Blue | `#3b82f6` | Buttons, links |
| Dark Slate | `#1e293b` | Headers |
| Gray | `#475569` | Secondary text |

## 🔤 Typography

- **Primary Font**: Roboto
- **Font Weights**: 400, 500, 700

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Mahithesh**
- GitHub: [@Mahithesh](https://github.com/Mahithesh)
- Repository: [Shoppy-Store](https://github.com/Mahithesh/Shoppy-Store)

## 🙏 Acknowledgments

- React.js Documentation
- CCBP for API support
- React Icons
- React Router

---

<div align="center">
  <p>Made with ❤️ by Mahithesh</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
