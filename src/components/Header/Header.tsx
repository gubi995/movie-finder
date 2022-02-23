import { Typography } from '@mui/material';

import Search from '@/components/Search';

import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <Typography variant="h3" component="h1" fontFamily="Montserrat">
        Movie Finder
      </Typography>
      <Search />
    </StyledHeader>
  );
};

export default Header;
