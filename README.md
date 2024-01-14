# T2T-indian-Languages
- # HTML (index.html):

The HTML structure includes standard tags like <html>, <head>, <body>, and various others.
- Meta tags define the character set, viewport settings, and compatibility.
- External scripts from the Ionicons library (version 5.5.2) are included for displaying icons.
- A link to an external CSS file (style.css) is included for styling.
- The body contains a header, a slideshow, a main container for translation input and output, and a footer.
- JavaScript files (languages.js and script.js) are included at the end of the body.

- # JavaScript (script.js):
1.Dropdown Handling:

- The script handles dropdowns, populating them with language options and toggling their visibility.
- It uses the fetch API to retrieve language data and populates the dropdown menus.

2.Language Swapping:

- The script allows users to swap input and output languages.

3.Translation:

- It fetches translation data from the Google Translate API based on user input.
- The translation response is processed, and the translated text is displayed.

4.Character Limit and Count:

- It limits the input text to 5000 characters and displays the character count.

5.Slideshow:

- The script sets up a slideshow with images changing every 5 seconds.

6.Event Listeners:

- Various event listeners are used for user interactions, such as clicking dropdowns, swapping languages, and input changes.

- # CSS (style.css):
- The CSS file contains styling rules for the entire web application.
- It defines custom properties (--primary-color, --bg-color, etc.) for consistent theming.
- Styling rules are applied to create a responsive layout, design cards, dropdowns, buttons, and other UI components.
- Media queries are used for responsive design, adjusting the layout for smaller screens.

# Additional Notes:
- The Google Translate API is used for language translation. Note: The Google Translate API requires an API key, which is not included in the provided code.
- The slideshow is created using JavaScript and CSS.
- The application supports 24 Indian languages, as mentioned in the footer.


It's important to mention that using the Google Translate API for translation purposes may require adherence to Google's terms of service, and obtaining an API key may involve additional steps. Additionally, the provided code may require modification or adaptation based on the specific requirements and dependencies of the project.
