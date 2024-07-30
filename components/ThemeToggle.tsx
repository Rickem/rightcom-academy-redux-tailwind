// components/ThemeToggle.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleTheme } from "@/lib/slices/themeSlice";

const ThemeToggle = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`px-4 py-2 rounded ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {darkMode ? "Mode clair" : "Mode sombre"}
    </button>
  );
};

export default ThemeToggle;
