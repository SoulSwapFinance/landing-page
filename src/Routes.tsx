import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { RootLocation } from './Locations';
import ScrollToTop from './utils/ScrollToTop';
import HomeView from './views/Home';

const CustomRoute = (props: any) => {
  const { path, redirect, withAuth, component, history, ...leftProps } = props;

  if (redirect) {
    return <Redirect from={path} to={redirect} {...leftProps} />;
  }

  //return <Route path={path} component={error.error ? ErrorView : component} />;
  return <Route path={path} component={component} />;
};

const routes = [
  {
    path: RootLocation,
    exact: true,
    withAuth: true,
    component: HomeView,
  },
];

export default function Routes() {
  const history = useHistory();

  return (
    <>
      <ScrollToTop />
      <Switch>
        {routes.map(props => (
          <CustomRoute
            key={props.path || 'default'}
            {...props}
            history={history}
          />
        ))}
      </Switch>
    </>
  );
}
