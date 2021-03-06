		var weatherSymbols = [
				{"id":1,"name":"selkeää","symbol":"sun"},
				{"id":2,"name":"puolipilvistä","symbol":"cloud sun"},
				{"id":21,"name":"heikkoja sadekuuroja","symbol":"drizzle sun"},
				{"id":22,"name":"sadekuuroja","symbol":"showers sun"},
				{"id":23,"name":"voimakkaita sadekuuroja","symbol":"rain sun"},
				{"id":3,"name":"pilvistä","symbol":"cloud"},
				{"id":31,"name":"heikkoa vesisadetta","symbol":"drizzle"},
				{"id":32,"name":"vesisadetta","symbol":"rain"},
				{"id":33,"name":"voimakasta vesisadetta","symbol":"downpour"},
				{"id":41,"name":"heikkoja lumikuuroja","symbol":"snow sun"},
				{"id":42,"name":"lumikuuroja","symbol":"flurries sun"},
				{"id":43,"name":"voimakkaita lumikuuroja","symbol":"snow flurries"},
				{"id":51,"name":"heikkoa lumisadetta","symbol":"snow"},
				{"id":52,"name":"lumisadetta","symbol":"snow"},
				{"id":53,"name":"voimakasta lumisadetta","symbol":"snow"},
				{"id":61,"name":"ukkoskuuroja","symbol":"lightning sun"},
				{"id":62,"name":"voimakkaita ukkoskuuroja","symbol":"lightning sun"},
				{"id":63,"name":"ukkosta","symbol":"lightning"},
				{"id":64,"name":"voimakasta ukkosta","symbol":"lightning"},
				{"id":71,"name":"heikkoja räntäkuuroja","symbol":"sleet sun"},
				{"id":72,"name":"räntäkuuroja","symbol":"sleet sun"},
				{"id":73,"name":"voimakkaita räntäkuuroja","symbol":"sleet sun"},
				{"id":81,"name":"heikkoa räntäsadetta","symbol":"sleet"},
				{"id":82,"name":"räntäsadetta","symbol":"sleet"},
				{"id":83,"name":"voimakasta räntäsadetta","symbol":"sleet"},
				{"id":91,"name":"utua","symbol":"haze"},
				{"id":92,"name":"sumua","symbol":"fog"}
		];
		//map symbol id to web font
		var symbolMap = {};
			weatherSymbols.forEach(function(d, i) {
			//console.log(d)
			symbolMap[d.id] = d.symbol;
		});

		//map symbol id to name
		var symbolNameMap = {};
			weatherSymbols.forEach(function(d, i) {
			//console.log(d)
			symbolNameMap[d.id] = d.name;
		});

