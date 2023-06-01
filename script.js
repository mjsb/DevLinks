function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        // html.classList.remove('light')
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute(
            "alt",            
            "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, sem barba e fundo magenta e azul."
        )
    } else {
        // html.classList.add('light')
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute(
            "alt",
            "Foto de Mayk Brito sorrindo, usando óculos e camiseta preta, barba e fundo amarelo."
        )
    }
}
