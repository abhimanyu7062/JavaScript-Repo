# JavaScript-Repo
run the code  --  node folderName/FileName.js
# Interview Question

 # 01- Event Loop
  it enables asynchronous programming and ensures non-blocking execution.
 the event loop is a constantly running process that monitors both the callback queue and call stack

# 02- working of event loop  - call Stack , Web API,  Callback Queue , Event Loop
The Call Stack runs all synchronous code.
Web APIs handle asynchronous operations (timers, events, etc.) and move callbacks into appropriate queues once they finish.
The Event Loop ensures that the Microtask Queue is processed before the Task Queue, and tasks are moved to the call stack when it's empty.

# 03 Temporal Dead Zone
the period of time in JavaScript where a variable is declared using let or const, but it can't be accessed yet.it will throw a ReferenceError.

# 04 Lexical Scope
 Variables in inner functions can access variables in outer functions because of the structure of the code, not because of runtime behavior.

 # 05 Var, Let & Const
              Var                              let                             const
    Define in function scope             Block scope                          Block scope
    hoisting is possble                  possible in temeperal dead zone
    re-assign value and re-declare       re-assign value but not re-declare in same  not allowed re-assign and re-declare
    


# 06 Callback
A callback is a function that is passisng function as a argument and it is executed after the completiotion of outer function. 
Callback oftenly used in asyncronous programing .

# Strict Mode
Strict mode is design to help for developer to write better code React application.
when we wrap component it give warning like deprecated api and side effect in render phases

## 1. Introduction to Your Experience
I have over 2 years of experience in UI development.
I specialize in building dynamic, user-friendly web applications using Modern JavaScript,
React, and HTML/CSS.

I’ve worked with Material-UI for creating responsive,
and have experience with Next.js for building server-side rendered and static websites.

In React, I have worked on  functional components, state and props management, hooks (like useState, useEffect),
React Router for navigation, and Context API for state management.
I also frequently integrate APIs using fetch and axios to handle data fetching and asynchronous operations.

Additionally, I have some exposure to cloud services such as Azure and AWS, which has helped me understand how to deploy and manage applications in cloud environments.
-----------------------------------------------------------------------------------------------
# Project Deatails
 In my recent project,I worked on a case study app.
The project aimed to streamline customer interaction by providing instant response through a chatbot and reducing wait times. 
where my role is responsible for designing and implementing the user interface. This includes creating resuable components for chat message , input field ,filter dropdown and buttons. I have used hooks  for state mangement ,  Axois for calling api , and creating a dropdown to refine the search .
So here we have used React, JavaScript, Html, Css, Material Ui for frontend part and for backend we have used Python and we deployed project on Azure cloud.

 in my prevoius client project for an e-commerce platform . I developed a dynamic table that displayed data from a backend api, I created the table component to map through the recieve data . One challenged I faced was rendering large datasets , Which I addressed by implementing pagination.

------------------------------------------------
# Deployement in Azure
step 1  npm run build command to build file of react
step 2 Create a Web App in Azure like Create a resource --> Select "Web App" from the list of resources => Subscription: Choose the appropriate subscription.
Resource Group: Create a new resource group or use an existing one.
Name: Choose a unique name for your web app. This will be used as part of the URL (e.g., your-app-name.azurewebsites.net).
Publish: Select Code.
Runtime stack: Select Node.js (since React is built on Node.js).
Region: Choose a region close to your target audience.
Click Review + Create, then click Create after reviewing your settings.
Now resouce is create 
Deploy Using GitHub Actions (CI/CD)
1. Push Your Code to GitHub
2. Configure Deployment in Azure:
3.Configure the Build Action: Azure will generate a GitHub Action YAML file in your repository (under .github/workflows/azure-web-app.yml), which defines the deployment pipeline.

Method 2: Deploy Manually via Azure CLI or FTP
1.Install the Azure CLI on your local machine.
2. Log in to Azure using the command: az login
Deploy the build folder to Azure using the Azure CLI
