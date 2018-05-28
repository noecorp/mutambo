export default {
  tournaments: state => {
    return state.tournaments
  },

  tournamentById: state => id => {
    const tournament = state.tournaments.find(tournament => tournament.id === id)

    // if (!tournament) throw new Error('Tournament not found');

    return tournament || {}
  },

  tournamentBySlug: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug)
    return tournament || {}
  },

  tournament: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug)

    if (!tournament) {
      throw new Error(`Tournament with name ${slug} not find`)
    }

    return {
      name: () => {
        return tournament.name
      },

      type: () => {
        return tournament.type
      },

      slug: () => {
        return tournament.slug
      },

      teams: () => {
        return tournament.teams
      },

      page: () => {
        return tournament.page
      },

      numberOfPlays: () => {
        return tournament.details.numberOfPlays;
      },

    }
  },
}