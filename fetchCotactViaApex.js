import { LightningElement,wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact';

export default class FetchCotactViaApex extends LightningElement {
    @wire(getAllContacts) contacts;
    get responseReceived(){
        if(this.contacts){
        return true;
            }
        return false;
    }
}