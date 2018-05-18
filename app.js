(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuetify_1 = require("vuetify");
require("vuetify/dist/vuetify.min.css");
var app_vue_1 = require("./app.vue");
var logo_vue_1 = require("./components/logo.vue");
var create_team_vue_1 = require("./components/create-team.vue");
var match_vue_1 = require("./components/match.vue");
var knockout_match_vue_1 = require("./components/knockout-match.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("./style/style.css");
vue_1.default.component('mut-logo', logo_vue_1.default);
vue_1.default.component('mut-create-team', create_team_vue_1.default);
vue_1.default.component('mut-match', match_vue_1.default);
vue_1.default.component('mut-knockout-match', knockout_match_vue_1.default);
vue_1.default.use(vuetify_1.default, {
    theme: {
        primary: '#26A69A',
        secondary: '#00897B',
        accent: '#F50057',
        error: '#FF5252',
        warning: '#FF8F00',
        info: '#29B6F6',
        success: '#00E676'
    }
});
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    el: '#app',
    render: function (h) { return h(app_vue_1.default); },
});
//# sourceMappingURL=main.js.map
});
___scope___.file("app.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-1bece084'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-toolbar',{attrs:{"color":"primary white--text"}},[_c('v-toolbar-title',{on:{"click":function($event){_vm.goToRoute('/')}}},[_vm._v("Mutambo")])],1),_c('v-content',[_c('v-container',{attrs:{"fluid":"fluid","fill-height":"fill-height"}},[_c('v-layout',{attrs:{"justify-center":"justify-center","align-center":"align-center"}},[_c('v-flex',{attrs:{"text-xs-center":"text-xs-center"}},[_c('router-view')],1)],1)],1)],1),_c('v-footer',{attrs:{"color":"accent"}},[_c('mut-logo')],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var config_1 = require("./config");
exports["default"] = {
    methods: {
        goToRoute: function goToRoute(route) {
            this.$router.push(route);
        }
    },
    watch: {
        $route: function $route(to) {
            var nextRoute = to.fullPath.split('/')[1];
            var activePath = Object.keys(config_1.routes).find(function (r) {
                return config_1.routes[r].path === nextRoute;
            });
            var routeConfig = config_1.routes[activePath];
            if (routeConfig.meta && routeConfig.meta.save) {
                this.$store.commit('setProgress', {
                    slug: this.$route.params.slug,
                    page: routeConfig.path
                });
            }
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-1bece084']) {
            process.env.vueHMR['data-v-1bece084'] = true;
            api.createRecord('data-v-1bece084', module.exports.default);
          }
        }
      
});
___scope___.file("config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_vue_1 = require("./pages/home.vue");
var create_vue_1 = require("./pages/create.vue");
var detail_vue_1 = require("./pages/detail.vue");
var teams_vue_1 = require("./pages/teams.vue");
var summary_vue_1 = require("./pages/summary.vue");
var league_vue_1 = require("./pages/league.vue");
var random_vue_1 = require("./pages/random.vue");
var results_vue_1 = require("./pages/results.vue");
exports.matchStates = {
    NONE: '',
    PLAYING: 'playing',
    DISABLED: 'disabled',
    DONE: 'done'
};
exports.routes = {
    HOME: {
        path: '',
        fullPath: '/',
        component: home_vue_1.default
    },
    CREATE: {
        path: 'create',
        fullPath: '/create/',
        component: create_vue_1.default
    },
    DETAIL: {
        path: 'detail',
        fullPath: '/detail/:slug',
        component: detail_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    RANDOM: {
        path: 'random',
        fullPath: '/random/:slug',
        component: random_vue_1.default,
        meta: {
            fetchCurrentTournament: true
        }
    },
    TEAMS: {
        path: 'teams',
        fullPath: '/teams/:slug',
        component: teams_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    SUMMARY: {
        path: 'summary',
        fullPath: '/summary/:slug',
        component: summary_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    LEAGUE: {
        path: 'league',
        fullPath: '/league/:slug',
        component: league_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    RESULTS: {
        path: 'results',
        fullPath: '/results/:slug',
        component: results_vue_1.default,
        meta: {
            fetchCurrentTournament: true
        }
    }
};
//# sourceMappingURL=config.js.map
});
___scope___.file("pages/home.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-db7e27a5'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){_vm.goToCreate()}}},[_vm._v("Create tournament")]),_c('br'),_c('br'),(_vm.tournaments.length)?_c('v-list',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md","fluid":"fluid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-space-between":"justify-space-between"}},[_vm._l((_vm.tournaments),function(tournament,index){return [(index !== 0)?_c('v-flex',{attrs:{"xs12":"xs12"}},[_c('div',{staticClass:"pl-3 pr-3"},[_c('v-divider')],1)]):_vm._e(),_c('v-flex',{attrs:{"xs12":"xs12","sm7":"sm7"}},[_c('v-subheader',{on:{"click":function($event){_vm.goToRoute(tournament.id)}}},[_vm._v(_vm._s(tournament.name))])],1),_c('v-flex',{staticClass:"text-xs-left text-sm-right",attrs:{"xs12":"xs12","sm5":"sm5"}},[_c('v-chip',{attrs:{"color":"secondary","text-color":"white","disabled":"disabled"}},[_vm._v(_vm._s(tournament.type))]),_c('v-chip',{attrs:{"color":"accent","text-color":"white","disabled":"disabled"}},[_vm._v(_vm._s(tournament.teams.length))])],1)]})],2)],1)],1):_vm._e()],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var config_1 = require("../config");
var vuex_1 = require("vuex");
exports["default"] = {
    beforeMount: function beforeMount() {
        this.$store.commit("currentTournament/reset");
    },
    methods: {
        goToCreate: function goToCreate() {
            this.$router.push(config_1.routes.CREATE.path);
        },
        goToRoute: function goToRoute(id) {
            var tournament = this.$store.getters.tournamentById(id);
            this.$router.push(tournament.page + "/" + tournament.slug);
        }
    },
    computed: _extends({}, vuex_1.mapGetters({
        tournaments: "tournaments"
    }))
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-db7e27a5']) {
            process.env.vueHMR['data-v-db7e27a5'] = true;
            api.createRecord('data-v-db7e27a5', module.exports.default);
          }
        }
      
});
___scope___.file("pages/create.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-79d97cee'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Name","required":"required","rules":_vm.nameRules},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Number of players","required":"required","rules":_vm.totalPlayerRules,"type":"number"},model:{value:(_vm.totalPlayers),callback:function ($$v) {_vm.totalPlayers=$$v},expression:"totalPlayers"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn-toggle',{model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"knockout"}},[_vm._v("Knockout")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"league"}},[_vm._v("League")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"groupstage-knockout"}},[_vm._v("Groupstate & Knockout")])],1)],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.valid},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var slug_1 = require("slug");
var id_generator_1 = require("../services/id-generator");
exports["default"] = {
    data: function data() {
        return {
            valid: false,
            name: "",
            nameRules: [function (v) {
                    return !!v || "Name is required";
                }],
            totalPlayers: 2,
            totalPlayerRules: [function (v) {
                    return !!v || "Number of players is required";
                }, function (v) {
                    return v >= 2 || "There should be at least 2 players";
                }],
            type: "knockout"
        };
    },
    methods: {
        submit: function submit() {
            if (!this.$refs.form.validate()) {
                return;
            }
            var slugged = slug_1["default"](this.name.toLowerCase());
            // create array of total players
            // const teams = Array.from({length: this.totalPlayers}).map(() => ({}))
            var teams = []; //TODO: fix with array.from
            for (var i = 0; i < this.totalPlayers; i++) {
                teams.push({});
            }
            var tournament = {
                id: id_generator_1["default"].id(),
                name: this.name,
                type: this.type,
                teams: teams
            };
            tournament.slug = slugged + "-" + id_generator_1["default"].random4chars;
            this.$store.commit("addTournament", tournament);
            this.$router.push("/detail/" + tournament.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-79d97cee']) {
            process.env.vueHMR['data-v-79d97cee'] = true;
            api.createRecord('data-v-79d97cee', module.exports.default);
          }
        }
      
});
___scope___.file("services/id-generator.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.prototype.id = function () {
        return "" + this.random4chars + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + this.random4chars + this.random4chars;
        ;
    };
    Object.defineProperty(IdGenerator.prototype, "random4chars", {
        get: function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        },
        enumerable: true,
        configurable: true
    });
    return IdGenerator;
}());
exports.default = new IdGenerator();
//# sourceMappingURL=id-generator.js.map
});
___scope___.file("pages/detail.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-8d3f1e3b'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name))]),_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Number of plays against each team","required":"required","rules":_vm.numberOfPlaysRules,"type":"number"},model:{value:(_vm.numberOfPlays),callback:function ($$v) {_vm.numberOfPlays=$$v},expression:"numberOfPlays"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.valid},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            valid: true,
            numberOfPlays: 1,
            numberOfPlaysRules: [function (v) {
                    return !!v || "Number of plays is required";
                }, function (v) {
                    return v >= 1 || "There should be at least 1 play";
                }]
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: "currentTournament/slug",
        name: "currentTournament/name"
    })),
    methods: {
        submit: function submit() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$store.dispatch("currentTournament/updateDetails", {
                numberOfPlays: parseInt(this.numberOfPlays)
            });
            this.$router.push("/teams/" + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-8d3f1e3b']) {
            process.env.vueHMR['data-v-8d3f1e3b'] = true;
            api.createRecord('data-v-8d3f1e3b', module.exports.default);
          }
        }
      
});
___scope___.file("pages/teams.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-3aa42064'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.tournamentName))]),_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-center":"justify-center","align-center":"align-center"}},_vm._l((_vm.teams),function(team){return _c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12","sm6":"sm6","md4":"md4","lg3":"lg3","xl2":"xl2","my-2":"my-2"}},[_c('mut-create-team',{attrs:{"team":team},on:{"addTeam":_vm.addTeam}})],1)})),_c('div',{staticClass:"mt-5 text-xs-left"},[_c('v-checkbox',{attrs:{"label":"Randomly mix players and teams"},model:{value:(_vm.randomly),callback:function ($$v) {_vm.randomly=$$v},expression:"randomly"}}),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            randomly: false
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        name: 'currentTournament/name',
        teams: 'currentTournament/teams'
    })),
    methods: {
        addTeam: function addTeam(team) {
            this.$store.dispatch("currentTournament/addTeam", team);
        },
        submit: function submit() {
            if (this.randomly)
                this.$router.push('/random/' + this.slug);
            else
                this.$router.push('/summary/' + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-3aa42064']) {
            process.env.vueHMR['data-v-3aa42064'] = true;
            api.createRecord('data-v-3aa42064', module.exports.default);
          }
        }
      
});
___scope___.file("pages/summary.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-e766e9a6'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-space-between":"justify-space-between"}},[_c('v-flex',{attrs:{"md8":"md8","offset-md2":"offset-md2"}},[_c('v-card',[_c('v-card-title',{staticClass:"accent white--text"},[_vm._v("Summary")]),_c('v-card-text',[_c('v-list',[_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Your tournament will contain "+_vm._s(_vm.totalTeams)+" players.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Every player will play with 1 team.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("All teams will play "+_vm._s(_vm.numberOfPlays)+" "+_vm._s(_vm.numberOfPlays > 1 ? 'times' : 'time')+" against all other player's teams.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("The tournament will consist of "+_vm._s(_vm.totalFixtures)+" fixtures.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("It will take ± "+_vm._s(_vm.totalMinutes)+" minutes to play all fixtures (6 minutes per half).")])],1)],1)],1)],1)],1)],1)],1),_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.submit}},[_vm._v("Start tournament")])],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _toConsumableArray(arr) { if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}
else {
    return Array.from(arr);
} }
var berger_1 = require("../helpers/berger");
var vuex_1 = require("vuex");
exports["default"] = {
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams',
        totalTeams: 'currentTournament/totalTeams',
        type: 'currentTournament/type',
        numberOfPlays: 'currentTournament/numberOfPlays'
    }), {
        totalFixtures: function totalFixtures() {
            var length = this.totalTeams;
            return length * (length - 1) / 2 * this.numberOfPlays;
        },
        totalMinutes: function totalMinutes() {
            return this.totalFixtures * 12;
        }
    }),
    mounted: function mounted() {
        switch (this.type) {
            case "league":
                this.generateMatches();
                break;
            case "knockout":
                this.generateKnockoutRounds();
                break;
            default:
                break;
        }
    },
    methods: {
        submit: function submit() {
            this.$router.push('/' + this.type + '/' + this.slug);
        },
        reverseFixtures: function reverseFixtures(n) {
            return n % 2 === 0;
        },
        generateMatches: function generateMatches() {
            var matches = [];
            for (var i = 1; i <= this.numberOfPlays; i++) {
                var teams = JSON.parse(JSON.stringify(this.teams));
                var bergerTable = berger_1["default"].getTable(teams, this.reverseFixtures(i));
                matches.push.apply(matches, _toConsumableArray(bergerTable));
            }
            matches.map(function (match) {
                match.away.score = 0;
                match.home.score = 0;
            });
            this.$store.commit("addMatches", {
                matches: matches,
                slug: this.slug
            });
        },
        generateKnockoutRounds: function generateKnockoutRounds() {
            this.$store.commit('generateKORounds', {
                teams: this.teams,
                slug: this.slug
            });
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-e766e9a6']) {
            process.env.vueHMR['data-v-e766e9a6'] = true;
            api.createRecord('data-v-e766e9a6', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/berger.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var id_generator_1 = require("../services/id-generator");
function getTable(teams, reverseFixtures, useDummy, dummy) {
    if (useDummy === void 0) { useDummy = false; }
    if (dummy === void 0) { dummy = {}; }
    if (!Array.isArray(teams)) {
        teams = Array.from({ length: teams }).map(function (_, i) { return i; });
    }
    if (teams.length % 2 !== 0) {
        teams.push(dummy);
    }
    var n = teams.length;
    var numberOfRounds = n - 1;
    var gamesPerRound = n / 2;
    var columnA = teams.slice(0, gamesPerRound);
    var columnB = teams.slice(gamesPerRound);
    var fixed = teams[0];
    var matches = Array.from({ length: numberOfRounds }).map(function (_, i) {
        var gameCount = 1;
        var round = Array.from({ length: gamesPerRound }).reduce(function (acc, _, k) {
            if (useDummy || (columnA[k] !== dummy && columnB[k] !== dummy)) {
                acc.push({
                    round: i + 1,
                    game: gameCount,
                    home: JSON.parse(JSON.stringify(reverseFixtures ? columnB[k] : columnA[k])),
                    away: JSON.parse(JSON.stringify(reverseFixtures ? columnA[k] : columnB[k])),
                    state: config_1.matchStates.NONE,
                    id: id_generator_1.default.id(),
                });
                gameCount++;
            }
            return acc;
        }, []);
        // rotate elements
        columnA = [fixed, columnB.shift()].concat(columnA.slice(1));
        columnB.push(columnA.pop());
        return round;
    });
    var flattendMatches = [].concat.apply([], matches);
    return flattendMatches;
}
exports.default = {
    getTable: getTable
};
//# sourceMappingURL=berger.js.map
});
___scope___.file("pages/league.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-5ee00795'}
Object.assign(_options, {_scopeId: 'data-v-5ee00795'})
Object.assign(_options, {
        _scopeId: "data-v-5ee00795",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.tournamentName))])]),_c('div',{staticClass:"matches"},_vm._l((_vm.matches),function(match){return _c('mut-match',{attrs:{"match":match},on:{"update":_vm.matchUpdate}})})),(_vm.allMatchedsPlayed)?_c('v-btn',{on:{"click":_vm.endTournament}},[_vm._v("End tournament")]):_vm._e()],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var config_1 = require("../config");
