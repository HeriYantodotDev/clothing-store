import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-light bg-dark mb-3',
})``;

export const LinkContainer = styled(Link).attrs({
  className: 'navbar-brand',
})``;

export const Logocontainer = styled.img.attrs({
  className: 'logo rounded-circle',
})`
  width: 60px;
`;

export const LogoText = styled.span.attrs({
  className: 'text-light ml-3 text-uppercase font-weight-bold',
})``;
