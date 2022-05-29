import { render, screen, cleanup } from "@testing-library/react";
import Devicelist from "../device-list.js";

test("should render device list component", () => {
  render(<Devicelist />);
  const DeviceListElement = screen.getAllByTestId("test-1");
  expect(DeviceListElement).toBeInTheDocument();
  expect(DeviceListElement).toHaveTextContent("hi");
});
