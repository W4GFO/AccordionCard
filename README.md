# Accordion Card
This is a FrontEnd Mentor project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically:

```
> npm create-react-app accordion-card --template typescript
```

## Additional NPM installs:

This project requires the following two installs:

```
> npm install sass
> npm install react-icons
```

## General Architectural layout:

This project contains the following components:

	- src
		index.tsx //The primary react-app standard starting code and creates a flex-box to center the main UI
		App.tsx //Sets up, and contains the initial ParentFrame components 

		- Components
			ParentFrame //The <main> container which holds the Components: <ImageFrame> and <ContentFrame>

			ContentFrame //The header FAQ element which styles the pages top text and the 5 			
				     //DataInfoElements
				     
			ImageFrame   //Hold the images of the worker, and the box for desktop form-factors.
			
			DataInfoElements  //This is the question and answer container and styles the transitions 
					  //of the button rotation and expanding and collapsing of the answer 
					  //text.

### Logic of the architecture

	Have the components which need to be worked through to iron out the layout isolated from the content.

	Then, have the components which display data isolated from issues with the overall layout of the primary page.

	Though this architecture and the number of components may seem overkill for this project, I want to start designing 
	as if the project were larger.  Not certain this is the right concept at this point or not.

### Question/Concerns regarding the project.

	Had some issues getting height of the answer text frame to resize properly.
	
	This logic occurs with the class '.data-info-hidden' in DataInfoElementStyle.scss on line 75 with the corresponding 
	tag in DataInfoElement.tsx on line 34.
	
	Would like to have the height transition as well, but setting the height seemed to have no effect.

	What is typically the issues you see developers are making when this is happening?

	Any input would be greatly appreciated as I run into this a lot.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
