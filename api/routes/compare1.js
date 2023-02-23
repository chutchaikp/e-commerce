const income = await Order.aggregate([
	{ $match: { createdAt: { $gte: prevMonth } } },
	{
		$project: {
			month: { $month: "$createdAt" },
			sales: "$smount",
		}, 
		{
		$group: {
			_id: "$month",
			total: { $sum: "$sales" },
		},
	},
]);
