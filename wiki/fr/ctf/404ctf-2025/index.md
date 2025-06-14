---
outline: deep
---

# 📖 404CTF 2025

Vous trouverez ici mes résultats lors de ce CTF, ainsi que des Writeups (si je prend le temps d'en faire 😅) pour les différents challenges que j'ai pu terminer durant le CTF.
Cette 4ème édition du **404CTF** aura duré du **11/05/2025** au **01/06/2025** (soit 21 jours).

::: warning ⚠️ WARNING
_Les solutions proposées ne sont pas **uniques** et reste **discutables** pour certains challenges._
:::

:::tip 💡 TIP
Si besoin, tous les fichiers ainsi que tous les détails des challenges en questions peuvent être trouvés sur le Repo Officiel à l'adresse ci-dessous:

[https://github.com/HackademINT/404CTF-2025](https://github.com/HackademINT/404CTF-2025/tree/main)

**Un grand MERCI à eux !**
:::

## Résultats

::: info ℹ️ INFO
Malheuresement, ayant été pris par la participation à la Coupe de France de Robotique avec l'association de mon école, pas de "tryhard" cette année, mais
j'ai quand même pu y dédier plusieurs soirées pour sécuriser un **Top 100** également.
:::

**Chiffres clés :**

- Position finale : **67ème**
- Nombre de points total : **5428** points
- Nombre de challenges résolus : **38** / 83
- Nombre de participant(e)s total (100 pts minimum) : 2893

## Challenges

**Légende des difficultées en fonction des symboles :**

Ci-dessous une légende des symboles associés aux difficultées assignés initialement à chaque challenge du CTF, ainsi que les points de base.

<el-table :data="legend" border style="width: 70%">
    <el-table-column prop="symbol" label="Symbol" align="center" align-header="center"/>
    <el-table-column prop="diff" label="Difficulté" align="center" align-header="center" class-name="bold"/>
    <el-table-column prop="points" label="Points de Base" align="center" align-header="center" />
</el-table>

**Liste des challenges de l'édition 2025 :**

Voici la liste de tous les challenges de cette éditions 2025 classés par catégorie et par nombre de points rapporté à la fin de l'événement.

::: info ℹ️ INFO
Pour les solutions, 🔗 indique qu'elle est disponible, ⏳ qu'elle est en cours de rédaction ou prévu et enfin 😢 qu'elle n'est pas prévu car je n'ai pas résolu le challenge.
:::

<div v-for="(category, index) in data" :key="index">
    <h2> {{ category.name }} </h2>
    <br>
    <el-table :data="category.challenges" border >
    <el-table-column prop="status" label="Status" align="center" align-header="center"/>
    <el-table-column prop="name" label="Name" width="400%" align-header="center" />
    <el-table-column prop="points" label="Points" align="center" align-header="center" />
    <el-table-column prop="solution" label="Solution" align="center" align-header="center" />
    </el-table>
</div>

<style>
.bold {
    font-weight: bold;
}
</style>

<script lang="ts" setup>

const legend = [
    {
        "symbol": "😇",
        "diff": "Intro",
        "points": "100"
    },
    {
        "symbol": '🙂',
        "diff": "Easy",
        "points": "100"
    },
    {
        "symbol": '😑',
        "diff": "Medium",
        "points": "200"
    },
    {
        "symbol": '😡',
        "diff": "Hard",
        "points": "500"
    },
    {
        "symbol": '😈',
        "diff": "Insane",
        "points": "500"
    },
]

const data = [
    {
        "name": "Algorithmique Quantique (2/3)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Machinerie quantique",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Grover (1/2)",
                "points": 211,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Grover (2/2)",
                "points": 488,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Analyse Forensique (3/7)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - USB 51",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Tape ton MDP",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - Dockerflag",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Forensic et Mat [1/2]",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Forensic et Mat [2/2]",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude07] - Apprenti Carver [1/2]",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Toortik Triflexation [1/2]",
                "points": 356,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Cryptanalyse (8/14)",
        "challenges": [
            {
                "name": "[\ud83d\ude11] - Saturn Cipher",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Entretien galactique",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Message lointain",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - R1R2",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Plan\u00e8tes anormales",
                "points": 211,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Spacemark",
                "points": 244,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - You spin me round",
                "points": 299,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - Lunette cosmico galactique",
                "points": 404,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - Entretien Galactique 2",
                "points": 471,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - D\u00e9rive dans l'espace",
                "points": 477,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Lunette cosmico galactique revanche",
                "points": 494,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - Courbe de Lancement",
                "points": 495,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Jupiter Cipher",
                "points": 496,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - More Space",
                "points": 499,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Divers (3/6)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Bienvenue",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Pix2Num",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Space Traveller",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude07] - Politique de confidentialit\u00e9",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - Satellisation",
                "points": 490,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - \u00c9toile binaire [2/2]",
                "points": 500,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Exploitation de Binaires (1/12)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Gorfou en danger [1/3]",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Gorfou en danger [2/3]",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - Gorfou en danger [3/3]",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - Spaaaaaaace",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - KerberINT Space Program",
                "points": 205,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - 22 bytes pour sauver l'univers",
                "points": 366,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - Bounty Machine",
                "points": 473,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - Space Odyssey",
                "points": 489,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Solaris",
                "points": 491,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - Kalaxy",
                "points": 495,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Cosmic-Base",
                "points": 495,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - Bokit",
                "points": 497,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Intelligence Artificielle (1/4)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Gorfoustral (1/3)",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Gorfoustral (2/3)",
                "points": 132,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - Gorfoustral (3/3)",
                "points": 269,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Du tatouage",
                "points": 467,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "Renseignement en Sources Ouvertes (7/11)",
        "challenges": [
            {
                "name": "[\ud83d\ude11] - Un satellite qui vaut de l'or",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - Earth Attack (1/2)",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Un peu de vacances",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Une mission inconnue",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - L'addition est sal\u00e9e",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Earth Attack (0/2)",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - La ville en rose",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - La t\u00eate dans les \u00e9toiles",
                "points": 347,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude08] - Earth Attack (2/2)",
                "points": 400,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - En eaux sombres",
                "points": 464,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude08] - DPOsint",
                "points": 498,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "R\u00e9aliste (0/6)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - The LDAP Chronicles",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude07] - Houston, we have a problem",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude07] -  Named Resolve",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - The AD Guardians",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - The GPO Mission",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude42] - Ghost Membership",
                "points": 100,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "R\u00e9tro-Ing\u00e9nierie (4/7)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Cbizarre [1/2]",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Cbizarre [2/2]",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Reversconstrictor",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - 3x3cut3_m3",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Inscription",
                "points": 304,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude21] - RFC 9452 bis: IP over Rockets with Quality of Service",
                "points": 488,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - \u00c9toile binaire [1/2] ",
                "points": 489,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    },
    {
        "name": "S\u00e9curit\u00e9 Mat\u00e9rielle (6/7)",
        "challenges": [
            {
                "name": "[\ud83d\ude42] - Space Radio",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - R16D4",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Comment est votre temp\u00e9rature ?",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Trop d'IQ",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude11] - Code Radiospatial n\u00b01",
                "points": 293,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - Unidentified Serial Bus [1/2]",
                "points": 356,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - Unidentified Serial Bus [2/2]",
                "points": 356,
                "status": "\u2705",
                "solution": "\u23f3"
            }
        ]
    },
    {
        "name": "S\u00e9curit\u00e9 Web (3/5)",
        "challenges": [
            {
                "name": "[\ud83d\ude07] - Cheese Chess",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude42] - Fire Server",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude07] - Rainbow Rocket",
                "points": 100,
                "status": "\u2705",
                "solution": "\u23f3"
            },
            {
                "name": "[\ud83d\ude21] - Space Fleet Command",
                "points": 473,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            },
            {
                "name": "[\ud83d\ude11] - Sideral Noise",
                "points": 499,
                "status": "\u274c",
                "solution": "No \ud83d\ude22"
            }
        ]
    }
]
</script>
