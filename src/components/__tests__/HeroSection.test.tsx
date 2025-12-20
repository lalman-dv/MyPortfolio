import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";
import { ThemeProvider } from "../../context/ThemeContext";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider>{ui}</ThemeProvider>);

describe("HeroSection", () => {
  test("renders role tagline", () => {
    renderWithTheme(<HeroSection />);
    const taglines = screen.getAllByText(/Frontend Engineer/i);
    expect(taglines.length).toBeGreaterThan(0);
  });

  test("renders main headline text", () => {
    renderWithTheme(<HeroSection />);
    expect(screen.getAllByText(/Crafting digital/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/experience/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/inspire & engage/i).length).toBeGreaterThan(0);
  });

  test("renders description paragraph", () => {
    renderWithTheme(<HeroSection />);
    expect(
      screen.getAllByText(/I design and build modern/i).length
    ).toBeGreaterThan(0);
  });

  test("renders CTA buttons", () => {
    renderWithTheme(<HeroSection />);
    const viewWorkButtons = screen.getAllByRole("button", {
      name: /View Work/i,
    });
    const getInTouchButtons = screen.getAllByRole("button", {
      name: /Get in Touch/i,
    });
    expect(viewWorkButtons.length).toBeGreaterThan(0);
    expect(getInTouchButtons.length).toBeGreaterThan(0);
  });

  test("renders tech stack labels", () => {
    renderWithTheme(<HeroSection />);
    expect(screen.getAllByText(/React/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/NextJS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/TypeScript/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Motion/i).length).toBeGreaterThan(0);
  });
});
