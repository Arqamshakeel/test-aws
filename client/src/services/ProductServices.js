import GenericService from "./GenericService";

class ProductServices extends GenericService {
  constructor() {
    super();
  }
  getAllProducts = () => this.get("products/");
  postProduct = (data) => this.post("products", data);
  getCart = (_id, counter) => this.get("products/cart/" + counter + "/" + _id);
  getAllCartData = () => this.get("products/cart/");
  deleteCartItem = (_id) => this.delete("products/cart/" + _id, _id);
  deleteProduct = (_id) => this.delete("products/delete/" + _id);

  //editProduct = (_id, data) => this.delete("products/delete/" + _id, data);
  sendOrder = (data) => this.post("products/neworder", data);
  getOrder = () => this.get("products/orders/");
  UserLogin = (data) => this.post("users/login", data);
  UserReg = (data) => this.post("users/register", data);
  getsingleProduct = (_id) => this.get("products/single/" + _id);
  putProduct = (_id, data) => this.put("products/put/" + _id, data);
}

let productService = new ProductServices();
export default productService;
