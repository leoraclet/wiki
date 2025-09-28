find . -type f -name "*.md" | while read -r file; do
    # Extract the relative path (without the leading './')
    relative_path="${file#./}"

    # Remove the '.md' extension from the path
    relative_path_without_ext="${relative_path%.md}"
    relative_path_without_ext="${relative_path_without_ext%/index}"

    # Convert to lowercase and replace spaces/underscores with hyphens
    kebab_path=$(echo "$relative_path_without_ext" | tr '[:upper:]' '[:lower:]' | sed 's/[ _]/-/g')

    # Replace the permalink in the frontmatter
    sed -i -E "s|permalink: .*|permalink: /fr/wiki/$kebab_path/|" "$file"
done