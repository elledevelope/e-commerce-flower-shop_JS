/* a class called LocalStorageUtil is designed to work with the web browser's localStorage. localStorage is a web storage feature in browsers that allows you to store key-value pairs in a simple and persistent way.
 */
class LocalStorageUtil {
    /*     Constructor:
            The constructor method is used to initialize the LocalStorageUtil class.
            It sets an instance variable keyName with the value "products". This variable represents the key under which data will be stored in the localStorage. */
    constructor() {
        this.keyName = 'products';
    }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*     -------getProducts() Method:
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*     -------putProducts() Method: 
             adds or removes a product ID from the stored list of products in the web browser's localStorage: */
    putProducts(id) {
        //Retrieve the existing list of product IDs from localStorage (stored under the key specified in this.keyName, which is "products"):
        let products = this.getProducts();


        let pushProduct = false; //if 'false' = product is deleted, if true = product is added

        //checks if the id (product ID) provided as a parameter already exists in the products array. The indexOf method returns the index of the first occurrence of the id in the array, or -1 if it doesn't exist:
        const index = products.indexOf(id);

        /*   Add or Remove the id from the products array:
        If index is -1 (meaning the id is not in the array), it pushes the id into the products array with products.push(id):*/
        if (index === -1) {
            products.push(id);

            pushProduct = true;

        } else {
            /*    If index is not -1 (meaning the id is already in the array), it removes the id from the array using products.splice(index, 1):  */
            products.splice(index, 1);
        }

        //products.push(id);

        /* Update localStorage: the updated products array is converted to a JSON string using JSON.stringify() and stored in localStorage under the key specified by this.keyName, which is "products". This ensures that the changes are saved and can be retrieved later: */
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {
            pushProduct, //pushProducts: pushProducts,
            products, //products: products
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const localStorageUtil = new LocalStorageUtil();

// const a = localStorageUtil.getProducts();
// console.log(a);

//localStorageUtil.putProducts("el1");
