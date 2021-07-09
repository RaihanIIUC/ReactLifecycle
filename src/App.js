import { Component  } from 'react';
import './App.css';
import CartDetail from './cart_detail';
import CartList from './cart_page';
import Ima from './image-use';
 
class App extends Component {
  state = {
    cartList: [
      {
        name: "Mouse",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        price: 200,
        category: "Computer Helps",
        show: true,
      },
      {
        name: "Keyboard",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        price: 300,
        category: "computer helps",
        show: true,
      },
      {
        name: "USb",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        price: 300,
        category: "compueter storage",
        show: true,
      },
    ],
    currentCart: null,
    loading: true,
    loaded : false,
    
  };

  selectCart = (data) => {
 
    this.setState({ ...this.state, currentCart: data },
      () => {
           setTimeout(() => {
             this.setState({ ...this.state, loaded: true });
           });
           return setTimeout(() => {
             this.setState({ ...this.state, loaded: false });
           }, 4000);
     }
    
    );
     

       
  };
  diselectCart = () => {
    this.setState({ ...this.state, currentCart: null },
      () => {
      
    setTimeout(() => {
         this.setState({ ...this.state, loaded: true });
    });
        return setTimeout(() => {
          this.setState({ ...this.state, loaded: false });
        }, 4000);
      }
    );

   
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".container");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }
 

  componentWillUnmount() {
   }

 componentDidUpdate( ) {
 
  
}
   // 
fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };





  render() {
    if (this.state.loading) {
      return null;
    }else{


 return this.state.loaded === true ? (
   <Ima />
 ) : (
   <div className="App">
     {this.state.currentCart ? (
       <CartDetail
         currentCart={this.state.currentCart}
         diselectCart={this.diselectCart}
       />
     ) : (
       <CartList cartList={this.state.cartList} selectCart={this.selectCart} />
     )}
   </div>
 );

    }
    
   
  }
}

export default App;

