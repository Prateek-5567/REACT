# Base : Need of Context Api concept.
    As you can see in 01Notes we need no pass a prop username="xyz" from main.jsx to some component which is very deep inside your dashboard 
    DashBoard -> rightSide -> TopComponent -> Card (here it is rendered).
    so this is called prop drilling which is not optimal and This situation is solved by Context Api.

## Prop Drilling :
    Prop drilling happens when you pass data from a parent component to a deeply nested child component through multiple intermediate components that don’t actually need the data — they just pass it along.

    It’s often seen as inefficient and hard to maintain, especially in large apps.
    To avoid it, developers usually use Context API, Redux, or other state management tools.

# Context API (in React):
    The Context API helps you avoid prop drilling by allowing data to be shared directly with any component in the tree — without passing props manually at every level.

    It’s like having a global state or shared storage that any component in your app can access — no matter how deep it is in the component tree.
    But it is not just a global file that everyone can update or access simply cuz that can cause unIntended Updates from unIntended files.

    create a global file that holds username:"xyz" and now it can be accessed by any file in your project by simple importing it.

## 💡 Why is it needed?

    In normal React apps, data is passed from parent → child through props.
    When many nested components need the same data, you end up with prop drilling — passing props through components that don’t even use them.

    This makes the code harder to read, maintain, and debug.

    Context API solves this problem by letting components access data directly, skipping intermediate levels.

# Following Files are always pure js : .js extention.
    -> allComponents File sometimes called index.js; 
    -> Context files are also pure js .
    -> coustom Hooks are also just js as they return pure js;

