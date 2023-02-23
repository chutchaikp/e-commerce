const income2 = await Order.aggregate([
	{ $match: { createdAt: { $gte: previousMonth } } },
	{
		$project: {
			month: { $month: "$createdAt" },
			sales: "$amount",
		},
	},
	{
		$group: {
			_id: "$month",
			total: { $sum: "$sales" },
		},
	},
]);