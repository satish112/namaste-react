# Namste- react

# Parcel:
- Dev  Build
- Local Server
- HMR = Hot Module replacement
- File Watching Algorithm- Written in c++
- Caching - Faster Builds
- Image optimization  (Costly operation is loading image in web browser)
- Minification
- Bundling
- Compressing 
- Consistent Hashing - a distributed systems technique that operates by assigning the data objects and nodes a position on a virtual ring structure (hash ring). Consistent hashing minimizes the number of keys to be remapped when the total number of nodes changes 
- Code splitting 
- Differential bundling - Support older version browsers
- DIagnostic
- Error Handling 
- HTTPS
- Tree shaking - Remove unused code
- browserslist - Module which you can cofigure app work in different browsers

# Food-Ordering-app

/**
 * Header
 * - Logo
 * - Nav Items (Navigation Items)
 * Body
 * - Search bar
 * - Restrocontainer
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */

 # Two Types of exports

 - default export (files doesn't have multiple default exports)
  -- export default componenet
  -- import component from *path;
 - named export
  -- export const component
  -- import { component } from *path;


  # React hooks
  (Normal JS utility function)
  Two Fucntions
  - useState() - superpowerful react variable 
  - useEffect()

# React Hooks
 (Noraml JS Utility function)
  - useState() - Superpowerful Sate Variables in react
  - useEffect()
whenever state variable changes react will rerender my component
  
# 2 types of routing in web apps
  - Client Side Routing
  - Server Side Routing

# 3  Class based components 
  - Never update state varibles directly 

# 4 Lazy()
    - chunking
    - code splitting
    - dynamic bundling
    - lazy loading
    - on demand loading
    - dynamic import


# 5 Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Cponnect our store to app
  - Slice (cartSlice)
  - dispatch(action)
  - reducer
  - selector

# Types of Testing (developer)
  - Unit Testing
  - Integration Testing
  - End to End Testing -  e2e testing 

# Setting up Testing in our app
  - Installed React Testing Library
  - Installed jest
  - Installed Babel Dependencies
  - Configure Babel
  - configure Parcel config file to disable default babel transpilation
  - Jest Configuration - npx jest --init
  - Install jsdom library
  - Install @babel/preset-react - to make JSX work in test cases
  - Include @babel/preset-react - include in babel config
  - Install @testing-library/jest-dom

