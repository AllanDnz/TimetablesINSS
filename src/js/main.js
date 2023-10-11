function updateNames(nameIntern) {
    const nameInt = document.getElementById('informations.interns.intern.name')
    nameInt.innerHTML = nameIntern.interns.intern.name.map(name => `<td>${name}</td>`).join('')
}