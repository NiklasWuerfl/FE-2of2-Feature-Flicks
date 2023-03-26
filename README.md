# FE-2of2-Feature-Flicks

## Dividing in components
I made sure, I divide the code into several React components, so I can set them together following my needs and to be able to find a needed code snippet easier, so I can change it quickly.
If further adjustments are needed, just the changing components have to be edited.
The components as a whole, work together and when they are set together, they work towards an user-friendly experience.

### main.jsx
Here is the entry point into the application. Necessary imports and configurations are run here and the App is started.

### App.jsx
#### Routing
The Browser Router makes sure, that the correct component for each subpage/route is displayed.
#### StateVariables
The global state is defined in this file. Using the custom hook provided in the lectures, it can be accessed from any other component.
The data from the provided API is fetched with the useEffect hook.

### AboutUs.jsx
In this small component, some general information about the cinema is shown. It is a seperate component, so that it can be used in the start page and in the information page.

### CategoryFilter.jsx
Here, in a dropdown, the user can select a category, which the screening list or the movie list is supposed to be filtered for.
This is a single component, because it is needed in the movie page as well as in the screenings page.

### InfoPage.jsx
This components combines the TicketInfo and the AboutUs component. This is the most important information about the cinema, which is shown in an extra page.

### MainMenu.jsx
In this Menubar, the user can navigate between the main pages of the website. The Menubar is responsive and folds down, when the page is viewed on a small screen

### Movie.jsx
This component shows the details of a movie. The user can see the title, the duration and the movie poster. This would be an appropriate component to add e.g. reviews, a description or similar.
At the same time, the user can navigate to the screenings of the movie by clicking the links beside / under the movie information.

### MovieList.jsx
This component shows all movies that are shown in the cinema. Each movie is only shown once. It can be filtered by category

### Page404.jsx
This component is shown, when the user wants to access an endpoint, which is not defined.
The user can navigate back to the Start Page.

### Receipt.jsx
After the user checks out and books the tickets, this component is shown. It summarizes the most important details about the booking in a user friendly way.
The link to this page can be shared with others!

### ScreeningList.jsx
This component shows all the screenings in the program of the cinema. The screenings are ordered by date and can be filtered by category.
By clicking one of the screenings, the user will be sent to the booking page for this screening.

### SeatSelection.jsx
In this component, the booking procedure is done. The seats and ticket types will be selected. 

### StartPage.jsx
This is the welcome page of the cinema. It greets the customer and gives him a short introduction about the cinema (AboutUs).

### TicketInfo.jsx
In this component, the user gets information about the ticket types of Feature Flicks. In a quick overview, the details are visible.
This is a subcomponent of the InfoPage.


When a component is not used as a subcomponent, they are an important page of the cinema's homepage but may be composed from other components as well.
