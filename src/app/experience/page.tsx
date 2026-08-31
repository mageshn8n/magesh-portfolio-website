import { redirect } from "next/navigation";

// Experience is now part of the About page's visual timeline.
export default function ExperiencePage() {
  redirect("/about");
}
