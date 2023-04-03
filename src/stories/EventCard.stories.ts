/**
 * @file Home Page component story configuration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import EventCard from './EventCard.vue';

const meta = {
  title: 'Components/EventCard',
  component: EventCard,
  argTypes: {
    primaryColorTheme: { control: 'color' },
    primaryLightenColorTheme: { control: 'color' },
    title: { control: 'text' },
    description: { control: 'text' },
    webinarUrl: { control: 'text' },
    begin_at: { control: 'text' },
    end_at: { control: 'text' },
    cover: { control: 'text' },
    _embedded_address_address: { control: 'text' },
    _embedded_address_address_2: { control: 'text' },
    _embedded_address_city: { control: 'text' },
    _embedded_address_zip: { control: 'text' },
    is_webinar: { control: 'boolean' },
    web_url: { control: 'text' },
  },
  args: {
    primaryColorTheme: '#9b2fae',
    primaryLightenColorTheme: '#b86ac3',
    title: 'My custom event',
    description:
      "This is the event's description. If it gets too long it will be shortened with ellipsis. As you can see it allows 4 lines before cropping the text. This helps the responsive.",
    webinarUrl: 'https://www.alumnforce.com',
    begin_at: '2020-03-15 17:10:00',
    end_at: '2020-03-15 17:10:00',
    cover: 'https://placehold.co/600x400',
    _embedded_address_address: '5 Rue Marguerite de Rochechouart',
    _embedded_address_address_2: '',
    _embedded_address_city: 'Paris',
    _embedded_address_zip: '75009',
    is_webinar: true,
    web_url: 'https://website.com/foo/bar',
  },
  parameters: {
    docs: {
      page: 'EventCard.mdx',
    },
    actions: {
      handles: ['add to calendar', 'click .event-card-date'],
    },
  },
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof EventCard> = (args, { argTypes }) => ({
  components: { EventCard },
  props: Object.keys(argTypes),
  template: '<EventCard v-bind="$props" />',
});

export const EventLoading = Template.bind({});
EventLoading.args = { event: null };

export const EventIsWebinar = Template.bind({});
EventIsWebinar.args = {
  is_webinar: true,
};

export const EventIsNotWebinar = Template.bind({});
EventIsNotWebinar.args = {
  is_webinar: false,
};

export const EventIsWebinarCustomColors = Template.bind({});
EventIsWebinarCustomColors.args = {
  is_webinar: true,
  primaryColorTheme: '#2b47fb',
  primaryLightenColorTheme: '#202656',
};

export const EventLoadingCustomColors = Template.bind({});
EventLoadingCustomColors.args = {
  event: null,
  primaryColorTheme: '#2b47fb',
  primaryLightenColorTheme: '#202656',
};
