import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
    const url = new URL(request.url)
    const link = url.searchParams.get('link')

    if (!link || typeof link !== 'string') {
        return new Response(JSON.stringify({ error: 'Invalid link. Please provide a valid link as a query parameter.' }), { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'public', 'files', link)

    try {
        const data = await fs.promises.readFile(filePath, 'utf8')
        return new Response(JSON.stringify({ content: data }), { status: 200 })
    } catch (err) {
        if (err instanceof Error) {
            if (err.message === 'ENOENT') {
                return new Response(JSON.stringify({ error: `File not found: ${link}` }), { status: 404 })
            } else {
                return new Response(JSON.stringify({ error: `Failed to read file: ${err.message}` }), { status: 500 })
            }
        } else {
            return new Response(JSON.stringify({ error: 'Failed to read file' }), { status: 500 })
        }
    }
}