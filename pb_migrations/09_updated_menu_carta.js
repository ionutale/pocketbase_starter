/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_menu_carta")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_menu_vini",
    "hidden": false,
    "id": "relation2893070287",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "vini_consigliati",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_menu_carta")

  // remove field
  collection.fields.removeById("relation3309110367")

  // remove field
  collection.fields.removeById("relation2893070287")

  return app.save(collection)
})
