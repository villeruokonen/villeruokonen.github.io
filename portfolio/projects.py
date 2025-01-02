import json
import os

FILE_PATH = "src/projects.json"

def load_data():
    if not os.path.exists(FILE_PATH):
        return []
    
    with open(FILE_PATH, "r") as file:
        return json.load(file)

def save_data(data):
    with open(FILE_PATH, "w") as file:
        json.dump(data, file, indent=4)
    print ("Changes saved.")

def list_entries(data):
    if not data:
        print ("No entries.")
        return
    for entry in data:
        print(f"ID: {entry['id']}, Title: {[entry['title']]}")

def list_entry(id, data):
    if not data:
        print ("No entries.")
        return
    
    id = int(id)

    for entry in data:
        if (entry['id'] == id):
            print(f"ID: {entry['id']}, "
                  f"Title: {entry['title']}, "
                  f"Desc: {entry['description']}, "
                  f"Roles: {entry['roles']}, "
                  f"Tech: {entry['technologies']}")
            return
    print(f"No entry with id {id}.")

def add_entry(data):
    new_entry = {
        "id": max(entry["id"] for entry in data) + 1 if data else 0,
        "title": input("Enter title: "),
        "description": input("Enter description: "),
        "technologies": input("Enter technologies (comma-separated): ").split(","),
        "roles": input("Enter roles (comma-separated): ").split(","),
        "link": {
            "url": input("Enter URL: "),
            "text": input("Enter link text: ")
        }
    }
    data.append(new_entry)
    print("New entry added successfully.")

def edit_entry(data):
    try:
        entry_id = int(input("Enter the ID of the entry to edit: "))
        entry = next((item for item in data if item["id"] == entry_id), None)
        if not entry:
            print("Entry not found.")
            return

        print("Editing entry:")
        print(f"1. Title: {entry['title']}")
        print(f"2. Description: {entry['description']}")
        print(f"3. Technologies: {', '.join(entry['technologies'])}")
        print(f"4. Roles: {', '.join(entry['roles'])}")
        print(f"5. Link (URL): {entry['link']['url']}")
        print(f"6. Link (Text): {entry['link']['text']}")
        print("7. Cancel")

        choice = input("Choose a property to edit (1-7): ")
        if choice == "1":
            entry["title"] = input("Enter new title: ")
        elif choice == "2":
            entry["description"] = input("Enter new description: ")
        elif choice == "3":
            entry["technologies"] = input("Enter new technologies (comma-separated): ").split(",")
        elif choice == "4":
            entry["roles"] = input("Enter new roles (comma-separated): ").split(",")
        elif choice == "5":
            entry["link"]["url"] = input("Enter new URL: ")
        elif choice == "6":
            entry["link"]["text"] = input("Enter new link text: ")
        elif choice == "7":
            print("Edit canceled.")
            return
        else:
            print("Invalid choice.")
            return

        print("Entry updated successfully.")
    except ValueError:
        print("Invalid ID.")

def delete_entry(data):
    try:
        entry_id = int(input("Enter the ID of the entry to delete: "))
        entry = next((item for item in data if item["id"] == entry_id), None)
        if entry:
            data.remove(entry)
            print(f"Entry with ID {entry_id} deleted.")
        else:
            print("Entry not found.")
    except ValueError:
        print("Invalid ID.")
    
def main():
    data = load_data()
    while True:
        print("\nMenu:")
        print("1. List Entries")
        print ("2. List Whole Entry")
        print("3. Add Entry")
        print("4. Delete Entry")
        print("5. Exit without saving")
        print("6. Save and exit")
        choice = input("Choose an option: ")

        if choice == "1":
            list_entries(data)
        elif choice == "2":
            id = input ("Input entry id. ")
            list_entry(id, data)
        elif choice == "3":
            add_entry(data)
        elif choice == "4":
            delete_entry(data)
        elif choice == "5":
            break
        elif choice == "6":
            save_data(data)
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()