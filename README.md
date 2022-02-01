# Example Valorant consumer application

## Usage

Spin up locally, first install `yarn` then run `yarn start`.

### Connect a user and fetch past data

The `/valorant/connect-user` route is used to connect a user to our system and fetch what match history is available to us.
Make a request to `localhost:7001/valorant/connect-user?user=ben&tag=1234`

Expected Response:

``` json
[
    {
        "shard": "na",
        "refinedMatchHistory": [
            {
                "matchId": "08b10c61-3e04-475a-878e-606c3615d2f3",
                "startTime": "2020-06-12T05:22:54.724Z",
                "isRanked": false,
                "isCompleted": true,
                "player": {
                    "score": 3980,
                    "roundsPlayed": 24,
                    "kills": 11,
                    "deaths": 18,
                    "assists": 6,
                    "playtimeMillis": 2466940,
                    "abilityCasts": {
                        "grenadeCasts": 3,
                        "ability1Casts": 4,
                        "ability2Casts": 23,
                        "ultimateCasts": 3
                    }
                },
                "teams": [
                    {
                        "teamId": "Blue",
                        "won": true,
                        "roundsPlayed": 24,
                        "roundsWon": 13
                    },
                    {
                        "teamId": "Red",
                        "won": false,
                        "roundsPlayed": 24,
                        "roundsWon": 11
                    }
                ],
                "playerTeam": "Blue",
                "winningTeam": "Blue",
                "playerDidWin": true,
                "byRound": [
                    {
                        "roundNum": 0,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 1,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 2,
                        "kills": 1,
                        "damage": 234,
                        "headshots": null,
                        "bodyshots": 2,
                        "legshots": 0
                    },
                    {
                        "roundNum": 3,
                        "kills": 0,
                        "damage": 26,
                        "headshots": null,
                        "bodyshots": 1,
                        "legshots": 0
                    },
                    {
                        "roundNum": 4,
                        "kills": 1,
                        "damage": 331,
                        "headshots": null,
                        "bodyshots": 5,
                        "legshots": 0
                    },
                    {
                        "roundNum": 5,
                        "kills": 1,
                        "damage": 324,
                        "headshots": null,
                        "bodyshots": 3,
                        "legshots": 2
                    },
                    {
                        "roundNum": 6,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 7,
                        "kills": 0,
                        "damage": 64,
                        "headshots": null,
                        "bodyshots": 1,
                        "legshots": 1
                    },
                    {
                        "roundNum": 8,
                        "kills": 1,
                        "damage": 203,
                        "headshots": null,
                        "bodyshots": 0,
                        "legshots": 3
                    },
                    {
                        "roundNum": 9,
                        "kills": 1,
                        "damage": 409,
                        "headshots": null,
                        "bodyshots": 7,
                        "legshots": 0
                    },
                    {
                        "roundNum": 10,
                        "kills": 1,
                        "damage": 160,
                        "headshots": null,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 11,
                        "kills": 2,
                        "damage": 428,
                        "headshots": null,
                        "bodyshots": 5,
                        "legshots": 1
                    },
                    {
                        "roundNum": 12,
                        "kills": 0,
                        "damage": 30,
                        "headshots": null,
                        "bodyshots": 1,
                        "legshots": 0
                    },
                    {
                        "roundNum": 13,
                        "kills": 1,
                        "damage": 78,
                        "headshots": null,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 14,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 15,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 16,
                        "kills": 0,
                        "damage": 0,
                        "headshots": 0,
                        "bodyshots": 0,
                        "legshots": 0
                    },
                    {
                        "roundNum": 17,
                        "kills": 0,
                        "damage": 80,
                        "headshots": null,
                        "bodyshots": 0,
                        "legshots": 0
                    }
                ]
            }
        ]
    }
]
```

### User submits to us fetching latest match history

The `/valorant/update-user` route is used to fetch that latest unknown match details

TBD...
