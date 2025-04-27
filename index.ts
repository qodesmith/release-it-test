/** biome-ignore-all lint/suspicious/noConsole: test project */

import fs from 'node:fs'

function containsTab() {
  const dirContents = fs.readdirSync('.', {
    withFileTypes: true,
    encoding: 'utf8',
    recursive: true,
  })

  dirContents.forEach(dirent => {
    if (
      !(
        dirent.parentPath.includes('node_modules') ||
        dirent.parentPath.includes('.git')
      ) &&
      dirent.isFile()
    ) {
      const {name, parentPath} = dirent
      const hasTab = fs.readFileSync(`./${parentPath}/${name}`).includes('\t')
      console.log(name, hasTab)
    }
  })
}

containsTab()
