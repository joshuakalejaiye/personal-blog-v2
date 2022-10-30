"Created a product ordering kiosk program similar to the ones found in KFC and McDonalds that allows for touchscreen and touch-less interaction using Machine Learning.",
content: `# Gesture Controlled Self-Service Kiosk

![img](${kioskImage.src})

I created a product ordering kiosk program similar to the ones found in KFC and McDonald's that allows for touchscreen _and_ touch-less interaction. It uses an object detection model to detect a user's hand. Users can hold their hand in front of the screen and a cursor will mirror their movements, if the user holds the cursor over a button for an extended amount of time, this triggers a selection. The program was developed with React, Node.js, Electron, PostgreSQL etc. If you wish to read my full report on the subject you can do so below, but here are some excerpts.

# System Design

![AltText {768x432} {priority} {caption: Photo by Someone}](${currentSystemDesign.src})

# Interaction Method Consideration

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

# Cursor Translations and Transformations

![img](${cursorScaling.src})
![img](${cursorTransformation.src})

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.

Thank you
