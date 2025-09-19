---
outline: deep
---

# 📖 404CTF 2025

Here you'll find my results from this CTF, along with writeups (if I find time to make them 😅) for the various challenges I completed during the event.
This 4th edition of **404CTF** ran from **May 11, 2025** to **June 1, 2025** (21 days total).

::: warning ⚠️ WARNING
_The proposed solutions are not **unique** and remain **debatable** for some challenges._
:::

::: tip 💡 TIP
If needed, all files and challenge details can be found in the official repository at the address below:
[https://github.com/HackademINT/404CTF-2025](https://github.com/HackademINT/404CTF-2025/tree/main)

**A big THANK YOU to them!**
:::

## Results

::: info ℹ️ INFO
Unfortunately, being busy with the French Robotics Cup with my school's association, no "hardcore" CTF time this year, but I still managed to dedicate several evenings to secure a **Top 100** finish again this year.
:::

**Key Figures:**

- Final Position: **67th**
- Total Points: **5428** points
- Challenges Solved: **38** / 83
- Total Participants (100+ points): 2893

## Challenges

**Difficulty Legend by Symbol:**

Below is a legend of symbols associated with the difficulties initially assigned to each CTF challenge, along with base points.

<el-table :data="legend" border style="width: 70%">
    <el-table-column prop="symbol" label="Symbol" align="center" align-header="center" />
    <el-table-column prop="diff" label="Difficulty" align="center" align-header="center" class-name="bold" />
    <el-table-column prop="points" label="Base Points" align="center" align-header="center" />
</el-table>

**List of 2025 Edition Challenges:**

Here is the list of all challenges from the 2025 edition, categorized and sorted by points earned at the end of the event.

::: info ℹ️ INFO
For solutions:

- 🔗 indicates it's available
- ⏳ indicates it's being written or planned
- 😢 indicates no writeup (challenge not solved)
:::

### Quantum Algorithms (2/3)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Quantum Machinery', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Grover (1/2)', points: 211, solution: '⏳' },
  { status: '❌', name: '[😑] - Grover (2/2)', points: 488, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Digital Forensics (3/7)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - USB 51', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Enter Your Password', points: 100, solution: '😢' },
  { status: '✅', name: '[🙂] - Dockerflag', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Forensic and Math [1/2]', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Forensic and Math [2/2]', points: 100, solution: '😢' },
  { status: '❌', name: '[😇] - Apprentice Carver [1/2]', points: 100, solution: '😢' },
  { status: '❌', name: '[😡] - Toortik Triflexation [1/2]', points: 356, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Cryptanalysis (8/14)

<br>
<el-table :data="[
  { status: '✅', name: '[😑] - Saturn Cipher', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Galactic Interview', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Distant Message', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - R1R2', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Abnormal Planets', points: 211, solution: '⏳' },
  { status: '✅', name: '[😑] - Spacemark', points: 244, solution: '⏳' },
  { status: '✅', name: '[😑] - You Spin Me Round', points: 299, solution: '⏳' },
  { status: '✅', name: '[😡] - Cosmic Galactic Glasses', points: 404, solution: '⏳' },
  { status: '❌', name: '[😡] - Galactic Interview 2', points: 471, solution: '😢' },
  { status: '❌', name: '[😑] - Space Drift', points: 477, solution: '😢' },
  { status: '❌', name: '[😡] - Cosmic Glasses Revenge', points: 494, solution: '😢' },
  { status: '❌', name: '[😈] - Launch Curve', points: 495, solution: '😢' },
  { status: '❌', name: '[😡] - Jupiter Cipher', points: 496, solution: '😢' },
  { status: '❌', name: '[😈] - More Space', points: 499, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Miscellaneous (3/6)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Welcome', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Pix2Num', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Space Traveller', points: 100, solution: '😢' },
  { status: '✅', name: '[😇] - Privacy Policy', points: 100, solution: '⏳' },
  { status: '❌', name: '[😡] - Satellization', points: 490, solution: '😢' },
  { status: '❌', name: '[😈] - Binary Star [2/2]', points: 500, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Binary Exploitation (1/12)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Endangered Gorfou [1/3]', points: 100, solution: '⏳' },
  { status: '❌', name: '[😇] - Endangered Gorfou [2/3]', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - Endangered Gorfou [3/3]', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - Spaaaaaaace', points: 100, solution: '😢' },
  { status: '❌', name: '[🙂] - KerberINT Space Program', points: 205, solution: '😢' },
  { status: '❌', name: '[😑] - 22 Bytes to Save the Universe', points: 366, solution: '😢' },
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

### Artificial Intelligence (1/4)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Gorfoustral (1/3)', points: 100, solution: '⏳' },
  { status: '❌', name: '[🙂] - Gorfoustral (2/3)', points: 132, solution: '😢' },
  { status: '❌', name: '[😑] - Gorfoustral (3/3)', points: 269, solution: '😢' },
  { status: '❌', name: '[😡] - Tattoo', points: 467, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### OSINT (7/11)

<br>
<el-table :data="[
  { status: '❌', name: '[😑] - Golden Satellite', points: 100, solution: '😢' },
  { status: '✅', name: '[😡] - Earth Attack (1/2)', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Vacation Time', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Unknown Mission', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Salty Bill', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Earth Attack (0/2)', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - Pink City', points: 100, solution: '⏳' },
  { status: '✅', name: '[😡] - Head in the Stars', points: 347, solution: '⏳' },
  { status: '❌', name: '[😈] - Earth Attack (2/2)', points: 400, solution: '😢' },
  { status: '❌', name: '[😡] - Dark Waters', points: 464, solution: '😢' },
  { status: '❌', name: '[😈] - DPOsint', points: 498, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Realistic (0/6)

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

### Reverse Engineering (4/7)

<br>
<el-table :data="[
  { status: '✅', name: '[😇] - Cbizarre [1/2]', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Cbizarre [2/2]', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - Reversconstrictor', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - 3x3cut3_m3', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Registration', points: 304, solution: '😢' },
  { status: '❌', name: '[😡] - RFC 9452 bis: IP over Rockets with Quality of Service', points: 488, solution: '😢' },
  { status: '❌', name: '[😑] - Binary Star [1/2]', points: 489, solution: '😢' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Hardware Security (6/7)

<br>
<el-table :data="[
  { status: '✅', name: '[🙂] - Space Radio', points: 100, solution: '⏳' },
  { status: '✅', name: '[🙂] - R16D4', points: 100, solution: '⏳' },
  { status: '✅', name: '[😑] - What\'s Your Temperature?', points: 100, solution: '⏳' },
  { status: '✅', name: '[😇] - Too Much IQ', points: 100, solution: '⏳' },
  { status: '❌', name: '[😑] - Spatial Radio Code #1', points: 293, solution: '😢' },
  { status: '✅', name: '[😑] - Unidentified Serial Bus [1/2]', points: 356, solution: '⏳' },
  { status: '✅', name: '[😡] - Unidentified Serial Bus [2/2]', points: 356, solution: '⏳' }
]" border>
  <el-table-column prop="status" label="Status" align="center" />
  <el-table-column prop="name" label="Name" width="400%" />
  <el-table-column prop="points" label="Points" align="center" />
  <el-table-column prop="solution" label="Solution" align="center" />
</el-table>

---

### Web Security (3/5)

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
