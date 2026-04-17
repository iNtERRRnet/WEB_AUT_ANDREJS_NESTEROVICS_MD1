import { HomePage } from "../pageObjects/homePage";

describe("Homework1", () => 
{
  beforeEach(() => 
  {
    HomePage.visit();
  });

  it("2468", () => 
  {
    HomePage.gridButton.click();

    HomePage.twoButton.click();
    HomePage.fourButton.click();
    HomePage.sixButton.click();
    HomePage.eightButton.click();

    HomePage.twoButton.should("have.class", "active");
    HomePage.fourButton.should("have.class", "active");
    HomePage.sixButton.should("have.class", "active");
    HomePage.eightButton.should("have.class", "active");

    HomePage.oneButton.not("not.have.class", "active");
    HomePage.threeButton.not("not.have.class", "active");
    HomePage.fiveButton.not("not.have.class", "active");
    HomePage.sevenButton.not("not.have.class", "active");
    HomePage.nineButton.not("not.have.class", "active");
  });
})
