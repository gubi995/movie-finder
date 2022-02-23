import { Button } from '@mui/material';

import { StyledSection, StyledTextField } from './Search.styles';

const Search = () => {
  return (
    <StyledSection>
      <StyledTextField label="Movie title" variant="outlined" />
      <Button variant="outlined" size="medium">
        Search
      </Button>
    </StyledSection>
  );
};

export default Search;
