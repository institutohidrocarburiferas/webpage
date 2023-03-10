import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

import {allowPages} from '@constants/pagesHTMLInsecure'

export interface PostsData {
  id: string,
  title: string,
  date: string,
  image: string,
  icon: string,
}

export interface PostData extends PostsData {
  contentHtml: string,
}

export function getPostsData (dataDirectory: string) : PostsData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(dataDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    } as PostsData
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds (dataDirectory: string) {
  const fileNames = fs.readdirSync(dataDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData (id: string, dataDirectory: string) {
  const fullPath = path.join(dataDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use unified (remark) to convert markdown into HTML string
  let processedContent = null

  if (allowPages.includes(id)) {
    processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(matterResult.content)
  } else {
    processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeRaw)
      .use(rehypeSanitize) // allow HTML insecure
      .use(rehypeStringify)
      .process(matterResult.content)
  }

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
