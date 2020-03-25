A link to the website can be found [here](https://afan-ahmed-hennge-challenge.netlify.com)

## UI Improvements 

List of improvements for each UI as follows:

### `No Results UI`

This UI seemed the most seamless. It is minimalistic and didn't leave much room for improvement.<br />

One thing I would improve here however would be to make it more clear that no results were found as currently it is a bit hard to tell without looking at the small **Results: 0mail(s)** information. This could be easily achieved by displaying a different logo which indicates no results were found. The logo could say **No Results Found By Mail Archiver** rather than just **Mail Archiver** like on the current logo.

### `Desktop UI`

A lot of space is taken up by the **additional recipients number indicator**. Spacing to the right side could be reduced to make more space for the subject as there is likely to be more text here.<br />

Rather than having an **attachments icon** the UI could potentially show the attachments themselves positioned beneath the subject so the user doesn't have to go into the email to view attachments.<br />

The **To** column seems a bit redundant. Would be better to allow more space to the **From** and **Subject** columns. The user will know the email is directed to them and if there are more recipients it is simple enough to find this out once the email is inspected.<br />
Alternatively the **To** column could just display **You + additional recipients indicator** to create more space for more important aspects of the email.<br />

The **hover effect** making the row blue and tinting the background seems a bit could be replaced with a border/transform on the row enlarging it slightly (not too much) The blue colour here doesn't match well with the grid.<br />

### `Mobile UI`

The **From | To | Subject | Date** here in the header were too compact. This would be hard for users to click from a mobile device as the headers are too close together. It would be better to separate these out across the header to give the user more room to click. (I have added this in the UI mockup I created)<br />

Similarly to the desktop UI, the list of recipients could be reduced to display just **You + additional recipients indicator** so there is less clutter and the interface is made more minimalistic for a sleeker look.

Similarly to the desktop UI, the **attachments icon** could be replaced with the actual email attachments and appened at the bottom of the email row. This would allow the user to view attachments without necessarily having to go into the email as well as get a better understanding of the email through it's attachments.

## General Improvements

The UI should allow the user to click the calendar icom which drops down a date range filter the user can select from. This is essential to UI/UX nowadays as users are quite impatient and prefer minimal effort in operations and would not want to manually enter a date.

For some reason the arrow icon was pointing UP but the sort order of the table was incorrect. An upward pointing arrow should mean the largest dates are at the bottom and the smallest dates are at the top. (largest being most recent and smallest being least recent). The way I have implemented uses this logic with the arrows and ordering of the table.

**Please note this code is far from complete and is only a bare minimum to enable the representation of the mock UIs.**
**If you would like to discuss how I would further improve the code itself feel free to ask!**



