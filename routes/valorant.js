const express = require('express');
const router = express.Router();

const userInfoReq = require('./blobs/user-info')
const activeShardsReq = require('./blobs/active-shards')
const matchHistory = require('./blobs/match-history')
const matchExample = require('./blobs/match-example')

/* GET users listing. */
router.get('/connect-user', function(req, res, next) {
  const {name, tag} = req.query
  console.log('QSParams:    ', {name, tag})

  // Request userinfo based on username
  // https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{name}}/{tag}?api_key=

  const {puuid} = userInfoReq

  console.log('puuid:       ', puuid)

  // Use puuid to fetch active shards
  // https://americas.api.riotgames.com/riot/account/v1/active-shards/by-game/val/by-puuid/{puuid}?api_key=
  const activeShards = [activeShardsReq.activeShard]

  console.log('activeShards:', activeShards)

  const response = activeShards.map(shard => {
    // Fetch game history on first connect
    // https://{shard}.api.riotgames.com/val/match/v1/matchlists/by-puuid/{puuid?api_key=
    
    const previousMatches = matchHistory.history.map(data => {
      const ts = new Date(data.gameStartTime)
      console.log('Game Found:  ', shard, ts.toISOString(), data.matchId)
      return data
    })

    // Fetch match data for each previous game known
    // just pretend to look at one match ;)
    const refinedMatchHistory = [previousMatches[0]].map(({matchId}) => {
      // Fetch match details
      // https://{shard}.api.riotgames.com/val/match/v1/matches/{matchId}?api_key=

      const startTime = new Date(matchExample.matchInfo.gameStartMillis)
      const player = matchExample.players.find(({puuid: matchPuuid}) => matchPuuid === puuid)
      const playerTeam = player.teamId
      const winningTeam = matchExample.teams.find(team => team.won).teamId
      const playerDidWin = playerTeam === winningTeam

      const byRound = matchExample.roundResults.map(round=> {
        // console.log(matchExample.roundResults)
        const playerStatsInRound = round.playerStats.find(({puuid: matchPuuid}) => matchPuuid === puuid)

        return {
          roundNum: round.roundNum,
          kills: playerStatsInRound.kills.length,
          damage: playerStatsInRound.damage.reduce((acc, val) => acc + val.damage, 0),
          headshots: playerStatsInRound.damage.reduce((acc, val) => acc + val.headhots, 0),
          bodyshots: playerStatsInRound.damage.reduce((acc, val) => acc + val.bodyshots, 0),
          legshots: playerStatsInRound.damage.reduce((acc, val) => acc + val.legshots, 0),
        }
      })
      return {
        matchId,
        startTime: startTime.toISOString(),
        isRanked: matchExample.matchInfo.isRanked,
        isCompleted: matchExample.matchInfo.isCompleted,
        player: player.stats,
        teams: matchExample.teams,
        playerTeam,
        winningTeam,
        playerDidWin,
        byRound
      }
    })

    return refinedMatchHistory
    console.log('processed')
  })

  console.log(response)
  
  res.send(response);
});

module.exports = router;
