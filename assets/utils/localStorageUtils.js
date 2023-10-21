    /* a class called LocalStorageUtil is designed to work with the web browser's localStorage. localStorage is a web storage feature in browsers that allows you to store key-value pairs in a simple and persistent way.
    */
class LocalStorageUtil {
  /*     Constructor:
        The constructor method is used to initialize the LocalStorageUtil class.
        It sets an instance variable keyName with the value "products". This variable represents the key under which data will be stored in the localStorage. */
  constructor() {
    this.keyName = "products";
  }

  /*     getProducts() Method:
        getProducts is a method of the class.
        It retrieves data from the localStorage using the key stored in the keyName variable.
        If there is data stored under the "products" key in localStorage, it is retrieved as a string and then parsed as a JSON object using JSON.parse(). This is because localStorage stores data as strings, so parsing is necessary to convert it back into an object.
        If there is no data stored under the "products" key, it returns an empty array []. */
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {}
}

const localStorageUtil = new LocalStorageUtil();

const a = localStorageUtil.getProducts();
console.log(a);
