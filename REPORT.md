The following describes my efforts taken to complete the HENNGE challenge!

## Report Summary

Overall, the challenge was a fairly straight forward one and I thoroughly enjoyed the process to creating UI mockups! I spent around 10-15 hours in total on this challenge. I love little challenges like these which test my knowledge and capabilities as a developer.

Starting out, I first thoroughly read the description of each mission of the overall task. Reading through the entirety of the challenge helped clear up some grey areas for me. As at first I wasn't sure if this was just meant to be a hardcoded mockup or something actually functional. After reading the 3rd mission which is to extend the interface to have some functionality I immediately started thinking this was going to be something functional.

I took an hour or so initially to plan how to go about creating this. I decided I was going to use `ReactJS` to create this as it is a framework I am familiar with and one I could use to quickly create the mockups. After deciding on the language and frameworks I needed I took a deeper look at planning what compohents I will need to create. Looking at the mockups gave me a good idea of this. I knew from locking at the mockups which areas would need to be turned into components. After setting all the groundwork down I began to code it!

This was where the fun really got started for me. I started by coding the `Searchbar`. I encountered a few challenges here as I was a bit rusty of CSS due to my current lack of interaction with it at my workplace. Getting the calendar icon and search icon to position correctly next to the input element proved slightly challenging but nothing too grave. Overall this component was pretty straight forward and took an hour or so to create.

After creating the `Searchbar` component I went on to make the `EmailGrid` component. This is what would be responsible for rendering the the grid which the `Email` component will later populate. This was probably the most straight forward part of the challenge and the only thing that stands out here would be having to render a separate component for no results and one for results.

A lot of my time was spent coding the `Email` component as this is where all the details and data needed to be rendered. At first I just created the markup for this component and left the styling. Because there was a need for plenty of styling. I decided to get the data rendering onto the client-side and went ahead and made some dummy JSON data using the data from the mockups provided and also created a helper function to parse the date range and return only emails within the valid date range. I will not discuss too much about the logic in this report but I will be happy to discuss this with you guys in person!!

Once I had my data flowing I created the desktop version of the `Email` component and left the mobile version for later. I began styling now and a few challenges I encountered here was making the text cutoff and display `...`. I learned something new here as I didn't know this before but after some googling around I found that simply setting `white-space: nowrap; overflow: hidden; text-wordwrap: ellipsis;` this could be achieved. 

Another challenge I countered while styling was getting the SVG attachments icon colour to change on hover. I tried using `fill: blue` but this did not work. I eventually learned another new piece of information to achieve this and that was the `filter` css property. After finishing the styling on the desktop `Email` component I went ahead and created the mobile version of it!

At the end I cleaned up any styling and got frustrated here and there when I couldn't get some styles working. However, when I finally did start getting them working it was an amazing feeling and sense of achievement!

Before submitting my code I decided to refactor some logic here and there as well as restyle some areas as they could have been done better. I also added sorting functionality to the grid in case this was required. Not described in the challenges but figured this would be important.

**Please Note** I did not cater logic for browsers during this challenge, however I could do so by using babel and transpiling the ES6 code to be ES5. However, I did try to cater the styling for different browsers.
