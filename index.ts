/** biome-ignore-all lint/suspicious/noConsole: test project */

import fs from 'node:fs'
import path from 'node:path'

function containsTab() {
  const dirContents = fs.readdirSync('.', {
    withFileTypes: true,
    encoding: 'utf8',
    recursive: true,
  })

  const filesWithTabs: string[] = []

  dirContents.forEach(dirent => {
    if (
      !(
        dirent.parentPath.includes('node_modules') ||
        dirent.parentPath.includes('.git')
      ) &&
      dirent.isFile()
    ) {
      const {name, parentPath} = dirent
      const filePath = path.resolve('.', parentPath, name)
      const hasTab = fs.readFileSync(filePath).includes('\t')

      if (hasTab) {
        filesWithTabs.push(parentPath ? `${parentPath}/${name}` : name)
      }
    }
  })

  console.log('Files with tabs:', filesWithTabs)
}

containsTab()
