export const treeData = [
	{
		id: 1,
		label: "Root 1",
		children: [
			{
				id: 2,
				label: "Parent 1",
				children: [
					{ id: 3, label: "Child 1", children: [] },
					{ id: 4, label: "Child 2", children: [] },
					{
						id: 5,
						label: "Child 3",
						children: [
							{ id: 6, label: "Child 4", children: [] },
							{ id: 7, label: "Child 5", children: [] },
						],
					},
				],
			},
			{ id: 8, label: "Parent 2", children: [] },
			{ id: 9, label: "Parent 3", children: [] },
		],
	},
	{
		id: 10,
		label: "Root 2",
		children: [
			{ id: 11, label: "Parent 4", children: [] },
			{
				id: 12,
				label: "Parent 5",
				children: [
					{ id: 13, label: "Child 6", children: [] },
					{ id: 14, label: "Child 7", children: [] },
				],
			},
		],
	},
	{
		id: 15,
		label: "Root 3",
		children: [
			{ id: 16, label: "Parent 6", children: [] },
			{ id: 17, label: "Parent 7", children: [] },
			{ id: 18, label: "Parent 8", children: [] },
		],
	},
];