exports["default"] = {
    data: function data() {
        return {
            activeTeams: [],
            totalMatchesLeft: 0
        };
    },
    beforeMount: function beforeMount() {
        this.totalMatchesLeft = this.matches && this.matches.length;
    },
    computed: {
        slug: function slug() {
            return this.$route.params.slug;
        },
        tournament: function tournament() {
            return this.$store.getters.tournament(this.slug);
        },
        tournamentName: function tournamentName() {
            return this.tournament.name();
        },
        matches: function matches() {
            return this.tournament.matchList();
        },
        isTeamPlaying: function isTeamPlaying() {
            var _this = this;
            return function (team) {
                return _this.activeTeams.indexOf(team) > -1;
            };
        },
        allMatchedsPlayed: function allMatchedsPlayed() {
            return this.totalMatchesLeft === 0;
        }
    },
    methods: {
        matchUpdate: function matchUpdate(event) {
            var _this2 = this;
            var index = this.matches.findIndex(function (m) {
                return m.id === event.match.id;
            });
            if (index === -1)
                throw new Error("match not found");
            this.matches[index].state = event.state;
            this.matches[index].winner = event.winner;
            this.activeTeams = [];
            var activeMatches = this.matches.filter(function (m) {
                return m.state === config_1.matchStates.PLAYING;
            });
            activeMatches.forEach(function (m) {
                _this2.activeTeams.push(m.home.club);
                _this2.activeTeams.push(m.away.club);
            });
            this.matches.forEach(function (m, i) {
                if (m.state === config_1.matchStates.DONE)
                    return;
                if ((_this2.isTeamPlaying(m.home.club) || _this2.isTeamPlaying(m.away.club)) && m.state !== config_1.matchStates.PLAYING) {
                    _this2.matches[i].state = config_1.matchStates.DISABLED;
                }
                else if (m.state === config_1.matchStates.DISABLED) {
                    _this2.matches[i].state = config_1.matchStates.NONE;
                }
            });
            if (event.state === config_1.matchStates.DONE) {
                this.totalMatchesLeft--;
                this.$store.dispatch("updateMatch", {
                    match: this.matches[index],
                    slug: this.slug
                });
            }
        },
        endTournament: function endTournament() {
            this.$router.push("/results/" + this.$route.params.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-5ee00795']) {
            process.env.vueHMR['data-v-5ee00795'] = true;
            api.createRecord('data-v-5ee00795', module.exports.default);
          }
        }
      
});
___scope___.file("pages/random.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-99bac771'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-lg":"grid-list-lg"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","align-center":"align-center","justify-center":"justify-center"}},_vm._l((_vm.newTeams),function(team,index){return _c('v-flex',{attrs:{"md2":"md2"}},[_c('v-jumbotron',{attrs:{"gradient":_vm.gradient,"dark":"dark","height":"200"}},[_c('div',{staticClass:"math__side match__side--home pa-2"},[_c('div',{staticClass:"match__team"},[_vm._v(_vm._s(team.club)),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(team.player))])])])])],1)})),(!_vm.draw)?_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.startDraw}},[_vm._v("Draw")])],1):_vm._e(),(_vm.submitable)?_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.submit}},[_vm._v("Submit")])],1):_vm._e()],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var id_generator_1 = require("../services/id-generator");
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            draw: false,
            newTeams: [],
            gradient: "to top, #7B1FA2, #E1BEE7",
            submitable: false
        };
    },
    methods: {
        getRandomPlayer: function getRandomPlayer() {
            return this.players.splice(this.players.length * Math.random() | 0, 1)[0];
        },
        getRandomClub: function getRandomClub() {
            return this.clubs.splice(this.clubs.length * Math.random() | 0, 1)[0];
        },
        startDraw: function startDraw() {
            // TODO: redraw??
            this.draw = true;
            this.random();
        },
        random: function random() {
            var _this = this;
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
                _this.newTeams.push({
                    club: _this.getRandomClub(),
                    player: _this.getRandomPlayer(),
                    id: id_generator_1["default"].id()
                });
                if (i < _this.teams.length - 1) {
                    i++;
                    _this.random(i);
                }
                else {
                    _this.submitable = true;
                }
            }, 500);
        },
        submit: function submit() {
            this.$store.dispatch("currentTournament/randomizeTeams", this.newTeams);
            this.$router.push("/summary/" + this.slug);
        }
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams'
    }), {
        clubs: function clubs() {
            return this.teams.map(function (t) {
                return t.club;
            });
        },
        players: function players() {
            return this.teams.map(function (t) {
                return t.player;
            });
        }
    })
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-99bac771']) {
            process.env.vueHMR['data-v-99bac771'] = true;
            api.createRecord('data-v-99bac771', module.exports.default);
          }
        }
      
});
___scope___.file("pages/results.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-ab57f7f0'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name)+" results")]),_c('v-flex',{attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.sortedResults,"hide-actions":"hide-actions"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.team))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.played))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.wins))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.draws))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.losses))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.scored))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.against))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.difference))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.points))])]}}])})],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            headers: [{
                    text: "Team",
                    value: "team",
                    sortable: false
                }, {
                    text: "Played",
                    value: "played",
                    sortable: false
                }, {
                    text: "Wins",
                    value: "wins",
                    sortable: false
                }, {
                    text: "Draws",
                    value: "draws",
                    sortable: false
                }, {
                    text: "Losses",
                    value: "losses",
                    sortable: false
                }, {
                    text: "Scored",
                    value: "scored",
                    sortable: false
                }, {
                    text: "Against",
                    value: "against",
                    sortable: false
                }, {
                    text: "Difference",
                    value: "difference",
                    sortable: false
                }, {
                    text: "Points",
                    value: "points",
                    sortable: false
                }]
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        name: 'currentTournament/name',
        teams: 'currentTournament/teams'
    }), {
        results: function results() {
            return this.teams.map(function (t) {
                return {
                    team: t.club + " (" + t.player + ")",
                    played: t.stats.played,
                    wins: t.stats.wins,
                    draws: t.stats.draws,
                    losses: t.stats.loses,
                    scored: t.stats.scored,
                    against: t.stats.against,
                    difference: t.stats.scored - t.stats.against,
                    points: t.stats.points
                };
            });
        },
        sortedResults: function sortedResults() {
            return this.results.sort(this.orderByProperty('points', 'difference', 'scored')).reverse();
        }
    }),
    methods: {
        orderByProperty: function orderByProperty(prop) {
            var _arguments = arguments, _this = this;
            var args = Array.prototype.slice.call(arguments, 1);
            return function (a, b) {
                var equality = a[prop] - b[prop];
                if (equality === 0 && _arguments.length > 1) {
                    return _this.orderByProperty.apply(null, args)(a, b);
                }
                return equality;
            };
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-ab57f7f0']) {
            process.env.vueHMR['data-v-ab57f7f0'] = true;
            api.createRecord('data-v-ab57f7f0', module.exports.default);
          }
        }
      
});
___scope___.file("components/logo.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-dd6e56bd'}
Object.assign(_options, {_scopeId: 'data-v-dd6e56bd'})
Object.assign(_options, {
        _scopeId: "data-v-dd6e56bd",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('svg',{staticClass:"logo",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 500 500"}},[_c('path',{attrs:{"d":"M342.4,433.42a17.33,17.33,0,0,0,.25-17.33L284.34,310.23V233.41h17.48V188.05H198.18v45.35h17.48v76.82L157.32,416.09A17.48,17.48,0,0,0,172.58,442H327.42A17.33,17.33,0,0,0,342.4,433.42ZM196.51,376l9.64-17.48H247.5v-15H214.41l5.49-10h27.6v-15H228.17l2.5-4.47v-5.49H247.5v-15H230.65v-10H247.5v-15H230.65v-50.2H213.16V203h73.67v15.38H269.35V314.1L303.47,376Z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M430.89,238.9c-12.71-5.1-27.59-8.12-44.25-9-6.61-.34-13.18-.5-19.69-.5a393,393,0,0,0-75.57,7.3c-5.11,1-10.27,2.35-15.45,3.69-8.72,2.26-17.73,4.59-25.58,5.22-8.56-.63-17.57-3-26.29-5.22-5.17-1.34-10.34-2.67-15.44-3.69a393,393,0,0,0-75.57-7.3c-6.51,0-13.09.17-19.7.5-16.66.86-31.53,3.87-44.24,9l-3.64,1.47.82,3.84a65.63,65.63,0,0,1,1,7.61c.47,4.79,1,9.74,3.14,14.49a17.87,17.87,0,0,0,5.73,6.79,9,9,0,0,1,2.55,2.58c2.79,5.25,4.39,11.2,5.94,16.95.91,3.39,1.81,6.69,2.9,9.78,6.3,17.88,12.83,33.36,29.11,42,14.41,7.6,44.73,11.89,62.23,8.12,30.3-6.52,52-28.88,64.42-66.47.3-.91.6-2,.92-3.11.5-1.82,1.55-5.62,2.28-6.33a8.8,8.8,0,0,1,3.32-.64,10.75,10.75,0,0,1,3.5.56c.87.8,1.91,4.6,2.41,6.42.31,1.12.61,2.19.92,3.11,12.43,37.59,34.12,60,64.42,66.47A76.19,76.19,0,0,0,337,354c16.27,0,35.77-4,46.36-9.62,16.28-8.59,22.81-24.08,29.11-42,1.09-3.08,2-6.39,2.9-9.78,1.55-5.75,3.15-11.7,5.94-16.95a9,9,0,0,1,2.55-2.58,17.87,17.87,0,0,0,5.73-6.79c2.18-4.75,2.67-9.7,3.14-14.49a63.89,63.89,0,0,1,1-7.61l.82-3.84Zm-339,19.4H84.74a6.25,6.25,0,1,1,0-12.51h7.19a6.25,6.25,0,1,1,0,12.51Zm121.83,37c-6.56,24.75-26.1,37.83-56.94,37.83-13-.06-27.44-3.55-34.35-8.31s-10.55-17.66-13-28.38c-5.25-23.32-2.35-32.45-.16-35.81,4.73-7.25,22.48-12.13,44.16-12.13,3.16,0,6.27.11,9.22.32,5.82.4,11.52.83,17.13,1.43,17,1.8,31.36,7.51,34.8,13.89C217.79,270,217.46,281.38,213.75,295.33Zm176.76,1.13c-2.43,10.73-6.11,23.66-13,28.39s-21.34,8.25-34.75,8.31c-30.42,0-50-13.09-56.53-37.84-3.71-13.95-4-25.31-.89-31.16,3.44-6.39,17.75-12.1,34.81-13.89,5.6-.6,11.29-1,17.11-1.43,3-.21,6-.31,9.19-.31,21.71,0,39.47,4.88,44.19,12.14C392.86,264,395.76,273.15,390.51,296.47Zm22.3-38.17h-7.19a6.25,6.25,0,1,1,0-12.51h7.19a6.25,6.25,0,1,1,0,12.51Z"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"226.63","cy":"153.88","r":"16.75"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"272.58","cy":"119.14","r":"16.75"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"239.07","cy":"74.74","r":"16.75"}})])])},
        staticRenderFns: []
      })
exports.default = {}
Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-dd6e56bd']) {
            process.env.vueHMR['data-v-dd6e56bd'] = true;
            api.createRecord('data-v-dd6e56bd', module.exports.default);
          }
        }
      
});
___scope___.file("components/create-team.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f18d2362'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-card',[_c('v-card-title',{attrs:{"primary-title":"primary-title"}},[_c('v-container',{attrs:{"fluid":"fluid","grid-list-md":"grid-list-md"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('div',{attrs:{"hidden":"hidden"}},[_c('v-text-field',{attrs:{"label":"id"},model:{value:(_vm.team.id),callback:function ($$v) {_vm.$set(_vm.team, "id", $$v)},expression:"team.id"}})],1),_c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12"}},[_c('v-text-field',{attrs:{"label":"Player","value":_vm.team.player},on:{"input":_vm.changePlayer}})],1),_c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12"}},[_c('v-text-field',{attrs:{"label":"Club","value":_vm.team.club},on:{"input":_vm.changeClub}})],1)],1)],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var id_generator_1 = require("../services/id-generator");
exports["default"] = {
    props: {
        team: {
            type: Object | String,
            "default": function _default() {
                return {
                    id: "",
                    player: "",
                    club: ""
                };
            }
        }
    },
    methods: {
        changePlayer: function changePlayer(player) {
            this.team.player = player;
            this.submit();
        },
        changeClub: function changeClub(club) {
            this.team.club = club;
            this.submit();
        },
        submit: lodash_1.debounce(function () {
            if (!this.team.club || !this.team.player) {
                return;
            }
            if (!this.team.id) {
                this.team.id = id_generator_1["default"].id();
            }
            this.$emit("addTeam", this.team);
        }, 300)
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f18d2362']) {
            process.env.vueHMR['data-v-f18d2362'] = true;
            api.createRecord('data-v-f18d2362', module.exports.default);
          }
        }
      
});
___scope___.file("components/match.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-ca9d0d25'}
Object.assign(_options, {_scopeId: 'data-v-ca9d0d25'})
Object.assign(_options, {
        _scopeId: "data-v-ca9d0d25",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"match",class:{'match--playing': _vm.internalMatch.state === 'playing', 'match--done': _vm.internalMatch.state === 'done' , 'match--disabled': _vm.internalMatch.state === 'disabled'}},[_c('div',{staticClass:"math__side match__side--home",class:{'match__side--winner': _vm.internalMatch.winner ===  1, 'match__side--loser': _vm.internalMatch.winner === 2}},[_c('div',{staticClass:"match__team"},[_c('div',{staticClass:"match__club"},[_vm._v(_vm._s(_vm.internalMatch.home.club))]),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(_vm.internalMatch.home.player))])]),_c('div',{staticClass:"match__score"},[_vm._v(_vm._s(_vm.internalMatch.home.score))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.home.score),expression:"internalMatch.home.score"}],staticClass:"match__score--input",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.home.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.home, "score", $event.target.value)}}})]),_c('div',{staticClass:"match__center"},[_c('div',{staticClass:"match__playing"},[_vm._v("live")]),_c('div',{staticClass:"match__divider"},[_vm._v("-")]),_c('button',{staticClass:"match__button match__button--start",on:{"click":_vm.startMatch}},[_vm._v("start match")]),_c('button',{staticClass:"match__button match__button--end",on:{"click":_vm.endMatch}},[_vm._v("end match")])]),_c('div',{staticClass:"math__side match__side--away",class:{'match__side--winner': _vm.internalMatch.winner ===  2, 'match__side--loser': _vm.internalMatch.winner === 1}},[_c('div',{staticClass:"match__team"},[_c('div',{staticClass:"match__club"},[_vm._v(_vm._s(_vm.internalMatch.away.club))]),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(_vm.internalMatch.away.player))])]),_c('div',{staticClass:"match__score"},[_vm._v(_vm._s(_vm.internalMatch.away.score))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.away.score),expression:"internalMatch.away.score"}],staticClass:"match__score--input",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.away.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.away, "score", $event.target.value)}}})])])},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var config_1 = require("../config");
