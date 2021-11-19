import {
	getConditions
} from './GenericFunctions';

export const filters = [{
	displayName: 'Property Name',
	name: 'key',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getFilterProperties',
		loadOptionsDependsOn: [
			'datatabaseId',
		],
	},
	default: '',
	description: 'The name of the property to filter by.',
},
{
	displayName: 'Type',
	name: 'type',
	type: 'hidden',
	default: '={{$parameter["&key"].split("|")[1]}}',
},
...getConditions(),
{
	displayName: 'Title',
	name: 'titleValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'title',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'Text',
	name: 'richTextValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'rich_text',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'Phone Number',
	name: 'phoneNumberValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'phone_number',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
	description: `Phone number. No structure is enforced`,
},
{
	displayName: 'Option',
	name: 'multiSelectValue',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getPropertySelectValues',
	},
	displayOptions: {
		show: {
			type: [
				'multi_select',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: [],
},
{
	displayName: 'Option',
	name: 'selectValue',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getPropertySelectValues',
	},
	displayOptions: {
		show: {
			type: [
				'select',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'Email',
	name: 'emailValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'email',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'URL',
	name: 'urlValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'url',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'User ID',
	name: 'peopleValue',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getUsers',
	},
	displayOptions: {
		show: {
			type: [
				'people',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
	description: 'List of users. Multiples can be defined separated by comma',
},
{
	displayName: 'User ID',
	name: 'createdByValue',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getUsers',
	},
	displayOptions: {
		show: {
			type: [
				'created_by',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
	description: 'List of users. Multiples can be defined separated by comma',
},
{
	displayName: 'User ID',
	name: 'lastEditedByValue',
	type: 'options',
	typeOptions: {
		loadOptionsMethod: 'getUsers',
	},
	displayOptions: {
		show: {
			type: [
				'last_edited_by',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
	description: 'List of users. Multiples can be defined separated by comma',
},
{
	displayName: 'Relation ID',
	name: 'relationValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'relation',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'Checked',
	name: 'checkboxValue',
	displayOptions: {
		show: {
			type: [
				'checkbox',
			],
		},
	},
	type: 'boolean',
	default: false,
	description: `Whether or not the checkbox is checked.
				true represents checked.
				false represents unchecked`,
},
{
	displayName: 'Number',
	name: 'numberValue',
	displayOptions: {
		show: {
			type: [
				'number',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	type: 'number',
	default: 0,
	description: 'Number value',
},
{
	displayName: 'Date',
	name: 'date',
	displayOptions: {
		show: {
			type: [
				'date',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
				'past_week',
				'past_month',
				'past_year',
				'next_week',
				'next_month',
				'next_year',
			],
		},
	},
	type: 'dateTime',
	default: '',
	description: 'An ISO 8601 format date, with optional time',
},
{
	displayName: 'Created Time',
	name: 'createdTimeValue',
	displayOptions: {
		show: {
			type: [
				'created_time',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
				'past_week',
				'past_month',
				'past_year',
				'next_week',
				'next_month',
				'next_year',
			],
		},
	},
	type: 'dateTime',
	default: '',
	description: 'An ISO 8601 format date, with optional time',
},
{
	displayName: 'Last Edited Time',
	name: 'lastEditedTime',
	displayOptions: {
		show: {
			type: [
				'last_edited_time',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
				'past_week',
				'past_month',
				'past_year',
				'next_week',
				'next_month',
				'next_year',
			],
		},
	},
	type: 'dateTime',
	default: '',
	description: 'An ISO 8601 format date, with optional time',
},
//formula types
{
	displayName: 'Number',
	name: 'numberValue',
	displayOptions: {
		show: {
			type: [
				'formula',
			],
			returnType: [
				'number',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	type: 'number',
	default: 0,
	description: 'Number value',
},
{
	displayName: 'Text',
	name: 'textValue',
	type: 'string',
	displayOptions: {
		show: {
			type: [
				'formula',
			],
			returnType: [
				'text',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
			],
		},
	},
	default: '',
},
{
	displayName: 'Boolean',
	name: 'checkboxValue',
	displayOptions: {
		show: {
			type: [
				'formula',
			],
			returnType: [
				'checkbox',
			],
		},
	},
	type: 'boolean',
	default: false,
	description: `Whether or not the checkbox is checked.
				true represents checked.
				false represents unchecked`,
},
{
	displayName: 'Date',
	name: 'dateValue',
	displayOptions: {
		show: {
			type: [
				'formula',
			],
			returnType: [
				'date',
			],
		},
		hide: {
			condition: [
				'is_empty',
				'is_not_empty',
				'past_week',
				'past_month',
				'past_year',
				'next_week',
				'next_month',
				'next_year',
			],
		},
	},
	type: 'dateTime',
	default: '',
	description: 'An ISO 8601 format date, with optional time',
},
];