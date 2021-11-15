import "./style.css"

// const app = document.querySelector<HTMLDivElement>("#app")!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const textArea = document.querySelector('[id="git-log"]')

textArea?.addEventListener("change", evt => {
    const target = evt.target as HTMLTextAreaElement

    let newText = extractTitles(target.value)

    newText = sortTitles(newText)

    target.value = newText
})

function extractTitles(text: string) {
    text = text.replace(/^(?!\s{4}).*/gm, "")
    text = text.replace(/^\n/gm, "")
    text = text.replace(/^\s{4}/gm, "")

    return text
}

function sortTitles(text: string) {
    const array1 = text.split("\n")

    const reversed = array1.reverse()

    return reversed.join("\n")
}
