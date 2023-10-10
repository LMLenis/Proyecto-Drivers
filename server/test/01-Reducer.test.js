import { describe, test, expect, vi } from "vitest";
import index from "../../client/src/redux/reducer/index";
import "@testing-library/jest-dom";
import * as data from "../db.json";

// actions types
import {
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_DRIVER_NAME,
  GET_ALL_TEAMS,
  CREATE_DRIVER,
  FILTER,
  ORDER
} from "../../client/src/redux/actions/actions-types";

vi.mock("../../client/src/redux/actions/index", () => ({
  __esModule: true,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_DRIVER_NAME,
  GET_ALL_TEAMS,
  CREATE_DRIVER,
  FILTER,
  ORDER,

  createDriver: (payload) => ({
    type: CREATE_DRIVER,
    payload,
  }),
  getDriverDetail: (payload) => ({
    type: GET_DRIVER_DETAIL,
    payload,
  }),
  getAllDrivers: (payload) => ({
    type: GET_ALL_DRIVERS,
    payload,
  }),
  getAllTeams: (payload) => ({
    type: GET_ALL_TEAMS,
    payload,
  }),
  getDriverName: (payload) => ({
    type: DELETE_ACTOR,
    payload,
  }),
  filterDrivers: (payload) => ({
    type: FILTER,
    payload,
  }),
  orderDrivers: (payload) => ({
    type: ORDER,
    payload,
  })

}));

describe("Reducer", () => {
  test("Si no existe un action.type, debe devolver el estado sin cambios", () => {
    const reducerContent = rootReducer(undefined, { type: "NO_EXISTE" });
    expect(reducerContent).toStrictEqual({ allDrivers: [], driverDetail: {}, driverShow: [], allTeams: [] });
  });

  test("Si el action.type es GET_ALL_DRIVERS, debe devolver el estado allDrivers que contenga los drivers obtenidos del servidor", () => {
    const reducerContent = rootReducer(undefined, { type: GET_ALL_DRIVERS, payload: data.allDrivers });
    expect(reducerContent.allDrivers).toStrictEqual(data.allDrivers);
  });

  test("Si el action.type es GET_DRIVER_DETAIL, debe devolver el estado driverDetail que contenga el detalle del driver obtenido del servidor", () => {
    const reducerContent = rootReducer(undefined, { type: GET_DRIVER_DETAIL, payload: data.allDrivers[3] });
    expect(reducerContent.driverDetail).toStrictEqual(data.allDrivers[3]);
  });

  test("Si el action.type es CREATE_DRIVER, debe devolver el estado drivers que contenga al driver creado", () => {
    const state = {
      allDrivers: data.allDrivers,
      driverDetail: {},
    };

    const payload = {
      id: 6,
      name: "Jennifer Lawrence",
      movies: "The Hunger Games",
      age: 33,
      summary: "Jennifer Lawrence is an American actress, recipient of the Academy Award for Best Actress, and part of the Forbes 100 Most Influential People list. She is recognized for her performances in films such as Silver Linings Playbook (2012), American Hustle (2013), and The Hunger Games series.",
      imagen: "https://www.ecartelera.com/carteles/3500/3507/008.jpg"
    };

    const action = {
      type: CREATE_DRIVER,
      payload,
    };
    
    const reducerContent = rootReducer(state, action);
    expect(reducerContent.actors).toStrictEqual([...data.allDrivers, payload]);
    expect(reducerContent).toHaveProperty("driverDetail");
  });

  test("Si el action.type es GET_DRIVER_NAME, debe devolver el estado driverShow con el detalle del driver obtenido del servidor", () => {
    const state = {
      actors: data.actors,
      actorDetail: {},
    };

    const action = {
      type: DELETE_ACTOR,
      payload: 1,
    };

    const action5 = {
      type: DELETE_ACTOR,
      payload: 5,
    };

    const reducerContentOne = rootReducer(state, action);
    const reducerContentFive = rootReducer(state, action5); 
    const deleteActorOne = state.actors.filter((actor) => actor.id !== action.payload);
    const deleteActorFive = state.actors.filter((actor) => actor.id !== action5.payload);
    expect(reducerContentOne.actors).toStrictEqual(deleteActorOne);
    expect(reducerContentFive.actors).toStrictEqual(deleteActorFive);
  });
});