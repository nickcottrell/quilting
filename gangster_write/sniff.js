var SniffSniff = {
	init: function () {
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			//this string determines the alternate/modified for pc url
			//you can also just leave this blank so only the mac contains the modified url
			//i like this way because it will default to the pc url
			identity: ""
		},
		{
			string: navigator.platform,
			subString: "Mac",
			//this string determines the alternate/modified for mac url
			identity: "-mac"
		}
	]

};
SniffSniff.init();