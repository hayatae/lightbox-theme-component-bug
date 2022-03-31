import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  // Render adjustments for post content
  api.decorateCookedElement(
    (elem) => {
      // For some unknown reason, this breaks lightbox in *ALL* posts
      elem.innerHTML = elem.innerHTML.replace(/Finances/, "Test Str");
    },
    { id: "lightbox-bug", onlyStream: true }
  );
});
