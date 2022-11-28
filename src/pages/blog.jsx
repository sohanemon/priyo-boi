const Blog = () => {
  return (
    <>
      {" "}
      <section className='w-5/6 mx-auto text-justify'>
        <h1 className='text-3xl'>Recent Blogs</h1>
        <div className='space-y-16'>
          {blogs?.map((el) => (
            <div key={el._id}>
              <h3 className='text-3xl font-semibold tracking-wider mb-2'>
                {"> "}
                {el.ques}
              </h3>
              <h6 className='text-gray-400'>{el.ans}</h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
const blogs = [
  {
    ques: "What are the different ways to manage a state in a React application?",
    ans: "There are four main types of state you need to properly manage in your React apps:Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global. Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.",
  },

  {
    ques: "How does prototypical inheritance work?",
    ans: "JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript. While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented. Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.",
  },

  {
    ques: "What is a unit test? Why should we write unit tests?",
    ans: "Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.",
  },

  {
    ques: "React vs. Angular vs. Vue?",
    ans: "React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.The Vue.js core library focuses on the View layer only.AngularJS, the original framework, is an MVC (Model-View-Controller) framework. React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You.Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube.Many front-end applications rely on global state management to store information, such as who is logged in and other user settings.Even though Redux can be used in Vue, there are no official bindings.For state management in Angular, you can use the NgRx project.",
  },
];
