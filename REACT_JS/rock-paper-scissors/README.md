# Rock Paper Scissors Mini Project

<img src="https://github.com/MayHyeyeonKim/JS_TS_React/blob/main/REACT_JS/rock-paper-scissors/rock_paper_scissors.gif?raw=true" alt="Rock Paper Scissors GIF" />


## Design Layout with Figma

## Image Source
The image was created using an AI-based tool called "Cartoonize Yourself."

## Using ReactJS
1. **Component-based Architecture**: Organize your project into reusable components to enhance maintainability and scalability.
2. **Utilizing Hooks**: Leverage React hooks to simplify your code and manage state effectively. For instance, you can use the `useState` hook to manage game state and the `useEffect` hook to update the score and game results.
3. **Props for State Management**: Pass state values down to child components using props to render them on the screen. For example, pass down the current score and game results as props to display them in the UI.
4. **Ternary Operator**: Utilize the ternary operator to conditionally render elements based on the game state. You can use it to display different messages depending on whether the player wins, loses, or it's a tie.

## Running the Project
- To create a new React project
``` json
npx create-react-app my-app
```
- To start the development server and open your Rock Paper Scissors game in a web browser
``` json
npm start
```

## Errors that I met

In React, while images linked via web URLs display correctly, images stored locally do not show up when using a regular path. There are three methods to resolve this issue.

### Solutions
- Create an img folder inside the public folder and save all the images there. Then, you can use an absolute path to load the images.
```
<img src="/img/imgfile.png"/>
```

- Use the import statement to load the images.
```
import imgfile from './imgfile.png';
<img src={imgfile} />
```

- Use the require method, which, like import, is only usable within the src folder.
```
<img src={require("./imgfile.png").default}/>
```






