import os

root_dir = r"c:\Users\dell\Desktop\project anti\project anti"

# 1. Rename files
rename_tasks = [
    (os.path.join(root_dir, "index.html"), os.path.join(root_dir, "index.html")),
    (os.path.join(root_dir, "admin", "index.html"), os.path.join(root_dir, "admin", "index.html")),
    (os.path.join(root_dir, "admin", "serv_spec.html"), os.path.join(root_dir, "admin", "serv_spec.html"))
]

for old_path, new_path in rename_tasks:
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed: {old_path} -> {new_path}")
    else:
        print(f"Not found: {old_path}")

# 2. Replace references inside ALL files
def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return # Skip binary or unreadable files

    if "serv_spec.html" in content or "index.html" in content:
        new_content = content.replace("serv_spec.html", "serv_spec.html").replace("index.html", "index.html")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated references in: {filepath}")

for current_root, dirs, files in os.walk(root_dir):
    for filename in files:
        if filename.endswith(".html") or filename.endswith(".js") or filename.endswith(".css") or filename.endswith(".py"):
            filepath = os.path.join(current_root, filename)
            replace_in_file(filepath)
            
print("Done!")