exports["default"] = {
    data: function data() {
        return {
            internalMatch: undefined
        };
    },
    props: {
        match: {
            required: true
        }
    },
    beforeMount: function beforeMount() {
        this.internalMatch = this.match;
    },
    methods: {
        startMatch: function startMatch() {
            this.$emit("update", {
                match: this.internalMatch,
                state: config_1.matchStates.PLAYING
            });
        },
        endMatch: function endMatch() {
            var winner = 0;
            // convert to number
            this.internalMatch.home.score = parseInt(this.internalMatch.home.score);
            this.internalMatch.away.score = parseInt(this.internalMatch.away.score);
            if (this.internalMatch.home.score > this.internalMatch.away.score) {
                winner = 1;
            }
            else if (this.internalMatch.home.score < this.internalMatch.away.score) {
                winner = 2;
            }
            this.$emit("update", {
                match: this.internalMatch,
                state: config_1.matchStates.DONE,
                winner: winner
            });
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-ca9d0d25']) {
            process.env.vueHMR['data-v-ca9d0d25'] = true;
            api.createRecord('data-v-ca9d0d25', module.exports.default);
          }
        }
      
});
___scope___.file("components/knockout-match.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-15b41224'}
Object.assign(_options, {_scopeId: 'data-v-15b41224'})
Object.assign(_options, {
        _scopeId: "data-v-15b41224",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"knockout-match"},[_c('div',{staticClass:"knockout-match__club"},[(_vm.home)?_c('div',[_c('span',{staticClass:"knockout-match__club-name"},[_vm._v(_vm._s(_vm.home.club))]),_c('span',{staticClass:"knockout-match__score"},[_vm._v(_vm._s(_vm.home.score)),(_vm.home.penaltyScore)?_c('span',{staticClass:"knockout-match__penalty-score"},[_vm._v(_vm._s(_vm.home.penaltyScore))]):_vm._e()])]):_vm._e()]),_c('div',{staticClass:"knockout-match__club"},[(_vm.away)?_c('div',[_c('span',{staticClass:"knockout-match__club-name"},[_vm._v(_vm._s(_vm.away.club))]),_c('span',{staticClass:"knockout-match__score"},[_vm._v(_vm._s(_vm.away.score)),(_vm.away.penaltyScore)?_c('span',{staticClass:"knockout-match__penalty-score"},[_vm._v(_vm._s(_vm.away.penaltyScore))]):_vm._e()])]):_vm._e()])])},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
