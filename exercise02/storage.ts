import { State } from "./types";

export class MyStorage<T> {
    #state: State<T> = Object.freeze({ data: [] });

    getItem(key: string): T | null {
        // your code here
        return null;
    }
    addItem(key: string, value: T): boolean {
        // your code here
        return false;
    }
    updateItem(key: string, value: T): boolean {
        // your code here
        return false;
    }
    removeItem(key: string): boolean {
        // your code here
        return false;
    }
    getData() {
        // your code here
        return this.#state.data;
    }
}

