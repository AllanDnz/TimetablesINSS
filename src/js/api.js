async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/AllanDnz/TimetablesINSS/main/data/informations.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}