exports["default"] = {
    props: {
        home: {
            required: true
        },
        away: {
            required: true
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-15b41224']) {
            process.env.vueHMR['data-v-15b41224'] = true;
            api.createRecord('data-v-15b41224', module.exports.default);
          }
        }
      
});
___scope___.file("router/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var store_1 = require("../store");
var config_1 = require("../config");
vue_1.default.use(vue_router_1.default);
function buildRouteConfig() {
    var routeConfig = [];
    for (var key in config_1.routes) {
        routeConfig.push({
            path: config_1.routes[key].fullPath,
            component: config_1.routes[key].component,
            meta: config_1.routes[key].meta
        });
    }
    return routeConfig;
}
var router = new vue_router_1.default({
    routes: buildRouteConfig()
});
router.beforeEach(function (to, from, next) {
    if (to.meta && to.meta.fetchCurrentTournament) {
        var tournament = store_1.default.getters.tournamentBySlug(to.params.slug);
        if (Object.keys(tournament).length === 0) {
            next('/');
        }
        store_1.default.commit('currentTournament/set', tournament.id);
    }
    next();
});
exports.default = router;
//# sourceMappingURL=index.js.map
});
___scope___.file("store/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var state_1 = require("./state");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
var getters_1 = require("./getters");
var plugins_1 = require("./plugins");
var current_tournament_1 = require("./modules/current-tournament");
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: state_1.default,
    actions: actions_1.default,
    mutations: mutations_1.default,
    plugins: plugins_1.default,
    getters: getters_1.default,
    modules: {
        currentTournament: current_tournament_1.default
    }
});
//# sourceMappingURL=index.js.map
});
___scope___.file("store/state.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
exports.default = {
    tournaments: JSON.parse(window.localStorage.getItem(config_1.STORAGE_KEY) || '[]')
};
//# sourceMappingURL=state.js.map
});
___scope___.file("store/config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEY = 'mut-tournament';
//# sourceMappingURL=config.js.map
});
___scope___.file("store/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../helpers/match");
exports.default = {
    addTournament: function (state, _a) {
        var id = _a.id, slug = _a.slug, name = _a.name, teams = _a.teams, type = _a.type;
        state.tournaments.push({
            id: id,
            slug: slug,
            name: name,
            teams: teams,
            type: type,
            details: {}
        });
    },
    setProgress: function (state, _a) {
        var slug = _a.slug, page = _a.page;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            tournament.page = page;
        }
        else {
            throw new Error("Tournament " + slug + " not found");
        }
    },
    addMatches: function (state, _a) {
        var matches = _a.matches, slug = _a.slug;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            tournament.matches = matches;
        }
    },
    updateMatchScore: function (state, _a) {
        var match = _a.match, slug = _a.slug;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            var index = tournament.matches.findIndex(function (m) { return m.id === match.id; });
            if (index > -1) {
                tournament.matches[index] = match;
            }
        }
        else {
            throw new Error("Tournament " + slug + " not found");
        }
    },
    updateTeamStat: function (state, _a) {
        var teamId = _a.teamId, score = _a.score, scoreOpponent = _a.scoreOpponent, slug = _a.slug;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            var team = tournament.teams.find(function (t) { return t.id === teamId; });
            if (team) {
                if (!team.stats) {
                    team.stats = {
                        played: 0,
                        wins: 0,
                        draws: 0,
                        loses: 0,
                        scored: 0,
                        against: 0,
                        points: 0,
                    };
                }
                team.stats.played++;
                team.stats.scored += score;
                team.stats.against += scoreOpponent;
                if (score > scoreOpponent) {
                    team.stats.wins++;
                    team.stats.points += 3;
                }
                else if (score === scoreOpponent) {
                    team.stats.draws++;
                    team.stats.points += 1;
                }
                else if (score < scoreOpponent) {
                    team.stats.loses++;
                }
            }
        }
        else {
            throw new Error("Tournament " + slug + " not found");
        }
    },
    generateKORounds: function (state, _a) {
        var teams = _a.teams, slug = _a.slug;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            var shuffeledTeams = teams.sort(function (a, b) { return 0.5 - Math.random(); });
            tournament.knockout = {};
            tournament.knockout.rounds = [];
            var matches = [];
            for (var i = 0; i < shuffeledTeams.length; i = i + 2) {
                matches.push(match_1.generateMatch(shuffeledTeams[i], shuffeledTeams[i + 1]));
            }
            tournament.knockout.rounds.push(matches);
        }
        else {
            throw new Error("Tournament " + slug + " not found");
        }
    }
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("helpers/match.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateMatch(teamA, teamB) {
    return {
        home: teamA,
        away: teamB
    };
}
exports.generateMatch = generateMatch;
//# sourceMappingURL=match.js.map
});
___scope___.file("store/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    updateMatch: function (_a, _b) {
        var commit = _a.commit;
        var match = _b.match, slug = _b.slug;
        commit("updateMatchScore", {
            match: match,
            slug: slug
        });
        commit("updateTeamStat", {
            teamId: match.home.id,
            score: match.home.score,
            scoreOpponent: match.away.score,
            slug: slug
        });
        commit("updateTeamStat", {
            teamId: match.away.id,
            score: match.away.score,
            scoreOpponent: match.home.score,
            slug: slug
        });
    },
};
//# sourceMappingURL=actions.js.map
});
___scope___.file("store/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    tournaments: function (state) {
        return state.tournaments;
    },
    tournamentById: function (state) { return function (id) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.id === id; });
        return tournament || {};
    }; },
    tournamentBySlug: function (state) { return function (slug) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.slug === slug; });
        return tournament || {};
    }; },
    tournament: function (state) { return function (slug) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.slug === slug; });
        if (!tournament) {
            throw new Error("Tournament with name " + slug + " not find");
        }
        return {
            name: function () {
                return tournament.name;
            },
            type: function () {
                return tournament.type;
            },
            slug: function () {
                return tournament.slug;
            },
            teams: function () {
                return tournament.teams;
            },
            matchList: function () {
                return tournament.matches;
            },
            page: function () {
                return tournament.page;
            },
            numberOfPlays: function () {
                return tournament.details.numberOfPlays;
            },
            knockoutRounds: function () {
                return tournament.knockout.round;
            },
            koRounds: function () {
                var rounds = [];
                var totalTeams = tournament.teams.length;
                var totalRounds = 0;
                for (var i = totalTeams; i >= 2; i = i / 2) {
                    rounds.push({
                        matches: []
                    });
                    var matches = [];
                    var totalMatches = i / 2;
                    for (var y = 0; y < totalMatches; y++) {
                        var round = tournament.knockout.rounds[totalRounds] || [];
                        matches.push(round[y] || {});
                    }
                    rounds[totalRounds].matches = matches;
                    totalRounds++;
                }
                return rounds;
            },
        };
    }; }
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/plugins.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var localStoragePlugin = function (store) {
    store.subscribe(function (mutation, _a) {
        var tournaments = _a.tournaments;
        window.localStorage.setItem(config_1.STORAGE_KEY, JSON.stringify(tournaments));
    });
};
exports.default = [localStoragePlugin];
//# sourceMappingURL=plugins.js.map
});
___scope___.file("store/modules/current-tournament.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    namespaced: true,
    state: {
        id: undefined
    },
    getters: {
        id: function (state) {
            return state.id;
        },
        tournament: function (state, getters, rootState, rootGetters) {
            return rootGetters.tournamentById(state.id);
        },
        page: function (state, getters) {
            return getters.tournament.page;
        },
        name: function (state, getters) {
            return getters.tournament.name;
        },
        type: function (state, getters) {
            return getters.tournament.type;
        },
        slug: function (state, getters) {
            return getters.tournament.slug;
        },
        teams: function (state, getters) {
            return getters.tournament.teams;
        },
        totalTeams: function (state, getters) {
            return getters.teams.length;
        },
        matchList: function (state, getters) {
            return getters.tournament.matches;
        },
        numberOfPlays: function (state, getters) {
            if (getters.tournament.details) {
                return getters.tournament.details.numberOfPlays;
            }
        }
    },
    mutations: {
        set: function (state, tournamentId) {
            state.id = tournamentId;
        },
        reset: function (state) {
            state.id = undefined;
        },
        updateDetails: function (state, _a) {
            var tournament = _a.tournament, details = _a.details;
            tournament.details = Object.assign({}, tournament.details, details);
        },
        randomizeTeams: function (state, _a) {
            var tournament = _a.tournament, randomizedTeams = _a.randomizedTeams;
            tournament.teams = randomizedTeams;
        },
        addTeam: function (state, _a) {
            var tournament = _a.tournament, team = _a.team;
            if (!tournament.teams)
                tournament.teams = [];
            var index = tournament.teams.findIndex(function (t) { return t.id === team.id; });
            if (index < 0) {
                tournament.teams.push(team);
            }
            else {
                tournament.teams[index] = team;
            }
        }
    },
    actions: {
        updateDetails: function (_a, details) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('updateDetails', {
                    tournament: tournament,
                    details: details
                });
            }
        },
        randomizeTeams: function (_a, randomizedTeams) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('randomizeTeams', {
                    tournament: tournament,
                    randomizedTeams: randomizedTeams
                });
            }
        },
        addTeam: function (_a, team) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('addTeam', {
                    tournament: tournament,
                    team: team
                });
            }
        }
    }
};
//# sourceMappingURL=current-tournament.js.map
});
___scope___.file("style/style.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("style/style.css", "@import url('https://fonts.googleapis.com/css?family=Montserrat:500,900');\n:root {\n  --color-white: #fff;\n  --color-primary: #009EC4;\n  --color-secondary: #009658;\n  --font-main: 'Montserrat', sans-serif;\n  --font-weight-medium: 500;\n  --font-weight-black: 900;\n}\n\n/*\n  DEFAULT\n*/\n\nhtml,\nbody {\n  color: var(--color-white);\n  font-family: var(--font-main);\n  font-size: 16px;\n  font-weight: var(--font-weight-medium);\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n  TYPOGRAPHY\n*/\n\nh1 {\n  font-size: 50px;\n  font-weight: var(--font-weight-black);\n  margin: 0;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 30px;\n  font-weight: var(--font-weight-medium);\n  margin: 0;\n  opacity: .75;\n  text-transform: uppercase;\n}\n")
});
___scope___.file("components.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components.css", "\n.matches[data-v-5ee00795] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n\n.logo[data-v-dd6e56bd] {\n  --logo-size: 30px;\n  bottom: 5px;\n  fill: var(--color-white);\n  height: var(--logo-size);\n  right: 10px;\n  position: absolute;\n  width: var(--logo-size);\n}\n.logo circle[data-v-dd6e56bd] {\n  animation-duration: 2s;\n  animation-fill-mode: backwards;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(1) {\n  animation-delay: 1s;\n  animation-name: bubble1-data-v-dd6e56bd;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(2) {\n  animation-delay: 1.5s;\n  animation-name: bubble2-data-v-dd6e56bd;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(3) {\n  animation-name: bubble3-data-v-dd6e56bd;\n}\n.logo:hover circle[data-v-dd6e56bd] {\n  animation-play-state: running;\n}\n@keyframes bubble1-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(10%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble2-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(20%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble3-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(30%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-10%);\n}\n}\n\n.match[data-v-ca9d0d25] {\n  background-color: white;\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr;\n  height: 100px;\n  padding: 20px;\n}\n.match--playing .match__playing[data-v-ca9d0d25],\n.match--playing .match__score--input[data-v-ca9d0d25],\n.match--playing .match__button--end[data-v-ca9d0d25] {\n  display: block;\n}\n.match--playing .match__button--start[data-v-ca9d0d25] {\n  display: none;\n}\n.match--disabled[data-v-ca9d0d25] {\n  opacity: 0.25;\n}\n.match--disabled .match__button[data-v-ca9d0d25],\n  .match--disabled .match__score[data-v-ca9d0d25] {\n    display: none;\n}\n.match--done[data-v-ca9d0d25] {\n  background-color: limegreen;\n  color: white;\n}\n.match--done .match__score[data-v-ca9d0d25] {\n    color: white;\n}\n.match--done .match__side--loser .match__team[data-v-ca9d0d25] {\n    opacity: 0.5;\n}\n.match--done .match__button[data-v-ca9d0d25],\n  .match--done .match__playing[data-v-ca9d0d25] {\n    display: none;\n}\n.match--done .match__score[data-v-ca9d0d25],\n  .match--done .match__divider[data-v-ca9d0d25] {\n    display: block;\n}\n.match__center[data-v-ca9d0d25] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  justify-content: center;\n}\n.match__button[data-v-ca9d0d25] {\n  background-color: transparent;\n  color: limegreen;\n  cursor: pointer;\n  border: 1px solid limegreen;\n  border-radius: 5px;\n  padding: 4px;\n}\n.match__button--end[data-v-ca9d0d25] {\n  border: none;\n  color: #999;\n  display: none;\n  margin-top: 10px;\n  text-decoration: underline;\n}\n.match__divider[data-v-ca9d0d25] {\n  display: none;\n  font-size: 40px;\n  font-weight: 300;\n}\n.match__playing[data-v-ca9d0d25] {\n  color: red;\n  display: none;\n  position: relative;\n}\n.match__playing[data-v-ca9d0d25]::after {\n    animation-name: move-data-v-ca9d0d25;\n    animation-duration: 0.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    background-color: currentColor;\n    border-radius: 50%;\n    content: \"\";\n    display: block;\n    height: 3px;\n    right: -10px;\n    position: absolute;\n    top: 50%;\n    width: 3px;\n}\n.math__side[data-v-ca9d0d25] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n}\n.match__side--away[data-v-ca9d0d25] {\n  flex-direction: row-reverse;\n  text-align: right;\n}\n.match__team[data-v-ca9d0d25] {\n  font-size: 20px;\n  font-weight: 300;\n}\n.match__player[data-v-ca9d0d25] {\n  font-size: 12px;\n  line-height: 20px;\n  opacity: 0.5;\n}\n.match__score[data-v-ca9d0d25],\n.match__score--input[data-v-ca9d0d25] {\n  display: none;\n  color: limegreen;\n  font-size: 40px;\n  font-weight: 100;\n  text-align: center;\n  width: 100px;\n}\n.match__score[data-v-ca9d0d25]:focus,\n  .match__score--input[data-v-ca9d0d25]:focus {\n    outline: none;\n}\n@keyframes move-data-v-ca9d0d25 {\nfrom {\n    transform: translateY(-200%);\n}\nto {\n    transform: translateY(200%);\n}\n}\n\n.knockout-match__club[data-v-15b41224] {\n  background-color: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  height: 30px;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n}\n.knockout-match__score[data-v-15b41224] {\n  margin-left: 5px;\n}\n.knockout-match__penalty-score[data-v-15b41224] {\n  font-size: 13px;\n  color: lightgrey;\n  margin-left: 5px;\n}");
});
return ___scope___.entry = "main.js";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fuse-heresy-default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

