<template lang="pug">
  .page.groupstage
    mut-header

    .page__content

      template(v-for="(group, index) in groups")
        h3.group__title {{ group.name }}

        template(v-if="view === 'matches'")
          mut-matches(:matches="group.matches" @update="matchUpdate(index, $event)" @done="allMatchesPlayed(index)")

        template(v-if="view === 'table'")
          mut-table(:data="results(group)")

      a.button.button--tertiary(@click="endGroupstage" v-if="done")
        | End groupstage
</template>

<script>
import { mapGetters } from "vuex";
import { matchStates, routes } from "../config";
import berger from "../helpers/berger";
import { orderByProperty } from '../helpers/order-by-property'

export default {
  beforeMount () {
    this.$store.dispatch('groupstage/updateTables');
  },

  data: () => ({
    view: "matches"
  }),

  computed: {
    ...mapGetters({
      slug: 'currentTournament/slug',
      teams: 'currentTournament/teams',
      numberOfProceedingPlayers: 'currentTournament/numberOfProceedingPlayers',
      groups: 'groupstage/groups',
      proceedingTeams: 'groupstage/proceedingTeams',
    }),

    done () {
      const allGroupsCompleted = this.groups.every((match) => {
        return match.completed === true;
      });

      return allGroupsCompleted;
    }
  },

  methods: {
    matchUpdate(index, event) {
      this.$store.dispatch("groupstage/updateMatch", {
        groupIndex: index,
        match: event.match
      });
    },

    allMatchesPlayed(index) {
      this.$store.dispatch("groupstage/setGroupCompleted", {
        groupIndex: index
      });
    },

    endGroupstage() {
      const qualifiedPositions = Math.floor(this.numberOfProceedingPlayers / this.groups.length);

      const teamsToProceed = [];
      const teamsToExit = [];

      this.groups.forEach((group) => {
        const table = this.getTableOrder(group);

        table.forEach((team, index) => {
          if (index < qualifiedPositions) {
            teamsToProceed.push(team.id);
          } else {
            teamsToExit.push(team);
          }
        });
      });


      if (this.numberOfProceedingPlayers !== teamsToProceed.length) {
        const extraTeamsToProceed = this.getRemainingTeams(teamsToExit, (this.numberOfProceedingPlayers - teamsToProceed.length));
        teamsToProceed.push(...extraTeamsToProceed);
      }

      this.$store.dispatch("groupstage/complete", {
        teamIds: teamsToProceed
      });

      this.$store.dispatch("knockout/generate", {
        teams: this.proceedingTeams
      });

      this.$router.push(`/knockout/${this.slug}`);
    },

    getRemainingTeams(teamsToExit, numberOfTeamsToSelect) {
      //- get all teams except already selected
      const sorted = teamsToExit.sort(orderByProperty('pointsAverage', 'scored', 'difference', 'wins', 'draws')).reverse();
      const extraTeamsToProceed = [];

      for(let i = 0; i < numberOfTeamsToSelect; i++) {
        extraTeamsToProceed.push(sorted[i].id);
      }

      return extraTeamsToProceed;
    },

    getTableOrder(group) {
      const data = this.results(group);
      return data.sort(orderByProperty('points', 'difference', 'scored')).reverse();
    },

    results(group) {
      return group.table.map(t => {
        return {
          id: t.id,
          team: `${t.club} (${t.player})`,
          played: t.stats.played,
          wins: t.stats.won,
          draws: t.stats.draw,
          losses: t.stats.lost,
          scored: t.stats.goalsFor,
          against: t.stats.goalsAgainst,
          difference: t.stats.goalDifference,
          points: t.stats.points,
          pointsAverage: t.stats.points === 0 ? 0 : (t.stats.points / t.stats.played),
        };
      });
    },
  }

};
</script>

<style lang="scss" scoped>
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}

.group__title {
  margin: 70px 0 35px;
  text-transform: uppercase;
}

.group__title::before {
  content: '// ';
}
</style>