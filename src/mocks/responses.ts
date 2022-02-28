export const MOCK_GRAPHQL_RESPONSE = {
  searchMovies: [
    {
      id: '550',
      name: 'Fight Club',
      genres: [
        {
          name: 'Drama',
        },
      ],
      score: 8.4,
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      releaseDate: '1999-10-15T00:00:00.000Z',
    },
    {
      id: '629017',
      name: 'Run Hide Fight',
      genres: [
        {
          name: 'Crime',
        },
        {
          name: 'Thriller',
        },
      ],
      score: 6.6,
      overview:
        'A 17-year-old girl uses her wits, survival skills, and compassion to fight for her life, and those of her fellow classmates, against a group of live-streaming school shooters.',
      releaseDate: '2020-09-10T00:00:00.000Z',
    },
  ],
};

export const MOCK_WIKIPEDIA_RESPONSE = {
  batchcomplete: '',
  query: {
    pages: {
      '1009041': {
        pageid: 1009041,
        title: 'Fight Club',
        extlinks: [{ '*': 'https://www.imdb.com/title/tt0137523/' }],
        extract:
          'Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).\nPalahniuk\'s novel was optioned by Fox 2000 Pictures producer Laura Ziskin, who hired Jim Uhls to write the film adaptation.',
      },
    },
  },
};
