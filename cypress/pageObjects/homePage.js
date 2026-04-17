import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage 
{
  static get url() 
  {
    return "/#/";
  }

  static get gridButton()
  {
    return cy.get("#demo-tab-grid");
  }

  static get oneButton()
  {
    return cy.get("#row1").contains("One");
  }

  static get twoButton()
  {
    return cy.get("#row1").contains("Two");
  }

  static get threeButton()
  {
    return cy.get("#row1").contains("Three");
  }

  static get fourButton()
  {
    return cy.get("#row2").contains("Four");
  }

  static get fiveButton()
  {
    return cy.get("#row2").contains("Five");
  }

  static get sixButton()
  {
    return cy.get("#row2").contains("Six");
  }

  static get sevenButton()
  {
    return cy.get("#row3").contains("Seven");
  }

  static get eightButton()
  {
    return cy.get("#row3").contains("Eight");
  }

  static get nineButton()
  {
    return cy.get("#row3").contains("Nine");
  }
}