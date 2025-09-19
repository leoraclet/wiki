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
j'ai quand même pu y dédier plusieurs soirées pour sécuriser un **Top 100** cette année également.
:::

**Chiffres clés :**

- Position finale : **67ème**
- Nombre de points total : **5428** points
- Nombre de challenges résolus : **38** / 83
- Nombre de participant(e)s total (100 pts minimum) : 2893

## Challenges

**Légende des difficultées en fonction des symboles :**

Ci-dessous une légende des symboles associés aux difficultées assignés initialement à chaque challenge du CTF, ainsi que les points de base.

<br>
<el-table :data="legend" border style="width: 70%">
    <el-table-column prop="symbol" label="Symbol" align="center" align-header="center"/>
    <el-table-column prop="diff" label="Difficulté" align="center" align-header="center" class-name="bold"/>
    <el-table-column prop="points" label="Points de Base" align="center" align-header="center" />
</el-table>

**Liste des challenges de l'édition 2025 :**

Voici la liste de tous les challenges de cette éditions 2025 classés par catégorie et par nombre de points rapporté à la fin de l'événement.

::: info ℹ️ INFO
Pour les solutions:

- 🔗 indique qu'elle est disponible
- ⏳ indique qu'elle est en cours de rédaction ou prévu
- 😢 indique qu'elle n'est pas prévu car je n'ai pas pu résoudre le challenge.
:::

