import asyncComponent from './utils/asyncComponent';

// import Index from "./pages/Layout/index";
const Index = asyncComponent(()=>import("./pages/Layout/index"));
const Login = asyncComponent(()=>import("./pages/Login/index"));

const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/login',
    component: Login
  }
];

export default routes;