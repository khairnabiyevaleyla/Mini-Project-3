import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/index";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
