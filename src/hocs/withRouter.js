import { useNavigate, useLocation, useParams } from 'react-router-dom';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
        location={location}
        navigate={navigate}
        params={params}
        history={{ push: navigate, replace: (path) => navigate(path, { replace: true }) }}
      />
    );
  }

  return ComponentWithRouterProp;
}