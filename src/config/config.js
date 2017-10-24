const base = 'http://api.yunyanjin.com/';


const userApi = {
  register: 'users/register',
  login: 'users/login/',
  changePassword: 'users/change-password/',
};

const shopSingleApi = (id) => ({
  productDetail: `shop/products/${id}/`,
  productAllImg: `shop/products/${id}/photos/`,
  productAllBuyItem: `shop/products/${id}/items/`,
  productAddToCart: `shop/add-to-cart`
});


const cartSingleApi = (id) => ({
  allProducts: `cart/entries/`,
  updateSingleProduct: `cart/entries/${id}/`,
  deleteSingleProduct: `cart/entries/${id}/`,
});


export {
  base,
  userApi,
  shopSingleApi,
  cartSingleApi,
}