import json

DIFFICULTY = {
    "intro": "😇",
    "easy": "🙂",
    "medium": "😑",
    "hard": "😡",
    "insane": "😈",
}

with open('challenges.json', 'r') as f:
    data = json.load(f)

output_data = {}
for e in data['data']:
    if e['category'] not in output_data:
        output_data[e['category']] = []

    output_data[e["category"]].append(
        {
            "name": f'[{DIFFICULTY[e["tags"][0]['value']]}] - {e["name"]}',
            "points": e["value"],
            "status": "✅" if e["solved_by_me"] else "❌",
            "solution": "⏳" if e["solved_by_me"] else "Nope 😢",
        }
    )

final_data = []

for category, challenges in output_data.items():
    final_data.append({
        "name": category + f" ({[1 if e['status'] == "✅" else None for e in challenges].count(1)}/{len(challenges)})",
        "challenges": sorted(challenges, key=lambda x: x['points']),
    })

with open('output.json', 'w') as f:
    json.dump(sorted(final_data, key=lambda x: x['name']), f, indent=4)


print(json.dumps(final_data, indent=4))
