'use strict';

export const base = 'http://127.0.0.1:8000/';

export const homeApi = {
  posts: 'home/posts/',
  hospitals: 'home/hospitals/',
  doctors: 'home/doctors/',
};

export const homeSingleApi = (id) => ({
  singlePost: `home/posts/${id}/`,
  singleHospital: `home/hospitals/${id}/`,
  addSinglePostFav: `home/posts/${id}/fav`,
  cancelSinglePostFav: `home/posts/${id}/unfav`,
  singleHospitalDoctors: `home/hospitals/${id}/doctors/`,
  singleDoctor: `home/doctors/${id}/`,
  singleDoctorInfo: `home/doctors/${id}/info/`,
  singleDoctorAnswers: `home/doctors/${id}/answers/`,
  addSingleDoctorFav: `home/doctors/${id}/fav`,
  cancelSingleDoctorFav: `home/doctors/${id}/unfav`,
  singleDoctorComments: `home/doctors/${id}/comments/`,
  addsingleDoctorComments: 'home/doctors/${id}/comments/new',
});

export const usersApi = {
  register: 'users/register',
  login: 'users/login/',
  changePassword: 'users/change-password',
};

export const shopSingleApi = (id) => ({
  productDetail: 'shop/products/${id}/',
  productAllImg: 'shop/products/${id}/photos/',
  productAllBuyItem: 'shop/products/${id}/items/',
  productAddToCart: 'shop/add-to-cart'
});
