### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById("id")** → selects a single element by its id. Returns the element or null.

- **getElementsByClassName("class")** → selects all elements with a specific class. Returns a live HTMLCollection that updates automatically if DOM changes.

- **querySelector("selector")** → selects the first element matching any CSS selector. Supports #id, .class, div > p.

- **querySelectorAll("selector")** → selects all matching elements. Returns a static NodeList. Supports looping with forEach.

---

### 2. How do you create and insert a new element into the DOM?

- **To create and insert a new element into the DOM, you first create the element in memory using JavaScript. After that, you add content, attributes, or classes to it as needed. Finally, you insert it into the DOM by attaching it to an existing element, either at the end, at the beginning, or before a specific element, so it becomes visible on the webpage. This process allows you to dynamically add elements to your page without editing the HTML directly.**

---

### 3.What is Event Bubbling and how does it work?

Event Bubbling is a concept in JavaScript where an event triggered on a specific element propagates, or "bubbles up," through its parent elements all the way to the root of the DOM (usually the document).


- **How it works:**
  - When you perform an action on an element, like clicking a button, the event is first captured by that element itself.

- Then the event bubbles up to its parent element, then the grandparent, and so on, until it reaches the top of the DOM tree.

- Any parent elements that have an event listener for the same event type will also execute their event handler.


- **Example scenario:**

- You have a button inside a div.

- Clicking the button triggers its click event first.

- After that, the div’s click event listener (if any) also runs automatically.

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of attaching listeners to multiple child elements. The parent element monitors events from its children and determines which child triggered the event using the event object.

- **Why it is useful:**

 - **Efficiency:**

- Instead of adding separate event listeners to each child element, you only need one listener on the parent, which saves memory and improves performance.

 - **Dynamic Elements:

- If new child elements are added to the parent after the page loads, the parent listener can still handle events on them without needing to attach new listeners.

 - **Simpler Code:**

- Managing one event listener at the parent level is easier than managing many on individual child elements.

---





### 5. What is the difference between preventDefault() and stopPropagation() methods?

- **1. preventDefault()**

- This method prevents the browser’s default behavior for an event.

- It does not stop the event from bubbling or propagating.

- **Example use cases:**

- Preventing a form from submitting when clicking a submit button.

- Preventing a link from navigating to a new page.


- **2. stopPropagation()**

- This method stops the event from bubbling (or capturing) up the DOM tree.

- It does not stop the default browser action.

- **Example use cases:**

- You have a click event on a button inside a div, and the div also has a click listener. Using stopPropagation() on the button prevents the div’s listener from running.

---



