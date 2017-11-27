define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "Lista todos os usuários",
    "name": "UsersList",
    "group": "Users",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Token"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/routes/_apidoc.ts",
    "groupTitle": "Users"
  }
] });