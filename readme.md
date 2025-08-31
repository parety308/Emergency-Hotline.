**getElementById**                                 
                                                
Selects a single element with the given id.         

Returns a DOM element (or null if not found).

Only one element should have a particular id on the page

**getElementsByClassName**

Selects all elements with the given class name.

Returns a live HTMLCollection (updates automatically if elements are added/removed).

You usually need a loop to work with multiple elements.
**querySelector**
Uses CSS selectors to select elements.

Returns only the first element that matches the CSS selector.

Returns a single DOM element (or null if nothing matches).

**querySelectorAll**

Returns all elements that match the CSS selector.

Returns a NodeList (can be empty if nothing matches).

You can loop through it with forEach, for..of, or convert it to an array.