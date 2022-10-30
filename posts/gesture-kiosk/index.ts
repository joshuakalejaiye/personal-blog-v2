import kioskImage from "../../public/images/kioskImage.png"
import currentSystemDesign from "../../public/images/currentSystemDesign.png"
import cursorScaling from "../../public/images/cursorScaling.png"
import cursorTransformation from "../../public/images/cursorTransformation.png"
import cursorShowcase from "../../public/images/cursorShowcase.png"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Gesture Controlled Self-Service Kiosk",
  content: `# Gesture Controlled Self-Service Kiosk
###   Exploring Post-COVID Natural Interfaces

I created a product ordering kiosk program similar to the ones found in KFC and McDonald's that allows for touchscreen *and* touch-less interaction. It uses an object detection model to detect a user's hand. Users can hold their hand in front of the screen and a cursor will mirror their movements, if the user holds the cursor over a button for an extended amount of time, this triggers a selection. The program was developed with React, Node.js, Electron, PostgreSQL etc. This is a shortened version of my [full report]("https://github.com/joshuakalejaiye/gesture-kiosk-electron"), and will explain a bit about how I developed this project.

![img {350x500} {caption: Cursor about to select an item}](${cursorShowcase.src})

![img {350x450} {caption: Adding items to basket}](${kioskImage.src})

# System Design
![img {632x620} {caption: Web App Structure}](${currentSystemDesign.src})  

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


# Interaction Method Consideration
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# Cursor Translations and Transformations  
![img {632x262} {caption: Various Cursor States}](${cursorScaling.src}) 

![img {632x300} {caption: Code that translates bounding box coords to points on the screen}](${cursorTransformation.src})

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# Final Thoughts
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
`,
  client: "University Of Central Lancashire Preston, Lancashire",
  banner: kioskImage.src,
  date: "September 2020 to May 2021",
  articleString: "gesture-kiosk",
  links: [
    "https://github.com/joshuakalejaiye/gesture-kiosk-electron",
    "https://drive.google.com/file/d/1j0PG-uoh-M_tf0XRlp3yfWAp1ilX4KIW/view?usp=sharing",
  ],
}
