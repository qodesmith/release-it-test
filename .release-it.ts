import type {Config} from 'release-it'

// These are only option overrides. Default options will take effect.
// biome-ignore lint/style/noDefaultExport: release-it expects a default export
export default {
  git: {
    changelog:
      'npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs',
  },
  hooks: {
    'before:init': ['bun run check'],
    'after:bump': 'npx auto-changelog -p',
  },
  npm: {
    publish: false,
  },
} satisfies Config
