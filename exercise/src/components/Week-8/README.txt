Homework 
Deliverable: 
Create an application that changes the button name and the background color using a Pure Component and a Higher-Order Components (HOCs) to handle state and color functionality. 
Development: 
1. Fork the project with the start structure from https://github.com/cjheyde/w8-homework a. To fork you need to click Fork, In the top-right corner of the repo page. b. Under "Owner," select the dropdown menu and click your GitHub username as the owner for the repository. c. Click Create fork.
2. Open your terminal, navigate to the folder where you want to have your homework 
3. Still in the terminal, type: git clone <URL-OfYourForkedRepo> 
4. Navigate to your project’s folder: cd projectFolderName 
5. Type: npm install 6. Check if all is running ok, type: npm start 
7. If all is ok, hit CTRL + C to stop, and then start your code. 
—————————————————————————————————————————————————————————————————————————————————————————————————————————
8. Create a Pure Component called ColorButton. It should have a button that changes the background color between “WHITE“ and “BLACK” when clicked. The initial state should be “WHITE”. 
9. Create a Higher-Order Component (HOC) called withColor. This should wrap the CollorButtoncomponent and provide it with the necessary state and functionality to handle the background color and the button name. 
10. Go back to the ColorButtoncomponent and instead of exporting it directly, export it as export default withColor(CollorButton). 
11. Call the CollorButtoncomponent in App.js. 
12. Style all with CSS, to make it look as good as you can!

Useful links 
- How to fork a GitHub repository 
- https://docs.github.com/en/get-started/quickstart/fork-a-repo 
- Pure Components - class - https://www.youtube.com/watch?v=zew5VsF76n0 
- Pure Components class and Shallow prop and state comparison (sc) https://www.youtube.com/watch?v=YCRuTT31qR0 - Pure Component - function - React.memo()
- https://www.youtube.com/watch?v=BS2gQS-u93k 
- Higher Order Components (HOC) in 3 parts 
    - part 1 - https://www.youtube.com/watch?v=B6aNv8nkUSw 
    - part 2 - https://www.youtube.com/watch?v=rsBQj6X7UK8  
    - part 3 - https://www.youtube.com/watch?v=l8V59zIdBXU 
- HOC in 10 minutes - https://www.youtube.com/watch?v=J5P0q7EROfw