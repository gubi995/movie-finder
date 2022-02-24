import { useSearchStore } from '@/hooks/useSearchStore';
import { Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { Form, StyledTextField } from './Search.styles';

const movieForm = { movieTitle: '' };

type MovieForm = typeof movieForm;

const Search = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({ defaultValues: movieForm, mode: 'all' });
  const updateTerm = useSearchStore((state) => state.updateTerm);

  const searchMovie = ({ movieTitle }: MovieForm) => updateTerm(movieTitle);

  return (
    <Form onSubmit={handleSubmit(searchMovie)}>
      <Controller
        name="movieTitle"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <StyledTextField {...field} label="Movie title" />}
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        disableElevation
        disabled={isSubmitting || !isValid}
      >
        Search
      </Button>
    </Form>
  );
};

export default Search;
