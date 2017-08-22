import Product from '../models/product';


const limitTab = [ 'nature-material', 'artifical-food', 'drink', 'handicraft' ];

let totalCount = 0;

const getProducts = ctx => {
  const body = ctx.request.body;

  let queryTab = null;
  let queryPage = 1;

  if (body.tab && limitTab.includes(body.tab)) {
    queryTab = {
      tab: body.tab,
    };
  }

  if (body.page && !isNaN(Number(body.page))) {
    queryPage = Number(body.page);
  }


  Product.find(queryTab, null, { sort: { updateDate: 1 }, skip: (queryPage - 1) * 9, limit: 9 }, (err, products) => {
    if (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        message: err,
      }
    }

    const len = products.length;
    let nextUrl = null;

    if (!totalCount) {
      totalCount = len;
    }

    if (len > 9) {
      if (queryTab) {
        nextUrl = `http://localhost:8080/?tab=${queryTab}&`;
      }

      if (queryPage) {
        nextUrl += 
      }
    }

    ctx.response.type = 'json';
    ctx.response.body = {
      count: totalCount,
      next: len > 9 ? len : null,

    }
  })
}