import "./style.css"

// const app = document.querySelector<HTMLDivElement>("#app")!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const textArea = document.querySelector('[id="git-log"]')

textArea?.addEventListener("change", evt => {
    const target = evt.target as HTMLTextAreaElement

    console.log(target.value)

    const t = `
    
    
commit c03a4e68b80000ceac7e1c61b8fea89a744683da (HEAD -> master, origin/master, origin/HEAD)
Author: Gabriel <lydstyl@gmail.com>
Date: Mon Nov 15 15:37:30 2021 +0100

    Site & Product perimeter filters test cases.

commit b8095618ca05357c27a98e26ee90df4d55429ac4
Author: Gabriel <lydstyl@gmail.com>
Date: Mon Nov 15 12:15:39 2021 +0100

    Format userPerimeter file.

commit 0373a6e8035f211708610911212ce5d07205c5fe
Author: Gabriel <lydstyl@gmail.com>
Date: Mon Nov 15 11:49:36 2021 +0100

    CYP-16 Add order point advanced settings test cases.

commit 289d6a00cd947d447c32ebc90667a96ecda865fb
Author: Gabriel <lydstyl@gmail.com>
Date: Mon Nov 15 10:07:46 2021 +0100

    CYP-16 Format orderPoint file & add advanced settings test case.

commit 5fec0712601b518d9cead08285650066575d474b
Author: Gabriel <lydstyl@gmail.com>
Date: Mon Nov 15 10:05:12 2021 +0100

    Add Gabriel env & Gabriel template.

    
    `

    extractTitles(t)
})

function extractTitles(text: string) {
    console.log(text)
}