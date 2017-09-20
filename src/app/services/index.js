import "whatwg-fetch";
import * as API from "./config.js";
export default class APIServices {
    static saveForm(saveData) {
        return fetch(API.ADD_CONTACT, {
            method: 'POST',
            body: JSON.stringify(saveData)
        })
    }
}
