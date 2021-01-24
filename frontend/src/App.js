import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { INTERNAL_LINKS } from "./enum";

import PublishPage from "./pages/Publish";
import SubscribePage from "./pages/Subscribe";
import NavBar from "./components/navbar";
import MessageDetailPage from "./pages/MessageDetail";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          path={INTERNAL_LINKS.PUBLISH}
          render={(props) => <PublishPage {...props} />}
        />
        <Route
          path={`${INTERNAL_LINKS.MESSAGE_DETAIL}/:id`}
          render={(props) => <MessageDetailPage {...props} />}
        />
        <Route
          path={INTERNAL_LINKS.SUBSCRIBE}
          render={(props) => <SubscribePage {...props} />}
        />
        <Redirect to={INTERNAL_LINKS.SUBSCRIBE} />
      </Switch>
    </div>
  );
};

export default App;