### Algorithmique Quantique (2/3)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Machinerie quantique', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Grover (1/2)', points: 211, solution: '⏳' },
  { status: '❌', name: '[😑] - Grover (2/2)', points: 488, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Analyse Forensique (3/7)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - USB 51', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Tape ton MDP', points: 100, solution: '😢' },
  { status: '✅', name: '[🙂] - Dockerflag', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Forensic et Mat [1/2]', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Forensic et Mat [2/2]', points: 100, solution: '😢' },
  { status: '❌', name: '[😇] - Apprenti Carver [1/2]', points: 100, solution: '😢' },
  { status: '❌', name: '[😡] - Toortik Triflexation [1/2]', points: 356, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Cryptanalyse (8/14)

<br>
<el-table :data="[
  { status: '✅', name: '[😑] - Saturn Cipher', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Entretien galactique', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Message lointain', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - R1R2', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Planètes anormales', points: 211, solution: '⏳' },
  { status: '✅', name: '[😑] - Spacemark', points: 244, solution: '⏳' },
  { status: '✅', name: '[😑] - You spin me round', points: 299, solution: '⏳' },
  { status: '✅', name: '[😡] - Lunette cosmico galactique', points: 404, solution: '⏳' },
  { status: '❌', name: '[😡] - Entretien Galactique 2', points: 471, solution: '😢' },
  { status: '❌', name: '[😑] - Dérive dans l\'espace', points: 477, solution: '😢' },
  { status: '❌', name: '[😡] - Lunette cosmico galactique revanche', points: 494, solution: '😢' },
  { status: '❌', name: '[😈] - Courbe de Lancement', points: 495, solution: '😢' },
  { status: '❌', name: '[😡] - Jupiter Cipher', points: 496, solution: '😢' },
  { status: '❌', name: '[😈] - More Space', points: 499, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Divers (3/6)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Bienvenue', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Pix2Num', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Space Traveller', points: 100, solution: '😢' },
  { status: '✅', name: '[😇] - Politique de confidentialité', points: 100, solution: '⏳' },
  { status: '❌', name: '[😡] - Satellisation', points: 490, solution: '😢' },
  { status: '❌', name: '[😈] - Étoile binaire [2/2]', points: 500, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Exploitation de Binaires (1/12)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Gorfou en danger [1/3]', points: 100, solution: '⏳' },
  { status: '❌', name: '[😇] - Gorfou en danger [2/3]', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - Gorfou en danger [3/3]', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - Spaaaaaaace', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - KerberINT Space Program', points: 205, solution: '😢' },
  { status: '❌', name: '[😑] - 22 bytes pour sauver l\'univers', points: 366, solution: '😢' },
  { status: '❌', name: '[😑] - Bounty Machine', points: 473, solution: '😢' },
  { status: '❌', name: '[😑] - Space Odyssey', points: 489, solution: '😢' },
  { status: '❌', name: '[😡] - Solaris', points: 491, solution: '😢' },
  { status: '❌', name: '[😈] - Kalaxy', points: 495, solution: '😢' },
  { status: '❌', name: '[😡] - Cosmic-Base', points: 495, solution: '😢' },
  { status: '❌', name: '[😈] - Bokit', points: 497, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Intelligence Artificielle (1/4)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Gorfoustral (1/3)', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Gorfoustral (2/3)', points: 132, solution: '😢' },
  { status: '❌', name: '[😑] - Gorfoustral (3/3)', points: 269, solution: '😢' },
  { status: '❌', name: '[😡] - Du tatouage', points: 467, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Renseignement en Sources Ouvertes (7/11)

<br>
<el-table :data="[
  { status: '❌', name: '[😑] - Un satellite qui vaut de l\'or', points: 100, solution: '😢' },
  { status: '✅', name: '[😡] - Earth Attack (1/2)', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Un peu de vacances', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Une mission inconnue', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - L\'addition est salée', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Earth Attack (0/2)', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - La ville en rose', points: 100, solution: '⏳' },
  { status: '✅', name: '[😡] - La tête dans les étoiles', points: 347, solution: '⏳' },
  { status: '❌', name: '[😈] - Earth Attack (2/2)', points: 400, solution: '😢' },
  { status: '❌', name: '[😡] - En eaux sombres', points: 464, solution: '😢' },
  { status: '❌', name: '[😈] - DPOsint', points: 498, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Réaliste (0/6)

<br>
<el-table :data="[
  { status: '❌', name: '[😇] - The LDAP Chronicles', points: 100, solution: '😢' },
  { status: '❌', name: '[😇] - Houston, we have a problem', points: 100, solution: '😢' },
  { status: '❌', name: '[😇] - Named Resolve', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - The AD Guardians', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - The GPO Mission', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - Ghost Membership', points: 100, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Rétro-Ingénierie (4/7)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Cbizarre [1/2]', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Cbizarre [2/2]', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Reversconstrictor', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - 3x3cut3_m3', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Inscription', points: 304, solution: '😢' },
  { status: '❌', name: '[😡] - RFC 9452 bis: IP over Rockets with Quality of Service', points: 488, solution: '😢' },
  { status: '❌', name: '[😑] - Étoile binaire [1/2]', points: 489, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Sécurité Matérielle (6/7)

<br>
<el-table :data="[
  { status: '✅', name: '[🙂] - Space Radio', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - R16D4', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Comment est votre température ?', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Trop d\'IQ', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Code Radiospatial n°1', points: 293, solution: '😢' },
  { status: '✅', name: '[😑] - Unidentified Serial Bus [1/2]', points: 356, solution: '⏳' },
  { status: '✅', name: '[😡] - Unidentified Serial Bus [2/2]', points: 356, solution: '⏳' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Sécurité Web (3/5)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Cheese Chess', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Fire Server', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Rainbow Rocket', points: 100, solution: '⏳' },
  { status: '❌', name: '[😡] - Space Fleet Command', points: 473, solution: '😢' },
  { status: '❌', name: '[😑] - Sideral Noise', points: 499, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

<script>
export default {
  data() {
    return {
      legend: [
        { symbol: "😇", diff: "Intro", points: "100" },
        { symbol: "🙂", diff: "Easy", points: "100" },
        { symbol: "😑", diff: "Medium", points: "200" },
        { symbol: "😡", diff: "Hard", points: "500" },
        { symbol: "😈", diff: "Insane", points: "500" }
      ]
    };
  }
};
</script>

<style>
.bold {
    font-weight: bold;
}
</style>
