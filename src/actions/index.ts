
// export *  from './address/delete-user-address';
// export *  from './address/get-user-address';
// export * from './address/set-user-address';

export { deleteUserAddress } from "./address/delete-user-address"
export { getUserAddress } from "./address/get-user-address"
export { setUserAddress } from "./address/set-user-address"

export { authenticate, gitHubAuth, googleAuth } from './auth/login';
export { logout } from './auth/logout';
export { registerProvider, registerUser } from './auth/register';

export { getCategories } from './category/get-categories';

export { getCountries } from './country/get-countries';

export { placeOrder } from './order/place-order';
export { getOrderById } from './order/get-order-by-id';
export { getPaginatedOrders } from './order/get-paginated-orders';
export { getOrdersByUser } from './order/get-orders-by-user';

export { setTransactionId } from './payments/set-transaction-id';
export { paypalCheckPayment } from './payments/paypal-check-payment';


export { deleteProductImage } from './product/delete-product-image';
export { createUpdateProduct } from './product/create-update-product';
export { getProductBySlug } from './product/get-product-by-slug';
export { getStockBySlug } from './product/get-stock-by-slug';
export { getPaginatedProductsWithImages } from './product/product-pagination';


export { changeUserRole } from './user/change-user-role';