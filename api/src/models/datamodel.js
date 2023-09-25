module.exports = {
  enums: [],
  models: [
    {
      name: "UserExample",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "email",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "name",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    },
    {
      name: "File",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "name",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "size",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "Int",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "createdAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "DateTime",
          default: {
            name: "now",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    }
  ],
  types: []
};
