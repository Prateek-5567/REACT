# React-Router-DOM Components
## < Link > vs < a > tag
    -> Link is a component in reactrouter Used for client-side navigation in React apps without reloading the page. 
    (also called Declarative navigation component).
    -> Uses the HTML5 History API under the hood (pushState, replaceState),
    ->Updates the browser URL without reloading the page,
    ->Triggers React Router to render a new component based on the route.

    AND

    -> a tag will reload the entire page.

## 🔹 What is < Navlink >?

    In React Router DOM,
    <NavLink> is a specialized version of the <Link> component that adds styling or classes automatically when the link is active (i.e., when the current URL matches the link’s destination).

    So you can call it a:

    ⚡ “Declarative navigation component with active state styling.”

    🔹 Active Styling
    By default, React Router applies an “active” state to a NavLink when the current route matches its to path.
    # You can customize how it looks using either:
        The className prop (function form), or
        The style prop (function form).
        eg.
        <NavLink to="/logIn" 
        style={({ isActive }) => ({
            color: isActive ? "red" : "black"
        })}
        >
        About
        </NavLink>
