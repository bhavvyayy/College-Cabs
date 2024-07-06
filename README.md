# College Cabs

College Cabs is a web application developed using Next.js and Chakra UI for the frontend, and Firebase for the backend. It provides a platform for college students to share cab rides, helping them find fellow passengers and reduce commuting costs.

## Technologies Used

- **Next.js**: Next.js is a React framework that offers server-side rendering (SSR) and other powerful features for building scalable web applications. We chose Next.js for its performance benefits and ease of implementation.
- **Chakra UI**: Chakra UI is a popular component library for React that provides a set of customizable and accessible UI components. It helped us create a consistent and visually appealing design.
- **Firebase**: Firebase is a backend-as-a-service (BaaS) platform offering various services such as database, authentication, and hosting. We utilized Firebase's Firestore database for storing cab listings and user information, and Firebase Authentication for secure user authentication and authorization.

## Features

- **Cab Listings**: Users can create and browse cab listings for different dates and destinations. Each listing includes details like starting point, destination, date, time, and contact information of the listing creator.
- **Search Listings**: Users can search for cab listings based on specific dates, making it easier to find suitable travel options.
- **User Authentication**: Users can sign up and log in to their accounts using Google SignIn. Authentication ensures data security and restricts access to authorized users.
- **Clipboard Copy**: Users can copy the phone number and email address of a listing creator to their device's clipboard with a single click, facilitating easy contact.

## Workflow and Data Sharing

1. **User Registration**: Users can create an account or log in using their Google Account. Firebase Authentication manages the registration and authentication securely.
2. **Cab Listing Creation**: Authenticated users can create cab listings by providing details such as start place, destination, date, time, and contact information. Listings are stored in the Firebase Firestore database under the "listings" collection.
3. **Display of Cab Listings**: The application retrieves cab listings from the Firestore database and displays them in an organized manner, enabling users to browse and search for relevant listings.
4. **Contacting Listing Creator**: Users can easily copy the phone number or email address of a listing creator to contact them directly for coordinating cab sharing plans.

## Challenges Faced

- **Data Synchronization**: We divided data into "listings" and "users" collections to optimize performance. Synchronizing these collections for data consistency posed challenges in managing creation, updates, and deletions.
- **Implementing Server-Side Rendering (SSR)**: Integrating SSR into Next.js initially presented challenges, which were overcome with the framework's support and thorough documentation.
- **Responsive UI Design**: Ensuring a seamless user experience across mobile and web platforms required responsive design techniques and media queries for optimal display on various devices.

## Contributing

Contributions to enhance the features and functionality of College Cabs are welcome. If you have suggestions, bug fixes, or new features to propose, please feel free to open an issue or submit a pull request.

## Contact

For any questions or further assistance, please reach out:

- Bhavya Singh - [LinkedIn](https://www.linkedin.com/in/bhavya-singh-a1764125b/)

---
