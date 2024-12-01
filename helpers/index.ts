// Define the function
export async function readInputFile(fileName: string): Promise<string> {
  if (!fileName.endsWith('.txt')) {
    fileName += '.txt'
  }
  const filePath = `inputs/${fileName}`

  // Read the file content using Bun's readFile API
  const file = Bun.file(filePath)
  const content = await file.text()

  // Handle empty content
  if (content.trim() === '') {
    throw new Error(`File "${filePath}" is empty`)
  }

  return content
}
