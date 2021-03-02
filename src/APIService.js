


export default class APIService {
    
    static GetProduct(product_id) {
      return fetch(`http://localhost:8000/products/${product_id}/`, {
          'method':'GET',
          headers: {
              'Content-Type':'application/json'
            }
      }).then(resp => resp.json())
    }

    static GetAllProduct() {
      return fetch(`http://localhost:8000/products/`, {
          'method':'PUT',
          headers: {
              'Content-Type':'application/json'
            }
      }).then(resp => resp.json())
    }
    
    static UpdateProduct(product_id, body, token) {
      return fetch(`http://localhost:8000/products/${product_id}/`, {
          'method':'PUT',
          headers: {
              'Content-Type':'application/json',
              'Authorization':`Token ${token}` 
            }, 
            body:JSON.stringify(body)

      }).then(resp => resp.json())
    }

    static AddProduct(body, token) {

      return fetch('http://localhost:8000/products/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

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

    static LoginUser(body) {

      return fetch('http://localhost:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static SignupUser(body) {

      return fetch('http://localhost:8000/register/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


}