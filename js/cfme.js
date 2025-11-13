document.body.onload = function() { correctlyFloatMediaElementsLeftOrRight() } 
window.onresize = function() { correctlyFloatMediaElementsLeftOrRight() } 

function correctlyFloatMediaElementsLeftOrRight() {

	// find all div.media elements on the page
	M = document.getElementsByClassName("media")
	
	// print how many div.media are there
	// console.log(`M length = ${M.length}`)
	
	// go into each div.media
	for(i = 0 ; i < M.length ; ++i) {

		// m = all the html inside that div.media
		m = M[i] 

		// print how many child elements are inside this div.media
		// console.log(`.media#${i} has ${m.children.length} child elements.`)

		// if there are some elements...
		if(m.children.length>0) {
			
			// C is an array, and each element of the array is one child element.
			C = m.children 
			
			// in div.media's children, some children are .item-halfwidth.
			// take each such item-halfwidth, 
			// and assign .floatleft and .floatright to it,
			// depending on whether it's the even or odd such element (that we come across in sequence).

			continuousHalfWidths = 0 // counter: to count the number of continuous .item-halfwidth children we have had

			// iterate over ALL its children
			for(j = 0 ; j<C.length ; ++j) {

				if(C[j].classList.contains("item-halfwidth")) {
					
					// html/css is decently good at placing the .item-halfwidth elements 
					// towards the left of the right edge of the parent (div.media).
					// but the elements are sometimes a bit off, and so we just want to 
					// correct that small off-ness.
					// we find out whether the centre of an .item-halfwidth element is
					// towards the left or the right, and then apply .floatleft or .floatright
					// (respectively) on the element.
					c = C[j] // is a child-element of div.media that has class .item-halfwidth
					left = c.offsetLeft
					width = c.offsetWidth
					x = left + (width/2) // location (along x-axis) of the centre of the element
					LEFT = m.offsetLeft
					WIDTH = m.offsetWidth
					X = LEFT + (WIDTH/2) // location (along x-axis) of the centre of the div.media element
					if(x!=X) {
						c.classList.remove("floatnone")
						if(x<X) {
							c.classList.add("floatleft")
						} else if (x>X) {
							c.classList.add("floatright")
						}
					} else { // this can only mean that x===X, i.e., the element is centred, and isn't intended to float to either the left or right.
						c.classList.remove("floatleft")
						c.classList.remove("floatright")
						c.classList.add("floatnone")
					}
					
					// we found another .item-halfwidth!
					// note:    this counter unrelated to the above .floatleft/.floatright logic.
					// 			instead, it is useful for the "niche aesthetic thing" that we do later,
					// 			i.e., where we set margin-bottom = 0 for the second-last .item-halfwidth element within a sequence of such elements.
					continuousHalfWidths++

				} else { // i.e., we encountered an element that is not a .item-halfwidth.

					// so we reset the counter:
					continuousHalfWidths = 0

				}

				// this next bit is a very niche aesthetic thing.
				// ordinarily, the LAST element in div.media has: margin-bottom = 0. (because, in the stylesheets... div.media:last-child { margin-bottom: 0; } )
				// reason:  if the last element has a non-zero margin, then the gap to the next sibling of 
				// 			div.media (i.e, after it) becomes slightly more than what we have everywhere else.)
				// now, if the LAST TWO elements of in a div.media are .item-halfwidth, then even the
				// second-last element can create this "slightly-more" gap.
				// so, when the last two elements of a div.media are both .item-halfwidth,
				// we grab thr second-last element too, and force its margin-bottom to be 0.

				if(	
					j>0 && j===C.length-1 // div.media has 2-or-more child elements, and we're now on the last child-element
					&& continuousHalfWidths%2===0 && continuousHalfWidths>0 // the last two (or 4, or 6, or 2n number of) elements in this media.div element were .item-halfwidth
				) {
					// go to div.media's second-last child
					// i.e., C[j-1]
					// and set margin-bottom=0

					if(C[j-1].classList.contains("item-halfwidth") ) { // this check might be unnecessary (âˆµ redundant), but i'm too tired right now to be able to say that for sure. so i'm leaving it in.

						// we only want to do this on wider screens.
						// reason:  on narrower screens, media-quesries kick in, and .item-halfwidth takes up the full-width of the screen,
						// 			and in that situation we don't want to set margin-bottom=0.
						// so, ONLY when this condition is satisfied ...
						// {second-last child-element}.width !== {div.media}.width,
						// ... will we go ahead and do what we wanted to do...
						if( C[j-1].clientWidth !== m.clientWidth ) {

							C[j-1].style.marginBottom = 0
						
						}

					}

				}

			}
			
		}

	}
}