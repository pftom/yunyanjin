'use strict';

export const base = 'http://api.yunyanjin.com/';


export const userApi = {
  register: 'users/register',
  login: 'users/login/',
  changePassword: 'users/change-password/',
};

export const shopSingleApi = (id) => ({
  productDetail: `shop/products/${id}/`,
  productAllImg: `shop/products/${id}/photos/`,
  productAllBuyItem: `shop/products/${id}/items/`,
  productAddToCart: `shop/add-to-cart`
});


export const cartSingleApi = (id) => ({
  allProducts: `cart/items/`,
  updateSingleProduct: `cart/items/${id}/`,
  deleteSingleProduct: `cart/items/${id}/`,
});