module.exports = function(input) {
    return ['function', 'object', 'array']
        .indexOf(typeof input) > -1 && input.default === undefined ? 
             Object.isFrozen(input) ? input.default = input : Object.defineProperty(input, "default", {value : input, enumerable : false}) : void 0;
}
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = FuseBox.import('vue-hot-reload-api');
          var Vue = FuseBox.import('vue');

          api.install(Vue);

          FuseBox.addPlugin({
            hmrUpdate: function (data) {
              var componentWildcardPath = '~/' + data.path.substr(0, data.path.lastIndexOf('/') + 1) + '*.vue';
              var isComponentStyling = (data.type === "css" && !!FuseBox.import(componentWildcardPath));

              if (data.type === "js" && /.vue$/.test(data.path) || isComponentStyling) {
                var fusePath = '~/' + data.path;

                FuseBox.flush();

                FuseBox.flush(function (file) {
                  return file === data.path;
                });

                FuseBox.dynamic(data.path, data.content);

                if (!isComponentStyling) {
                  var component = FuseBox.import(fusePath).default;
                  api.reload(component._vueModuleId||component.options._vueModuleId, component);
                }

                return true;
              }
            }
          });
        }
        
FuseBox.import("fusebox-hot-reload").connect(4545, "", false)
FuseBox.target = "universal"

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))
//# sourceMappingURL=app.js.map