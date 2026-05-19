/* global React, ReactDOM, window */
// ============================================================
// Prompt Gallery — main app
// ============================================================

const { useState } = React;

function App() {
  const [view, setView] = useState("home");
  const { push, ToastHost } = window.useToast();

  return (
    <>
      <window.Navbar view={view} onView={setView} />
      {view === "home"   && <window.HomePage   toast={push} />}
      {view === "school" && <window.SchoolPage />}
      {view === "blog"   && <window.BlogPage   />}
      <ToastHost />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
