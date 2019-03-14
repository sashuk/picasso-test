import { storiesOf } from '@storybook/react'

import Base from './Base'
import Chapter from './Chapter'

export const COMPONENTS_FOLDER = 'Components|Folder'

class Page extends Base {
  type = 'Page'
  title = ''

  constructor(options = { title: null, subtitle: null, info: null }) {
    super(options)

    this.title = options.title
  }

  setDescription(description = '') {
    this.setOptions({ info: description })
    return this
  }

  createChapter = (title, info, options = {}) => {
    const chapter = new Chapter({ title, info, page: this, ...options })
    this.collection.push(chapter)

    return chapter
  }

  toStoryBook() {
    return {
      ...this.options,
      chapters: this.collection.map(chapter => chapter.toStoryBook())
    }
  }

  generate() {
    if (TEST_ENV === 'visual') {
      this.generateVisualStories()
    } else {
      this.generateHumanStories()
    }
  }

  generateHumanStories() {
    const page = this.toStoryBook()
    const stories = storiesOf(COMPONENTS_FOLDER, module)
    stories.addWithChapters(page.title, page)
  }

  generateVisualStories() {
    const page = this.toStoryBook()
    const stories = storiesOf(page.title, module)

    page.chapters.forEach(chapter => {
      chapter.sections.forEach(section => {
        stories.add(section.title, section.sectionFn)
      })
    })
  }
}

export default Page
