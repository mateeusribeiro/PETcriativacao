import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DBService } from './db.service';
import { User} from '../entities/user';

@Injectable()
export class AuthenticationService {
    user: firebase.User;

    constructor(private afAuth: AngularFireAuth, private dbService: DBService) {

    }

    async isAdmin() {
        return new Promise<boolean>((resolve, reject) => {
            this.afAuth.user
            .subscribe(async user => {
                const userFromDB = (await this.dbService.search<User>('usuarios', 'email', user.email))[0];
               
            });
        });
    }
    async loggedInUser() {
        if (this.afAuth.user) {
            return new Promise<User>((resolve, reject) => {
                this.afAuth.user
                    .subscribe(async user => {
                        const userFromDB = (await this.dbService.search<User>('usuarios', 'email', user.email))[0];

                        resolve(userFromDB)
                    });
            });
        }
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}