import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/resMenuItemsMock.json"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should load Restaurant Menu component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);
    
    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button", {name: "ADD"});

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getByText("Your Cart is soooo empty!!")).toBeInTheDocument();

})