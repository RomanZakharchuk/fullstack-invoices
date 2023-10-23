import { Component } from '@angular/core';

interface IIntroContent {
  icon: string;
  title: string;
  text: string;
}

const introContent: IIntroContent[] = [
  {
    icon: "assets/icons/clock.svg",
    title: "Save time",
    text: "Quickly create professional invoices and estimates wherever you are—with a customer, between jobs, or at home. Convert estimates to invoices with one click."
  },
  {
    icon: "assets/icons/dollar.svg",
    title: "Get Paid",
    text: "Email, text or print your invoices. Get notified when invoices are read and stay on top of late payments. Accept credit card payments as well as cash, check and others."
  },
  {
    icon: "assets/icons/portfolio-case.svg",
    title: "Look Professional",
    text: "Simply choose an invoice template and customize it with your logo. Add a signature, photos, notes and more. Always look professional and stay organized."
  },

];


@Component({
  selector: 'home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent {
  introContent: IIntroContent[] = introContent;

}
