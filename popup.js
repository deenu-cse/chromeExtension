document.getElementById('developerBtn').addEventListener('click', () => {
    chrome.storage.sync.set({ userType: "Developer" }, () => {
        alert("Saved as a Developer!");
    });
});

document.getElementById('notDeveloperBtn').addEventListener('click', () => {
    chrome.storage.sync.set({ userType: "notDeveloper" }, () => {
        alert("Saved as Not Developer!");
    });
});
