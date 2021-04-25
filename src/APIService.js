


export default class APIService {
    
    static async GetProduct(product_id) {
      const resp = await fetch(`http://localhost:8000/products/${product_id}/`, {
        'method': 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await resp.json();
      console.log(data);
      return data;
    }

    static async GetAllProduct() {
      const resp = await fetch(`http://localhost:8000/products/`, {
        'method': 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await resp.json();
    }

    static async GetAllCategory(token) {
      const resp = await fetch(`http://localhost:8000/product-categorie/`, {
          'method':'GET',
          headers: {
              'Content-Type':'application/json',
              'Authorization':`Token ${token}` 
            }
      });
      return await resp.json();
    }

    static async GetUserCategory(token) {
      const resp = await fetch(`http://localhost:8000/groups/`, {
          'method':'GET',
          headers: {
              'Content-Type':'application/json'
            }
      });
      return await resp.json();
    }
    
    static async UpdateProduct(product_id, body, token) {
      const resp = await fetch(`http://localhost:8000/products/${product_id}/`, {
        'method': 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      });
      return await resp.json();
    }

    static async AddProduct(body, token) {

      const resp = await fetch('http://localhost:8000/products/', {
        'method': 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: body
      });
      return await resp.json();

    }
    
    static async PatchProduct(product_id, body, token) {
      const resp = await fetch(`http://localhost:8000/products/${product_id}/`, {
        'method': 'PATCH',
        headers: {
          'Authorization': `Token ${token}`
        },
        body: body
      });
      return await resp.json();
    }

    static DeleteProduct(product_id, token) {

      return fetch(`http://localhost:8000/products/${product_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }

    static async LoginUser(body) {

      const resp = await fetch('http://localhost:8000/auth/', {
        'method': 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      return await resp.json();

    }

    static async GetUserDetails(user_id, token) {

      const resp = await fetch(`http://localhost:8000/users/${user_id}/`, {
        'method':'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

      })

      return await resp.json();

    }


    static async SignupUser(body) {

      const resp = await fetch('http://localhost:8000/register/', {
        'method': 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      return await resp.json();

    }


}