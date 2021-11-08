import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { Layout } from 'antd';

function App() {
  const { Content } = Layout;

  return (
    <div>
      <BrowserRouter>
        <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 10 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: "calc(100vh - 200px)" }}>
            <Content style={{ padding: '0 24px' }}>
              <Route path="/" component={Header} />
              <Switch>
                <Route exact path="/" component={ShowMagic} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </Content>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;