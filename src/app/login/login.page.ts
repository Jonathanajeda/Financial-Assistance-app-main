import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  showError: boolean;
  errorMessage: string;
  loginForm: FormGroup;

  // Define an array of default accounts
  defaultAccounts = [
    { username: 'Jonathan', password: '0000', userType: 'regular' },
    { username: 'Mark Kevin', password: '0001', userType: 'regular' },
    { username: 'Mark Edson', password: '0002', userType: 'regular' },
    { username: 'admin', password: 'admin043', userType: 'admin' },
    // Add more default accounts here if needed
  ];

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.showError = false;
    this.errorMessage = '';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // Get the form values
    const enteredUsername = this.loginForm.get('username')?.value;
    const enteredPassword = this.loginForm.get('password')?.value;

    // Check if the entered credentials match any default account
    const matchedAccount = this.defaultAccounts.find(
      (account) => account.username === enteredUsername && account.password === enteredPassword
    );

    if (matchedAccount) {
      if (matchedAccount.userType === 'regular') {
        // Successful login for regular users
        this.navCtrl.navigateRoot('/requirement-list');
      } else if (matchedAccount.userType === 'admin') {
        // Successful admin login
        this.navCtrl.navigateRoot('/admin-interface');
      }
    } else {
      // Invalid credentials
      this.showError = true;
      this.errorMessage = 'Invalid username or password.';
      this.loginForm.reset();
    }
  }
}
