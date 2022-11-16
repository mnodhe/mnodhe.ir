export const GA_TRACKING_ID = "?????";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (x: gtag_interface) => {
  (window as any).gtag("event", x.action, {
    event_category: x.category,
    event_label: x.label,
    value: x.value,
  });
};
interface gtag_interface {
  action: "Add_To_Card";
  category: "Ecommerce";
  label: "Item Added";
  value: string;
}

