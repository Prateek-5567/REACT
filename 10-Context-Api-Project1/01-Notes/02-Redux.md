## 🧩 1. Context API

    Built-in React feature.
    Best for simple data like theme, language, or user info.
    Not great for frequent updates or large state (can cause many re-renders).

        const ThemeContext = createContext();

    ✅ Easy to use
    ❌ Not scalable for complex apps

## ⚙️ 2. Redux

    A predictable state container for JavaScript apps.

    Uses actions, reducers, and a central store to manage global state.

    State changes follow a strict flow → makes debugging and testing easy.

    ✅ Scalable, predictable
    ❌ Boilerplate-heavy and verbose

## 🚀 3. Redux Toolkit (RTK)

    Official, modern version of Redux.
    Reduces boilerplate by using functions like:
    configureStore()
    createSlice()
    createAsyncThunk()

    ✅ Simple, efficient, and recommended for new Redux projects
    ❌ Slight learning curve for beginners
#
    Example:

    const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
    });

## 🔗 4. React-Redux

    A binding library that lets React components connect to the Redux store.

    Provides hooks like useSelector() and useDispatch().

    ✅ Efficient connection between React and Redux
    ❌ Only useful when using Redux or RTK

    Example:

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();
#
    🧠 Summary:
    Use Case	-> Best Option
    Small project/avoid prop drilling	->    Context API

    Large project with complex state	->    Redux Toolkit + React-Redux

    Legacy Redux project	            ->   Redux + React-Redux
    
    You want async logic and middlewares->	Redux Toolkit