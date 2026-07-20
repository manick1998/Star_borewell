import { useEffect } from "react";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDesc: HTMLMetaElement | null = null;
    let prevDescription: string | null = null;

    if (description) {
      metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        prevDescription = metaDesc.getAttribute("content");
        metaDesc.setAttribute("content", description);
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDescription) metaDesc.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
