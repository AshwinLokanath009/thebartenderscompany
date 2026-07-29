type AnalyticsEvent = {
  action: string;
  label?: string;
  location?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead({ action, label, location }: AnalyticsEvent) {
  window.gtag?.('event', action, {
    event_category: 'lead',
    event_label: label,
    placement: location,
  });
}
