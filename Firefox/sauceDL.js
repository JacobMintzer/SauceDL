var twitterRE=/^(http|https):\/\/(www.)?twitter.com/i;
var twitterHomeRE=/^(http|https):\/\/(www.)?twitter.com\/home/i;
var twitterStatusRE=/^(http|https):\/\/(www.)?twitter.com\/.+\/status\/\d*(\/photo\/\d)?/i;

browser.contextMenus.create({
	id: "dl-sauce",
	title: "Download image with source",
	contexts: ["link","image","video","audio"],
});
browser.contextMenus.onClicked.addListener((info,tab)=>{
	console.log ("uwu")
	if (info.menuItemId === "dl-sauce"){
		if (twitterRE.test(info.pageUrl)){
			dlFromTwitter(info,tab)
		}
	}
})
function dlFromTwitter(info,tab){
	if (twitterHomeRE.test(info.pageUrl)){
		console.log("twitter homepage")
		var sauce=info.linkUrl.substr(0, info.linkUrl.toLowerCase().lastIndexOf('/photo/'))
	}
	else if(twitterStatusRE.test(info.pageUrl)){
		console.log()
		var sauce=info.pageUrl;
	}
	else{
		console.log("not twitter homepage: \n"+info.pageUrl)
		var sauce=info.pageUrl.substr(0, info.linkUrl.toLowerCase().lastIndexOf('/photo/'))
	}
	console.log(sauce)
}