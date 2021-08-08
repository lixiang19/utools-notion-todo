const { Client } = require('@notionhq/client')
const NOTION_KEY = 'secret_jnBqmSpFk2jV9xgngrCytQT0NcpSrxfUMkAWL93qPRm'
const NOTION_DATABASE_ID = '4e5ec7f07e0b49d691039ede94acdffd'
const notion = new Client({ auth: NOTION_KEY })
const databaseId = NOTION_DATABASE_ID
async function addItem (text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text
              }
            }
          ]
        }
      }
    })
  } catch (error) {
    console.error(error.body)
  }
}
addItem('测试数据')
module.exports = {
  addItem
}
