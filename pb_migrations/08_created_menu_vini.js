/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_corto_tradotto",
        "hidden": false,
        "id": "relation1421693708",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "nome",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_lungo_tradotto",
        "hidden": false,
        "id": "relation258163646",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "descrizione",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1689327823",
        "max": 0,
        "min": 0,
        "name": "anno",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1689327823",
        "max": 0,
        "min": 0,
        "name": "prezzo",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_lungo_tradotto",
        "hidden": false,
        "id": "relation233814287",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "storia_del_vino",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_corto_tradotto",
        "hidden": false,
        "id": "relation1454623906",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "regione",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_corto_tradotto",
        "hidden": false,
        "id": "relation481852734",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "vitigno",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_menu_carta",
        "hidden": false,
        "id": "relation3837478429",
        "maxSelect": 999,
        "minSelect": 0,
        "name": "abbinamenti_consigliati",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_image",
        "hidden": false,
        "id": "relation3022747866",
        "maxSelect": 999,
        "minSelect": 0,
        "name": "image",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_testo_corto_tradotto",
        "hidden": false,
        "id": "relation1309676077",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "categoria",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_menu_vini",
    "indexes": [],
    "listRule": "",
    "name": "menu_vini",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_menu_vini");

  return app.delete(collection);
})
