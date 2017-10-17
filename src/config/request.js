
import Promise from 'promise-polyfill'; 

import queryString from 'query-string';
import _ from 'lodash';

require('es6-promise').polyfill();
require('whatwg-fetch');

if (!window.Promise) {
  window.Promise = Promise;
}

const header = (METHOD, token, multiform) => {
  let auth = {};
  let multiForm = {};

  if (token) {
    auth = {
      'Authorization': 'Token ' + token,
    }
  }

  // supply some form data submit use multipart/form-data
  if (multiform) {
    multiForm = {
      'Content-Type': 'multipart/form-data;',
    }
  }

  let contentType = {};
  if (!multiform) {
    contentType = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  return ({
    method: METHOD,
    headers: {
      ...auth,
      ...multiForm,
      ...contentType,
    }
  })
}

let request = {};

request.get =  ( url, params, token ) => {
  if (params) {
    console.log('params', params)
    url += '?' + queryString.stringify(params);
  }



  const options = _.extend(header('GET', token));

  console.log('url', url, options);
  console.log('fetch', fetch);

  return fetch(url, options)
      .then(response => {
        console.log('response', response);
        if (response.status !== 200 || !response.ok) {
          throw response.json();
        }
        return response.json();
      })
}

request.post = ( url, body, token, multiform ) => {
  let data = null;
  if (multiform) {
    data = body;
  } else {
    data = JSON.stringify(body);
  }

  console.log('data', data);
  let options = _.extend(header('POST', token, multiform), {
    body: data
  });

  console.log('options', options, url);

  return fetch(url, options)
        .then(response => {

          console.log('response', response);
          if (![200, 201].includes(response.status)) {
            throw response.json();
          }
          // console.log('succceed', response.json());
          return response.json();
        })
}

request.put = ( url, token, body, multiform ) => {
  let data = null;
  if (multiform) {
    data = body;
  } else {
    data = JSON.stringify(body);
  }

  console.log('multiform', multiform, url);

  //multiform support
  let options = _.extend(header('PUT', token, multiform), {
    body: data,
  });

  console.log('options', options);

  return fetch(url, options) 
        .then(response => {
          if (response.status !== 200 || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

request.delete = ( url, token ) => {
  let options = null;

  if (token) {
    options = _.extend(header('DELETE', token));
  }

  console.log('url', url, options);
  
    return fetch(url, options)
        .then(response => {
          console.log('response', response);
          if (response.status !== 204 || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

export default request;