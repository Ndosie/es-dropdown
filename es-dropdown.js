function createDropdown() {
    const dropdownBtns = document.querySelectorAll('.dropdownbtn')
    const contentDivs = document.querySelectorAll('.dropdown-content')

    contentDivs.forEach(div => {
        div.style.display = 'none'
    })

    dropdownBtns.forEach(button => {
        button.addEventListener('mouseover', (e) => {
            const btnId = e.target.id
            const contentDiv = document.querySelector(`#${btnId} + .dropdown-content`)
            contentDiv.style.display = 'block'

            contentDiv.addEventListener('mouseleave', () => {
                contentDiv.style.display = 'none'
            })
        })
    })
}

export { createDropdown }