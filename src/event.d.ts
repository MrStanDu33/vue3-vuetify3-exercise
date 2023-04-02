/**
 * @file Event type declaration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  website: string;
  webinarUrl: string;
  begin_at: string;
  end_at: string;
  created: string;
  updated: string;
  cover: string;
  thumbnail: string;
  _embedded: {
    address: {
      venue: string;
      address: string;
      address_2: string;
      city: string;
      zip: string;
      country_iso: string;
      latitude: string;
      longitude: string;
    };
    author: {
      id: string;
      name: string;
      email: string;
      avatar: {
        user_id: string;
        display_name: string;
        profile_photo: string;
        color: string;
        initials: string;
        _links: {
          self: {
            href: string;
          };
        };
      };
      _links: {
        self: {
          href: string;
        };
      };
    };
    status: {
      id: 1;
      name: string;
      label: string;
      _links: {
        self: {
          href: string;
        };
      };
    };
    category: {
      id: string;
      name: string;
    };
    groups: {
      id: string;
      name: string;
      description: string;
      _links: {
        self: {
          href: string;
        };
      };
    };
  };
  is_on_site: boolean;
  is_webinar: boolean;
  seat_available: string;
  replay_link: string;
  web_url: string;
  _links: {
    self: {
      href: string;
    };
  };
};
