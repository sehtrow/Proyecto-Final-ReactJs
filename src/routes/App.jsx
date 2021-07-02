import React, { Suspense, lazy} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Deals from "../views/Deals";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import "../assets/styles/components/App.css";

const Wishes = lazy(() => import("../views/Wishes"));



const App = () => (
  <Suspense fallback={ <div> <Loading /> </div> } >
    <BrowserRouter>
      <Layout>
        <Switch>          
            <Route exact path="/wishes" component={Wishes} />
            <Route exact path="/" component={Deals} />                    
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Suspense>
);

export default App;