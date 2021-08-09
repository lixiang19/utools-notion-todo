const { Client } = require('@notionhq/client')
const NOTION_KEY = 'secret_jnBqmSpFk2jV9xgngrCytQT0NcpSrxfUMkAWL93qPRm'
const NOTION_DATABASE_ID = '4e5ec7f07e0b49d691039ede94acdffd'
const notion = new Client({ auth: NOTION_KEY })
const databaseId = NOTION_DATABASE_ID

class EnterListItem {
  constructor(title, description,id) {
    this.title = title
    this.description = description
    this.icon =''
    this.url = id
  }
}
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
async function retrieveSchema() {
  try {
    const response = await notion.databases.retrieve({ 
      database_id: databaseId,
    });
    return response
  } catch (error) {
    console.error(error.body)
  }
}
async function getList() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        "and":[
          {
            property:'完成',
            checkbox: {
              equals: false,
            },
          },
          {
            property:'状态',
            select: {
              equals: '立刻',
            },
          }
        ]
      }
    })
   
    const list = response.results.map((page) => {
      const item = new EnterListItem(page.properties.Name.title[0].plain_text,'',page.id)
      return item
    })
   
    return list
  } catch (error) {
    console.error(error.body)
  }
}

module.exports = {
  getList,
  addItem
}
