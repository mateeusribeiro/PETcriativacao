import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DBService } from './db.service';
import { User } from '../entities/user';
import { Profile } from '../entities/profile';

@Injectable()
export class AuthenticationService {
    user: firebase.User;

    constructor(private afAuth: AngularFireAuth, private dbService: DBService) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    async isAdmin() {
        return new Promise<boolean>((resolve, reject) => {
            this.afAuth.user
                .subscribe(async user => {
                    const userFromDB = (await this.dbService.search<User>('usuarios', 'email', user.email))[0];

                });
        });
    }
    async loggedInUserProfile() {
        return new Promise<Profile>((resolve, reject) => {
            this.afAuth.user
                .subscribe(async user => {
                    const userFromDB = (await this.dbService.search<User>('usuarios', 'email', user.email))[0];
                    const profileFromDB = (await this.dbService.getObjectByKey<Profile>('perfis', "-" + userFromDB.profileUID));

                    resolve(profileFromDB)
                });
        });
    }

    async getUserProfile(user: User) {
        const profile = await this.dbService.getObjectByKey<Profile>('perfis', "-" + user.profileUID)[0];
        if (profile) {
            return profile
        } else {
        }
    }

    login(user: User) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    adicionarUsuario(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

    delete() {
        return this.afAuth.auth.currentUser.delete();
    }

    register(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    
    recoverPassword(user: User) {
        return this.afAuth.auth.sendPasswordResetEmail(user.email);
    }

    getAuth() {
        return this.afAuth.auth;
    }
}