/**
 * @file Store initialization.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
/// <reference path="../event.d.ts"/>
import axios from '@/axios';
import { createStore } from 'vuex';

/** @typedef {import("@/event").default} CalendarEvent */

interface State {
  event: CalendarEvent | null;
}

// Create a new store instance.
const store = createStore({
  /**
   * @function state
   *
   * @description Return the store's state object.
   *
   * @returns { State } Store's state.
   */
  state: (): State =>
    ({
      event: null,
    } as State),
  mutations: {
    /**
     * @description Set the event in store's state.
     *
     * @param   { State }         state - Store's state.
     * @param   { CalendarEvent } event - Event to be set.
     *
     * @returns { void }
     */
    SET_EVENT: (state: State, event: CalendarEvent): void => {
      state.event = event;
    },
    /**
     * @description Remove the event in store's state.
     *
     * @param   { State } state - Store's state.
     *
     * @returns { void }
     */
    REMOVE_EVENT: (state: State): void => {
      state.event = null;
    },
  },
  actions: {
    /**
     * @description Fetch requested event from API and save it in store's state.
     *
     * @param   { store }         store        - Vuex store instance.
     * @param   { Function }      store.commit - Method used to trigger mutations.
     * @param   { string }        eventId      - Id of event to be fetched.
     *
     * @returns { Promise<void> }
     */
    fetchEvent: async (
      { commit }: { commit: Function },
      eventId: string,
    ): Promise<void> => {
      const { data } = await axios.get<CalendarEvent>(`/api/events/${eventId}`);

      commit('SET_EVENT', data);
    },
  },
});

export default store;
