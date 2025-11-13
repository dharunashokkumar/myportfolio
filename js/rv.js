// console.log("loaded 'responsiveVideo.js'")
if (document.getElementsByClassName("videoFrame").length>0)
{
	let videoCount = document.getElementsByClassName("videoFrame").length
	for ( let i = 0 ; i < videoCount ; ++i ) 
	{
		let videoheight = document.getElementsByClassName("videoFrame")[i].offsetHeight // 720
		if(document.getElementsByClassName("videoFrame")[i].parentElement.nextElementSibling) 
		{
			let captionmargintop = window.getComputedStyle(document.getElementsByClassName("videoFrame")[i].parentElement.nextElementSibling).marginTop // 12px
			captionmargintop = parseInt(captionmargintop, 10); // 12
			let newmargintop = videoheight + captionmargintop // 732
			// document.getElementsByClassName("videoFrame")[1].nextElementSibling.style.top = newmargintop + "px"}
		}
	}
}