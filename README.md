* Install node js version 22
* Open terminal and `cd` into this directory
* Install dependencies with `npm install`
* Follow this video until 4:37 to get Google Credentials: https://www.youtube.com/watch?v=PFJNJQCU_lo
* Put the downloaded file in this directory and copy the filename
* Copy the contents of `.env.template.js` into a new file called `.env.js`
* modify contents of file `.env.js`
  * fill in the spreadsheet id: In the url `https://docs.google.com/spreadsheets/d/1Gh8Cb9I5haoKT3ha6sdhBhdvHyQXsDwzZ8BFUl2GqOEU/edit#gid=0`, the id is `1Gh8Cb9I5haoKT3ha6sdhBhdvHyQXsDwzZ8BFUl2GqOEU`
  * enter the copied filename from above to the field `google_service_account_auth_filename`
  * enter your tournament id in the field `tournament_id`
  * adjust `sheet_name`, `raw_data_start_row` if needed
* In your Google Sheets file, enter all game_ids in the column specified under `spreadsheet.columns.read.game_ids` (default: `A`)
* execute script with `node index.js`

A standard game fetched from the API has the following structure:

```
{
  "id": "P-937-938-098",
  "scope": "open",
  "timestamp": 1677927600,
  "pitch": "Pink",
  "group": "Group 1",
  "specification": "6",
  "cancelled": false,
  "cancelled_reason": null,
  "suspended": false,
  "suspended_reason": null,
  "comment_general": null,
  "replacements_resolved": false,
  "alive_timestamp": 1677930312,
  "game_over": true,
  "winner": "b",
  "in_overtime": false,
  "overtime_setscore": null,
  "in_snitch_floor": false,
  "in_seeker_floor": false,
  "forfeit": null,
  "concede": null,
  "switched": false,
  "locked": false,
  "gametime": {
    "last_stop": 1651233,
    "last_start": null,
    "running": false
  },
  "score": {
    "a": {
      "quaffel_points": {
        "regular": 70,
        "overtime": 0,
        "concede": 0
      },
      "snitch_caught": false,
      "snitch_points": 0,
      "total": 70
    },
    "b": {
      "quaffel_points": {
        "regular": 120,
        "overtime": 0,
        "concede": 0
      },
      "snitch_caught": true,
      "snitch_points": 30,
      "total": 150
    }
  },
  "tournament": {
    "id": 165,
    "rulebook": "2022",
    "name": "March Mayhem 2023",
    "name_short": "March Mayhem 2023",
    "logo": null,
    "timezone": "Europe/London",
    "date": {
      "start": "2023-03-03",
      "end": "2023-03-04"
    },
    "active": false,
    "published": false,
    "snitch_points": 30,
    "game_time_cap": null
  },
  "team": {
    "a": {
      "id": 1052,
      "name": "Outstanding Orange Wrecking Crew\t",
      "name_short": "Wreckers",
      "logo": "custom_logo/logo_000165_00001052.png",
      "jersey": {
        "id": 44,
        "resource": "jersey_ff9800.svg",
        "primary_color": "#FF9800",
        "secondary_color": "#FF9800",
        "textcolor": "#000000",
        "custom": false
      },
      "players": []
    },
    "b": {
      "id": 1053,
      "name": "South Coast Sharks\t\t",
      "name_short": "Sharks",
      "logo": "custom_logo/logo_000165_00001053.png",
      "jersey": {
        "id": 2,
        "resource": "jersey_00bcd4.svg",
        "primary_color": "#00BCD4",
        "secondary_color": "#00BCD4",
        "textcolor": "#000000",
        "custom": false
      },
      "players": []
    }
  },
  "events": [
    {
      "id": 679652,
      "id_code": "ZeQxP0cxkg",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 182448,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679653,
      "id_code": "30ldkdozMg",
      "name": "penalty_yellow",
      "increment": 0,
      "period": "regular",
      "team": "a",
      "gametime": 306040,
      "player": {
        "number": 22,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679654,
      "id_code": "8VzDy4GytQ",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 404846,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679655,
      "id_code": "ElxLf9aKhL",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 436951,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679656,
      "id_code": "TAInv5V8yH",
      "name": "penalty_yellow",
      "increment": 1,
      "period": "regular",
      "team": "a",
      "gametime": 611180,
      "player": {
        "number": 9,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679657,
      "id_code": "LkWDM1osnB",
      "name": "penalty_yellow",
      "increment": 2,
      "period": "regular",
      "team": "b",
      "gametime": 633901,
      "player": {
        "number": 37,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679658,
      "id_code": "L357BPJCun",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 736328,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679659,
      "id_code": "6wGJc0ykcj",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 789922,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679660,
      "id_code": "ciZXpOKIJW",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 915180,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679661,
      "id_code": "Xwua0AdXcL",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 962292,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679662,
      "id_code": "hG6XEO6AOJ",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 985395,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679663,
      "id_code": "AnK6LIE9uv",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1009792,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679664,
      "id_code": "hblobREeOs",
      "name": "timeout",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 1029099,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679665,
      "id_code": "4XKsEN3yXb",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1105497,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679666,
      "id_code": "EB3beKUL4A",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 1131820,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679667,
      "id_code": "UlCYz7RjBZ",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1236712,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679668,
      "id_code": "9sm89DSSjA",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1271739,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679669,
      "id_code": "Tj40gCm8DS",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 1305157,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679670,
      "id_code": "X8ttfSAHiZ",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1333220,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679671,
      "id_code": "ZyzrDJmoZD",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1373855,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679672,
      "id_code": "CBCFUX2SyN",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1408442,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679673,
      "id_code": "niybub8iyY",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1455098,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679674,
      "id_code": "gbo5rscITK",
      "name": "score",
      "increment": null,
      "period": "regular",
      "team": "a",
      "gametime": 1557051,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679675,
      "id_code": "36CWthf7OT",
      "name": "penalty_yellow",
      "increment": 3,
      "period": "regular",
      "team": "a",
      "gametime": 1640304,
      "player": {
        "number": 4,
        "name": null
      },
      "reason": null
    },
    {
      "id": 679676,
      "id_code": "0S5t3PlQfv",
      "name": "snitch",
      "increment": null,
      "period": "regular",
      "team": "b",
      "gametime": 1651233,
      "player": {
        "number": null,
        "name": null
      },
      "reason": null
    }
  ],
  "officials": [
    {
      "id": 4010,
      "person": {
        "id": 1744,
        "name": {
          "public": "Matt Bateman"
        }
      },
      "job": {
        "id": 317,
        "name": "Head Referee",
        "name_short": "HR",
        "amount": 1,
        "priority": 7,
        "compensation": 5
      }
    },
    {
      "id": 4011,
      "person": {
        "id": 1770,
        "name": {
          "public": "Amber Connerton"
        }
      },
      "job": {
        "id": 318,
        "name": "Assistant Referee",
        "name_short": "AR",
        "amount": 3,
        "priority": 6,
        "compensation": 2.5
      }
    },
    {
      "id": 4012,
      "person": {
        "id": 1757,
        "name": {
          "public": "Matthew Smith"
        }
      },
      "job": {
        "id": 318,
        "name": "Assistant Referee",
        "name_short": "AR",
        "amount": 3,
        "priority": 6,
        "compensation": 2.5
      }
    },
    {
      "id": 4013,
      "person": {
        "id": 1760,
        "name": {
          "public": "Mette Sundal"
        }
      },
      "job": {
        "id": 318,
        "name": "Assistant Referee",
        "name_short": "AR",
        "amount": 3,
        "priority": 6,
        "compensation": 2.5
      }
    },
    {
      "id": 4014,
      "person": {
        "id": 1775,
        "name": {
          "public": "Mikey Orridge"
        }
      },
      "job": {
        "id": 319,
        "name": "Snitch Referee",
        "name_short": "SR",
        "amount": 1,
        "priority": 5,
        "compensation": 2.5
      }
    },
    {
      "id": 4015,
      "person": {
        "id": 1783,
        "name": {
          "public": "Reuben T Thompson"
        }
      },
      "job": {
        "id": 320,
        "name": "Snitch Runner",
        "name_short": "Snitch",
        "amount": 1,
        "priority": 4,
        "compensation": 2.5
      }
    },
    {
      "id": 4017,
      "person": {
        "id": 1746,
        "name": {
          "public": "Charlotte Howcroft "
        }
      },
      "job": {
        "id": 322,
        "name": "First Aid",
        "name_short": "FA",
        "amount": 1,
        "priority": 3,
        "compensation": 0
      }
    },
    {
      "id": 4016,
      "person": {
        "id": 1753,
        "name": {
          "public": "Dizzy Dolphins"
        }
      },
      "job": {
        "id": 321,
        "name": "Extras (goal, time, score)",
        "name_short": "Extras",
        "amount": 1,
        "priority": 3,
        "compensation": 0
      }
    },
    {
      "id": 4018,
      "person": {
        "id": 1744,
        "name": {
          "public": "Matt Bateman"
        }
      },
      "job": {
        "id": 323,
        "name": "Pitch Manager",
        "name_short": "PM",
        "amount": 1,
        "priority": 3,
        "compensation": 0
      }
    }
  ],
  "replacements": []
}
```