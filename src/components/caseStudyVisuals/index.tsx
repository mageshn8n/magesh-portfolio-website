import type { ComponentType } from "react";
import OpalVisual from "./OpalVisual";
import MysticBambooVisual from "./MysticBambooVisual";
import NammaTransitVisual from "./NammaTransitVisual";
import JamieVisual from "./JamieVisual";
import SahajTTPVisual from "./SahajTTPVisual";
import JanSevaVisual from "./JanSevaVisual";
import WhisperingInfinityVisual from "./WhisperingInfinityVisual";
import EMSVisual from "./EMSVisual";
import WhisperingInfinityDSVisual from "./WhisperingInfinityDSVisual";
import PKISecOpsVisual from "./PKISecOpsVisual";

export const caseStudyVisuals: Record<string, ComponentType> = {
  "quality-management-process-library": OpalVisual,
  "mystic-bamboo-digital-gurukul": MysticBambooVisual,
  "namma-transit-service-design": NammaTransitVisual,
  "jamie-cognitive-assistant": JamieVisual,
  "sahaj-ttp-review-portal": SahajTTPVisual,
  "jan-seva-constituency-management": JanSevaVisual,
  "whispering-infinity-teacher-app": WhisperingInfinityVisual,
  "engagement-management-system": EMSVisual,
  "whispering-infinity-design-system": WhisperingInfinityDSVisual,
  "pkisecops-design-system": PKISecOpsVisual,
};

// Slugs where a real product screenshot exists — used as the grid thumbnail
// (cropped to its top) instead of a recreated mockup component. These are
// wide page captures, so the thumbnail crops to the top with object-cover.
export const realScreenshotThumbs: Record<string, string> = {
  "engagement-management-system": "/case-studies/engagement-management-system/case-studies.png",
  "whispering-infinity-design-system": "/case-studies/whispering-infinity-design-system/design-system.png",
  "scope-plus-heuristic-usability-review": "/case-studies/scope-plus/07-search-after.png",
  "pkisecops-design-system": "/case-studies/pkisecops-design-system/foundations.png",
};

// Slugs with a real screenshot that's a normal (portrait) app screen rather
// than a tall page capture — shown whole with object-contain instead of a
// top-cropped object-cover.
export const containScreenshotThumbs: Record<string, string> = {
  "mybud-ux-teardown": "/case-studies/mybud-ux-review/home-dashboard.png",
};

export { default as ScopePlusShots } from "./ScopePlusShots";
export { default as ProductScreens } from "./ProductScreens";
export { default as CaseStudyThumb } from "./CaseStudyThumb";
export { default as MyBudScreens } from "./MyBudScreens";
