import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signin from "./pages/signin/signin.component";
import CheckOut from "./pages/checkout/checkout.component";
import { useDispatch, useSelector } from "react-redux";
import { auth, userDocData } from "./firebase/firebase.utils";
import { setUser } from "./redux/action/actions";
import CategoryComponent from "./pages/category/category.component";
import Footer from "./components/footer/footer.component";
function App() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.authReducer);
  useEffect(() => {
   
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await userDocData(user);
        docRef.onSnapshot((snapshot) => {
          dispatch(
            setUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(
          setUser(null)
          );
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:category" component={CategoryComponent} />
          <Route exact path="/checkout" component={CheckOut} />
          { !userState.user
          ?
          <Route exact path="/signin" component={signin} />
          :
          <Redirect from="/signin" to="/" />
        }
        <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
